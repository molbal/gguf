---
title: Workflows
description: ComfyUI workflows for image, video, multimodal, and audio generation with molbal's GGUF models.
outline: [2, 3]
---

# Workflows

ComfyUI workflows built around molbal's GGUF models.

| Workflow | Models |
| --- | --- |
| [Text to Image](/workflows/text-to-image) | Ideogram 4, Krea 2 |
| [Image Edit](/workflows/image-edit) | Ideogram 4, Krea 2 |
| [Text to Video](/workflows/text-to-video) | LTX 2.5, MiniMax H3 Turbo |
| [Multimodal to Video](/workflows/multimodal-to-video) | MiniMax H3 |
| [Text to Sound](/workflows/text-to-sound) | MiniMax Music 3 |

## Before you start

Install ComfyUI with the [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot) node pack. Download the model GGUF files referenced by the workflow.

Use the GGUF loader nodes for the diffusion model, text encoder, and VAE. They give the best performance.

## Conventions

- Use GGUF loader nodes from comfyui-gguf-reboot instead of the standard checkpoint loaders.
- Each workflow notes the recommended quant format for the target GPU class.
- Text encoders use pruned T5 or Qwen GGUF files.
- Workflows note whether a standard or GGUF VAE is required.

Download links for each workflow JSON are added to the individual workflow pages.
