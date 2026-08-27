---
title: Quant Formats
description: Standard and custom GGUF quant formats used across molbal's models.
outline: [2, 3]
---

# Quant Formats

GGUF supports several quantization schemes. Each trades precision against memory and speed. This page lists the formats molbal ships and the custom formats for specific hardware.

## Standard formats

These formats load natively in ComfyUI with [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot).

| Format | Bit depth | Notes |
| --- | --- | --- |
| Q4_0 | ~4-bit | Smallest footprint, lowest precision. Good for tight VRAM budgets. |
| Q4_K_M | ~4.5-bit | K-quant, medium size. Better quality than Q4_0 for a small size increase. |
| Q8_0 | ~8-bit | Near full-precision quality with meaningful memory savings. |
| BF16 | 16-bit | Brain-float 16 baseline. |
| FP8 | 8-bit float | Float dynamic range at 8-bit cost. |

::: tip Rule of thumb
Use Q8_0 for fidelity on larger GPUs. Use Q4_K_M or Q4_0 when VRAM is the limit. Use FP8 for float dynamic range at 8-bit cost.
:::

## Custom formats

### Q8_CR

Q8_CR stores weights as INT8 and applies Convolutional Rotation (ConvRot) during quantization.

ConvRot rotates weight tensors before quantization so that sensitive convolution-like structure survives the low-bit representation. This keeps attention projections, normalization layers, and rotational structures precise.

Q8_CR stores most weighs in INT8 ConvRot therefore it is both high quality, but with [higher performance](https://www.google.com/search?client=firefox-b-d&q=Ampere+gpu+int8+acceleration).


## Choosing a format

| Situation                               | Recommended format |
|-----------------------------------------|--------------------|
| Maximum quality, ample VRAM             | Q8 or BF16         |
| Tight VRAM budget                       | Q4                 |
| Float dynamic range at 8-bit cost       | FP8                |

Not every format is available for every model. See the [model pages](/models/) for exact availability. If you need some format, which is not available, 
