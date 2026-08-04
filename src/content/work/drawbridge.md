---
title: Drawbridge
year: 2025
description: A Chrome plugin I built for AI-driven design and development. It allows you to make 'Figma comments' in the browser for processing by Claude or Cursor.
tools: [cursor, figma]
featured: true
media: /assets/drawbridge.mp4
mediaType: video
orientation: landscape
links:
  - label: Github
    href: https://github.com/breschio/drawbridge
  - label: Present
    href: https://bresch.io/drawbridge-deck.html
order: 2
---

Visual annotations for AI-assisted coding — a Chrome extension that makes UI iteration 10x faster.

**Role** Designer, Engineer · **Timeline** Jun–Dec 2025

<video controls playsinline preload="none" src="https://github.com/breschio/drawbridge-media/raw/main/Fast%20website%20edits%20with%20Drawbridge.mp4"></video>

## Problem

While vibe coding, iterating on UI was painfully slow. Describing visual changes to Cursor took 2-3 minutes per tweak — identifying the element, explaining what to change, waiting for the response, checking the result.

Annotated screenshots improved LLM accuracy dramatically, but added their own overhead: screenshotting, marking up in Preview with pink boxes, pasting into Cursor, and watching the Downloads folder fill up with `UI_screenshot_v47.png`.

Even with annotated screenshots — the best method available — it still took 2-3 turns to fix things the LLM wasn't getting. The screenshots provided visual context, but the LLM was still guessing which element was being referenced.

## Key Insight

The LLM needed **structural** context (DOM selectors), not just **visual** context (screenshots). A screenshot shows you a button; the DOM tells you it's `div.hero-section > button.cta-primary`.

And the workflow itself needed rethinking. Instead of one-at-a-time round trips (tweak → describe → wait → check → repeat), the process should support batching: review a page, queue multiple edits, process them together.

## Inspiration

The workflow model was inspired by [AI Dev Tasks](https://github.com/snarktank/ai-dev-tasks) (6.8k GitHub stars), a methodology for structuring AI-assisted development. The core idea: instead of throwing one big prompt at the AI, break work into discrete tasks with clear checkpoints.

I applied the same mental model to UI iteration:

- **Annotations = micro-tasks** — each one is a discrete, verifiable unit of work
- **The moat = task queue** — a structured list with status tracking
- **bridge command = step-by-step execution** — with approval modes
- **Status lifecycle** (to do → doing → done) — mirrors task completion patterns

This thinking unlocked my understanding of how to "program" the AI — not with code, but with structured tasks and verification checkpoints.

## Solution

Drawbridge is a Chrome extension that connects your browser to your local development project. It lets you:

1. **Select DOM elements** directly in the browser (or draw freeform rectangles for non-element annotations)
2. **Leave comments** describing the change you want
3. **Queue them into a "moat"** that syncs to your local project as markdown + JSON
4. **Run `bridge` in Cursor** (or `/bridge` in Claude Code) to process the entire queue

Each annotation captures three things: the visual (screenshot), the structural (DOM selector path), and the intent (free-form comment). This gives the LLM everything it needs to act precisely.

Three processing modes let you tune the approval friction: **step** (one at a time), **batch** (grouped), and **yolo** (autonomous).

<video autoplay loop muted playsinline preload="none" src="/assets/drawbridge.mp4"></video>

## Technical Decisions

### Screenshot Capture

Initially used html2canvas to capture screenshots, but it wasn't performant on complex sites (React/Next.js) and couldn't handle lab colors. Pivoted to Chrome's native `captureVisibleTab` API via a background service worker.

The native approach is faster, more reliable, and simpler — it captures what's actually rendered rather than trying to reconstruct the page.

### Freeform Rectangles

Added a rectangle drawing tool (v1.0.5) for annotations that don't map cleanly to a single DOM element — like "make this whole section a carousel." Press **R** to enter rectangle mode, drag to select, then leave a comment.

### Dependency Detection

If you annotate the same element twice (e.g., "make this button green" then "add padding to the green button"), Drawbridge detects the dependency and processes them in order.

## Results

**10x faster iteration.** What used to take 2-3 minutes per change now takes 2-3 minutes for 10 changes.

Beyond raw speed, it's also less cognitively taxing — no more context-switching between browser and editor to describe what you're looking at.

- **956** GitHub stars
- **80** forks
- **115** unique cloners
- Adopted by former manager
- 5 releases over ~6 months
- Chrome Web Store launch imminent

Featured in a 10-minute [AI LABS tutorial](https://www.youtube.com/watch?v=1cB2iqz_vnM) (17K views, 561 likes) on a 107K-subscriber channel, where Drawbridge is highlighted as an underrated but powerful open-source UI automation tool.

<div class="video-wrapper">
<iframe src="https://www.youtube.com/embed/1cB2iqz_vnM" title="Drawbridge Demo - AI Labs" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

## What I Learned

**"Go deeper."** When screenshots weren't enough, I realized the LLM needed structural context to stop guessing which element I meant. The insight was that visual annotation was necessary but not sufficient — you need both the image and the selector.

**Build for yourself first.** I knew the problem intimately because I lived it. The tool worked before anyone else used it, which made it easy to validate with real usage.

**Open source until proven valuable.** Starting open source let me gather signal (stars, clones, organic coverage) before deciding on monetization. The stars and YouTube pickup are validation that others have the same problem.
