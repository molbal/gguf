---
title: News
description: Major changes
outline: [2, 3]
---
# Events and changes

## 2026-10-16

ComfyUI-GGUF adds support for Black Forest Labs [Flux 3 Klein](/models/flux-3-klein) (`flux3` architecture) across both the Distilled and Base checkpoints, along with the `Q4_CR_L` quantization format.

`Q4_CR_L` stores weights in packed INT4 ConvRot format while running with INT8 activations (`w4a8`) on supported CUDA hardware, and keeps additional sensitive attention layers in `Q8_CR` for improved visual fidelity under a 3 GB file size budget. `Q4_CR` (`Q4_CR_W4A4`) and `Q4_CR_L` also gain per-row scale optimization during conversion and runtime LoRA / LoKr correction support. See [Quant Formats](/ecosystem/quant-formats) and [Quantizing Models](/ecosystem/quantizing-models) for details.

## 2026-10-11

[ComfyUI-GGUF v26-10-11](https://github.com/molbal/ComfyUI-GGUF/releases/tag/v26-10-11) adds Qwen Image 2.1 architecture support, including an FP16 fallback for devices without BF16 support. It improves K-quant inference and conversion handling, fixes several GGUF loading and conversion issues, and improves compatibility with ComfyUI 0.39.0.

The converter now supports uniform `Q4_K`, `Q5_K`, and `Q6_K` formats and mixed `Q4_K_S`, `Q4_K_M`, `Q5_K_S`, and `Q5_K_M` formats. Standard K-quant inference uses floating-point dequantization by default. The optional Triton backend is experimental, disabled by default, and accelerates only selected CUDA SM 8.6 Linear shapes. See [Quantizing Models](/ecosystem/quantizing-models) and [Quant Formats](/ecosystem/quant-formats) for details.

Qwen Image 2.1 Turbo is listed in the [text-to-image](/workflows/text-to-image) and [image-edit](/workflows/image-edit) workflows.

## 2026-09-01

The beginning of this information page.