# Slide Deck Template Guide

This document describes all available slide types in the deck template. Use this as a reference when building presentations to select the right layout for your content.

---

## Quick Reference

| Slide Type | Best For | Class Name |
|------------|----------|------------|
| Presentation Cover | Multi-deck landing pages | `.presentation-cover` |
| Title | Opening slides, case study intros | (default) |
| Split | Feature explanations with visuals | `.split` |
| Split Square | Square media (1:1) alongside text | `.split.split-square` |
| Split Strip | Horizontal strip media (Slack msgs) | `.split.split-strip` |
| Split Edge-Bleed | Hero moments, dramatic visuals | `.split-edge-bleed` |
| Media Centered | Hero images at natural aspect ratio | `.media-centered` |
| Comparison | Before/after, A/B comparisons | `.comparison` |
| Simple List | Numbered points, key takeaways | `.simple-list` |
| Quote | Key insights, thesis statements | `.quote` |
| Testimonial | Single person endorsement | `.testimonial` |
| Multi-Testimonial | Multiple endorsements | `.multi-testimonial` |
| Timeline | Process flows, project phases | `.timeline` |
| Big Metric | Impact numbers, KPIs | `.big-metric` |
| Image Callout | UI annotation, feature highlights | `.image-callout` |
| Full-Bleed Caption | Showcase screenshots, demos | `.full-bleed-caption` |
| Principles | Values, guidelines, rules | `.principles` |
| Highlight | Single important point | `.highlight` |

---

## Slide Types by Category

### Presentation Cover

#### Presentation Cover Page
**Purpose:** Landing page for multi-deck presentations or portfolio collections.

**Best for:**
- Portfolio landing pages
- Multi-case-study presentations
- Interview presentation entry points

**Structure:**
- Eyebrow text (category label)
- Large title (your name or presentation title)
- Subtitle (tagline or description)
- Navigation links to individual decks
- Footer with social links

**When to use:** Create as a standalone HTML file to serve as the entry point for a collection of decks.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Presentation Title</title>
    <link rel="stylesheet" href="deck.css">
</head>
<body>
    <button id="theme-toggle" aria-label="Toggle theme">
        <svg class="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
        <svg class="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
        </svg>
    </button>

    <div class="presentation-cover">
        <div class="cover-content">
            <p class="cover-eyebrow">Design Portfolio</p>
            <h1 class="cover-title">Your Name</h1>
            <p class="cover-subtitle">Your tagline or description.</p>

            <nav class="deck-nav">
                <a href="deck-1.html" class="deck-link">
                    <div class="deck-link-content">
                        <span class="deck-number">01</span>
                        <span class="deck-title">First Deck Title</span>
                    </div>
                    <span class="deck-arrow">→</span>
                </a>
                <a href="deck-2.html" class="deck-link">
                    <div class="deck-link-content">
                        <span class="deck-number">02</span>
                        <span class="deck-title">Second Deck Title</span>
                    </div>
                    <span class="deck-arrow">→</span>
                </a>
            </nav>
        </div>

        <footer class="cover-footer">
            <a href="#">LinkedIn</a>
            <a href="#">Substack</a>
        </footer>
    </div>

    <script>
        // Theme toggle (inline for standalone pages)
        const themeToggle = document.getElementById('theme-toggle');
        function toggleTheme() {
            const isDark = document.body.classList.contains('dark-theme') ||
                (!document.body.classList.contains('light-theme') &&
                 window.matchMedia('(prefers-color-scheme: dark)').matches);
            document.body.classList.remove('light-theme', 'dark-theme');
            document.body.classList.add(isDark ? 'light-theme' : 'dark-theme');
            localStorage.setItem('theme', isDark ? 'light-theme' : 'dark-theme');
        }
        if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) document.body.classList.add(savedTheme);
    </script>
</body>
</html>
```

---

### Opening & Closing

#### Title Slide
**Purpose:** Introduce the presentation, set context, establish credibility.

**Best for:**
- Case study introductions
- Project kick-offs
- Presentation openers

**Structure:**
- H1 title (main headline)
- Subtitle/description paragraph
- Meta information (role, timeline, team, company)

**When to use:** Always use as your first slide. Can also be adapted for section dividers.

```html
<section class="slide">
    <div class="slide-content">
        <h1>Project Title</h1>
        <p class="large">Brief description of the project and its significance.</p>
        <div class="meta">
            <div class="meta-item">
                <div class="label">Role</div>
                <div class="value">Your Role</div>
            </div>
            <!-- Additional meta items -->
        </div>
    </div>
