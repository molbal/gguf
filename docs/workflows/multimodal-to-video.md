---
title: Multimodal to Video
description: Frame-conditioned video setups with MiniMax H3 and LTX 2.5 GGUF quants.
outline: [2, 3]
---

# Multimodal to Video

These workflows feed one or more frames into the conditioning stream to steer the generated video. MiniMax H3 and LTX 2.5 offer different ways to combine a prompt with reference frames. See [MiniMax H3](/models/minimax-h3) and [LTX 2.5](/models/ltx-2-5) for model details and dependencies.

## Reference-to-Video

Reference-to-video conditions on reference frames to anchor subject identity and style. Encode the reference frame with the GGUF frame encoder and feed it into the conditioning stream alongside the text conditioning.

<DownloadCard
  href="files/minimax_h3_ref2v-gguf.json"
  label="MiniMax H3 Reference-to-Video workflow"
  meta="JSON file"
/>

## Image-to-Video

A text prompt and one source frame produce the video. Load the source frame into the conditioning stream.

<DownloadCard
  href="files/video_ltx2_5_i2v-gguf.json"
  label="LTX 2.5 Image-to-Video workflow"
  meta="JSON file"
/>

## First and Last Frame to Video

A text prompt and two keyframe images produce the video. The model interpolates motion between the frames. Provide both keyframes to the conditioning stream.

<DownloadCard
  href="files/minimax_h3_i2v-gguf.json"
  label="MiniMax H3 First and Last Frame to Video workflow"
  meta="JSON file"
/>

<DownloadCard
  href="files/video_ltx2_5_flf2v-gguf.json"
  label="LTX 2.5 First and Last Frame to Video workflow"
  meta="JSON file"
/>

## Models and formats

| Model | Repository | Recommended formats |
| --- | --- | --- |
| MiniMax H3 | [molbal/MiniMax-H3-GGUF](https://huggingface.co/molbal/MiniMax-H3-GGUF) | U16G, Q8_CR, FP8_Q4_0 |
| LTX 2.5 | [molbal/LTX-2.5-GGUF](https://huggingface.co/molbal/LTX-2.5-GGUF) | Q8_0, Q8_CR |

::: warning Heaviest workflows in the registry
Dual-frame conditioning streams use the most memory. On 16GB cards, use U16G. See [MiniMax H3](/models/minimax-h3) and [Quant Formats](/ecosystem/quant-formats).
:::

## Loading instructions

1. Download the GGUF files from Hugging Face.
2. Load the diffusion model, text encoder, and frame encoder with the GGUF loader nodes from [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot). The loader nodes give the best performance.
3. Encode the reference or first-last frames into the conditioning stream.
4. Use a frame-aware latent and configure the video sampler.
5. Decode and assemble the frames into a video.

## Showcase

Video examples are on molbal's [Civitai profile](https://civitai.com/user/molbal).
