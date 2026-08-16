---
title: MiniMax H3 GGUF
description: Quantized GGUF build of MiniMax H3 for omni-modal generation.
outline: [2, 3]
---

# MiniMax H3 GGUF

MiniMax H3 is an omni-modal generative system. It reads text, images, video, and audio and generates video with native stereo audio at up to 2K and 15 seconds. This repository ships GGUF quants of the FL2VA and Ref2VA variants.

- Hugging Face: [molbal/MiniMax-H3-GGUF](https://huggingface.co/molbal/MiniMax-H3-GGUF)

## Examples

Example prompts this model handles well:

- A woman walking through a rain-soaked market at night, neon signs reflecting in puddles.
- A close-up of hands kneading dough, flour dust in the air, warm kitchen light.
- A spaceship drifting past a ringed planet, slow camera push in.

## Available Quantizations

### FL2VA (pruned to FP8 first)

| Quant | Size | File |
| --- | --- | --- |
| Q4_0 | 11.4 GB | [minimax_h3_fl2va_pruned_fp8_Q4_0.gguf](https://huggingface.co/molbal/MiniMax-H3-GGUF/blob/main/minimax_h3_fl2va_pruned_fp8_Q4_0.gguf) |
| Q8_0 | 20.2 GB | [minimax_h3_fl2va_pruned_fp8_Q8_0.gguf](https://huggingface.co/molbal/MiniMax-H3-GGUF/blob/main/minimax_h3_fl2va_pruned_fp8_Q8_0.gguf) |
| Q8_CR | 20.2 GB | [minimax_h3_fl2va_pruned_fp8_Q8_CR.gguf](https://huggingface.co/molbal/MiniMax-H3-GGUF/blob/main/minimax_h3_fl2va_pruned_fp8_Q8_CR.gguf) |
| U16G | 15.0 GB | [minimax_h3_fl2va_pruned_fp8_U16G.gguf](https://huggingface.co/molbal/MiniMax-H3-GGUF/blob/main/minimax_h3_fl2va_pruned_fp8_U16G.gguf) |

### Ref2VA

| Quant | Size | File |
| --- | --- | --- |
| Q4_0 | 11.4 GB | [minimax-h3-ref2va-Q4_0.gguf](https://huggingface.co/molbal/MiniMax-H3-GGUF/blob/main/minimax-h3-ref2va-Q4_0.gguf) |
| Q5_0 | 12.9 GB | [minimax-h3-ref2va-Q5_0.gguf](https://huggingface.co/molbal/MiniMax-H3-GGUF/blob/main/minimax-h3-ref2va-Q5_0.gguf) |
| Q8_0 | 21.4 GB | [minimax-h3-ref2va-Q8_0.gguf](https://huggingface.co/molbal/MiniMax-H3-GGUF/blob/main/minimax-h3-ref2va-Q8_0.gguf) |
| Q8_CR | 20.2 GB | [minimax-h3-ref2va-Q8_CR.gguf](https://huggingface.co/molbal/MiniMax-H3-GGUF/blob/main/minimax-h3-ref2va-Q8_CR.gguf) |
| U16G | 15.0 GB | [minimax-h3-ref2va-U16G.gguf](https://huggingface.co/molbal/MiniMax-H3-GGUF/blob/main/minimax-h3-ref2va-U16G.gguf) |

U16G targets 16GB cards. It puts INT8 on the layers that drive quality and Q4_0 on the rest.

## Model Input and Output

### Variants and inputs

| Variant | Inputs |
| --- | --- |
| FL2VA | Zero, one, or two images. No image is text-to-video, one image is first or last frame to video, two images is first and last frame to video. |
| Ref2VA | Up to 9 images, up to 3 video clips, up to 3 audio clips. Audio must come with an image or video. Each clip is 2 to 15 seconds. Total across all inputs is 15 seconds and 12 files. |

### Outputs

| Field | Value |
| --- | --- |
| Duration | 4 to 15 seconds |
| Aspect ratios | 21:9, 16:9, 4:3, 1:1, 3:4, 9:16 |
| Resolution | 768p default, 2K with H3-Regenerate-2K |
| Frame rate | 24 FPS |
| Audio | 32 kHz stereo |
| Language support | Arabic, Chinese, English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Spanish |

## ComfyUI Setup

Load the model with the GGUF loader node from comfyui-gguf-reboot. The loader node gives the best performance.

### Dependencies

Place these files in the ComfyUI model folders before running a workflow.

| Component | File | Folder |
| --- | --- | --- |
| Text encoder | qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors | models/clip/ or text_encoders/ |
| Video VAE | minimax_h3_video_vae_fp16.safetensors | models/vae/ |
| Audio VAE | minimax_h3_audio_vae_fp32.safetensors | models/vae/ |

### Workflow downloads

Import these JSON files into ComfyUI.

- [Text-to-Video workflow](../workflows/files/minimax_h3_t2v-gguf.json)
- [Image-to-Video workflow](../workflows/files/minimax_h3_i2v-gguf.json)
- [Reference-to-Video workflow](../workflows/files/minimax_h3_ref2v-gguf.json)
