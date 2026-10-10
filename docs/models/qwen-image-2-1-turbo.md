---
title: Qwen Image 2.1 Turbo GGUF
description: Qwen Image 2.1 Turbo GGUF quants for text-to-image generation and image editing.
outline: [2, 3]
---

# Qwen Image 2.1 Turbo GGUF

Qwen Image 2.1 Turbo is an accelerated diffusion transformer for text-to-image generation and image editing. It uses the Qwen3-VL 8B text encoder and is designed for 8 denoising steps. ComfyUI workflows can also pass a reference image for image editing.

<DownloadCard
  href="https://huggingface.co/molbal/Qwen-Image-2.1-Turbo-GGUF"
  label="Qwen-Image-2.1-Turbo-GGUF on Hugging Face"
  meta="Hugging Face repository"
/>

## Example output

![Qwen Image 2.1 Turbo generated snowy city scene with title text](/models/qwen-image-2-1-turbo-example.png)

> **Prompt:** A snowy city street at night, with a person walking a dog, warm lights in the windows and on the road, and the words “Qwen Image 2.1 Turbo GGUF” in a speech bubble.

## Available Quantizations

| Quant | Size | File |
| --- | --- | --- |
| Q4_0 | 3.91 GB | [qwen_image_2.1_turbo_Q4_0.gguf](https://huggingface.co/molbal/Qwen-Image-2.1-Turbo-GGUF/blob/main/qwen_image_2.1_turbo_Q4_0.gguf) |
| Q4_K_M | 4.17 GB | [qwen_image_2.1_turbo_Q4_K_M.gguf](https://huggingface.co/molbal/Qwen-Image-2.1-Turbo-GGUF/blob/main/qwen_image_2.1_turbo_Q4_K_M.gguf) |
| Q6_K | 5.59 GB | [qwen_image_2.1_turbo_Q6_K.gguf](https://huggingface.co/molbal/Qwen-Image-2.1-Turbo-GGUF/blob/main/qwen_image_2.1_turbo_Q6_K.gguf) |
| Q8_0 | 7.16 GB | [qwen_image_2.1_turbo_Q8_0.gguf](https://huggingface.co/molbal/Qwen-Image-2.1-Turbo-GGUF/blob/main/qwen_image_2.1_turbo_Q8_0.gguf) |
| Q8_CR | 6.76 GB | [qwen_image_2.1_turbo_Q8_CR.gguf](https://huggingface.co/molbal/Qwen-Image-2.1-Turbo-GGUF/blob/main/qwen_image_2.1_turbo_Q8_CR.gguf) |

Q4_0, Q4_K_M, Q6_K, and Q8_0 use standard GGML quantization. Q8_CR is a custom GGUF INT8 ConvRot format supported by comfyui-gguf-reboot. It uses the loader's native INT8 ConvRot execution path and is distinct from standard GGML Q8_0.

## Model Input and Output

### Inputs

| Input | Description |
| --- | --- |
| Text prompt | A prompt for image generation or editing instructions. |
| Reference image | Optional image input for editing and visual conditioning. |

### Outputs

RGBA image output with transparency support.

## ComfyUI Setup

Load GGUF files with the comfyui-gguf-reboot loader nodes. These nodes give the best performance and are required for the Q8_CR native INT8 ConvRot path.

### Dependencies

The GGUF repository contains the diffusion model files. Get the matching text encoder and VAE from the upstream Qwen Image 2.1 release.

| Component | Example file | Folder |
| --- | --- | --- |
| Qwen Image 2.1 diffusion model | One of the GGUF files above | `models/diffusion_models/` or `models/unet/` |
| Qwen3-VL 8B text encoder | `qwen3vl_8b_fp8_scaled.safetensors` | `models/clip/` or `text_encoders/` |
| Qwen Image VAE | `qwen_image_2.1_vae_bf16.safetensors` | `models/vae/` |

This repository has no workflow JSON files. Start with the upstream Qwen Image 2.1 ComfyUI workflow and use the comfyui-gguf-reboot loader node for the diffusion model.