</section>
```

---

### Content + Media

#### Split
**Purpose:** Present content alongside supporting visuals in a balanced layout.

**Best for:**
- Feature explanations
- Solution presentations
- Process documentation
- Any content that benefits from visual support

**Structure:**
- Left: Section label (h3), headline (h2), bullet points or paragraphs
- Right: Image, screenshot, or video

**When to use:** Your workhorse layout. Use when you have both textual explanation and a visual to show.

```html
<section class="slide">
    <div class="slide-content">
        <div class="split">
            <div class="split-content">
                <h3>Section Label</h3>
                <h2>Main Headline</h2>
                <ul>
                    <li><span class="highlight">Key point</span> — Supporting detail</li>
                </ul>
            </div>
            <div class="split-media">
                <img src="image.jpg" alt="Description">
            </div>
        </div>
    </div>
</section>
```

---

#### Split Square
**Purpose:** Present content alongside square (1:1) media.

**Best for:**
- Detail shots
- Zoomed UI elements
- Square screenshots

**Structure:**
- Left: Section label, headline, bullets
- Right: Square image (equal column widths)

**When to use:** When your media is 1:1 aspect ratio. The equal columns balance better with square media.

```html
<section class="slide" data-slide="split-square">
    <div class="slide-content">
        <div class="split split-square">
            <div class="split-content">
                <h3>Section Label</h3>
                <h2>Main Headline</h2>
                <ul>
                    <li>Key point with detail</li>
                </ul>
            </div>
            <div class="split-media">
                <img src="square-image.jpg" alt="Description">
            </div>
        </div>
    </div>
</section>
```

---

#### Split Strip
**Purpose:** Present content with horizontal strip media (like Slack messages).

**Best for:**
- Slack/chat screenshots
- Wide horizontal images
- Feedback strips

**Structure:**
- Top: Section label, headline, description
- Bottom: Wide horizontal strip image

**When to use:** When your media is very wide and short (8:1 to 2:1 aspect ratios).

```html
<section class="slide" data-slide="split-strip">
    <div class="slide-content">
        <div class="split split-strip">
            <div class="split-content">
                <h3>Section Label</h3>
                <h2>Main Headline</h2>
                <p>Context for the strip media below.</p>
            </div>
            <div class="split-media">
                <img src="slack-message.jpg" alt="Slack feedback">
            </div>
        </div>
    </div>
</section>
```

---

#### Split Edge-Bleed
**Purpose:** Create dramatic visual impact with full-height imagery.

**Best for:**
- Hero moments
- Problem statements
- Dramatic reveals
- Emotional storytelling

**Structure:**
- Left: Section label, headline, supporting text
- Right: Full-bleed image (extends to edge of screen)

**When to use:** Use sparingly for high-impact moments. Great for hooks or transitions between major sections.

```html
<section class="slide split-edge-bleed">
    <div class="slide-content">
        <div class="split-text">
            <div class="top">
                <h3>Section Label</h3>
                <h2>Dramatic Headline</h2>
            </div>
            <div class="bottom">
                <p>Supporting context or call to action.</p>
            </div>
        </div>
        <div class="split-image">
            <img src="hero-image.jpg" alt="Description">
        </div>
    </div>
</section>
```

---

#### Media Centered
**Purpose:** Display a hero image at its natural aspect ratio with optional header and caption.

**Best for:**
- Process/exploration shots
- Hero screenshots
- Any image that should be the star of the slide

**Structure:**
- Optional header (label + headline)
- Centered media at natural aspect ratio
- Optional caption

**Variants:**
- `.media-square` - for 1:1 images
- `.media-wide` - for 16:9 images

**When to use:** When the image itself is the content and should display at its natural size.

```html
<section class="slide media-centered" data-slide="media-centered">
    <div class="slide-content">
        <div class="media-header">
            <h3>Section Label</h3>
            <h2>Media Headline</h2>
        </div>
        <div class="media-wrapper">
            <img src="hero-image.jpg" alt="Description">
        </div>
        <p class="media-caption">Optional caption describing the media</p>
    </div>
</section>
```

---

#### Full-Bleed Caption
**Purpose:** Showcase a full interface or screenshot with minimal text.

**Best for:**
- Final product reveals
- Demo screenshots
- Interface showcases
- Portfolio pieces

**Structure:**
- Full-width media area (image or video)
- Caption bar at bottom

**When to use:** When the visual should be the star. Use for "the final result" moments.

```html
<section class="slide full-bleed-caption">
    <div class="slide-content">
        <div class="media-area">
            <img src="screenshot.jpg" alt="Description">
        </div>
        <div class="caption-bar">Brief description of what's shown</div>
    </div>
