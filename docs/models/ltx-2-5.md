---
title: LTX 2.5 GGUF
description: Quantized GGUF build of LTX 2.5, an open-weights video generation model.
outline: [2, 3]
---

# LTX 2.5 GGUF

LTX 2.5 is an open-weights video generation model from Lightricks. This repository ships GGUF quants of the 22B distilled transformer. It generates video with synchronized audio from text, a single frame, or first and last frames.

<DownloadCard
  href="https://huggingface.co/molbal/LTX-2.5-GGUF"
  label="LTX-2.5-GGUF on Hugging Face"
  meta="Hugging Face repository"
/>

## Example output

<video controls width="100%">
  <source src="https://image-b2.civitai.com/file/civitai-media-cache/6c197172-3e49-4978-a51b-334b3cc98c22/original" type="video/mp4">
  Your browser does not support the video tag.
</video>

Video from [CivitAI](https://civitai.red/user/aifromcivitai)

## Available Quantizations

| Quant | Size | File |
| --- | --- | --- |
| Q4_0 | 11.65 GB | [ltx-2.5-22b-distilled-transformer-Q4_0.gguf](https://huggingface.co/molbal/LTX-2.5-GGUF/blob/main/diffusion_models/ltx-2.5-22b-distilled-transformer-Q4_0.gguf) |
| Q8_0 | 21.22 GB | [ltx-2.5-22b-distilled-transformer-Q8_0.gguf](https://huggingface.co/molbal/LTX-2.5-GGUF/blob/main/diffusion_models/ltx-2.5-22b-distilled-transformer-Q8_0.gguf) |
| Q8_CR | 20.04 GB | [ltx-2.5-22b-distilled-transformer-Q8_CR.gguf](https://huggingface.co/molbal/LTX-2.5-GGUF/blob/main/diffusion_models/ltx-2.5-22b-distilled-transformer-Q8_CR.gguf) |

## Model Input and Output

### Variants and inputs

| Variant | Inputs |
| --- | --- |
| Text-to-Video | A text prompt only. |
| Image-to-Video | A text prompt and one source frame. |
| First and Last Frame to Video | A text prompt and two keyframe images. |

### Outputs

| Field | Value |
| --- | --- |
| Audio | Synchronized stereo audio |
| Frame rate | 24 FPS |
| Resolution | Up to 2K with the spatial upscaler |

## ComfyUI Setup

Load the model with the GGUF loader node from comfyui-gguf-reboot. The loader node gives the best performance.

### Dependencies

Place these files in the ComfyUI model folders before running a workflow.

| Component | File | Folder |
| --- | --- | --- |
| Text encoder | Gemma 4 12B with projection | models/clip/ or text_encoders/ |
| Video VAE | ltx-2.5-video-vae-bf16.safetensors | models/vae/ |
| Audio VAE | ltx-2.5-audio-vae-bf16.safetensors | models/vae/ |
| Spatial upscaler | ltx-2.5-latent-spatial-upscaler-x2-bf16-1.0.safetensors | models/upscale_models/ |

### Workflow downloads

Import these JSON files into ComfyUI.

<DownloadCard
  href="../workflows/files/video_ltx2_5_t2v-gguf.json"
  label="Text-to-Video workflow"
  meta="JSON file"
/>

<DownloadCard
  href="../workflows/files/video_ltx2_5_i2v-gguf.json"
  label="Image-to-Video workflow"
  meta="JSON file"
/>

<DownloadCard
  href="../workflows/files/video_ltx2_5_flf2v-gguf.json"
  label="First and Last Frame to Video workflow"
  meta="JSON file"
/>
