# Design Case Studies — Slide Outline

Terrence Breschi · bresch.io
49 slides · ~45–55 minutes

**Deck title (browser):** Design Case Studies — Terrence Breschi

---

## TEMPLATES

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

*NOTES FOR AGENT*
Here's a way for us to organize the content that goes into the slide. Not all of this is applicable. It's the template for slides, showing what's included when. When reviewing slides, renumber each slide so its number matches its position in the sequence (Slide 1, 2, 3, … with no gaps or duplicates) and update the total slide count at the top.

## [Slide number in sequence]
slide_type: [defines which slide template to use]

section: Section of the presentation (e.g. Design Process, Impact)
headline: Primary text (or use heading: for split slides)
subtitle: Secondary text
bullets: (use bullets: with - item, or keypoints with 1. 2. 3.)
  - Bullet
  - Bullet
  - Bullet
  1. Bullet
  2. Bullet
  3. Bullet
meta_label, meta_value: If applicable (e.g. title slide)
media-description: Placeholder caption shown inside the media as a guide for me
media: File path to the actual media asset
notes: Presenter notes that are not visible on the slides

Slide-type-specific fields (e.g. comparison_before_*, principle_cards, items) are in the Slide types table above.

---

## Slide 1 - Cover
slide_type: presentation-cover


section: Portfolio Presentation
h1: Terrence Breschi
subtitle: I'm a product designer building and shipping with AI.  
meta_value: Prepared for Ramp

---

## Slide 2 - Who I am
slide_type: split

section: Intro
heading: I learn fast and ship things.
subheading: Working with AI has amplified my curiosity, and enabled me to do more than ever before.

media-description: Sizzle reel. Pizza catnip mode, team photos, drawbridge, dotgrid, assistant welcome mat, @mentions
media: assets/portfolio-media/pizzacat/pizzacat-sizzle-1.mp4

---



## Slide 3 - Personio Assistant: Cover
slide_type: title

headline: Personio Assistant
subtitle: How I helped evolve the AI Assistant from a broken UX to a full-blown agentic strategy
meta_team: Personio AI Team
meta_role: Product Designer
meta_timeline: May 2025–Current
media: assets/portfolio-media/personio/new/pa-intro-1.mp4

--


## Slide 5 - Our Customers
slide_type: split
split_layout: content-left

section: Customer Problems
heading: Our Customer
subheading: HR admins, managers and employees at European tech companies. These folks had high expectations — and real pain.
bullets:
  - Drowning in questions from employees
  - Juggling roles between admin and strategy
  - Excited yet skeptical appetites for AI

media-description: Stock image of a Personio persona (unhappy but professional, AI-gen)
media: assets/portfolio-media/personio/new/pa-customer-1.png

notes: The spread of AI meant we had to build something that worked for everyone — and that set clear expectations early.

---

## Slide 6 - The Assistant
slide_type: split

section: Solution
heading: The Assistant
subheading: An AI assistant built to provide insights while deflecting common questions
bullets:
  - Deflect support tickets 
  - Understand your company data
  - Produce insights and visualizations
  - Become a strategic partner

media-description: Image of the first version of the assistant (cropped to focus on input)
media: assets/portfolio-media/personio/new/pa-original-1.png

---


## Slide 7 - We have some problems
slide_type: big-metric

heading: 20% CSAT
subheading: Customer satisfaction was very low

---


## Slide 7 - We heard it from leadership
slide_type: split

heading: Leadership was dogfooding
subheading: We had a direct feedback line 
- Data reliability issues
  - Key usability issues
  - Insights laid foundation for future
  - These projects were not on the roadmap

media-description: images of complaints from dogfooding
media: assets/portfolio-media/personio/new/pa-dogfooding-clevel.png


---
## Slide 8 - Problems I identified
slide_type: full-bleed-caption

caption: Original Figma Files 
media-description: Screenshot of Figma file with Assistant. Callout problems
media: assets/portfolio-media/personio/new/pa-original-2-gaps.png

notes: Designs were aspirational but one dimensional. UX had not been scoped, or realized yet.

---

## Slide 9 - How I work
slide_type: split

heading: I ship code
subheading: I build with AI, refine with teammates, push to GitHub, and ship code. 
bullets:
  - First designer to ship code to production
  - Build functionality iteratively
  - Share with teammates

