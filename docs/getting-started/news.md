---
title: News
description: Major changes
outline: [2, 3]
---
# Events and changes

## 2026-10-11

[ComfyUI-GGUF v26-10-11](https://github.com/molbal/ComfyUI-GGUF/releases/tag/v26-10-11) adds Qwen Image 2.1 architecture support, including an FP16 fallback for devices without BF16 support. It improves K-quant inference and conversion handling, fixes several GGUF loading and conversion issues, and improves compatibility with ComfyUI 0.39.0.

The converter now supports uniform `Q4_K`, `Q5_K`, and `Q6_K` formats and mixed `Q4_K_S`, `Q4_K_M`, `Q5_K_S`, and `Q5_K_M` formats. Standard K-quant inference uses floating-point dequantization by default. The optional Triton backend is experimental, disabled by default, and accelerates only selected CUDA SM 8.6 Linear shapes. See [Quantizing Models](/ecosystem/quantizing-models) and [Quant Formats](/ecosystem/quant-formats) for details.

Qwen Image 2.1 Turbo is listed in the [text-to-image](/workflows/text-to-image) and [image-edit](/workflows/image-edit) workflows.

## 2026-09-01

The beginning of this information page.