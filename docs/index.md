---
title: Home
description: GGUF quantization and open-source diffusion tooling by molbal.
layout: home

hero:
  name: GGUF Diffusion
  text: Run diffusion transformers on consumer GPUs
  tagline: GGUF quantization for ComfyUI. Quantized weights cut VRAM use so large models fit on a single GPU.
  image:
    src: /art.webp
    alt: GGUF Diffusion artwork
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
  - title: 🎮 Consumer GPU Support
    details: Quantized tensor storage and execution reduce VRAM use so large diffusion transformers run on a single GPU.
  - title: 🔌 Open Interoperability
    details: Compatible with city96, Unsloth, and other GGUF ecosystem providers. Workflows stay portable between runtimes.
  - title: 📦 Model Registry
    details: GGUF quants for MiniMax H3, LTX 2.5, Krea 2, Ideogram 4, and MiniMax Music 3, with hardware guidance.
  - title: 🛠️ Workflow Library
    details: ComfyUI node trees for text to image, image editing, video, multimodal to video, and audio generation.
