---
title: Krea 2 GGUF
description: Quantized GGUF build of Krea 2 for image synthesis and design.
outline: [2, 3]
---

# Krea 2 GGUF

Krea 2 is a 12B diffusion transformer for high-fidelity image generation and design. It uses layerwise and refiner text-fusion blocks and is not based on Flux. This repository ships GGUF quants of the Raw and Turbo checkpoints.

<DownloadCard
  href="https://huggingface.co/molbal/krea2-gguf"
  label="krea2-gguf on Hugging Face"
  meta="Hugging Face repository"
/>

## Examples

Example prompts this model handles well:

- "A product shot of a ceramic coffee mug on a wooden table, soft window light, shallow depth of field."
- "An editorial fashion portrait, bold red background, studio lighting, film grain."
- "A minimalist logo concept for a coffee brand, flat vector style, warm palette."

## Available Quantizations

Each quant is published for both the Raw and Turbo checkpoints.

| Quant | Size | Raw file | Turbo file |
| --- | --- | --- | --- |
| Q4_0 | 7.74 GB | [krea2_raw_bf16-Q4_0.gguf](https://huggingface.co/molbal/krea2-gguf/blob/main/krea2_raw_bf16-Q4_0.gguf) | [krea2_turbo_bf16-Q4_0.gguf](https://huggingface.co/molbal/krea2-gguf/blob/main/krea2_turbo_bf16-Q4_0.gguf) |
| Q4_1 | 8.47 GB | [krea2_raw_bf16-Q4_1.gguf](https://huggingface.co/molbal/krea2-gguf/blob/main/krea2_raw_bf16-Q4_1.gguf) | [krea2_turbo_bf16-Q4_1.gguf](https://huggingface.co/molbal/krea2-gguf/blob/main/krea2_turbo_bf16-Q4_1.gguf) |
| Q5_0 | 9.20 GB | [krea2_raw_bf16-Q5_0.gguf](https://huggingface.co/molbal/krea2-gguf/blob/main/krea2_raw_bf16-Q5_0.gguf) | [krea2_turbo_bf16-Q5_0.gguf](https://huggingface.co/molbal/krea2-gguf/blob/main/krea2_turbo_bf16-Q5_0.gguf) |
| Q5_1 | 9.93 GB | [krea2_raw_bf16-Q5_1.gguf](https://huggingface.co/molbal/krea2-gguf/blob/main/krea2_raw_bf16-Q5_1.gguf) | [krea2_turbo_bf16-Q5_1.gguf](https://huggingface.co/molbal/krea2-gguf/blob/main/krea2_turbo_bf16-Q5_1.gguf) |
| Q8_0 | 13.56 GB | [krea2_raw_bf16-Q8_0.gguf](https://huggingface.co/molbal/krea2-gguf/blob/main/krea2_raw_bf16-Q8_0.gguf) | [krea2_turbo_bf16-Q8_0.gguf](https://huggingface.co/molbal/krea2-gguf/blob/main/krea2_turbo_bf16-Q8_0.gguf) |
| Q8_CR | 12.84 GB | Not published | [krea2_turbo_bf16-Q8_CR.gguf](https://huggingface.co/molbal/krea2-gguf/blob/main/krea2_turbo_bf16-Q8_CR.gguf) |

## Model Input and Output

### Checkpoints

| Checkpoint | Steps | CFG | Notes |
| --- | --- | --- | --- |
| Turbo | 4 to 8 | 0.0 | Distilled, no CFG. Fast. |
| Raw | 20 to 30 | 3.0 to 7.0 | Full CFG, more control, slower. |

### Outputs

| Field | Value |
| --- | --- |
| Output | Image |
| Architecture | Single transformer, no unconditional component |

## ComfyUI Setup

Load the model with the GGUF loader node from comfyui-gguf-reboot. The loader node gives the best performance. The plain city96 node pack does not support the Krea 2 architecture.

### Dependencies

Place these files in the ComfyUI model folders before running a workflow. You also need the text encoder and VAE from the upstream Krea 2 release.

| Component | Folder |
| --- | --- |
| Diffusion transformer | models/diffusion_models/ or models/unet/ |
| Text encoder | models/clip/ or text_encoders/ |
| VAE | models/vae/ |

Krea 2 has no workflow files in this repository. Use the ComfyUI template from the upstream Krea 2 release and swap in the GGUF loader node.