media-description: video of me prototyping
media: assets/portfolio-media/personio/new/pa-github-1.jpeg

--- 


## Slide 17 - How I work
slide_type: split

heading: I teach others
subheading: I often create tutorials, give talks, and have 1:1's about AI
bullets:
  - Developed a tutorial and documentation for others
  - Eventually used by the COO to ship his own code

media-description: sizzle reel (comments from Harbor); video from my tutorial showing designers how to ship to production
media: assets/portfolio-media/personio/new/pa-tutorial-1.mp4

---

## Slide 10
slide_type: title-secondary
heading: AI Driven Work
subheading: How I used AI to improve the UX <br> % CSAT  for our the Assistant

---

## Slide 11
slide_type: full-bleed-caption
split_layout: content-left

heading: Welcome Mat
bullets:
  - removed warning dialog
  - added greeting
  - generated directional prompts
  - designed animation interaction

media-description: Before (Image) / AFTER (video)
media: assets/portfolio-media/personio/new/pa-welcome-mat-3.mp4

notes: collaborated with eng on prompts the assistant could help direct employee queries could perform reliably well.


## Slide 12
slide_type: split
split_layout: content-left

heading: Refined Input
bullets:
  - Preserves initial height
  - adapts to three lines of text
  - makes room for future tools
  - persistent disclaimer below

media-description: Broken input (Image) / AFTER (video)
media: assets/portfolio-media/personio/new/pa-input-1.mp4

notes: collaborated with eng on prompts the assistant could help direct employee queries could perform reliably well.


## Slide 13
slide_type: split
split_layout: content-left

heading: Thinking state
bullets:
  - Incorporates branding
  - Smooths a sometimes laggy loading experience
  - Creates foundation for chain-of-thought

media-description: Visual of our thinking state
media: assets/portfolio-media/personio/new/pa-thinking-1.mp4

## Slide 14
slide_type: split
split_layout: content-left

heading: Error States
bullets:
  - Improved descriptions of what went wrong
  - Includes timestamp on hover
  - Copy meta information to share/troubleshoot

media-description: Error states · Timestamps · Copy/paste (Figma)
media: assets/portfolio-media/personio/new/pa-errors-1.png


## Slide 15
slide_type: split
split_layout: content-left

heading: Stop Button
bullets:
  - Enables user to stop the stream
  - Introduces more control and trust into the system
  - Lays foundation for other input-driven actions

media-description: Before (Image) / AFTER (video)
media: assets/portfolio-media/personio/new/pa-stop-response-1.png


## Slide 16
slide_type: full-bleed-caption
split_layout: content-left

heading: Full screen
bullets:
  - Enables user to make Assistant full screen
  - Encourages AI-Native usage
  - Lays foundation for dedicated surface

media-description: Video of transition
media: assets/portfolio-media/personio/new/pa-full-screen-1.mp4

---


## Slide 18
slide_type: big-metric
section: Modest improvement
stat: 20% → 29%
stat_description: CSAT improvement. UX improvements directly drove satisfaction gains. Built trust with leadership through visible, self-shipped impact. NYC office was let go, except our team.


## Slide 19
slide_type: comparison
media: detailed image of CSAT improvements (Look and feel + UX)
section: result
headline: Directly influencing CSAT
media-left: assets/portfolio-media/personio/new/pa-csat-trend-1.jpeg
media-right: assets/portfolio-media/personio/new/pa-csat-detail-1.jpeg
notes: This is despite the Assistant often producing incorrect responses. 
---

## Slide 20
slide_type: media-centered
heading: But agents are the future

media: assets/portfolio-media/personio/new/pa-pedro-1.mp4
media-description: sizzle reel of pedro and pauls prototypes


caption: Leadership had been sold a vision of autonomous agents. 
notes: This was very compelling idea but there was no path there.

---


## Slide 21
slide_type: split

