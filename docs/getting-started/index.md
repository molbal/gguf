---
title: Getting Started
description: GGUF mechanics and why quantization matters for diffusion models on consumer GPUs.
outline: [2, 3]
---

# Getting Started

This page explains what GGUF is, how it applies to generative media, and how to run quantized diffusion models on consumer hardware.

## What is GGUF?

GGUF (GGML Unified Format) is a file format designed originally developed by Georgi Gerganov to store model weights and metadata. It is the standard for distributing quantized neural networks.

For diffusion and generative media models, GGUF provides two main advantages:

* Weights use lower precision formats like INT8, FP8, or mixed variants instead of FP16 or BF16.
* Compatible runtimes read and execute these weights directly in lower precision. Memory savings apply during generation, not just when downloading the file.

## How Does Quantization Work?

Quantization trades small amounts of mathematical precision for memory savings. Neural network layers react differently to precision loss, so effective quantization places precision where necessary:

* Attention and projection layers tolerate lower precision formats like Q4 or Q5 with minor visual loss.
* Text encoders and normalization layers require higher precision like Q8, FP8, or BF16 to maintain accurate prompt adherence.

Smart quantization keeps output quality close to full precision while cutting VRAM usage by half or more.

If you are interesetd, the following article explains quantization better, than I can:

<BigExternalLink
href="https://www.maartengrootendorst.com/blog/quantization/#all-large-language-models-are-in-158-bits"
label="A Visual Guide to Quantization"
meta="Maarten Grootendorst 's blog"
/>

## Diffusion Transformers vs LLMs

Quantization became common with text-focused LLMs, but it applies equally to modern Diffusion Transformers (DiTs).

| Component | Examples | Why Quantization Helps                                                                             |
| --- | --- |----------------------------------------------------------------------------------------------------|
| Text Encoders | T5 XXL, Qwen | Multi-billion parameter encoders may stay loaded alongside the main generator if they fit in VRAM. |
| DiT Backbones | FLUX, MiniMax H3, Ideogram 4 | Saves VRAM across every iterative denoising step.                                                  |
| Multimodal Backbones | MiniMax H3, Krea 2 | Fits heavy video, audio, and frame-conditioning tensors into consumer VRAM.                        |

LLMs generate one token at a time.  Diffusion models run their entire backbone repeatedly across many sampling steps. Quantizing the backbone saves memory on every step, enabling higher resolutions, longer videos, and faster generation.

## The Multi-Model Pipeline

A complete generation pipeline usually requires multiple distinct models running together:

1. Text Encoder: Converts prompts into guidance vectors.
2. Backbone Generator: Performs the main iterative denoising process.
3. VAE or Decoders: Converts latents into final images, video frames, or audio.

Running all parts at full precision (FP16 or BF16) might not fit all models in VRAM offloading.