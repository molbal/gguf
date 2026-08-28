---
title: Ecosystem and Tooling
description: ComfyUI nodes, third-party runtimes, and the GGUF tooling landscape around molbal's quants.
outline: [2, 3]
---

# Ecosystem and Tooling

molbal's models run anywhere GGUF is understood. This page lists the ComfyUI node pack, the third-party runtimes, and the interoperability approach.

## ComfyUI

Use ComfyUI with the [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot) node pack. The loader nodes give the best performance.

- Comfy Registry: [registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot)
- The node pack provides GGUF loader nodes for diffusion transformers, text encoders, and VAEs.

The loader nodes accept GGUF files directly. Load the model with the GGUF loader instead of the standard checkpoint loader for the best performance. See [Load GGUF models in ComfyUI](/ecosystem/comfyui-gguf) for install instructions.

## Interoperability

molbal's tooling avoids vendor lock-in.

- Backward and cross-compatibility with other GGUF providers, including city96 and Unsloth.
- Workflows, quant formats, and node graphs stay open and interchangeable between providers.
- Standard formats such as Q4_0, Q4_K_M, Q8_0, and BF16/FP8 variants load natively.

## Third-party runtimes

### stable-diffusion.cpp

A C/C++ GGUF runtime for diffusion models. It reads the same standard GGUF quant formats, so molbal's models load without conversion.

### Unsloth Studio

Unsloth Studio and Unsloth's dynamic quantization engines produce and execute GGUF-compatible weights. Models quantized with Unsloth load in the ComfyUI node pack, and the reverse also works.

| Tool | Role |
| --- | --- |
| comfyui-gguf-reboot | ComfyUI loader nodes for GGUF |
| stable-diffusion.cpp | Native GGUF runtime |
| Unsloth Studio | Quantization and GGUF-compatible weights |
| city96 and GGML-family tooling | Cross-compatible providers |

## Making your own quants

You do not have to wait for a release. The node pack includes a converter that turns existing safetensors checkpoints into GGUF files. See [Quantizing Models](/ecosystem/quantizing-models) for the ComfyUI node, the command line tool, and the local conversion dashboard.

::: tip Where to start
Use ComfyUI with [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot). Then read [Quant Formats](/ecosystem/quant-formats) to pick a build for your GPU.
:::

## Next steps

- [Quant Formats](/ecosystem/quant-formats)
- [Quantizing Models](/ecosystem/quantizing-models)
- [Load GGUF models in ComfyUI](/ecosystem/comfyui-gguf)
- [Models Registry](/models/)
