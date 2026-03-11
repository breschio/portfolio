# Design Case Studies — Slide Outline

Terrence Breschi · bresch.io
33 slides · ~35–40 minutes

**Deck title (browser):** Design Case Studies — Terrence Breschi

---

## Slide types (use for `slide_type:`)

All templates from `decks/templates/slide-templates-preview.html`. Use the **slide_type** value in each slide block.

| # | Slide type | Description |
|---|------------|-------------|
| 1 | `presentation-cover` | Multi-deck landing page (standalone HTML, not a slide in a deck) |
| 2 | `title` | Opening slide, case study intro. h1, subtitle, optional meta |
| 3 | `split` | Text + media side by side. Use `split_layout: content-left` or `content-right` |
| 4 | `split-square` | Split with 1:1 square media. Same `split_layout` as split |
| 5 | `split-strip` | Split with portrait strip media (e.g. 9:16) on right |
| 6 | `split-edge-bleed` | Hero: text left, image bleeds to edge |
| 7 | `media-centered` | Centered hero image with caption |
| 8 | `comparison` | Before/after or A/B. comparison_before_* / comparison_after_* |
| 9 | `simple-list` | Numbered list. section, list_title, items (title + body) |
| 10 | `quote` | Blockquote + attribution. quote, quote_highlight, attribution |
| 11 | `testimonial` | Single person. quote, name, title, optional avatar |
| 12 | `multi-testimonial` | Multiple endorsements (grid) |
| 13 | `timeline` | Process phases. section, heading, phases (label + title) |
| 14 | `big-metric` | Big number/KPI. section, stat, stat_description |
| 15 | `full-bleed-caption` | Full-bleed media + caption bar. caption, media |
| 16 | `image-callout` | Image with annotation callouts |
| 17 | `principles` | Bento grid of cards. section, heading, principle_cards (label + text) |
| 18 | `highlight` | Single highlighted point. heading, body |
| 19 | `title-secondary` | Section break. h2, subtitle |

**Split layout** (when `slide_type` is `split`, `split-square`, or `split-strip`):  
`content-left` = text left, media right. `content-right` = media left, text right.

---

## Slide 1
slide_type: presentation-cover

h1: Terrence Breschi
subtitle: Product designer building and shipping with AI.
meta_label: Portfoio Review    
meta_value: 2026

---

## Slide 2
slide_type: full-bleed-caption

caption: I think, plan, design, orchestrate, code, test, and ship.
media: Sizzle reel. Pizza catnip mode, drawbridge, dotgrid, assistant welcome mat, @mentions

---

## Slide 3
slide_type: title

h2: Personio
subtitle: Evolving an AI assistant from broken UX to agentic strategy

---

## Slide 4
slide_type: full-bleed-caption

caption: Inherited a product with beautiful files but broken UX
media: Assistant with callout problems — over-designed figma, under-developed product

---

## Slide 5
slide_type: big-metric

section: The starting point
stat: 16%
stat_description: CSAT score. Dogfooding channel surfaced failures (CEO, COO, HR Team). Assistant couldn't answer basic questions on the page. UX covered the content users were trying to read.

---

## Slide 6
slide_type: split
split_layout: content-left

section: Design Process
heading: Getting the lay of the land
bullets:
  - Iterative roadmap improvements first
  - Extended panel, NBAs
  - Building trust while learning the codebase
media: Video: clicking to open the headcount report

---

## Slide 7
slide_type: split
split_layout: content-left

section: Design Process
heading: Researching what "agentic" actually means
bullets:
  - Audited which experiences were truly agentic vs. scripted
  - Mapped interaction patterns across competitors
  - Experimented with designs that could evolve the UX
media: Input explorations, comet behavior, content drawer states

---

## Slide 8
slide_type: split
split_layout: content-right

