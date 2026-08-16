---
title: Text to Video
description: Video generation pipelines for LTX 2.5 and MiniMax H3 Turbo GGUF quants in ComfyUI.
outline: [2, 3]
---

# Text to Video

Video generation pipelines built on LTX 2.5 and MiniMax H3 Turbo GGUF quants.

## Setup

Video models use a frame-aware latent that carries a temporal dimension. The sampler steps over the full sequence rather than a single frame.

Load the diffusion model and text encoder with the GGUF loader nodes from [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot). The loader nodes give the best performance.

## Models and formats

| Model | Repository | Recommended formats |
| --- | --- | --- |
| LTX 2.5 | [molbal/LTX-2.5-GGUF](https://huggingface.co/molbal/LTX-2.5-GGUF) | Q8_0, Q8_CR, Q4_K_M |
| MiniMax H3 Turbo | [molbal/MiniMax-H3-Turbo-GGUF](https://huggingface.co/molbal/MiniMax-H3-Turbo-GGUF) | Q8_0, FP8, Q4_K_M |

## Loading instructions

1. Download the GGUF files from Hugging Face.
2. Load the diffusion model and text encoder with the GGUF loader nodes.
3. Use a frame-aware latent with the desired frame count and resolution.
4. Configure the sampler for the model's step count and schedule.
5. Decode frames with the VAE and assemble them into a video.

::: warning VRAM with video
Video latents multiply memory per frame. On 16GB cards use Q8_0 or the U16G mixed build. See [Quant Formats](/ecosystem/quant-formats).
:::

## Showcase

Video examples are on molbal's [Civitai profile](https://civitai.com/user/molbal).
