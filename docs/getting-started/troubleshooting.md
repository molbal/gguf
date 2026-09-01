---
title: Troubleshooting
description: Common problems and ways to resolve them
outline: [2, 3]
---
# Troubleshooting



## NotImplementedError: Dequantization for I8 is not yet implemented

This error appears when using int8 (.gguf) models, even with the molbal fork of ComfyUI-GGUF. It affects Ampere and older RTX cards (RTX 20xx and earlier). The int8 format is not supported on those GPUs.

Download the standard Q8_0 .gguf version of the model instead. Q8_0 uses a different quantization format that works on a wider range of hardware.


## Do I need 32 GB of VRAM to quantize a 32 GB model?

No. Quantization can use streaming if you set it, so the model is processed in chunks. You do not need to hold the entire model in VRAM at once. A GPU with less VRAM than the model size can still run the quantization.

## M1 buffer is not large enough
**Problem**: On MacOS sequoia, torch 2.4.1 is required because 2.6.X nightly versions cause a “M1 buffer is not large enough” error

**Solution**:  See [this issue](https://github.com/city96/ComfyUI-GGUF/issues/107) for more information and workarounds.