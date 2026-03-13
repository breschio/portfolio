# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Design portfolio with two separate systems:

1. **Portfolio landing site** (`index.html`, `styles.css`, `script.js`) — standalone pages with sidebar navigation linking to case studies and decks
2. **Slide deck presentation system** (`decks/`) — modular slide decks for portfolio reviews, the primary focus of active development

## Development

No build system. Open HTML files directly in browser or use any local server:
```bash
python3 -m http.server 8000
```

## Two Separate Style/Script Systems

The landing site (`styles.css`, `script.js`) and deck system (`deck.css`, `deck.js`) are **completely independent** — they share no code. Don't mix them.

## Slide Deck Architecture

### Core Files (DO NOT MODIFY unless adding new features)
- `decks/templates/deck.css` — Single source of truth for all deck styles. 4px baseline grid, 12-column layout, light/dark theme via CSS variables (`--bg`, `--text`, `--accent`, `--surface`). Accent: `#FF2F00` (light), `#FF4500` (dark). Changes here flow to all decks and `slide-templates-preview.html`.
- `decks/templates/deck.js` — Navigation (arrow keys, touch/swipe), count-up animation for `.big-metric` slides, theme toggle with localStorage, auto-deck navigation. Exposes `window.slideDeck` API (`goToSlide()`, `nextSlide()`, `prevSlide()`, `getCurrentSlide()`, `getTotalSlides()`).

### V4 Design Target
- `decks/v4/design-case-studies-deck.html` — Primary design target for deck.css changes. Systematic UX/UI changes to deck.css should be validated against this deck and `slide-templates-preview.html`.

### V1 vs V2 Decks
- `decks/v1/` — Original comprehensive version with full narrative
- `decks/v2/` — Condensed iteration (e.g. Personio Assistant is 48% smaller). Active experimentation.
- Both versions share the same `decks/templates/` core files

### Deck Flow
`cover-deck.html` → `about-deck.html` → `personio-assistant-deck.html` → `drawbridge-deck.html` → `personio-agent-deck.html`

Auto-navigation between decks via `data-next-deck` attribute on `<body>`:
```html
<body data-next-deck="next-deck.html">
```

### Content.md Files
Each version has a `content.md` — markdown reference of all slide text/assets. Not rendered directly; used for reviewing and editing content outside HTML.

### Reference Files
- `deck-TEMPLATE.html` — Master template with all slide type examples
- `decks/templates/slide-templates-preview.html` — Visual preview of all slide types (uses deck.css; reflects design changes)
- `decks/templates/SLIDE-TYPES.md` — Full documentation of ~29 slide types with code snippets

### Creating New Decks
1. Copy structure from `deck-TEMPLATE.html`
2. Link `deck.css` in `<head>` and `deck.js` before `</body>`
3. Use slide types from `SLIDE-TYPES.md`

### URL Parameters
- `?slide=N` — Start at specific slide (0-indexed)

## Important Rules

1. **Never inline CSS** — All styles go in `deck.css`
2. **Never inline JS** — All behavior is in `deck.js`
3. **Target UX/UI changes to deck.css** — All deck UX/UI improvements go in `decks/templates/deck.css` so they flow to every deck (v1–v4) and `slide-templates-preview.html`. Never add deck styles to individual HTML files.
4. **Match media to aspect ratio** — Use the appropriate variant class (`.split-square` for 1:1, `.split-strip` for wide)
5. **Presentation covers are standalone** — They don't use `deck.js`; they have their own inline theme toggle

## Assets

Images stored in `assets/portfolio-media/{project-name}/` organized by case study (e.g. `personio/`, `drawbridge/`, `intro/`).

## Slash Commands

- `/bridge` — Process Drawbridge UI annotation tasks. Reads task data and screenshots from `.moat/` directory, applies visual feedback changes to code. Supports step/batch/yolo processing modes.
