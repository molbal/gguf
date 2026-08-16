---
title: Models Registry
description: Quantized GGUF models by molbal, with Hugging Face links and hardware guidance.
outline: [2, 3]
---

# Models Registry

Quantized GGUF builds of diffusion and audio models, maintained by molbal.

| Model | Focus | Repository |
| --- | --- | --- |
| [MiniMax Music 3](/models/minimax-music3) | Audio and music up to 5 minutes | [HF](https://huggingface.co/molbal/Minimax-Music3-GGUF) |
| [MiniMax H3 Turbo](/models/minimax-h3-turbo) | Video and multimodal | [HF](https://huggingface.co/molbal/MiniMax-H3-Turbo-GGUF) |
| [LTX 2.5](/models/ltx-2-5) | Open-weights video generation | [HF](https://huggingface.co/molbal/LTX-2.5-GGUF) |
| [MiniMax H3](/models/minimax-h3) | Omni-modal generation | [HF](https://huggingface.co/molbal/MiniMax-H3-GGUF) |
| [Krea 2](/models/krea2) | Image synthesis and design | [HF](https://huggingface.co/molbal/krea2-gguf) |
| [Ideogram 4](/models/ideogram-4) | Text rendering and graphic design | [HF](https://huggingface.co/molbal/ideogram-4-gguf) |

## How to use these models

1. Install ComfyUI with the [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot) node pack.
2. Download the GGUF files from the model's Hugging Face repository.
3. Pick the quant format that matches your VRAM budget. See [Quant Formats](/ecosystem/quant-formats).
4. Load the model with the GGUF loader node and use a workflow from [Workflows](/workflows/).

::: tip Not sure which quant to choose?
Read the per-model pages or [Quant Formats](/ecosystem/quant-formats).
:::

## Requesting a new model

File a request at [github.com/molbal/gguf](https://github.com/molbal/gguf). See [Community](/community/) for details.
