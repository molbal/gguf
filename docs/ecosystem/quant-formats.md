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
| Q8_0 | ~8-bit | Near full-precision quality with meaningful memory savings. |
| BF16 | 16-bit | Brain-float 16 baseline. |
| FP8 | 8-bit float | Float dynamic range at 8-bit cost. |


## Custom formats

During GGUF execution, model weights are typically dequantized back to 16-bit floating-point numbers (FP16 or BF16) before performing matrix multiplication. In contrast, custom formats introduced by these loader nodes like Q8_CR and Q4_CR retain their INT8 or INT4 representations during compute. This allows execution to use hardware acceleration for integer operations—such as sub-byte matrix math—available on NVIDIA Tensor Cores across architectures like Turing, Ampere, and newer.

### Q8_CR (INT8 ConvRot)

Q8_CR stores weights as INT8 and applies Convolutional Rotation during quantization.

ConvRot rotates weight tensors before quantization so that sensitive convolution-like structure survives the low-bit representation. This keeps attention projections, normalization layers, and rotational structures precise.

Q8_CR stores most weights in INT8 ConvRot, therefore it is both high quality and fast on GPUs with native INT8 acceleration, such as the NVIDIA RTX 30-series. The maintainer recommends it for these systems.

### Q4_CR (INT4 ConvRot)

Q4_CR is a native INT4 format. Weights are stored as packed INT4, activations are quantized to INT4 at run time, and the GPU runs an int4 tensor-core matmul. Weights stay INT4 during inference, in the same way Q8_CR keeps weights at INT8.

The converter rotates each eligible Linear weight with ConvRot, packs two 4-bit values per byte, and stores one FP16 scale per output row. Files are roughly the size of Q4_0 and much smaller than Q8_CR. Compared to Q8_CR (INT8), Q4_CR (INT4) inference performance is slightly better, VRAM/storage usage is almost halved, and output quality is slightly degraded.

It has a few additional requirements::

- Conversion and loading need comfy_kitchen 0.2.27 or newer. (ComfyUI bundles it, so this should not be a problem).


## Closing thoughts 

| Situation                               | Recommended format |
|-----------------------------------------|--------------------|
| Maximum quality, ample VRAM             | Q8 or BF16         |
| Tight VRAM budget                       | Q4                 |
| Float dynamic range at 8-bit cost       | FP8                |

Not every format is available for every model. See the [model pages](/models/) for exact availability. If you need some format, which is not available, you can either quantize it yourself, or request it.


<BigExternalLink
href="/ecosystem/quantizing-models"
label="Quantizing Models"
meta="Ecosystem and Tooling"
/>

<BigExternalLink
href="https://github.com/molbal/ComfyUI-GGUF/issues/new?template=request-model-support.md"
label="Request a new quant"
meta="External link to GitHub"
/>
