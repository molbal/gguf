---
title: Text to Sound
description: Audio and song composition with MiniMax Music 3 GGUF quants in ComfyUI.
outline: [2, 3]
---

# Text to Sound

Audio and song composition built on MiniMax Music 3 GGUF quants.

## Setup

Music generation replaces the pixel or frame VAE with an audio decode stage. The loading pattern is the same: load the pruned text encoder and the minimax_music3_dit backbone with the GGUF loader nodes from [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot).

Use the GGUF loader nodes for the best performance.

## Models and formats

| Model | Repository | Recommended formats |
| --- | --- | --- |
| MiniMax Music 3 | [molbal/Minimax-Music3-GGUF](https://huggingface.co/molbal/Minimax-Music3-GGUF) | Q8_CR, Q8_0, Q4_0 |

## Loading instructions

1. Download the MiniMax Music 3 GGUF files from Hugging Face.
2. Load the pruned text encoder and minimax_music3_dit backbone with the GGUF loader nodes.
3. Set the audio length, up to 5 minutes, and the lyrics or description conditioning.
4. Configure the audio sampler and decode to a waveform.
5. Export the audio file.

::: tip Quality
Use Q8_CR for music. ConvRot keeps sensitive audio layers precise within INT8 memory bounds. See [MiniMax Music 3](/models/minimax-music3).
:::

## Showcase

Audio examples are on molbal's [Civitai profile](https://civitai.com/user/molbal).
