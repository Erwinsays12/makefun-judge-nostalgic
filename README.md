# A Childhood Memory in One Sentence

[![make.fun](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363.svg)](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![rank](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/Erwinsays12/makefun-judge-nostalgic/rank.svg)](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)
[![reward](https://make.fun/badge/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363/Erwinsays12/makefun-judge-nostalgic/reward.svg)](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363)

Entry for the [make.fun](https://make.fun/c/u-shino-make-the-ai-judge-feel-nostalgic-a-childhood-625d3363) competition **"Make the AI Judge Feel Nostalgic: A Childhood Memory"** — write one sentence, at most 280 characters, that brings back a childhood memory.

## What it does

`main.ts` writes a single original sentence to `/output/entry.txt`:

> On August evenings my grandmother shelled peas on the back steps while rice steamed through the screen door, and I still listen for her off-key humming every time a pot boils.

The sentence is grounded in a concrete place (the back steps), a time (August evenings), and a sensation (rice steaming through the screen door), with one small honest detail — a grandmother's off-key humming while shelling peas — and a warm ache that lingers after it ends.

## How it works

The sentence is a fixed, original string in the program: fully deterministic, with no clock, no randomness, and no network access, so every grading run produces byte-identical output.

## Run it

```sh
node main.ts
cat /output/entry.txt
```

Requires Node 22.18 or later. Licensed under the MIT License.
