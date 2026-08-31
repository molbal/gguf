---
title: Quantizing Models
description: Make your own GGUF quants from safetensors checkpoints with the comfyui-gguf-reboot node pack, the CLI converter, and the local conversion dashboard.
outline: [2, 3]
---

# Quantizing Models

You can quantize an existing diffusion model yourself. Any `.safetensors`, `.ckpt`, `.pt`, `.pth`, or `.bin` checkpoint works as a source. This page covers the three ways to convert: a ComfyUI node, a command line tool, and a local web dashboard. All three live in the [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot) node pack and produce files that load with the GGUF loader nodes.


## Before you start

You need a few things first:

1. The source checkpoint in a supported format. It must be a plain diffusion model file, not an already quantized GGUF.
2. Enough free disk space for the output file. 
3. The converter loads the model to RAM while it reads and quantizes weights. For big video models, enable streaming as described below.

A quant can never go back to full precision, so always quantize from the highest-precision source you have.

## Targeted Quantization (GGUF) node

The **Targeted Quantization (GGUF)** node converts a checkpoint from inside a ComfyUI workflow. You can wire it into your normal setup and export a GGUF without leaving ComfyUI.


![Targeted Quantization (GGUF) node in ComfyUI](/assets/comfyui-node.png)

Inputs:

| Input                      | What it does                                                                                                                |
|----------------------------|-----------------------------------------------------------------------------------------------------------------------------|
| source_path                | Absolute path to the source checkpoint on disk.                                                                             |
| destination_path           | Output .gguf path. Leave empty to derive it from the source name.                                                           |
| quantization               | Output format. Choose a standard format, or TARGET_SIZE for a size budget.                                                  |
| max_size_mb                | Output size cap in MiB. Required only for TARGET_SIZE.                                                                      |
| target_size_q8_type        | Baseline format for TARGET_SIZE: Q8_CR or Q8_0.                                                                             |
| quantization_device        | Q8_CR conversion device: auto, cpu, or cuda. (Only Q8_CR quants can be accelarated, all other formats are quantized on CPU) |
| overwrite                  | Replace an existing output file.                                                                                            |
| streamed                   | Process one tensor at a time to reduce RAM and VRAM use.                                                                    |
| lora_paths, lora_strengths | Optional LoRA files to merge during conversion.                                                                             |

The node reports loading and conversion progress on the ComfyUI progress bar and outputs `gguf_path` plus `quantization_info`, which includes the final file size. Copy the `gguf_path` output into an **Unet Loader (GGUF)** node to test the result right away.

## Command line conversion

The same converter runs from the node pack's `tools` folder. This is the better choice for one-off conversions of many models, because the CLI queues without a UI.