heading: Designing an agentic foundation
subheading: I drove the conversation with Product and Engineering
bullets:
  - Understand the customer stories we'll be solving for
  - Align on an architecture that scales
  - Refine the existing ux (sidebar, context)
  - Feature the existing UI (don't cannibalize)
  - Federating the ai model for other teams to build

media-description: screenshots from my AI Strategy deck
media: assets/portfolio-media/personio/new/pa-agent-strategy.mp4
notes: Even though we gained alignment in person, it was met with resistance as the organization saw departures from key figures

---

## Slide 22
slide_type: split

heading: I'm gonna build my own
subheading: Tried pulling the existing back-end.
bullets:
  - Architecture was too isolated
  - I was dependent upon front and back end devs
  - Realized I was still covering the UI

media-description: Image of a broken build?
media:

---

## Slide 23
slide_type: split

heading: Pivot to PAX
subheading: I prototyped my own Assistant
bullets:
  - Built a Chrome extension using the Side Panel API
  - Understood how this would affect the UI
  - What type of responses I need to design for
  - How much can the Claude SDK do on its own?

media-description: Video of opening the pax
media:

---

## Slide 24
slide_type: split

heading: PAX Performs!
subheading: More capable than our production assistant
bullets:
  - Can answer questions by reading page
  - Can navigate the UI using browser tools
  - Became a "discovery tool" for teams who want to design
  - Quick prototypes validate ideas before engineering investment

media-description: Video of browser controlled
media:


---

## Slide 25
slide_type: media-centered
heading: Shaping the vision
media: screenshot of Alex Grant + Stephan 
caption: Got funding from CPO + CTO for developing our AI Vision

---


## Slide 26
slide_type: split
split_layout: content-left

section: Collaboration
heading: Collaboration with Design Systems
subheading: Worked with Design Systems Team to build out this framework
bullets:
  - Collaborating on the page frame and sidebar interaction
  - Understanding the needs of a dedicated view
  - Put together a workshop in Amsterdam
  - Have broken out the entire anatomy of the project

media-description: Zoltan's video of different directions / Image of anatomy docs
media:

---


## Slide 27
slide_type: simple-list
section: Principles
heading: Assistant Principles
bullets:
  - gets out of your way
  - complements the existing experience
  - features the existing UI
  - does not impair use of the product if AI is off


---

## Slide 28
slide_type: split
split_layout: content-left

section: Projects
heading: Sidebar slot
subheading: Getting the assistant out of the way
bullets:
  - lives alongside your page
  - helps you to improve your existing workflows
  - Adjusts to your preferences

media-description: Opening the sidebar, dragging to adjust
media:


## Slide 29
slide_type: split
split_layout: content-left

section: Projects
heading: Context drawer
subheading: Building a dynamic input that adapts to your intent
bullets:
  - What does the assistant see?
  - What can you do?
  - How does this change

media-description: Page context, Dynamic prompts, @mentions, tools
media:


## Slide 30
slide_type: full-bleed-caption
media: Video: assistant taking over the browser with navigation map
caption: Browser use: the agent navigates the UI, Human in the loop interaction


## Slide 31
slide_type: split
split_layout: content-left

section: Projects
heading: Agent response patterns
bullets:
  - Status indicators — what is the agent doing?
  - Chain of thought — why is it doing it?
  - Actions taken — what did it change?
  - Result — here's your answer

media-description: Status → chain of thought → actions → result
media:


## Slide 32
slide_type: split
split_layout: content-left

section: Projects
heading: Full Screen
subheading: Anticipating AI - first work
bullets:
  - Dedicated space
  - Kickoff workflows
  - Manage them asynchronously

media-description: open page in full screen, starting a promotion workflow
media:

---

## Slide 33
slide_type: full-bleed-caption
media: sizzle reel of Assistant V2 (sidebar, fullscreen, workflows, agents)
Notes
  - Prototyping directly in Production
  - Building model switcher into backend
  - Experimenting with different functionality
  - Creating demos for leadership



---

## Slide 34 - Intro
slide_type: title

h1: Drawbridge
subtitle: How I built a tool to solve for back and forth visual edits for front-end developers
meta_project: Drawbridge
meta_role: Product Designer & Engineer
meta_timeline: June 2025 – Current


---

## Slide 35 - Customer
slide_type: split
split_layout: content-left

section: Customer
heading: I am a vibecoder
subheading: I tell an LLM what to build
bullets:
  - I've been building games, websites, and apps
  - AI accelerates this process
  - But I inevitably have to tweak the app
  - My process was breaking down with front-end tweaks

media-description: Video: Sizzle reel of my projects
media: 

---

## Slide 36 - Problem
slide_type: split

section: Problem
heading: Problem was telling AI what to fix
subheading: Describing what I want to change became taxing
bullets:
  - I created screenshots
  - Annotated them with arrows
  - Described the changes
  - But LLM wouldn't always get it

media-description: Image of annotation
media: assets/portfolio-media/drawbridge/drawbridge-annotation-old-solution.png

---

## Slide 37 - Problem
slide_type: split

section: Problem
heading: Takes a lot of time
subheading: Required lots of back and forth, babysitting changes, and making corrections
bullets:
  - Uploading those changes one by one
  - Waiting for the results
  - Trying again if the problem failed

media-description: video of back-and-forth editing workflow
media: assets/portfolio-media/drawbridge/drawbridge-problem.mp4

---

## Slide 38 - Hypothesis
slide_type: split

section: Process
heading: What if I could leave a comment?
subheading: And make sure Cursor has all context needed
bullets:
  - Leave comments "on" the website
  - Provide element context directly to AI
  - Do this from a plugin so I can keep my existing workflow
  - Manage them like a tasklist

media-description: maybe an image of making a comment in figma
media: assets/portfolio-media/drawbridge/figma-comment.png

---

## Slide 39 - Design
slide_type: split

section: Process
heading: Leave "Figma comments" for Cursor
subheading: A familiar UX pattern with a different recipient
bullets:
  - Open the plugin
  - Click an element
  - Leave a comment
  - Save it to the "moat"
  - Info is saved in the backend

media-description: image of me making a comment using drawbridge
media: assets/portfolio-media/drawbridge/drawbridge.gif

---

## Slide 40 - Design
slide_type: split

section: Process
heading: Draw a rectangle
subheading: Made it possible to capture multiple objects
bullets:
  - Using Chrome's captureVisibleTab
  - Passing a visual reference to the task
  - Mapping the original square back to the UI for reference
  - Migrated to Chrome Side Panel API for clean separation

media-description: drawing a rectangle to leave a comment, cut to showing the highlight on the UI***
media: assets/portfolio-media/drawbridge/drawbridge-rectangle.mp4

---

## Slide 41 - Design
slide_type: split
split_layout: content-left

section: UI/UX & Interaction
heading: UI evolution & Side Panel API
bullets:
  - Light/dark modes, sidebar transitions
  - Hit CSS isolation limits
  - Migrated to Chrome Side Panel API for clean separation

media-description: UI modes + side panel migration
media: 

---

## Slide 42 - Engineering
slide_type: split

section: Process
heading: Context-rich JSON annotations
subheading: Made available by task-driven workflows in markdown
bullets:
  - Connect to a local file (security)
  - Spins up task-list.md, task-list.json and screenshots folder
  - Each comment writes to all three: natural language prompt + JSON structure + screenshot ID
  - Workflow instructs cursor to read the files, and update the code accordingly

media-description: Markdown prompt, JSON prompt, screenshots folder
media:

---

## Slide 43 - Engineering
slide_type: split

section: Process
heading: Inspired workflow
subheading: Developed a method based on AI Dev Tasks
bullets:
  - Workflow instructs cursor to read the task list
  - Reference the JSON + Screenshots folder
  - Update the code accordingly
  - Works through all tasks until complete

media-description: Video of Cursor processing the tasks
media: assets/portfolio-media/drawbridge/drawbridge-cursor.gif

---

## Slide 44 - Result
slide_type: big-metric

section: Result
stat: 10x
stat_description: Faster iteration. One change took 2–3 minutes, now takes 2–3 minutes for 10 changes.

---

## Slide 45 - Result
slide_type: split

section: Result
heading: Featured on AI Labs
subheading: Was featured twice by a favorite YouTube publisher
bullets:
  - A 10 minute deep-dive into the plugin
  - Drove adoption on Github
  - Positive reviews and issues gave new ideas for development
  - Learned how to manage issues, PRs, releases
  - Expanded support for Claude Code

media-description: youtube video from AI Labs
media: https://youtu.be/1cB2iqz_vnM?si=PEQAWdlCoJ80W9Ud

---

## Slide 46 - Result
slide_type: big-metric

section: Result
stat: 620+
stat_description: Stars on Github. First software project released on Github.

---

## Slide 47 - Result
slide_type: split

section: Result
heading: Approved for Chrome Web Store
subheading: First application I've published from start to finish

media-description: Image of the plugin in web store
media: assets/portfolio-media/drawbridge/drawbridge-chrome-store.png

---

## Slide 48
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

## Slide 49
slide_type: title

h1: Thanks
subtitle: Terrence Breschi · bresch.io
