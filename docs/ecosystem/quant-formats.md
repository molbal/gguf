---
title: Quant Formats
description: Standard and custom GGUF quant formats used across molbal's models.
outline: [2, 3]
---

# Quant Formats

GGUF supports several quantization schemes. Each trades precision against memory and speed. This page lists the formats molbal ships and the custom formats for specific hardware.

## Standard formats

These formats load with [comfyui-gguf-reboot](https://registry.comfy.org/publishers/molbal/nodes/comfyui-gguf-reboot). GGML formats, including `_K`, use dequantization to floating-point weights for inference by default. They are supported for diffusion models, but smaller files do not imply faster denoising.

| Format | Bit depth | Notes |
| --- | --- | --- |
| Q4_0 | ~4-bit | Small footprint with a larger quality trade-off. |
| Q8_0 | ~8-bit | High-quality standard GGML format with meaningful memory savings. |
| Q4_K, Q5_K, Q6_K | 4/5/6-bit | K-quant GGML formats. Available as uniform and mixed quantization choices. K-quant Linear inference uses the portable dequantization path by default. |
| BF16 | 16-bit | Brain-float 16 baseline. |
| FP8 | 8-bit float | Float dynamic range at 8-bit cost. |

An optional bundled Triton backend can accelerate decoding for a limited set of Q5_K/Q6_K Linear layers on CUDA SM 8.6 when explicitly enabled. It remains experimental, still materializes floating-point weights, and falls back for unsupported shapes and hardware. Results vary by model, GPU, and workflow. See the [K-quant inference notes](https://github.com/molbal/ComfyUI-GGUF/blob/v26-10-11/docs/k-quant-inference.md) before enabling it. The backend is off by default.


## Custom formats

During GGUF execution, model weights are typically dequantized back to 16-bit floating-point numbers (FP16 or BF16) before performing matrix multiplication. In contrast, custom formats introduced by these loader nodes like Q8_CR and Q4_CR retain their INT8 or INT4 representations during compute. This allows execution to use hardware acceleration for integer operations—such as sub-byte matrix math—available on NVIDIA Tensor Cores across architectures like Turing, Ampere, and newer.

### Q8_CR (INT8 ConvRot)

Q8_CR stores weights as INT8 and applies Convolutional Rotation during quantization.

ConvRot rotates weight tensors before quantization so that sensitive convolution-like structure survives the low-bit representation. This keeps attention projections, normalization layers, and rotational structures precise.

Q8_CR stores most weights in INT8 ConvRot, therefore it is both high quality and fast on GPUs with native INT8 acceleration, such as the NVIDIA RTX 30-series. The maintainer recommends it for these systems.

### Q4_CR (INT4 ConvRot, INT4 Activations)

Q4_CR is a native INT4 format. Weights are stored as packed INT4, activations are quantized to INT4 at run time, and the GPU runs an int4 tensor-core matmul. Weights stay INT4 during inference, in the same way Q8_CR keeps weights at INT8. 

The converter rotates each eligible Linear weight with ConvRot, optimizes per-row FP16 scales to reduce 4-bit rounding error, and packs two signed 4-bit values per byte. Sensitive layers do stay in Q8_CR. Files are roughly the size of Q4_0 and much smaller than Q8_CR. Compared to Q8_CR (INT8), Q4_CR (INT4) inference performance is slightly better, VRAM/storage usage is almost halved, and output quality is slightly degraded.

### Q4_CR_L (INT4 ConvRot, INT8 Activations)

Q4_CR_L uses the same packed INT4 ConvRot weight layout as Q4_CR, but runs with INT8 activations (`w4a8`) instead of INT4 activations (`w4a4`). On CUDA hardware, `comfy_kitchen` quantizes the rotated activations row-wise to INT8 and executes an INT4-weight by INT8-activation matmul. When that CUDA backend is unavailable, the loader falls back to dequantized floating-point PyTorch compute.

Q4_CR_L also keeps additional sensitive layers in Q8_CR on architectures such as Flux 3 Klein, improving visual fidelity while keeping file size close to Q4_CR. On both Q4_CR and Q4_CR_L, compatible runtime LoRA and LoKr adapters keep the packed INT4 base weight and add a low-rank correction in the compute dtype.

Both INT4 ConvRot formats have a few additional requirements:

- Conversion and loading need comfy_kitchen 0.2.27 or newer. (ComfyUI bundles it, so this should not be a problem).


## Closing thoughts

| Situation | Recommended format |
| --- | --- |
| Maximum quality, ample VRAM | Q8 or BF16 |
| Tight VRAM budget | Q4 |
| Float dynamic range at 8-bit cost | FP8 |
| Higher quality GGUF storage where slightly slower performance is acceptable | Q4_K, Q5_K, or Q6_K |

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
