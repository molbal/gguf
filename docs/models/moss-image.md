---
title: MOSS-Image GGUF
description: GGUF builds of MOSS-Image-SFT for text-to-image generation with ComfyUI.
outline: [2, 3]
---

# MOSS-Image GGUF

MOSS-Image-SFT is a text-to-image model from OpenMOSS. It accepts natural-language prompts, tag sequences, and JSON layouts for image composition. This page lists the SFT and 8-step Turbo GGUF files.

<DownloadCard
  href="https://huggingface.co/molbal/MOSS-Image-GGUF"
  label="MOSS-Image-GGUF on Hugging Face"
  meta="Hugging Face repository"
/>

## Example output

![MOSS-Image Turbo example output](/models/moss-image-example.webp)

## Available Quantizations

File sizes use GiB. Standard GGUF quants are common GGML formats. Proprietary ConvRot quants require the `comfyui-gguf-reboot` loader.

### SFT

| Quant | Type | Size | File |
| --- | --- | ---: | --- |
| Q4_0 | Standard | 3.10 GiB | [moss_image_sft-Q4_0.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft-Q4_0.gguf) |
| Q4_K_M | Standard | 3.35 GiB | [moss_image_sft-Q4_K_M.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft-Q4_K_M.gguf) |
| Q6_K | Standard | 4.24 GiB | [moss_image_sft-Q6_K.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft-Q6_K.gguf) |
| Q8_0 | Standard | 5.31 GiB | [moss_image_sft-Q8_0.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft-Q8_0.gguf) |
| Q8_CR | Proprietary, `comfyui-gguf-reboot` | 5.04 GiB | [moss_image_sft_Q8_CR.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft_Q8_CR.gguf) |
| Q4_CR_L | Proprietary, `comfyui-gguf-reboot` | 3.56 GiB | [moss_image_sft-Q4_CR_L.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft-Q4_CR_L.gguf) |

### Turbo

The supplied Turbo workflow runs 8 sampling steps.

| Quant | Type | Size | File |
| --- | --- | ---: | --- |
| Q4_0 | Standard | 3.10 GiB | [moss_image_sft_turbo-Q4_0.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft_turbo-Q4_0.gguf) |
| Q4_K_M | Standard | 3.35 GiB | [moss_image_sft_turbo-Q4_K_M.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft_turbo-Q4_K_M.gguf) |
| Q6_K | Standard | 4.24 GiB | [moss_image_sft_turbo-Q6_K.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft_turbo-Q6_K.gguf) |
| Q8_0 | Standard | 5.31 GiB | [moss_image_sft_turbo-Q8_0.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft_turbo-Q8_0.gguf) |
| Q8_CR | Proprietary, `comfyui-gguf-reboot` | 5.04 GiB | [moss_image_sft_turbo_Q8_CR.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft_turbo_Q8_CR.gguf) |
| Q4_CR_L | Proprietary, `comfyui-gguf-reboot` | 3.56 GiB | [moss_image_sft_turbo-Q4_CR_L.gguf](https://huggingface.co/molbal/MOSS-Image-GGUF/blob/main/moss_image_sft_turbo-Q4_CR_L.gguf) |

## Inputs and outputs

The model accepts natural-language prompts, tag sequences, and JSON layouts that describe objects, text, and their placement. It generates still images. The upstream pipeline requires image dimensions that are multiples of 16. The supplied workflow uses a 1-megapixel portrait canvas by default.

The upstream SFT reference settings use 50 steps and CFG 3. The Turbo workflow uses 8 steps and CFG 1.

## ComfyUI setup

Install [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot). Load GGUF files with its `UnetLoaderGGUFDynamicVRAM` node. These loader nodes give the best performance. Standard GGUF files can be opened with compatible tools, while the custom ConvRot files require this loader.

Download the text encoder and VAE from the [Comfy-Org MOSS-Image repository](https://huggingface.co/Comfy-Org/MOSS-Image).

| Component | File | ComfyUI folder |
| --- | --- | --- |
| Text encoder | `qwen3.5_9b_int8_convrot.safetensors` | `models/text_encoders/` |
| VAE | `flux2-vae.safetensors` | `models/vae/` |

### Workflow

Import the supplied Turbo workflow into ComfyUI.

<DownloadCard
  href="../workflows/files/moss-image-turbo.json"
  label="MOSS-Image Turbo, 8 steps"
  meta="JSON file"
/>

## Sources and license

The model is based on [OpenMOSS-Team/MOSS-Image-SFT](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT). The upstream model is licensed under Apache-2.0. See its [model card](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT) and [license](https://huggingface.co/OpenMOSS-Team/MOSS-Image-SFT/blob/main/LICENSE) for the original model terms.
