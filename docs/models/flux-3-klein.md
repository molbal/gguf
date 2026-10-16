---
title: Flux 3 Klein GGUF
description: Quantized GGUF builds of Black Forest Labs FLUX 3 Image Klein (Distilled and Base) for text-to-image generation and multi-reference image editing in ComfyUI.
outline: [2, 3]
---

# Flux 3 Klein GGUF

FLUX 3 Image Klein is a 5.6B parameter open-weights diffusion transformer from Black Forest Labs for text-to-image generation and reference-based image editing. A single model accepts a text prompt and up to 10 reference images to produce a new image or edit existing inputs. It also supports bounding-box coordinates in the prompt for spatial layout control and text rendering. This repository provides GGUF quantizations of both the 16-step Distilled (`sd`) and 50-step Base (`base`) checkpoints for ComfyUI.

<DownloadCard
  href="https://huggingface.co/molbal/Flux-3-Klein-GGUF"
  label="Flux-3-Klein-GGUF on Hugging Face"
  meta="Hugging Face repository"
/>

## Example

<div style="text-align: center;">
  <img src="/assets/flux3-sd-example.png" alt="Flux 3 Klein GGUF example output" style="max-width: 500px; width: 100%; height: auto; border-radius: 8px;" />
</div>

Prompting tips for this model:

- Write full scene descriptions instead of short tag lists, or run the Qwen3.5 9B prompt upsampler to expand short instructions automatically.
- For spatial layout control or regional edits, include `[top, left, bottom, right]` coordinates on a 0 to 1000 grid directly in the prompt, for example `place a brass lantern at [620, 180, 860, 340]`.

## Available Quantizations

`Q8_CR` is recommended on GPUs with native INT8 acceleration. For lower VRAM usage under 3 GB, `Q4_CR_L` uses packed INT4 ConvRot weights with INT8 activations and keeps additional sensitive attention projections in `Q8_CR`, while `Q4_CR` uses INT4 weights and INT4 activations. One-dimensional normalization tensors and `final_layer.image.linear` stay in FP32, and the 128-wide input patch projections (`emb_in`) remain in source BF16.

### Distilled (`flux3_image_klein_sd`)

| Quant | Size | File |
| --- | --- | --- |
| Q4_CR | 2.74 GB | [flux3_image_klein_sd-Q4_CR.gguf](https://huggingface.co/molbal/Flux-3-Klein-GGUF/blob/main/flux3_image_klein_sd-Q4_CR.gguf) |
| Q4_CR_L | 2.78 GB | [flux3_image_klein_sd-Q4_CR_L.gguf](https://huggingface.co/molbal/Flux-3-Klein-GGUF/blob/main/flux3_image_klein_sd-Q4_CR_L.gguf) |
| Q4_K_M | 2.91 GB | [flux3_image_klein_sd-Q4_K_M.gguf](https://huggingface.co/molbal/Flux-3-Klein-GGUF/blob/main/flux3_image_klein_sd-Q4_K_M.gguf) |
| Q6_K | 4.24 GB | [flux3_image_klein_sd-Q6_K.gguf](https://huggingface.co/molbal/Flux-3-Klein-GGUF/blob/main/flux3_image_klein_sd-Q6_K.gguf) |
| Q8_CR | 5.17 GB | [flux3_image_klein_sd-Q8_CR.gguf](https://huggingface.co/molbal/Flux-3-Klein-GGUF/blob/main/flux3_image_klein_sd-Q8_CR.gguf) |
| Q8_0 | 5.49 GB | [flux3_image_klein_sd-Q8_0.gguf](https://huggingface.co/molbal/Flux-3-Klein-GGUF/blob/main/flux3_image_klein_sd-Q8_0.gguf) |

### Base (`flux3_image_klein_base`)

| Quant | Size | File |
| --- | --- | --- |
| Q4_K_M | 2.90 GB | [flux3_image_klein_base-Q4_K_M.gguf](https://huggingface.co/molbal/Flux-3-Klein-GGUF/blob/main/flux3_image_klein_base-Q4_K_M.gguf) |
| Q6_K | 4.23 GB | [flux3_image_klein_base-Q6_K.gguf](https://huggingface.co/molbal/Flux-3-Klein-GGUF/blob/main/flux3_image_klein_base-Q6_K.gguf) |
| Q8_CR | 5.16 GB | [flux3_image_klein_base-Q8_CR.gguf](https://huggingface.co/molbal/Flux-3-Klein-GGUF/blob/main/flux3_image_klein_base-Q8_CR.gguf) |
| Q8_0 | 5.48 GB | [flux3_image_klein_base-Q8_0.gguf](https://huggingface.co/molbal/Flux-3-Klein-GGUF/blob/main/flux3_image_klein_base-Q8_0.gguf) |

## Model Input and Output

### Variants and inputs

| Variant | Inputs |
| --- | --- |
| Distilled (`flux3_image_klein_sd`) | Text prompt and up to 10 optional reference images for fast generation and image editing (4 to 16 steps, CFG 1.0) |
| Base (`flux3_image_klein_base`) | Text prompt and up to 10 optional reference images for undistilled generation and LoRA training (50 steps, CFG 3.5) |

### Outputs

Up to 4k resolution image.

## ComfyUI Setup

Load the model with the `UnetLoaderGGUF` node from comfyui-gguf-reboot. The loader node gives the best performance. Set `CLIPLoader` to the `flux3` type when loading the Qwen3-VL 4B text encoder.

### Dependencies

Place the GGUF file and these companion files from the upstream repository in the ComfyUI model folders before running a workflow.

| Component | File | Folder |
| --- | --- | --- |
| Diffusion transformer | `flux3_image_klein_sd-<quant>.gguf` or `flux3_image_klein_base-<quant>.gguf` | `models/diffusion_models/` or `models/unet/` |
| Text encoder | `qwen3vl_4b_int8_convrot.safetensors` or `qwen3vl_4b_bf16.safetensors` | `models/text_encoders/` or `models/clip/` |
| Prompt upsampler (optional) | `qwen3.5_9b_flux3_prompt_upsampler_int8_convrot.safetensors` or `qwen3.5_9b_flux3_prompt_upsampler_w4a8.safetensors` | `models/text_encoders/` or `models/clip/` |
| VAE | `flux2-vae.safetensors` | `models/vae/` |


### Workflow downloads

Import these JSON files into ComfyUI.

<DownloadCard
  href="../workflows/files/flux3-klein-t2i-gguf.json"
  label="Text-to-Image workflow"
  meta="JSON file"
/>

<DownloadCard
  href="../workflows/files/flux3-klein-image-edit-gguf.json"
  label="Image Edit workflow"
  meta="JSON file"
/>