</section>
```

---

#### Image Callout
**Purpose:** Annotate a UI or image with labeled callouts.

**Best for:**
- UI feature highlights
- Design annotations
- Technical explanations
- Before/after details

**Structure:**
- Central image
- Positioned callouts with labels and connector lines

**When to use:** When you need to point out specific elements in an interface or diagram.

```html
<section class="slide image-callout">
    <div class="slide-content">
        <div class="callout-container">
            <div class="callout callout-left" style="top: 20%;">
                <span class="callout-label">Feature Name</span>
                <span class="callout-line"></span>
            </div>
            <div class="callout callout-right" style="top: 60%;">
                <span class="callout-line"></span>
                <span class="callout-label">Another Feature</span>
            </div>
            <img class="callout-image" src="ui-screenshot.jpg" alt="Description">
        </div>
    </div>
</section>
```

---

### Comparisons & Lists

#### Comparison
**Purpose:** Show two things side by side for contrast.

**Best for:**
- Before/after states
- Design vs. production
- Competitor analysis
- Option comparisons

**Structure:**
- Section label and headline
- Two side-by-side images with labels

**When to use:** When you need to visually contrast two states or options.

**Variants:**
- `.comparison-square` - for square (1:1) images
- `.comparison-stacked` - vertical layout for strip images

```html
<section class="slide">
    <div class="slide-content">
        <h3>Section Label</h3>
        <h2>Comparison Headline</h2>
        <div class="comparison">
            <div class="comparison-side">
                <div class="label">Before</div>
                <img src="before.jpg" alt="Before state">
            </div>
            <div class="comparison-side">
                <div class="label">After</div>
                <img src="after.jpg" alt="After state">
            </div>
        </div>
    </div>
</section>
```

```html
<!-- Square comparison variant -->
<div class="comparison comparison-square">
    ...
</div>
```

---

#### Simple List
**Purpose:** Present numbered key points with descriptions.

**Best for:**
- Key findings
- Problem lists
- Recommendations
- Step-by-step summaries

**Structure:**
- Left: Section label and title
- Right: Numbered items with titles and descriptions

**When to use:** When you have 3-5 important points that each need a brief explanation.

```html
<section class="slide">
    <div class="slide-content">
        <div class="simple-list">
            <div class="simple-list-left">
                <h3>Section Label</h3>
                <div class="simple-list-title">Main Title</div>
            </div>
            <div class="simple-list-items">
                <div class="simple-list-item">
                    <span class="number">1</span>
                    <div class="simple-list-item-content">
                        <h4>Point Title</h4>
                        <p>Brief description of this point.</p>
                    </div>
                </div>
                <!-- More items -->
            </div>
        </div>
    </div>
</section>
```

---

### Quotes & Testimonials

#### Quote
**Purpose:** Highlight a key insight or thesis statement.

**Best for:**
- Key insights
- Thesis statements
- Memorable takeaways
- Section transitions

**Structure:**
- Large centered blockquote
- Attribution or context below

**When to use:** Use to punctuate your narrative with memorable statements. Great for hypothesis slides or reflections.

```html
<section class="slide quote">
    <div class="slide-content">
        <blockquote>"Your key insight or thesis statement with <span class="highlight">emphasized words</span>."</blockquote>
        <p class="attribution">Additional context or attribution.</p>
    </div>
</section>
```

---

#### Testimonial
**Purpose:** Feature a single endorsement or quote from a person.

**Best for:**
- Stakeholder quotes
- User feedback
- Team member perspectives
- Expert endorsements

**Structure:**
- Avatar image
- Quote text
- Name and title

**When to use:** When you have a powerful quote from a specific person that adds credibility.

```html
<section class="slide testimonial">
    <div class="slide-content">
        <div class="testimonial-avatar">
            <img src="avatar.jpg" alt="Person's name">
        </div>
        <blockquote>"Their quote about the project or impact."</blockquote>
        <div class="testimonial-attribution">Full Name · Title, Company</div>
    </div>