> [!NOTE]
> You likely have a python virtual environment (or similar) for ComfyUI. You will need to [activate it](https://www.google.com/search?client=firefox-b-d&q=how+to+activate+a+python+virtual+environment) for conversion to work.

From the `ComfyUI-GGUF` directory:

```powershell
python tools\convert.py --src C:\models\my_model.safetensors `
  --dst C:\models\my_model-Q8_CR.gguf --quant-type Q8_CR
```

On a portable ComfyUI install, use the embedded Python:

```bat
.\python_embeded\python.exe .\ComfyUI\custom_nodes\ComfyUI-GGUF\tools\convert.py ^
  --src C:\models\my_model.safetensors ^
  --dst C:\models\my_model-Q8_CR.gguf --quant-type Q8_CR ^
  --quantization-device auto
```

Useful flags:

| Flag | Purpose |
| --- | --- |
| `--quant-type` | Output format: BF16, Q8_0, Q5_1, Q5_0, Q4_1, Q4_0, Q8_CR, or Q4_CR_W4A4. |
| `--max-size-mb` | Target-size mode, capped at the given MiB. |
| `--target-size-q8-type` | Baseline for target-size mode: Q8_CR or Q8_0. |
| `--quantization-device` | Device for Q8_CR conversion: auto, cpu, or cuda. |
| `--streamed` | Tensor-by-tensor processing for safetensors sources. |
| `--lora` and `--lora-strength` | Merge LoRA adapters before quantizing. Repeat for several adapters. |

## Local conversion dashboard

If you prefer a browser UI, start the conversion dashboard from the `ComfyUI-GGUF` directory:

> [!NOTE]
> You likely have a python virtual environment (or similar) for ComfyUI. You will need to [activate it](https://www.google.com/search?client=firefox-b-d&q=how+to+activate+a+python+virtual+environment) for conversion to work.

```powershell
python tools\conversion_webui.py
```

Then open `http://127.0.0.1:8189`. The dashboard queues conversions and shows the converter's live output.

![Local conversion dashboard](/assets/conversion-web-ui.png)

It listens on the local machine only. Enter filesystem paths for the source and destination, it does not upload your checkpoints. It runs one conversion at a time, which avoids two jobs competing for GPU memory. Use `--port <port>` for a different port, or `--no-browser` to skip auto-opening a tab.

## Choosing a quantization format

The node and CLI expose these formats. For how they compare in practice, see [Quant Formats](/ecosystem/quant-formats).

| Format      | Recommended use                                                                                |
|-------------|------------------------------------------------------------------------------------------------|
| BF16        | Lossless re-pack for BF16 source models.                                                       |
| Q8_0        | Portable, high quality 8-bit. A safe default.                                                  |
| Q8_CR       | Maintainer recommendation for NVIDIA RTX 30-series. Native INT8 execution with strong quality. |
| Q4_CR_W4A4  | Native INT4 execution. Roughly Q4_0 file size, slightly faster than Q8_CR. |
| Q5_1, Q5_0  | Middle ground between 8-bit and 4-bit.                                                         |
| Q4_1, Q4_0  | Smallest files for tight VRAM. Largest quality trade-off.                                      |
| TARGET_SIZE | Mixed build under a size budget, described below.                                              |

`_K` formats are not supported for diffusion models. They work only for text encoders.

## Target size quantization

Set the quantization to TARGET_SIZE and give a `max_size_mb` budget. The converter builds the best mix that stays under that size:

1. Core 2-D Linear weights start at the chosen Q8 baseline, Q8_CR by default.
2. Matrices closest to the model's center drop to Q5_0, then Q4_0, until the file fits the budget. The beginning and end of the model stay at higher precision for as long as possible.
3. If everything is already Q4_0 and the file is still too large, ordinary 1-D tensors drop to BF16. Protected and architecture-sensitive tensors stay FP32.

Q4_0 is the smallest supported core format. A budget below the minimum possible size fails with an error that reports that minimum, because Q3 and lower are currently not used.

Pass `--target-size-q8-type Q8_0` (or select Q8_0 in the node) to get a standard GGUF baseline instead of the Q8_CR INT8 layout. Choose that when portability to other runtimes matters more than native INT8 speed.

## Streaming for large models

Both the node and the CLI accept a streamed mode. For `.safetensors` sources, the converter then reads, fuses, quantizes, and writes one tensor at a time, staging data on disk. Peak RAM and VRAM stay manageable even for large video models.

A few limits apply:

- Streamed mode needs a `.safetensors` source. Pickle-based checkpoints (`.ckpt`, `.pt`, `.pth`, `.bin`) are not supported.
- The output is identical to the non-streamed result, only memory use changes.

Enable it whenever a conversion fails or the system starts swapping without it.

## Merging LoRAs during conversion

Both conversion paths can fuse LoRA adapters before quantizing. 

- Node: fill the optional `lora_paths` and `lora_strengths` inputs with absolute paths, one per line or comma-separated, and matching strengths.
- CLI: pass `--lora path\to\adapter.safetensors`, repeated for each adapter, with a matching `--lora-strength` for each. Strengths default to 1.0.

Adapters can be `.safetensors` LoRA files or `.gguf` LoRA adapters. Fusion happens in FP32, one matrix at a time, before quantization.

## After conversion

Q4_CR_W4A4 keeps only eligible 2-D Linear weights in packed INT4. Matrices that do not divide by the block size stay FP16, and text encoders are not converted to this format.

Place the finished GGUF where the loaders expect it:

| File                  | Folder                                             |
|-----------------------|----------------------------------------------------|
| Diffusion model (DiT) | `ComfyUI/models/diffusion_models` or `models/unet` |
| Text encoder          | `ComfyUI/models/text_encoders` or `models/clip`    |
| VAE                   | `ComfyUI/models/vae`                               |

Load it with **Unet Loader (GGUF)**, **CLIPLoader (GGUF)**, or **VAE Loader (GGUF)**. Then run a few prompts you know well and compare against the source model. If quality drops more than expected, step up one format level, for example from Q4_0 to Q5_0.
