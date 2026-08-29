---
title: Home
description: GGUF quantization and open-source diffusion tooling by molbal.
layout: home

hero:
  name: GGUF Diffusion
  text: Run diffusion transformers on consumer GPUs
  tagline: GGUF tooling for ComfyUI
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
    details: Quantized model reduce VRAM use so larger models can run on a consumer GPUs.
    link: /ecosystem/quant-formats
  - title: 🔌 Focus on Interoperability
    details: I open-source my loader, and quantization script to load GGUFs from other providers 
    link: /ecosystem/quantizing-models
  - title: 📦 Model Registry
    details: Browse model conversions specifically for the GGUF loader nodes. 
    link: /models/
  - title: 🛠️ Sample Workflows
    details: Sample ComfyUI workflows for text to image, image editing, video, multimodal to video, and audio generation.
    link: /workflows/
