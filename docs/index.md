---
title: Home
description: GGUF quantization and open-source diffusion tooling by molbal.
layout: home
hero:
  name: molbal
  text: GGUF Quantization and Diffusion Tooling
  tagline: Run large diffusion transformers on consumer GPUs with quantized weights.
  actions:
    - theme: brand
      text: Get Started
      link: /getting-started/
    - theme: alt
      text: Browse Models
      link: /models/
    - theme: alt
      text: ComfyUI Nodes
      link: https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot
features:
  - title: Consumer GPU Support
    details: Quantized tensor storage and execution reduce VRAM use so large diffusion transformers run on a single GPU.
  - title: Open Interoperability
    details: Compatible with city96, Unsloth, and other GGUF ecosystem providers. Workflows stay portable between runtimes.
  - title: Model Registry
    details: GGUF quants for MiniMax H3, LTX 2.5, Krea 2, Ideogram 4, and MiniMax Music 3, with hardware guidance.
  - title: Workflow Library
    details: ComfyUI node trees for text to image, image editing, video, multimodal to video, and audio generation.
---

## What is here

This site documents molbal's GGUF quantization work and diffusion tooling.

- [Getting started](/getting-started/): what GGUF is and how it applies to diffusion models.
- [Ecosystem and tooling](/ecosystem/): ComfyUI nodes, third-party runtimes, and quant formats.
- [Models registry](/models/): each repository with Hugging Face links, hardware requirements, and format availability.
- [Workflows](/workflows/): ComfyUI node trees for image, video, and audio generation.
- [Community](/community/): model requests, issue reports, and social profiles.

## How to run these models

Modern diffusion pipelines use diffusion transformers (DiTs). A heavy text encoder (T5 XXL or Qwen) runs alongside a UNet or transformer backbone. Running both at full precision exceeds most single-GPU budgets.

GGUF quantization compresses weights so both models fit in VRAM. Use ComfyUI with the [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot) node pack. The loader nodes give the best performance.

::: tip New to GGUF?
Start with [Getting Started](/getting-started/) for the background.
:::

## Quick links

- [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot)
- [github.com/molbal/gguf](https://github.com/molbal/gguf)
- [Quant Formats](/ecosystem/quant-formats)
