---
title: Text to Image
description: Text-to-image pipelines for Ideogram 4 and Krea 2 GGUF quants in ComfyUI.
outline: [2, 3]
---

# Text to Image

Text-to-image pipelines built on Ideogram 4 and Krea 2 GGUF quants.


## Models and formats

The following models support Text-to-Image modalities:
[krea2-gguf.json](../../../../../Downloads/krea2-gguf.json)
| Model                                     | Strength                                         | Tradeoff                                              |
|-------------------------------------------|--------------------------------------------------|-------------------------------------------------------|
| [Ideogram 4](/models/ideogram-4)          | Excellent prompt following, great text rendering | Strict JSON prompt structure is cumbersome to follow. |
| [Krea 2](/models/krea2)                   | Highly creative, decent prompt following         | Text rendering not always perfect                     |

## Loading instructions

1. Download the required GGUF files from Hugging Face and put it in the `models/diffusion_models` ComfyUI directory. You only need one quant format, not all.
2. Replace the default diffusion model node with the GGUF loader.
3. Point the loader at the model's .gguf file.
4. Load the pruned text encoder GGUF alongside it.
5. Set the sampler steps and CFG to the model's recommended values. (Using a GGUF instead of a safetensors/other file format does not affect what sampling/scheduling/etc settings you need to set.)
