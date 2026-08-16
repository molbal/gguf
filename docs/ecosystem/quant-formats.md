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

Q8_CR gives near-Q8_0 quality on sensitive layers while keeping the memory use of an INT8 build.

### U16G

U16G is a mixed-precision build for 16GB GPUs.

- Precision-critical layers use INT8.
- The rest of the weights use Q4_0.

A single 16GB card cannot hold a full FP16 diffusion pipeline plus its text encoder. U16G places INT8 on the layers that drive quality and Q4_0 on the rest, so the whole model fits without offloading. Fidelity is slightly lower than Q8_0, but the model runs where it otherwise would not.

::: warning U16G vs Q4_K_M
Both target limited memory. Use U16G when sensitive layers need higher precision. Use Q4_K_M for a simpler 4-bit baseline.
:::

## Choosing a format

| Situation | Recommended format |
| --- | --- |
| Maximum quality, ample VRAM | Q8_0, Q8_CR, or BF16 |
| 16GB single GPU, full pipeline must fit | U16G |
| Tight VRAM budget | Q4_K_M or Q4_0 |
| Float dynamic range at 8-bit cost | FP8 |

Not every format is available for every model. See the [model pages](/models/) for exact availability.
