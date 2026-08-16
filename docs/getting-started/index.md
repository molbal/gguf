---
title: Getting Started
description: GGUF mechanics and why quantization matters for diffusion models on consumer GPUs.
outline: [2, 3]
---

# Getting Started

This page explains what GGUF is, how it applies to generative media, and how to run quantized diffusion models on consumer hardware.

## What is GGUF

GGUF (GGML Unified Format) is a file format designed to store model weights and metadata. It is the standard for distributing quantized neural networks.

For diffusion and generative media models, GGUF provides two main advantages:

* Quantized Storage: Weights use lower precision formats like INT4, INT8, FP8, or mixed variants instead of FP16 or BF16.
* Quantized Execution: Compatible runtimes read and execute these weights directly in lower precision. Memory savings apply during generation, not just when downloading the file.

Large models that usually need server setups can run directly on consumer GPUs.

## Why Quantization Works

Quantization trades small amounts of mathematical precision for memory savings. Neural network layers react differently to precision loss, so effective quantization places precision where necessary:

* Attention and projection layers tolerate lower precision formats like Q4 or Q5 with minor visual loss.
* Text encoders and normalization layers require higher precision like Q8, FP8, or BF16 to maintain accurate prompt adherence.
* Convolution-heavy or rotation-sensitive layers benefit from specialized formats like Q8_CR (INT8 ConvRot).

Smart quantization keeps output quality close to full precision while cutting VRAM usage by half or more.

## Diffusion Transformers vs LLMs

Quantization became common with text-focused LLMs, but it applies equally to modern Diffusion Transformers (DiTs).

| Component | Examples | Why Quantization Helps |
| --- | --- | --- |
| Text Encoders | T5 XXL, Qwen | Multi-billion parameter encoders stay loaded alongside the main generator. |
| DiT Backbones | FLUX, MiniMax H3, Ideogram 4 | Saves VRAM across every iterative denoising step. |
| Multimodal Backbones | MiniMax H3, Krea 2 | Fits heavy video, audio, and frame-conditioning tensors into consumer VRAM. |

LLMs generate one token at a time. Diffusion models run their entire backbone repeatedly across many sampling steps. Quantizing the backbone saves memory on every step, enabling higher resolutions, longer videos, and faster generation.

## The Multi-Model Pipeline

A complete generation pipeline usually requires multiple distinct models running together:

1. Text Encoder: Converts prompts into guidance vectors.
2. Backbone Generator: Performs the main iterative denoising process.
3. VAE or Decoders: Converts latents into final images, video frames, or audio.

Running all parts at full precision (FP16 or BF16) causes system slowdowns due to VRAM offloading. Running quantized GGUF versions keeps the pipeline inside VRAM, eliminating slow CPU swaps.

## Getting Started

To run these models, use ComfyUI with the [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot) node pack for full loader support. Third-party runtimes such as stable-diffusion.cpp or Unsloth Studio also support these formats.

::: tip Choosing the Right Quant
* On 8GB to 12GB VRAM, start with Q4_0 or Q4_K_M.
* On 16GB VRAM, look for mixed builds like U16G designed to maximize 16GB cards.
* On 24GB or more VRAM, use Q8_0, Q8_CR, or FP8 for maximum fidelity.

Read the full breakdown in [Quant Formats](/ecosystem/quant-formats).
:::

## Next Steps

* [Ecosystem & Tooling](/ecosystem/)
* [Quant Formats Guide](/ecosystem/quant-formats)
* [Models Registry](/models/)