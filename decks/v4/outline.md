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
media: Placeholder caption shown inside the media as a guide for me
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
headline: I move fast, learn things, and ship code. 
caption: Working with AI has amplified my curiosity, and enabled me to do more than ever before.
media: Sizzle reel. Pizza catnip mode, team photos,  drawbridge, dotgrid, assistant welcome mat, @mentions

---



## Slide 3 - Personio Assistant: Cover
slide_type: title

headline: Personio Assistant
subtitle: How I helped evolve the AI Assistant from a broken UX to a full-blown agentic strategy
meta_project: Personio AI Team
meta_role: Product Designer
meta_timeline: May 2025–Current



---

## Slide 4 - Personio Assistant: What it is
slide_type: split


headline: "The Intelligent HR Platform"
caption: We aim to leverage AI to help our customers gain efficiencies and lower costs.
media: Personio assistant video from website 
note: This was attractive and hand-wavy at the same time

---


## Slide 5 - Our Customers
slide_type: split
split_layout: content-left

section: Customer Problems
heading: Overextended HR professionals 
subtitle: HR admins, managers and employees at German tech companies. These folks had high expectations — and real pain.

bullets:
  - Drowning in questions from employees
  - Managing employee job changes
  - Juggling roles between admin and strategy
  - Excited yet skeptical appetites for AI 
media: Stock image of a Personio persona (unhappy but professional, AI-gen)
notes: The spread of AI meant we had to build something that worked for everyone — and that set clear expectations early.

---

## Slide 6 - Our Solution
slide_type: split

section: Solution
headline: The Assistant
subtitle: An AI assistant built to provide insights while deflecting common questions
key points:
1. Deflect support tickets from employees
2. Understand your company data
3. Produce insights and visualizations
4. Empower you to become a strategic partner
media: Image of the first version of the assistant (cropped to focus on input)

---


## Slide 7 - We have some problems
slide_type: split

headline: CSAT was at 16%
subtitle: We have some fundamental issues surfaced in Dogfooding
key points:

1. Issues with data accuracy impact trust
2. Issues with UX impact usabilty and look and feel
3. These projects were not on the roadmap

media: images of complaints from dogfooding


---

## Slide 8 - Problems I identified
slide_type: full-bleed-caption

caption: Original Figma Files 
media: Screnshot of figma file with  Assistant. Callout problems
notes: Designs were aspirational but one dimensional. UX had not been scoped, or realized yet.

---

## Slide 9
slide_type: split
media: video of me prototoypeing 

heading: How I fix problems
subtitle: I like to prototype on production
bullets:
- move fast with smaller scope
- Build functionality iteratively
  - Test the UX and share 
  - Identify issues I wouldn't catch otherwise
  - Then refine with Design Systems


--- 

## Slide 10
slide_type: title-seconmdary
heading: Projects


---

## Slide 11
slide_type: split
split_layout: content-left
heading: Welcome Mat
Media: Before (Image) / AFTER (video)
bullets:
- removed warning dialog 
- added greeting
- generated directional prompts
- designed animation interaction
notes: collaborated with eng on prompts the assistant could help direct employee queries could perform reliably well.


## Slide 12
slide_type: split
split_layout: content-left
media: Broken input (Image) / AFTER (video)
heading: Refined Input
bullets:
- Preserves initial height
- adapts to three lines of text
- makes room for future tools
- persistent disclaimer below
notes: collaborated with eng on prompts the assistant could help direct employee queries could perform reliably well.


## Slide 13
slide_type: split
split_layout: content-left
media: Broken input (Image) / AFTER (video)
heading: Thinking state
bullets:
- Incoporates branding
- Smooths a sometimes laggy loading experience
- Creates foundation for chain-of-thought

## Slide 14
slide_type: split
split_layout: content-left
media: Error states · Timestamps · Copy/paste  (Figma)
heading: Error States
bullets:
- Improved descriptions of what went wrong
- Includes timestamp on hover
- Copy meta information to share/troubleshoot


## Slide 15
slide_type: split
split_layout: content-left
heading: Stop Button
media: Before (Image) / AFTER (video)
bullets:
- Enables user to stop the stream
- Intoduces more control and trust into the system
- Lays foundation for other input-driven actions


## Slide 16
slide_type: split
split_layout: content-left
heading: Full screen
media: Video of transition
bullets:
- Enables user to make Assistant full screen
- Encourages AI-Native useage
- Lays foundation for dedicated surface

---

## Slide 17 - Encouraged to ship
slide_type: split
media: sizzle reel (comments from Harbor)
headline: Designers must ship code
subtitle: Encoruaged by leaderhip to use AI driven design processes

1. First designer to ship code to production
2. Developed a tutotrial and documentation for others
3. Eventually used by the COO to ship his own code

media: video from my tutorial showing designers how to ship to production

---

## Slide 18
slide_type: big-metric
section: IMPROVEMENT
stat: 16% → 27%
stat_description: CSAT improvement. UX improvements directly drove satisfaction gains. Built trust with leadership through visible, self-shipped impact. NYC office was let go, except our team.


## Slide 19
slide_type: comparison
media: detailed image of CSAT improvements (Look and feel + UX)
section: result
headline: Directly influencing CSAT
notes: This is despite the Assistnat often producing incorrect responses. 
---

## Slide 20
slide_type: media-centered
heading: But agents are the future
media: sizzle reel of pedro and pauls prototypes
caption: Leadership had been sold a vision of autonomous agents. 
notes: This was very compelling idea but there was no path there.

