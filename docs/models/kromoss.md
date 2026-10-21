---
title: Kromoss GGUF
description: GGUF build of Kromoss, a MOSS-Image-Base fine-tune, for text-to-image generation with ComfyUI.
outline: [2, 3]
---

# Kromoss GGUF

Kromoss is a full fine-tune of [MOSS-Image-Base](https://huggingface.co/OpenMOSS-Team/MOSS-Image-Base) at 1024 px. It uses the same architecture, text encoder and VAE as MOSS-Image-SFT, so it drops into the MOSS-Image workflows. This page lists the GGUF files and the ComfyUI setup.

<DownloadCard
  href="https://huggingface.co/molbal/Kromoss-GGUF"
  label="Kromoss-GGUF on Hugging Face"
  meta="Hugging Face repository"
/>

## Example output

![Kromoss example output](/models/moss-image-example.webp)

## Available Quantizations

File sizes use GiB. Standard GGUF quants are common GGML formats. Proprietary ConvRot quants require the `comfyui-gguf-reboot` loader.

| Quant | Type | Size | File |
| --- | --- | ---: | --- |
| Q4_K_M | Standard | 3.35 GiB | [kromoss-Q4_K_M.gguf](https://huggingface.co/molbal/Kromoss-GGUF/blob/main/kromoss-Q4_K_M.gguf) |
| Q6_K | Standard | 4.24 GiB | [kromoss-Q6_K.gguf](https://huggingface.co/molbal/Kromoss-GGUF/blob/main/kromoss-Q6_K.gguf) |
| Q8_0 | Standard | 5.31 GiB | [kromoss-Q8_0.gguf](https://huggingface.co/molbal/Kromoss-GGUF/blob/main/kromoss-Q8_0.gguf) |
| Q8_CR | Proprietary, `comfyui-gguf-reboot` | 5.04 GiB | [kromoss-Q8_CR.gguf](https://huggingface.co/molbal/Kromoss-GGUF/blob/main/kromoss-Q8_CR.gguf) |
| Q4_CR_L | Proprietary, `comfyui-gguf-reboot` | 3.56 GiB | [kromoss-Q4_CR_L.gguf](https://huggingface.co/molbal/Kromoss-GGUF/blob/main/kromoss-Q4_CR_L.gguf) |

## Inputs and outputs

The model accepts natural-language prompts, tag sequences, and JSON layouts that describe objects, text, and their placement. It generates still images. The upstream pipeline requires image dimensions that are multiples of 16. The supplied workflow selects a 1-megapixel portrait canvas.

## ComfyUI setup

Install [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot). Load GGUF files with its `UnetLoaderGGUFDynamicVRAM` node. These loader nodes give the best performance. Standard GGUF files can be opened with compatible tools, while the custom ConvRot files require this loader.

Download the text encoder and VAE from the [Comfy-Org MOSS-Image repository](https://huggingface.co/Comfy-Org/MOSS-Image).

| Component | File | ComfyUI folder |
| --- | --- | --- |
| Text encoder | `qwen3.5_9b_w4a8_gptq.safetensors` | `models/text_encoders/` |
| VAE | `flux2-vae_small.safetensors` | `models/vae/` |

### Sampling settings

The supplied workflow uses the upstream reference settings: 50 steps, CFG 3, euler sampler, sgm_uniform scheduler, and skip layer guidance on layer 22.

| Setting | Value |
| --- | --- |
| Steps | 50 |
| CFG | 3 |
| Sampler | euler |
| Scheduler | sgm_uniform |
| Shift | 5 (model default) |

### Workflow

Import the supplied workflow into ComfyUI.

<DownloadCard
  href="../workflows/files/kromoss-t2i-gguf.json"
  label="Kromoss, 50 steps"
  meta="JSON file"
/>

## Sources and license

The model is based on [lodestones/Kromoss](https://huggingface.co/lodestones/Kromoss), which is licensed under Apache-2.0. See its [model card](https://huggingface.co/lodestones/Kromoss) and the [OpenMOSS MOSS-Image project](https://github.com/OpenMOSS/MOSS-Image) for model details.
