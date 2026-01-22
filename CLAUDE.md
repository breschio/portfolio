# Portfolio Project Instructions

## Slide Deck System

This repo has a modular slide deck system. When creating new slide decks:

### Required Files (DO NOT MODIFY)
- `deck.css` - Shared styles for all decks (single source of truth)
- `deck.js` - Shared JavaScript for navigation, animations, theme toggle

### Reference Files
- `deck-TEMPLATE.html` - Master template with all slide type examples
- `SLIDE-TYPES.md` - Documentation for all slide types with code snippets

### Creating a New Deck

1. **Copy the template structure** from `deck-TEMPLATE.html`
2. **Link external assets** in the `<head>`:
   ```html
   <link rel="stylesheet" href="deck.css">
   ```
3. **Link JavaScript** before closing `</body>`:
   ```html
   <script src="deck.js"></script>
   ```
4. **Use slide types** documented in `SLIDE-TYPES.md`

### Slide Type Quick Reference

| Type | Class | Best For |
|------|-------|----------|
| Title | (default) | Opening slides |
| Split | `.split` | Feature + visual |
| Split Square | `.split.split-square` | 1:1 media |
| Split Strip | `.split.split-strip` | Wide strips (Slack) |
| Split Edge-Bleed | `.split-edge-bleed` | Hero moments |
| Media Centered | `.media-centered` | Hero images |
| Comparison | `.comparison` | Before/after |
| Simple List | `.simple-list` | Numbered points |
| Quote | `.quote` | Key insights |
| Testimonial | `.testimonial` | Person quotes |
| Multi-Testimonial | `.multi-testimonial` | Multiple quotes |
| Timeline | `.timeline` | Process flows |
| Big Metric | `.big-metric` | Impact numbers |
| Image Callout | `.image-callout` | UI annotations |
| Full-Bleed Caption | `.full-bleed-caption` | Screenshots |
| Principles | `.principles` | Values/guidelines |
| Highlight | `.highlight` | Single points |

### Media Aspect Ratio Classes

Choose based on your image dimensions:
- `.split-square` - 1:1 images
- `.split-strip` - Wide horizontal strips
- `.media-wide` - 16:9 images
- `.comparison-square` - Square comparison images

### Important Rules

1. **Never inline CSS** - All styles go in `deck.css`
2. **Never inline JS** - All behavior is in `deck.js`
3. **Match media to aspect ratio** - Use the appropriate variant class
4. **Read SLIDE-TYPES.md** for full documentation and code examples

### Existing Decks

- `personio-assistant-ux-deck.html` - Personio case study presentation
- `slide-templates-preview.html` - Visual reference of all templates
