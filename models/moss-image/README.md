---
license: apache-2.0
base_model:
  - OpenMOSS-Team/MOSS-Image-SFT
pipeline_tag: text-to-image
tags:
  - moss-image
  - gguf
  - comfyui
---

# MOSS-Image GGUF

This repository contains GGUF quantizations of [MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT), including the supplied Turbo variant. MOSS-Image generates images from natural-language prompts, tag sequences, and JSON layouts. The SFT model and conversion are based on the OpenMOSS release, which is licensed under Apache-2.0.

![Example output generated with the supplied Turbo workflow](example-output.webp)

## Quantizations

File sizes are shown in GiB. Standard quants use common GGML formats. Proprietary quants use custom ConvRot formats supported by the `comfyui-gguf-reboot` loader nodes.

### SFT

| Quant | Format | Size | File |
| --- | --- | ---: | --- |
| Q4_0 | Standard GGUF | 3.10 GiB | [moss_image_sft-Q4_0.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft-Q4_0.gguf) |
| Q4_K_M | Standard GGUF | 3.35 GiB | [moss_image_sft-Q4_K_M.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft-Q4_K_M.gguf) |
| Q6_K | Standard GGUF | 4.24 GiB | [moss_image_sft-Q6_K.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft-Q6_K.gguf) |
| Q8_0 | Standard GGUF | 5.31 GiB | [moss_image_sft-Q8_0.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft-Q8_0.gguf) |
| Q8_CR | Proprietary, `comfyui-gguf-reboot` | 5.04 GiB | [moss_image_sft-Q8_CR.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft-Q8_CR.gguf) |
| Q4_CR_L | Proprietary, `comfyui-gguf-reboot` | 3.56 GiB | [moss_image_sft-Q4_CR_L.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft-Q4_CR_L.gguf) |

### Turbo

The Turbo workflow uses 8 sampling steps.

| Quant | Format | Size | File |
| --- | --- | ---: | --- |
| Q4_0 | Standard GGUF | 3.10 GiB | [moss_image_sft_turbo-Q4_0.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft_turbo-Q4_0.gguf) |
| Q4_K_M | Standard GGUF | 3.35 GiB | [moss_image_sft_turbo-Q4_K_M.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft_turbo-Q4_K_M.gguf) |
| Q6_K | Standard GGUF | 4.24 GiB | [moss_image_sft_turbo-Q6_K.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft_turbo-Q6_K.gguf) |
| Q8_0 | Standard GGUF | 5.31 GiB | [moss_image_sft_turbo-Q8_0.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft_turbo-Q8_0.gguf) |
| Q8_CR | Proprietary, `comfyui-gguf-reboot` | 5.04 GiB | [moss_image_sft_turbo_Q8_CR.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft_turbo_Q8_CR.gguf) |
| Q4_CR_L | Proprietary, `comfyui-gguf-reboot` | 3.56 GiB | [moss_image_sft_turbo-Q4_CR_L.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft_turbo-Q4_CR_L.gguf) |

Standard GGUF files can be loaded with compatible GGUF tools. Q8_CR and Q4_CR_L use custom quantization layouts and require the `comfyui-gguf-reboot` loader nodes. They are not compatible with general-purpose GGUF loaders.

## Inputs and outputs

MOSS-Image accepts natural-language prompts, tag sequences, and JSON layouts that specify text and object placement. It generates a still image. The upstream pipeline requires image dimensions that are multiples of 16. The supplied ComfyUI workflow selects an approximately 1-megapixel portrait canvas.

The upstream SFT reference settings use 50 steps and CFG 3. The Turbo workflow included here uses 8 steps and CFG 1.

## ComfyUI setup

Install [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot). Use its `UnetLoaderGGUFDynamicVRAM` node to load a GGUF from `models/diffusion_models/`. These loader nodes give the best performance.

The workflow also needs the following upstream files:

| Component | File | ComfyUI folder |
| --- | --- | --- |
| Text encoder | [qwen3.5_9b_int8_convrot.safetensors](https://huggingface.co/Comfy-Org/MOSS-Image/resolve/main/text_encoders/qwen3.5_9b_int8_convrot.safetensors) | `models/text_encoders/` |
| VAE | [flux2-vae.safetensors](https://huggingface.co/Comfy-Org/MOSS-Image/resolve/main/vae/flux2-vae.safetensors) | `models/vae/` |

[Download the 8-step Turbo ComfyUI workflow](moss_image_turbo_workflow.json).

## License and attribution

The upstream MOSS-Image-SFT model is released under the [Apache License 2.0](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT/blob/main/LICENSE). See the [upstream model card](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) and the [OpenMOSS project](https://github.com/OpenMOSS/MOSS-Image) for model details.
