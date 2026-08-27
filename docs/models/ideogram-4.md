---
title: Ideogram 4 GGUF
description: Quantized GGUF build of Ideogram 4 for text rendering and graphic design.
outline: [2, 3]
---

# Ideogram 4 GGUF

Ideogram 4 is a diffusion transformer built for text rendering and graphic design. It ships two diffusion components: the main transformer and an unconditional transformer used by CFG workflows. This repository publishes GGUF quants of both.

<DownloadCard
  href="https://huggingface.co/molbal/ideogram-4-gguf"
  label="ideogram-4-gguf on Hugging Face"
  meta="Hugging Face repository"
/>

## Examples

Example prompts this model handles well:

- "A poster that reads WELCOME in bold serif letters on a cream background, minimal, centered."
- "A coffee shop chalkboard menu with the word ESPRESSO in large hand lettering."
- "A book cover titled The Quiet Garden with botanical line art."

## Available Quantizations

Each quant level is published for both the main transformer and the unconditional transformer.

| Quant | Size per file | Main file | Unconditional file |
| --- | --- | --- | --- |
| Q4_0 | 5.26 GB | [ideogram4-transformer-q4_0.gguf](https://huggingface.co/molbal/ideogram-4-gguf/blob/main/ideogram4-transformer-q4_0.gguf) | [ideogram4-unconditional_transformer-q4_0.gguf](https://huggingface.co/molbal/ideogram-4-gguf/blob/main/ideogram4-unconditional_transformer-q4_0.gguf) |
| Q4_1 | 5.78 GB | [ideogram4-transformer-q4_1.gguf](https://huggingface.co/molbal/ideogram-4-gguf/blob/main/ideogram4-transformer-q4_1.gguf) | [ideogram4-unconditional_transformer-q4_1.gguf](https://huggingface.co/molbal/ideogram-4-gguf/blob/main/ideogram4-unconditional_transformer-q4_1.gguf) |
| Q5_0 | 6.30 GB | [ideogram4-transformer-q5_0.gguf](https://huggingface.co/molbal/ideogram-4-gguf/blob/main/ideogram4-transformer-q5_0.gguf) | [ideogram4-unconditional_transformer-q5_0.gguf](https://huggingface.co/molbal/ideogram-4-gguf/blob/main/ideogram4-unconditional_transformer-q5_0.gguf) |
| Q5_1 | 6.83 GB | [ideogram4-transformer-q5_1.gguf](https://huggingface.co/molbal/ideogram-4-gguf/blob/main/ideogram4-transformer-q5_1.gguf) | [ideogram4-unconditional_transformer-q5_1.gguf](https://huggingface.co/molbal/ideogram-4-gguf/blob/main/ideogram4-unconditional_transformer-q5_1.gguf) |
| Q8_0 | 9.44 GB | [ideogram4-transformer-q8_0.gguf](https://huggingface.co/molbal/ideogram-4-gguf/blob/main/ideogram4-transformer-q8_0.gguf) | [ideogram4-unconditional_transformer-q8_0.gguf](https://huggingface.co/molbal/ideogram-4-gguf/blob/main/ideogram4-unconditional_transformer-q8_0.gguf) |

The main and unconditional transformers do not need to use the same quant level. Higher quants keep text legibility sharper.

## Model Input and Output

### Inputs

| Field | Value |
| --- | --- |
| Input | Text prompt |

### Outputs

| Field | Value |
| --- | --- |
| Output | Image |

### Suggested pairings

| Main transformer | Unconditional transformer | Notes |
| --- | --- | --- |
| q8_0 | q8_0 | Highest precision pair |
| q8_0 | q5_1 | High precision main, less memory on the unconditional side |
| q5_1 | q4_1 | Balanced quality and size |
| q4_0 | q4_0 | Smallest pair |

## ComfyUI Setup

Load the model with the GGUF loader node from comfyui-gguf-reboot. The loader node gives the best performance. Use the Unet Loader (GGUF) or Unet Loader (GGUF/Advanced) node in a workflow that accepts separate main and unconditional models.

### Dependencies

Place these files in the ComfyUI model folders before running a workflow. You also need the text encoder and VAE from the upstream Ideogram 4 release.

| Component | Folder |
| --- | --- |
| Main transformer | models/diffusion_models/ or models/unet/ |
| Unconditional transformer | models/diffusion_models/ or models/unet/ |
| Text encoder | models/clip/ or text_encoders/ |
| VAE | models/vae/ |

Ideogram 4 has no workflow files in this repository. Use the ComfyUI template from the upstream Ideogram 4 release and swap in the GGUF loader node.
