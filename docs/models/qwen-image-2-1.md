---
title: Qwen Image 2.1 GGUF
description: Quantized GGUF build of Qwen Image 2.1 for text-to-image and image editing.
outline: [2, 3]
---

# Qwen Image 2.1 GGUF

Qwen Image 2.1 is a diffusion transformer for text-to-image generation and image editing. It uses the Qwen3-VL 8B text encoder and supports image references through ComfyUI.

<DownloadCard
  href="https://huggingface.co/molbal/Qwen-Image-2.1-GGUF"
  label="Qwen-Image-2.1 GGUF on Hugging Face"
  meta="Upstream model repository"
/>

The GGUF files below are local builds. They are ready for the Qwen Image 2.1 support in ComfyUI and ComfyUI-GGUF.

## Examples

- Create a studio portrait with a detailed written sign and readable typography.
- Edit the supplied image to change the lighting while preserving the subject and composition.

## Available Quantizations

| Quant | File                      |
| --- |---------------------------|
| Q4_0 | qwen_image_2.1_Q4.gguf    |
| Q8 | qwen_image_2.1_Q8.gguf    |
| Q8_CR | qwen_image_2.1_Q8_CR.gguf |
| Q4_CR | *Work in progress*        |

The standard Q4_0 and Q8 files use GGML quantization. Q8_CR uses the native INT8 ConvRot path. 

## Model Input and Output

### Inputs

| Input | Description |
| --- | --- |
| Text prompt | A text description for image generation or editing instructions. |
| Reference image | Optional image input for image editing and visual conditioning. |

### Outputs

Image, RGBA (Supports transparent background)

## ComfyUI Setup

Load the model with the GGUF loader node from comfyui-gguf-reboot. Use the Qwen Image 2.1 workflow supplied by the installed ComfyUI version.

### Dependencies

Place the matching files from the upstream Qwen Image 2.1 release in the ComfyUI model folders.

| Component | Folder |
| --- | --- |
| Qwen Image 2.1 GGUF | models/diffusion_models/ or models/unet/ |
| Qwen3-VL 8B text encoder | models/clip/ or text_encoders/ |
| Qwen Image VAE | models/vae/ |


### Workflow downloads

Import these JSON files into ComfyUI.

<DownloadCard
href="../workflows/files/image_qwen_image_2_1_t2i-gguf.json"
label="Text-to-Image workflow"
meta="JSON file"
/>


<DownloadCard
href="../workflows/files/image_qwen_image_2_1_image_edit-gguf.json"
label="Image Edit workflow"
meta="JSON file"
/>

