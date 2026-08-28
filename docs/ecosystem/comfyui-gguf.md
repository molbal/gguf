---
title: Load GGUF models in ComfyUI
description: Install the comfyui-gguf-reboot custom nodes and load GGUF diffusion models in ComfyUI.
outline: [2, 3]
---

# Load GGUF models in ComfyUI

ComfyUI needs the [ComfyUI-GGUF](https://github.com/molbal/ComfyUI-GGUF) custom nodes to read GGUF files. The node pack is published on the Comfy Registry as [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot). The loader nodes give the best performance when running molbal's quants, so use them instead of the standard checkpoint loader.

The pack provides GGUF loader nodes for diffusion transformers, text encoders, and VAEs. It also supports the custom Q8_CR format.

## Install by cloning the repository

Clone the repository into your `ComfyUI/custom_nodes` folder and install the one dependency for inference:

```sh
git clone https://github.com/molbal/ComfyUI-GGUF
pip install --upgrade gguf
```

Restart ComfyUI after this.

## Install from the Comfy Registry

You can install the pack through the Comfy Registry instead of cloning it:

```sh
comfy node install comfyui-gguf-reboot
```

The registry entry lives at [registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot). Restart ComfyUI after the install finishes.
