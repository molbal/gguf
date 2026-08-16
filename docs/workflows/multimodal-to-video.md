---
title: Multimodal to Video
description: Ref2VA and FL2VA dual-frame video setups with MiniMax H3 GGUF quants.
outline: [2, 3]
---

# Multimodal to Video

Ref2VA and FL2VA dual-frame setups built on MiniMax H3 GGUF quants. These workflows feed one or more reference frames into the conditioning stream to steer the generated video.

## Ref2VA

Reference-to-video conditions on reference frames to anchor subject identity and style. Encode the reference frame with the GGUF frame encoder and feed it into the conditioning stream alongside the text conditioning.

## FL2VA

First-last frame to video conditions on both the first and last frames. The model interpolates motion in between. Encode both frames with the GGUF frame encoder and feed them into the conditioning stream.

## Models and formats

| Model | Repository | Recommended formats |
| --- | --- | --- |
| MiniMax H3 | [molbal/MiniMax-H3-GGUF](https://huggingface.co/molbal/MiniMax-H3-GGUF) | U16G, Q8_CR, FP8_Q4_0 |

::: warning Heaviest workflows in the registry
Dual-frame conditioning streams use the most memory. On 16GB cards, use U16G. See [MiniMax H3](/models/minimax-h3) and [Quant Formats](/ecosystem/quant-formats).
:::

## Loading instructions

1. Download the MiniMax H3 GGUF files from Hugging Face.
2. Load the diffusion model, text encoder, and frame encoder with the GGUF loader nodes from [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot).
3. Encode the reference or first-last frames into the conditioning stream.
4. Use a frame-aware latent and configure the video sampler.
5. Decode and assemble the frames into a video.

## Showcase

Video examples are on molbal's [Civitai profile](https://civitai.com/user/molbal).
