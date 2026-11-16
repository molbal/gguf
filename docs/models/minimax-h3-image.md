---
title: MiniMax H3 Image GGUF
description: Quantized GGUF build of MiniMax H3 Image for text-to-image generation and image editing.
outline: [2, 3]
---

# MiniMax H3 Image GGUF

MiniMax H3 Image is a diffusion transformer for text-to-image generation and image editing. One checkpoint handles both tasks. It renders images up to about 16 megapixels in 6 sampling steps without classifier-free guidance. It uses the MiniMax H3 text encoder, based on Qwen3-VL.

<DownloadCard
  href="https://huggingface.co/molbal/miniMax-H3-Image-GGUF"
  label="MiniMax-H3-Image-GGUF on Hugging Face"
  meta="Hugging Face repository"
/>

## Example output

![Example image generated with MiniMax H3 Image GGUF](/assets/minimax-h3-image-example.webp)

> **Prompt:** Movie poster style image. Two lovers lean into a near-kiss in front of a server rack and a rain-covered penthouse window. Deep indigo, warm amber, and magenta lighting. The title "Minimax H3 Image GGUF" is set in a bold brushed serif font with golden foil, with the subtitle "molbal's quant" below it. Size 3072 x 5472, seed 5303.

## Available Quantizations

| Quant | File | Size |
| --- | --- | --- |
| Q4_K_M | [minimax_h3_image-Q4_K_M.gguf](https://huggingface.co/molbal/miniMax-H3-Image-GGUF/blob/main/minimax_h3_image-Q4_K_M.gguf) | 13.4 GiB |
| Q8_0 | [minimax_h3_image-Q8_0.gguf](https://huggingface.co/molbal/miniMax-H3-Image-GGUF/blob/main/minimax_h3_image-Q8_0.gguf) | 20.7 GiB |

Both files are standard GGUF quants. Use Q8_0 when you have enough VRAM for the better detail. Use Q4_K_M when VRAM is tight.

## Model Input and Output

### Inputs

| Input | Description |
| --- | --- |
| Text prompt | A description of the image, or an edit instruction. Long prompts work better than short ones. |
| Reference images | One or more images for editing. Refer to them in the prompt as `<Picture 1>`, `<Picture 2>`, and so on. |
| Width and height | The output size. Supported sizes run from about 4 MP to 20 MP. |

### Outputs

| Field | Value |
| --- | --- |
| Steps | 6 NFE |
| CFG | None needed, the distilled model runs at CFG 1 |
| Sampler | SamplerLCM, 6 steps with the simple scheduler |
| Size | About 16 MP is the best working point |

Common 16 MP sizes are 4096 x 4096 (1:1), 4736 x 3552 (4:3), 5472 x 3072 (16:9), and 3552 x 4736 (3:4 portrait).

## ComfyUI Setup

Load the model with the GGUF loader node from comfyui-gguf-reboot. The loader node gives the best performance. The workflows use `UnetLoaderGGUFDynamicVRAM`.

### Dependencies

Place these files in the ComfyUI model folders before running a workflow.

| Component | File | Folder |
| --- | --- | --- |
| Diffusion model | minimax_h3_image-Q4_K_M.gguf or minimax_h3_image-Q8_0.gguf | models/diffusion_models/ |
| Text encoder | qwen3vl_32b_minimax_h3_nvfp4_awq.safetensors | models/text_encoders/ |
| Image VAE | minimax_h3_image_vae_fp16.safetensors | models/vae/ |

The NVFP4 text encoder runs natively on RTX 50-series cards. On other cards use `qwen3vl_32b_minimax_h3_int8_convrot.safetensors` in the same folder.

Download the text encoder and VAE from [Comfy-Org/MiniMax-H3](https://huggingface.co/Comfy-Org/MiniMax-H3) and [Comfy-Org/MiniMax-H3-Image](https://huggingface.co/Comfy-Org/MiniMax-H3-Image).

### Workflow downloads

Import these JSON files into ComfyUI.

<DownloadCard
  href="../workflows/files/minimax_h3_image_t2i-gguf.json"
  label="Text-to-Image workflow"
  meta="JSON file"
/>

<DownloadCard
  href="../workflows/files/minimax_h3_image_edit-gguf.json"
  label="Image Edit workflow"
  meta="JSON file"
/>

### Prompt tips

Write a long prompt with the subject, outfit, place, light, and framing. A short prompt falls back to a glossy, generic result.

For a photo look, add camera words such as "shot on a phone front camera", "visible skin texture and pores", "no retouching", and "natural HDR".

Keep the output near 16 MP. At 4 MP, faces lose detail. The higher size costs only a few seconds more sampling.

### Edit workflow notes

Bind each input image to a name, for example "the person in `<Picture 1>` wears the jacket in `<Picture 2>`", and state what must stay the same. Casual wording such as "the top from image 2" gives weaker garment details.

The edit workflow scales the person image to 2 MP and each garment image to 1 MP before sampling. This roughly halves the run time with the same output quality.

## License and attribution

The upstream MiniMax H3 Image model uses the [MiniMax H3 Image Community License Agreement](https://huggingface.co/MiniMaxAI/MiniMax-H3-Image/blob/main/LICENSE). It differs from the MiniMax H3 license. You need separate written approval from MiniMax if your annual revenue is above 1 million USD or if you provide the model as a hosted service to third parties.
