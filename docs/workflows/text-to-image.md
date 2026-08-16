---
title: Text to Image
description: Text-to-image pipelines for Ideogram 4 and Krea 2 GGUF quants in ComfyUI.
outline: [2, 3]
---

# Text to Image

Text-to-image pipelines built on Ideogram 4 and Krea 2 GGUF quants.

## Setup

Load the diffusion model and text encoder with the GGUF loader nodes from [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot). Connect the conditioning output to the sampler, then decode the latent with the VAE.

Use the GGUF loader nodes for the best performance. They replace the standard checkpoint loader.

## Models and formats

| Model | Repository | Recommended formats |
| --- | --- | --- |
| Ideogram 4 | [molbal/ideogram-4-gguf](https://huggingface.co/molbal/ideogram-4-gguf) | Q8_CR, Q8_0, FP8 |
| Krea 2 | [molbal/krea2-gguf](https://huggingface.co/molbal/krea2-gguf) | Q8_0, Q8_CR, Q4_K_M |

## Loading instructions

1. Download the GGUF files from Hugging Face.
2. Replace the default diffusion model node with the GGUF loader.
3. Point the loader at the model's .gguf file.
4. Load the pruned text encoder GGUF alongside it.
5. Set the sampler steps and CFG to the model's recommended values.

::: tip Text rendering
For Ideogram 4 output that includes rendered text, use Q8_CR. Glyph detail is precision-sensitive. See [Ideogram 4](/models/ideogram-4).
:::

## Showcase

Image examples are on molbal's [Civitai profile](https://civitai.com/user/molbal).