section: Product Thinking: Self-Directed UX Strategy
heading: A framework for self-shippable improvements
bullets:
  - Identified that UX quality was the primary CSAT driver
  - Mapped customer feedback to issues I could fix myself
  - Prioritized by impact × ability to ship without eng dependency
  - Began contributing code directly. Landed first commit
media: Framework / prioritization view

---

## Slide 9
slide_type: comparison

section: Product Thinking: Self-Directed UX Strategy
heading: Onboarding: removed modal dialog, added inline disclaimer
body: Simplified first-run experience. Reduced friction, set honest expectations.
comparison_before_label: Before
comparison_before_media: Modal onboarding
comparison_after_label: After
comparison_after_media: Inline disclaimer

---

## Slide 10
slide_type: comparison

section: Product Thinking: Self-Directed UX Strategy
heading: Input redesign: clarity and usability
body: Refined the input area. Clearer affordances, better visual hierarchy.
comparison_before_label: Before
comparison_before_media: Original input
comparison_after_label: After
comparison_after_media: Redesigned input

---

## Slide 11
slide_type: split
split_layout: content-left

section: UI/UX & Interaction Design
heading: Foundational UX patterns
bullets:
  - Error states · Timestamps · Copy/paste · Welcome mat onboarding
media: Error handling, timestamp, copy/paste, welcome mat

---

## Slide 12
slide_type: full-bleed-caption

caption: Full-screen view: richer interactions beyond the sidebar
media: Video: full-screen prototype

---

## Slide 13
slide_type: split
split_layout: content-left

section: Visual Design & Execution
heading: Visual design decisions
bullets:
  - Evolved component system from over-designed Figma to shippable, systematic UI
  - Established consistent type scale, spacing, and color usage across assistant states
  - Designed motion patterns for assistant responses: fade-in, streaming text, action indicators
media: Component breakdown, before/after polish, type scale, motion specs

---

## Slide 14
slide_type: big-metric

section: Impact & Strategic Pivot
stat: 16% → 22%
stat_description: CSAT improvement. UX improvements directly drove satisfaction gains. Built trust with leadership through visible, self-shipped impact. NYC office was let go, except our team.

---

## Slide 15
slide_type: quote

quote: "We're supposed to be building agents!?"
quote_highlight: agents
attribution: Team hadn't identified agent jobs yet. Deterministic vs. non-deterministic. We needed buy-in from resource-constrained teams.

---

## Slide 16
slide_type: split
split_layout: content-right

section: Product Thinking: AI Strategy
heading: Developing the AI strategy
bullets:
  - Fix UX by embedding assistant in the sidebar
  - Use page context to inform responses. A model others could adopt
  - Each product area gets its own MCP Server
  - Federated architecture for cross-team adoption
media: Strategy diagram. MCP architecture, federated model

---

## Slide 17
slide_type: split
split_layout: content-left

section: Building PAX (the prototype)
heading: Building my own agent to prove the strategy
bullets:
  - First attempt: tried pulling the existing back-end. Architecture was too isolated
  - Pivot: built a Chrome extension using the Side Panel API
  - Essentially the embedded experience we wanted for the product
  - Used Claude SDK for skills and browser use capabilities
media: Opening PAX → fade to embedded assistant

---

## Slide 18
slide_type: full-bleed-caption

caption: Context-first design: signaling page awareness
media: Video: context drawer — current page + available prompts/workflows

---

## Slide 19
slide_type: split
split_layout: content-right

section: UI/UX: Agent Interaction Design
heading: Agent response patterns
bullets:
  - Status indicators — what is the agent doing?
  - Chain of thought — why is it doing it?
  - Actions taken — what did it change?
  - Result — here's your answer
bullets_highlight: true
media: Status → chain of thought → actions → result

---

## Slide 20
slide_type: full-bleed-caption

caption: Browser use: the agent navigates the UI
media: Video: assistant taking over the browser with navigation map

---

## Slide 21
slide_type: split
split_layout: content-left

