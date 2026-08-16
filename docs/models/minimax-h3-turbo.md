---
title: MiniMax H3 Turbo GGUF
description: Quantized GGUF build of MiniMax H3 Turbo for video and multimodal generation.
outline: [2, 3]
---

# MiniMax H3 Turbo GGUF

MiniMax H3 Turbo is a distilled FL2VA variant that runs in 4 steps at 768p. It generates video with native stereo audio from text, one frame, or first and last frames. The GGUF files hold the base model plus distilled weights merged into one checkpoint.

- Hugging Face: [molbal/MiniMax-H3-Turbo-GGUF](https://huggingface.co/molbal/MiniMax-H3-Turbo-GGUF)

## Examples

Example prompts this model handles well:

- A chef plating a dish in a busy restaurant kitchen, steam rising, quick cuts.
- A drone shot flying over a coastal cliff at sunset, waves below.
- A person typing at a desk at night, screen glow on their face, rain on the window.

## Available Quantizations

| Quant | Size | File |
| --- | --- | --- |
| Q4_0 | 11.4 GB | [minimax_h3_fl2v_turbo_4step_v1.0_768p_Q4_0.gguf](https://huggingface.co/molbal/MiniMax-H3-Turbo-GGUF/blob/main/minimax_h3_fl2v_turbo_4step_v1.0_768p_Q4_0.gguf) |
| Q8_0 | 21.4 GB | [minimax_h3_fl2v_turbo_4step_v1.0_768p_Q8_0.gguf](https://huggingface.co/molbal/MiniMax-H3-Turbo-GGUF/blob/main/minimax_h3_fl2v_turbo_4step_v1.0_768p_Q8_0.gguf) |
| Q8_CR | 20.2 GB | [minimax_h3_fl2v_turbo_4step_v1.0_768p_Q8_CR.gguf](https://huggingface.co/molbal/MiniMax-H3-Turbo-GGUF/blob/main/minimax_h3_fl2v_turbo_4step_v1.0_768p_Q8_CR.gguf) |

## Model Input and Output

### Variants and inputs

| Variant | Inputs |
| --- | --- |
| Text-to-Video | A text prompt only. |
| Image-to-Video | A text prompt and one frame on first_frame. |
| First and Last Frame to Video | A text prompt and two images on first_frame and last_frame. |

### Outputs

| Field | Value |
| --- | --- |
| Steps | 4 NFE |
| Resolution | 768p (1344 x 768) |
| Frame rate | 24 FPS |
| Audio | 32 kHz stereo |
| Video shift | 6 |
| Audio shift | 3 |

## ComfyUI Setup

Load the model with the GGUF loader node from comfyui-gguf-reboot. The loader node gives the best performance. You also need the MiniMax H3 Turbo sampler nodes, from comfyui-minimax-h3-turbo on the Comfy registry.

### Dependencies

Place these files in the ComfyUI model folders before running a workflow.

| Component | File | Folder |
| --- | --- | --- |
| Text encoder | qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors | models/clip/ or text_encoders/ |
| Video VAE | minimax_h3_video_vae_fp16.safetensors | models/vae/ |
| Audio VAE | minimax_h3_audio_vae_fp32.safetensors | models/vae/ |

### Workflow downloads

Import these JSON files into ComfyUI.

- [Text-to-Video workflow](../workflows/files/minimax_h3_t2v-turbo-gguf.json)
- [Image-to-Video workflow](../workflows/files/minimax_h3_i2v-turbo-gguf.json)