---


## Slide 21
slide_type: split
media: screenshots from my AI Strategy deck
heading: Designing an agentic foundation
subheading: I drove the conversation with Product and Engineering
  - Understand the customer stories we'll be solving for
  - Align on an architecture that scales
  - Refine the existing ux (sidebar, context)
  - Feature the existing UI (don't cannibalize)
  - Federating the ai model for other teams to build
 
Notes: Eventhough we gained alignment in person, it was met with resistence as the organization saw departures from key figures

---

## Slide 22
slide_type: split
media: Image of a broken build?
heading: I'm gonna build my own
subheading: Tried pulling the existing back-end. 
bullets:
  - Architecture was too isolated
  - I was depenent upon front and back end devs
  - Realized i was still covering the UI

---

## Slide 23
slide_type: split
media: Video of opening the pax
heading: Pivot to PAX 
subheading: I prototyped my own Assistant
bullets:
  - Built a Chrome extension using the Side Panel API
  - Understood How this would affect the UI
  - What type of responses I need to design for
  - How much can the Claude SDK do on its own?

---

## Slide 24
slide_type: split
media: Video of browser controled
heading: PAX Performs!
subheading: More capable that our production assistant 
bullets:
  - Can answer questions by reading page
  - Can navigate the UI using browser tools
  - Became a "discovery tool" for teams who want to design
  - Quick prototypes validate ideas before engineering investment


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
media: Zoltan's video of different directions / Image of anatomy docs
section: Collaboration
heading: Collaboration with Design Systems
subheading: Worked with Design Systems Team to build out this framework
bullets:
  - Collaborating on the page frame and sidebar interaction
  - Understanding the needs of a dedicated view
  - Put together a workshop in Amsterdam
  - Have broken out the entire anatomy of the project

---

PRINCIPLES


## Slide 27
slide_type: simple-list
section: Principles
heading: Assistant Principles
bullets:
  - gets out of your way
  - compliments the existing experience
  - features the existing UI
  - does not impair use of the product if AI is off


---

## Slide 28
slide_type: split
split_layout: content-left
media: Opening the sidebar, dragging to adjust
section: Projects
heading: Sidebar slot
subheading: Getting the assistant out of the way
bullets:
  - lives alongside your page
  - helps you to improve your existing workflows
  - Adjusts to your preferences



## Slide 29
slide_type: split
split_layout: content-left
media: Page context, Dynamic prompts, @mentions, tools 
section: Projects
heading: Context drawer
subheading: Building a dynamic input that adapts to your intent
bullets:
  - What does the assistant see?
  - What can you do?
  - How does this change


## Slide 30
slide_type: full-bleed-caption
media: Video: assistant taking over the browser with navigation map
caption: Browser use: the agent navigates the UI, Human in the loop interaction


## Slide 31
slide_type: split
split_layout: content-left
media: Status → chain of thought → actions → result
section: Projects
heading: Agent response patterns
bullets:
  - Status indicators — what is the agent doing?
  - Chain of thought — why is it doing it?
  - Actions taken — what did it change?
  - Result — here's your answer


## Slide 32
slide_type: split
split_layout: content-left
media: open page in full screen, starting a promotion workflow
section: Projects
heading: Full Screen
subheading: Anticipating AI - first work
bullets:
  - Dedidcated space
  - Kickoff workflows
  - Manage them asyncronously

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
media: Video: Sizzle reel of my projects
section: Customer
heading: I am a vibecoder
subheading: I tell an LLM what to build
bullets:
  - I've been building games, websites, and apps
  - AI accelerates this process
  - But I inevitably have to tweak the app
  - My process was breaking down with front-end tweaks

---

## Slide 36 - Problem
slide_type: split
media: Image of annotation
section: Problem
heading: Problem was telling AI what to fix
subheading: Describing what I want to change became taxing
bullets:
  - I created screenshots
  - Annotated them with arrows
  - Described the changes
  - But LLM wouldn't always get it

---

## Slide 37 - Problem
slide_type: split
media: Video: back-and-forth editing workflow
section: Problem
heading: Takes a lot of time
subheading: Required lots of back and forth, babysitting changes, and making corrections
bullets:
  - Uploading those changes one by one
  - Waiting for the results
  - Trying again if the problem failed

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

---

## Slide 40 - Design
slide_type: split
media: drawing a rectangle to leave a comment, showing the highlight on the UI
section: Process
heading: Draw a rectangle
subheading: Made it possible to capture multiple objects
bullets:
  - Using Chrome's captureVisibleTab
  - Passing a visual reference to the task
  - Mapping the original square back to the UI for reference
  - Migrated to Chrome Side Panel API for clean separation

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
media: UI modes + side panel migration

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
media: Markdown prompt, JSON prompt, screenshots folder

---

## Slide 43 - Engineering
slide_type: split
media: Video of Cursor processing the tasks
section: Process
heading: Inspired workflow
subheading: Developed a method based on AI Dev Tasks
bullets:
  - Workflow instructs cursor to read the task list
  - Reference the JSON + Screenshots folder
  - Update the code accordingly
  - Works through all tasks until complete

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

---

## Slide 46 - Result
slide_type: big-metric

section: Result
stat: 620+
stat_description: Stars on Github. First software project released on Github.

---

## Slide 47 - Result
slide_type: split
media: Image of the plugin in web store
section: Result
headline: Approved for Chrome Web Store
subheadline: First application I've published from start to finish

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