</section>
```

---

#### Multi-Testimonial
**Purpose:** Show multiple endorsements at once.

**Best for:**
- Broad validation
- Team perspectives
- Multiple stakeholder buy-in
- Diverse feedback

**Structure:**
- Three testimonials in a row
- Each with avatar, quote, and attribution

**When to use:** When you want to show consensus or multiple perspectives on impact.

```html
<section class="slide multi-testimonial">
    <div class="slide-content">
        <div class="testimonials-grid">
            <div class="testimonial-item">
                <div class="avatar"><img src="avatar1.jpg" alt="Name"></div>
                <p class="quote">"Quote text here."</p>
                <div class="attribution">Name · Title</div>
            </div>
            <!-- Two more testimonial-items -->
        </div>
    </div>
</section>
```

---

### Process & Data

#### Timeline
**Purpose:** Show a sequence of phases or steps.

**Best for:**
- Project phases
- Process flows
- Historical progression
- Methodology steps

**Structure:**
- Section label and headline
- Horizontal timeline with phase labels and titles

**When to use:** When you need to show progression through distinct phases.

```html
<section class="slide">
    <div class="slide-content">
        <h3>Section Label</h3>
        <h2>Process Headline</h2>
        <div class="timeline">
            <div class="timeline-item">
                <div class="phase">Phase 1</div>
                <div class="title">Phase Title</div>
            </div>
            <!-- More timeline-items -->
        </div>
    </div>
</section>
```

---

#### Big Metric
**Purpose:** Emphasize a key number or statistic.

**Best for:**
- Impact metrics
- KPI highlights
- Before/after numbers
- ROI statements

**Structure:**
- Large stat number
- Description text
- Optional link to source

**When to use:** When a single number tells the story. Use for results and impact slides.

```html
<section class="slide big-metric">
    <div class="slide-content">
        <div class="stat">47%</div>
        <div class="stat-description">Description of what this metric means and why it matters.</div>
        <div class="stat-link"><a href="#">View source →</a></div>
    </div>
</section>
```

---

### Special Purpose

#### Principles
**Purpose:** Present guiding values or rules.

**Best for:**
- Design principles
- Team values
- Guidelines
- Decision frameworks

**Structure:**
- Title
- Three cards with labels and principle statements

**When to use:** When establishing foundational beliefs or rules that guide the work.

```html
<section class="slide principles">
    <div class="slide-content">
        <h2>Principles Title</h2>
        <div class="principles-grid">
            <div class="principle-card">
                <div class="principle-label">Principle 1</div>
                <div class="principle-text">The principle statement.</div>
            </div>
            <!-- Two more principle-cards -->
        </div>
    </div>
</section>
```

---

#### Highlight
**Purpose:** Call attention to a single important thing.

**Best for:**
- Key announcements
- Important links
- Single takeaways
- Call to action

**Structure:**
- Bold title on left
- Description on right

**When to use:** When you have one thing that deserves its own slide but doesn't need visual support.

```html
<section class="slide highlight">
    <div class="slide-content">
        <h2>Highlight Title</h2>
        <p class="highlight-text">Description of the important thing. Link to relevant resources if applicable.</p>
    </div>
</section>
```

---

## Content Type Decision Tree

Use this to quickly identify the right slide type:

```
What are you presenting?
│
├── Opening/Context → Title Slide
│
├── A key insight or quote?
│   ├── From a specific person → Testimonial or Multi-Testimonial
│   └── General insight → Quote
│
├── Visual content?
│   ├── What's the media aspect ratio?
│   │   ├── Square (1:1) → Split Square or Media Centered + .media-square
│   │   ├── Wide strip (8:1 to 2:1) → Split Strip
│   │   ├── Wide (16:9) → Media Centered + .media-wide
│   │   └── Standard (4:3, 3:2) → Split or Media Centered
│   │
│   ├── Need to annotate specific parts → Image Callout
│   ├── Comparing two things?
│   │   ├── Square images → Comparison + .comparison-square
│   │   └── Standard images → Comparison
│   ├── Showcasing final result → Full-Bleed Caption
│   ├── Dramatic/hero moment → Split Edge-Bleed
│   ├── Image is the star → Media Centered
│   └── Explaining with visual support → Split
│
├── Data or metrics?
│   ├── Single impactful number → Big Metric
│   └── Process or timeline → Timeline
│
├── List of points?
│   ├── Numbered items with descriptions → Simple List
│   └── Bulleted points with visual → Split (with ul)
│
├── Values or principles → Principles
│
└── Single important point → Highlight
```

---

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| → or Space | Next slide |
| ← | Previous slide |
| R | Restart (go to first slide) |
| Home | Go to first slide |
| End | Go to last slide |

---

## Theme Support

All slides support both light and dark themes. Use the toggle in the top-right corner, or the deck will follow system preferences.
