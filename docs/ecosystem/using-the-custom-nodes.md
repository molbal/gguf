---
title: Using the custom nodes
description: Swap the standard loaders for the GGUF and Dynamic VRAM loader nodes in your ComfyUI workflows.
outline: [2, 3]
---

# Using the custom nodes

A workflow stays the same once the nodes are installed. You keep the same sampler, steps, prompts, and connections. Only the loader nodes change.

In place of the standard loaders, use these nodes from the pack:

- UNet Loader (Dynamic VRAM) or Unet Loader (GGUF) to load the diffusion model
- CLIP Loader (Dynamic VRAM) or CLIP Loader (GGUF) to load the text encoder (Variations exist also for the Double/Triple/Quadruple CLIP Loader)
- VAE Loader (GGUF) to load the VAE

::: tip Default to Dynamic VRAM
Pick the Dynamic VRAM option by default. Use the plain GGUF loaders when a workflow needs the classic behaviour.
:::

## What is Dynamic VRAM

Dynamic VRAM is ComfyUI's system for managing GPU and system RAM during generation. Instead of pre-allocating memory for a whole model, it loads and offloads model layers as each step needs them.

This replaces rigid memory allocation with a flexible approach. Weights move in and out of VRAM layer by layer, so the process avoids slow SSD swapping while using as much of the available VRAM as possible. Large diffusion and video models can run on modest hardware this way.

Because model weights and LoRAs are handled more efficiently, out-of-memory errors become less common and switching between models is faster. The added layer management has a small cost: users with high-end GPUs running smaller workflows may see a slight performance hit.


<BigExternalLink
href="https://comfyui.org/en/dynamic-vram-in-comfyui-saving-local"
label="Read more about ComfyUI Dynamic VRAM"
meta="External link to ComfyUI Blog"
/>
