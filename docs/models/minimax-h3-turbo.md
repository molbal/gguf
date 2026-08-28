---
title: MiniMax H3 Turbo GGUF
description: Quantized GGUF build of MiniMax H3 Turbo for video and multimodal generation.
outline: [2, 3]
---

# MiniMax H3 Turbo GGUF

MiniMax H3 Turbo is a distilled FL2VA variant that runs in 4 steps at 768p. It generates video with native stereo audio from text, one frame, or first and last frames. The GGUF files hold the base model plus distilled weights merged into one checkpoint.

<DownloadCard
  href="https://huggingface.co/molbal/MiniMax-H3-Turbo-GGUF"
  label="MiniMax-H3-Turbo-GGUF on Hugging Face"
  meta="Hugging Face repository"
/>


## Example output

<video controls width="100%">
  <source src="/assets/minimax-h3-turbo-example.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

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

<DownloadCard
  href="../workflows/files/minimax_h3_t2v-turbo-gguf.json"
  label="Text-to-Video workflow"
  meta="JSON file"
/>

<DownloadCard
  href="../workflows/files/minimax_h3_i2v-turbo-gguf.json"
  label="Image-to-Video workflow"
  meta="JSON file"
/>