---
title: Image Edit
description: Inpainting, image-to-image, and regional editing with Fibo 2.0, Flux 3 Klein, Qwen Image 2.1 Turbo, Qwen Image 2.1, Ideogram 4, and Krea 2 GGUF quants.
outline: [2, 3]
---

# Image Edit

Inpainting, image-to-image, and regional editing setups built on Fibo 2.0, Flux 3 Klein, Qwen Image 2.1 Turbo, Qwen Image 2.1, Ideogram 4, and Krea 2 GGUF quants.

## Inpainting

Encode the source image to latent space with the VAE. Feed a mask into the sampler so only the masked region regenerates. Decode the result back to pixel space.

## Image-to-image

Encode the source image to latent space. Run the sampler with a controlled strength so the output stays close to the input. Decode the result.

## Regional editing

Chain a mask into the conditioning stage. The GGUF diffusion model regenerates only the selected region and leaves the rest of the latent unchanged.

## Models and formats

| Model | Repository                                                                      | Recommended formats |
| --- |---------------------------------------------------------------------------------| --- |
| Fibo 2.0 Dev | [molbal/fibo-2.0-GGUF](https://huggingface.co/molbal/fibo-2.0-GGUF) | Q8_CR, Q8_0, Q6_K, Q4_K_M |
| Fibo 2.0 Edit Turbo | [molbal/fibo-2.0-GGUF](https://huggingface.co/molbal/fibo-2.0-GGUF) | Q8_CR, Q8_0, Q6_K, Q4_K_M |
| [Flux 3 Klein](/models/flux-3-klein) | [molbal/Flux-3-Klein-GGUF](https://huggingface.co/molbal/Flux-3-Klein-GGUF)     | Q8_CR, Q8_0, Q6_K, Q4_CR_L, Q4_K_M |
| Ideogram 4 | [molbal/ideogram-4-gguf](https://huggingface.co/molbal/ideogram-4-gguf)         | Q8_CR, Q8_0 |
| Krea 2 | [molbal/krea2-gguf](https://huggingface.co/molbal/krea2-gguf)                   | Q8_0, Q4_K_M |
| Qwen Image 2.1 Turbo | [molbal/Qwen-Image-2.1-Turbo-GGUF](https://huggingface.co/molbal/Qwen-Image-2.1-Turbo-GGUF) | Q8_CR, Q8_0, Q6_K, Q4_K_M |
| Qwen Image 2.1 | [molbal/Qwen-Image-2.1-GGUF](https://huggingface.co/molbal/Qwen-Image-2.1-GGUF) | Q8_CR, Q8_0 |

## Loading instructions

1. Download the GGUF files from Hugging Face.
2. Load the diffusion model and text encoder with the GGUF loader nodes from [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot).
3. Encode the source image with the VAE before sampling.
4. For inpainting and regional edits, feed the mask into the sampler.
5. Decode the result.

## Showcase

Image examples are on molbal's [Civitai profile](https://civitai.com/user/molbal).
