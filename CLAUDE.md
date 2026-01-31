# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a design portfolio site built as a modular slide deck presentation system. The main entry point is `decks/cover-deck.html` which links to individual case study decks.

## Development

No build system - open HTML files directly in browser or use any local server:
```bash
python3 -m http.server 8000
# or
npx serve
```

## Slide Deck Architecture

### Core Files (DO NOT MODIFY unless adding new features)
- `deck.css` - Single source of truth for all deck styles
- `deck.js` - Navigation, animations, count-up effects, theme toggle

### Reference Files
- `deck-TEMPLATE.html` - Master template with all slide type examples
- `SLIDE-TYPES.md` - Full documentation with code snippets

### Creating New Decks
1. Copy structure from `deck-TEMPLATE.html`
2. Link `deck.css` in `<head>` and `deck.js` before `</body>`
3. Use slide types from `SLIDE-TYPES.md`

### Key Slide Types

| Class | Use Case |
|-------|----------|
| `.split` | Feature + visual (default layout) |
| `.split.split-square` | 1:1 aspect ratio media |
| `.split.split-strip` | Wide horizontal strips |
| `.split-edge-bleed` | Full-height dramatic visuals |
| `.media-centered` | Hero images at natural aspect |
| `.comparison` | Before/after |
| `.big-metric` | Impact numbers (auto-animates) |
| `.image-callout` | UI annotations with labels |
| `.full-bleed-caption` | Full screenshots with caption |

### Auto-Navigation Between Decks
Set `data-next-deck` on body or deck element to auto-advance to next deck:
```html
<body data-next-deck="next-deck.html">
```

### URL Parameters
- `?slide=N` - Start at specific slide (0-indexed)

## Important Rules

1. **Never inline CSS** - All styles go in `deck.css`
2. **Never inline JS** - All behavior is in `deck.js`
3. **Match media to aspect ratio** - Use appropriate variant class
4. **Presentation covers are standalone** - They don't use `deck.js`, have inline theme toggle

## Assets

Images stored in `assets/portfolio-media/{project-name}/` organized by case study.

## Slash Commands

- `/bridge` - Process Drawbridge UI annotation tasks from `.moat/` directory
