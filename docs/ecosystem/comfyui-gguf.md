---
title: Load GGUF models in ComfyUI
description: Install the comfyui-gguf-reboot custom nodes and load GGUF diffusion models in ComfyUI.
outline: [2, 3]
---

# Load GGUF models in ComfyUI

ComfyUI needs the [ComfyUI-GGUF](https://github.com/molbal/ComfyUI-GGUF) custom nodes to read GGUF files. The node pack is published on the Comfy Registry as [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot). The loader nodes give the best performance when running molbal's quants, so use them instead of the standard checkpoint loader.

The pack provides GGUF loader nodes for diffusion transformers, text encoders, and VAEs. It supports the custom Q8_CR (INT8 ConvRot) and Q4_CR (INT4 ConvRot) formats. Q4_CR_W4A4 needs comfy_kitchen 0.2.27 or newer, which ComfyUI bundles.

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


<BigExternalLink
href="https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot"
label="GGUF Loader Node pack"
meta="External link to Comfy Registry"
/>