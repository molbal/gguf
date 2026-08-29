---
title: Ecosystem and Tooling
description: ComfyUI nodes, third-party runtimes, and the GGUF tooling landscape around molbal's quants.
outline: [2, 3]
---

# Ecosystem and Tooling

This page lists the ComfyUI node pack, the third-party runtimes, and interoperability.

## ComfyUI

I recommend to use ComfyUI with the [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot) node pack. The loader nodes give the best performance. The node pack provides GGUF loader nodes for diffusion transformers, text encoders, and VAEs.



<BigExternalLink
href="https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot"
label="GGUF Loader Node pack"
meta="External link to Comfy Registry"
/>

The loader nodes accept GGUF files directly. Load the model with the GGUF loader instead of the standard checkpoint loader for the best performance. See [Load GGUF models in ComfyUI](/ecosystem/comfyui-gguf) for install instructions.

## Interoperability philosophy

I do not benefit from locking you into using models converted by me and forcing you to use tools maintained by me, so I put in the effort to stay compatible with other tools in the ecosystem.

- Backward and cross-compatibility with other GGUF providers, including [city96](https://huggingface.co/city96/models) and [Unsloth](https://huggingface.co/unsloth/models?search=gguf).
- Workflows, quant formats, and node graphs stay open and interchangeable between providers.
- Standard formats such as Q4_0, Q4_K_M, Q8_0, and BF16/FP8 variants load natively.

## Other recommended engines

### stable-diffusion.cpp

A C/C++ GGUF runtime for diffusion models. It reads the same standard GGUF quant formats, so models published by the maintainer load without conversion. (Compatible types: Q4_0, Q4_1, Q5_0, Q5_1 and Q8_0)

<BigExternalLink
href="https://github.com/leejet/stable-diffusion.cpp"
label="Download stable-diffusion.cpp"
meta="External link to GitHub"
/>

### Unsloth Studio

Unsloth Studio and Unsloth's dynamic quantization engines produce and execute GGUF-compatible weights. Models quantized with Unsloth load in the ComfyUI node pack, and the reverse also works. (Compatible types: Q4_0, Q4_1, Q5_0, Q5_1 and Q8_0)


<BigExternalLink
href="https://unsloth.ai/docs/new/studio"
label="Download Unsloth Studio"
meta="External link to Unsloth.ai"
/>
