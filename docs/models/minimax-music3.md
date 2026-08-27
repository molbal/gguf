---
title: MiniMax Music 3 GGUF
description: Quantized GGUF build of MiniMax Music 3 for audio and music generation up to 5 minutes.
outline: [2, 3]
---

# MiniMax Music 3 GGUF

MiniMax Music 3 generates complete songs up to 5 minutes long at 32 kHz stereo. It uses a 2.4B flow-matching diffusion transformer plus a text and language model encoder. This repository ships GGUF quants of both components.

<DownloadCard
  href="https://huggingface.co/molbal/Minimax-Music3-GGUF"
  label="MiniMax-Music3-GGUF on Hugging Face"
  meta="Hugging Face repository"
/>

## Examples

Example prompts this model handles well:

- Lyrics with section tags plus a description such as "indie folk pop, 98 BPM, G major, breathy female lead vocal with fingerpicked guitar."
- "A lo-fi hip hop beat with warm Rhodes chords, a dusty boom-bap drum loop, and vinyl crackle."
- "An orchestral trailer cue that builds from quiet strings to a full brass and percussion climax."

The model reads two inputs: lyrics and a music description. Lyrics use uppercase section tags on their own lines, like `[Verse]`, `[Chorus]`, and `[Outro]`. The description can cover genre, tempo, key, vocals, and arrangement.

## Available Quantizations

### Diffusion transformer (DiT)

| Quant | Size | File |
| --- | --- | --- |
| BF16 | 4.64 GB | [minimax_music3_dit_BF16.gguf](https://huggingface.co/molbal/Minimax-Music3-GGUF/blob/main/minimax_music3_dit_BF16.gguf) |
| Q4_0 | 1.39 GB | [minimax_music3_dit_Q4_0.gguf](https://huggingface.co/molbal/Minimax-Music3-GGUF/blob/main/minimax_music3_dit_Q4_0.gguf) |
| Q8_0 | 2.52 GB | [minimax_music3_dit_Q8_0.gguf](https://huggingface.co/molbal/Minimax-Music3-GGUF/blob/main/minimax_music3_dit_Q8_0.gguf) |
| Q8_CR | 2.38 GB | [minimax_music3_dit_Q8_CR.gguf](https://huggingface.co/molbal/Minimax-Music3-GGUF/blob/main/minimax_music3_dit_Q8_CR.gguf) |

### Pruned text encoder

| Quant | Size | File |
| --- | --- | --- |
| Q4_0 | 5.38 GB | [minimax_music3_text_encoder_pruned_Q4_0.gguf](https://huggingface.co/molbal/Minimax-Music3-GGUF/blob/main/minimax_music3_text_encoder_pruned_Q4_0.gguf) |
| Q8_0 | 8.93 GB | [minimax_music3_text_encoder_pruned_Q8_0.gguf](https://huggingface.co/molbal/Minimax-Music3-GGUF/blob/main/minimax_music3_text_encoder_pruned_Q8_0.gguf) |
| Q8_CR | 8.49 GB | [minimax_music3_text_encoder_pruned_Q8_CR.gguf](https://huggingface.co/molbal/Minimax-Music3-GGUF/blob/main/minimax_music3_text_encoder_pruned_Q8_CR.gguf) |

## Model Input and Output

### Inputs

| Field | Value |
| --- | --- |
| Lyrics | Text with uppercase section tags |
| Music description | Genre, tempo, key, vocals, arrangement |
| Token limit | 5,000 tokens |

### Outputs

| Field | Value |
| --- | --- |
| Duration | Up to 5 minutes |
| Audio | 32 kHz stereo |
| Streaming | No |

## ComfyUI Setup

Load the model with the GGUF loader node from comfyui-gguf-reboot. The loader node gives the best performance. Use Q8_CR for the DiT when audio quality matters.

### Dependencies

Place these files in the ComfyUI model folders before running a workflow.

| Component | File | Folder |
| --- | --- | --- |
| Diffusion transformer | `minimax_music3_dit_*.gguf` | `models/diffusion_models/` or `models/unet/` |
| Text encoder | `minimax_music3_text_encoder_pruned_*.gguf` | `models/text_encoders/` or `models/clip/` |

### Workflow downloads

Import this JSON file into ComfyUI.

<DownloadCard
href="../workflows/files/audio_minimax_music_3-gguf.json"
label="Music generation ComfyUI workflow"
meta="JSON file"
/>
