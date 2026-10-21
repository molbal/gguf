---
title: Text to Image
description: Text-to-image pipelines for Fibo 2.0, Flux 3 Klein, Qwen Image 2.1 Turbo, Qwen Image 2.1, Ideogram 4, and Krea 2 GGUF quants in ComfyUI.
outline: [2, 3]
---

# Text to Image

Text-to-image pipelines built on Fibo 2.0, Flux 3 Klein, Qwen Image 2.1 Turbo, Qwen Image 2.1, Ideogram 4, and Krea 2 GGUF quants.


## Models and formats

The following models support Text-to-Image modalities:

| Model                                     | Strength                                         | Tradeoff                                              |
|-------------------------------------------|--------------------------------------------------|-------------------------------------------------------|
| [Fibo 2.0 Dev](/models/fibo-2.0) | Text-to-image and image editing with FLUX.2 latents | Requires ComfyUI core at the specified minimum commit and Qwen3-VL 4B |
| [Flux 3 Klein](/models/flux-3-klein)      | Compact 5.6B model with layout control and text rendering | Requires Qwen3-VL 4B text encoder and ComfyUI 0.41.0+ |
| [Ideogram 4](/models/ideogram-4)          | Excellent prompt following, great text rendering | Strict JSON prompt structure is cumbersome to follow. |
| [Krea 2](/models/krea2)                   | Highly creative, decent prompt following         | Text rendering not always perfect                     |
| [Qwen Image 2.1 Turbo](/models/qwen-image-2-1-turbo) | Fast text-to-image generation and image editing, designed for 8 denoising steps | Requires the Qwen3-VL 8B text encoder |
| [Qwen Image 2.1](/models/qwen-image-2-1)  | Text-to-image with optional image references     | Requires the Qwen3-VL 8B text encoder                 |

## Loading instructions

1. Download the required GGUF files from Hugging Face and put it in the `models/diffusion_models` ComfyUI directory. You only need one quant format, not all.
2. Replace the default diffusion model node with the GGUF loader.
3. Point the loader at the model's .gguf file.
4. Load the pruned text encoder GGUF alongside it.
5. Set the sampler steps and CFG to the model's recommended values. (Using a GGUF instead of a safetensors/other file format does not affect what sampling/scheduling/etc settings you need to set.)