section: Visual Design: Agent Visual System
heading: Visual system for the agent experience
bullets:
  - Designed status states: thinking, acting, complete, error. Each with distinct visual language
  - Context drawer: page-aware UI with available workflows, styled for information density
  - Prompt engineering as design: system prompt "soft skills" shaped the interaction personality
media: Component sheet: agent states, context drawer variants, prompt architecture

---

## Slide 22
slide_type: big-metric

section: Impact
stat: PAX > Assistant
stat_description: Faster, more accurate, more capable. Answered questions the production assistant could not. Solutions began landing in the actual product. Gained CPO and CTO investment as a discovery tool.

---

## Slide 23
slide_type: split
split_layout: content-left

section: Impact
heading: From prototype to product strategy
bullets:
  - PAX became the tool used to craft the AI vision
  - Quick prototypes validate ideas before engineering investment
  - New interaction patterns: @mentions, mode switching, context passing
  - Beginning to invest in observability and evaluation
media: @mentions prototype + Slack screenshots

---

## Slide 24
slide_type: title-secondary

h2: 02 — Drawbridge
subtitle: Designing developer tools. Figma comments for Cursor

---

## Slide 25
slide_type: full-bleed-caption

caption: The friction: constant context-switching between agent and browser
media: Video: back-and-forth editing workflow

---

## Slide 26
slide_type: split
split_layout: content-left

section: Design Process & Product Thinking
heading: Hypothesis & tool design
bullets:
  - Provide spatial context directly to AI
  - Click DOM elements to annotate
  - Draw rectangles over areas
media: Video: leaving a comment on the UI

---

## Slide 27
slide_type: split
split_layout: content-right

section: Design Process & Product Thinking
heading: Context-rich comment architecture
bullets:
  - Each comment bundles: natural language prompt + JSON structure + screenshot
  - Maximum context for the AI agent in minimum tokens
  - Task moat keeps track of all edits in one place
media: Markdown prompt, JSON prompt, screenshots folder

---

## Slide 28
slide_type: split
split_layout: content-left

section: UI/UX & Interaction
heading: From streaming to batching
bullets:
  - Goal: stream tasks with maximum context to Cursor
  - Settled for batching. Sends all comments in one go
  - Fewer tokens on initial instructions, then agent processes sequentially
  - 10x my editing speed
media: Video: Cursor processing batched tasks

---

## Slide 29
slide_type: split
split_layout: content-left

section: UI/UX & Interaction
heading: UI evolution & Side Panel API
bullets:
  - Light/dark modes, sidebar transitions
  - Hit CSS isolation limits
  - Migrated to Chrome Side Panel API for clean separation
media: UI modes + side panel migration

---

## Slide 30
slide_type: split
split_layout: content-left

section: Visual Design
heading: Visual design & craft
bullets:
  - Designed annotation overlay system: click targets, selection rectangles, comment pins
  - Task moat UI: dense information display with clear status hierarchy
  - Built light and dark themes. Evolved from injected CSS to isolated Side Panel
media: Annotation overlays, moat UI states, theme variants

---

## Slide 31
slide_type: principles

section: Impact
heading: Impact & recognition
principle_cards:
  - label: Featured by AI labs
    text: Featured on YouTube twice, drove adoption. Positive reviews gave new ideas for development. 10x personal editing velocity.
  - label: Open source
    text: **500+** GitHub stars.
  - label: OSS management
    text: Reviewed issues, created PRs. Managed releases, added Claude support.

---

## Slide 32
slide_type: simple-list

section: Conclusion
list_title: What drives me
items:
  - title: Move fast and learn
    body: I like to move fast and learn things.
  - title: Side projects
    body: I use side projects to nurture curiosity and develop insights.
  - title: Applied AI
    body: Deeply interested in Applied AI as a catalyst for creativity and problem solving.
  - title: People
    body: Want to work with people who feel the same way.

---

## Slide 33
slide_type: title

h1: Thanks
subtitle: Terrence Breschi · bresch.io
