# Design Case Studies — Slide Outline

Terrence Breschi · bresch.io
58 slides · ~45–55 minutes

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
subtitle: Portfolio Review for Vanta
bullets:
- Personio Assistant (UX)
- Drawbridge (Design Tool)
- Personio Agent (Product Strategy)

---


## Slide 2 - Quick about me
slide_type: split

section: About
heading: I like to have fun, learn things, and share often
subheading: Working with AI has enabled me to do more than ever before, and I love to share what I build and learn.
bullets:
- I make games and build apps
- I compose the music and do voice overs
- I share videos and consult friends

media-description: Sizzle reel. Pizza catnip mode, team photos, drawbridge, dotgrid, assistant welcome mat, @mentions
media: assets/portfolio-media/pizzacat/pizzacat-sizzle-1.mp4

---


## Slide 3 - First project I want to share with you is my work on the Personio Assistant
slide_type: title

headline: Personio Assistant
subtitle: How I helped the AI Assistant improve a broken UX 
meta_team: Personio AI Team
meta_role: Product Designer
meta_timeline: May 2025–Current
media: assets/portfolio-media/personio/new/pa-overview-1.mp4

---


## Slide 4 - Personio is an HR Platform. The Assistant is the conversational layer
slide_type: split

section: Product
heading: The Assistant
subheading: The conversational partner to your HR workflows
bullets:
  - Get insights into your company data
  - Deflect support tickets 
  - Produce charts and visualizations
  - Become a strategic partner

media-description: Image of the first version of the assistant (cropped to focus on input)
media: assets/portfolio-media/personio/new/pa-overview-1.mp4

---


## Slide 5 - Our customers are Chief People Officers, HR Admins, and Mangers at European Tech Compaines, and their jobs aren't getting any easier.
slide_type: split
split_layout: content-left

section: Customer
heading: HR Professionals
subheading: HR admins, managers and employees at European tech companies. These folks have high expectations — and real pain.
bullets:
  - Drowning in questions from employees
  - Juggling roles between admin and strategy
  - Excited yet skeptical appetites for AI
  - **We are our customer (ICP)**

media: assets/portfolio-media/personio/new/pa-customer-1.png


---

## Slide 6 - When I joined, the had some problems, from the get-go. Our CSAT was pretty poor. 
slide_type: split

section: Problem
heading: 20% CSAT
subheading: Customers were not satisfied with responses by the Assistant
bullets:
- Data was not reliable
- Incorrect dates and times
- Wrong files provided

media: assets/portfolio-media/personio/new/pa-dogfooding-csat.png

---


## Slide 7 - But the UX needed work. This is just a sample of feedback we got directly from C-Level executives.
slide_type: split

section: Problem
heading: UX has gaps
subheading: Leadership was vocal, but these projects were not on the roadmap
bullets:
  - Missing functionality
  - Neglected details
  - Broken experiences

media-description: images of complaints from dogfooding
media: assets/portfolio-media/personio/new/pa-dogfooding-clevel.png



## Slide 8 - I understand, prototype, get feedback, then refine
slide_type: split

section: My process
heading: I like to build momentum with prototypes. 
subheading: I understand, prototype, share then refine 

media: assets/portfolio-media/personio/new/pa-process-1.mp4
---


---
## Slide 9 - I reviewed the existing designs
slide_type: full-bleed-caption

section: My process
media-description: Screenshot of Figma file with Assistant. Callout problems
media: assets/portfolio-media/personio/new/pa-original-2-gaps.png

notes: Designs were aspirational but one dimensional. UX had not been scoped, or realized yet.

---
## Slide 10 - I look at what's happening in the industry
slide_type: full-bleed-caption

section: My process
media-description: Industry audit, competitive landscape
media: assets/portfolio-media/personio/new/pa-audit-1.png

notes: Understanding what's happening in the industry to inform design decisions.

---



## Slide 11 - Designing a fix
slide_type: split

heading: Input: Designing a fix
subheading: Designed to handle multiple lines of text

media: assets/portfolio-media/personio/new/pa-input-1.png


## Slide 12 - Refining the input states
slide_type: split

heading: Input: Refining states
subheading: Built out the screens in Figma for reference

media: assets/portfolio-media/personio/new/pa-input-2.png



## Slide 13 - I built a prototype of the input
slide_type: split

heading: Input
subheading: Allows for editing of longer queries. 
bullets:
- Increased the size of the submit button
- Refined the default and active states

media: assets/portfolio-media/personio/new/pa-input-2.mp4



## Slide 14 - Improved the initial UX
slide_type: split

heading: Welcome UX
subheading: Initially people felt warned
bullets:
  - Removed warning dialog
  - Added disclaimer under input
  - Designed to show more prompts

media: assets/portfolio-media/personio/new/pa-welcome-1.png


## Slide 15 - Exploring the evolution of it
slide_type: split

heading: Explorations
subheading: How might this experience evolve?
bullets:
  - Removed warning dialog
  - Added disclaimer under input
  - Generated directional prompts

media: assets/portfolio-media/personio/new/pa-welcome-3.png



## Slide 16 - I built a prototype for the welcome mat
slide_type: split
split_layout: content-left

heading: Welcome Mat
subheading: A friendlier approach to collaboration

media-right: assets/portfolio-media/personio/new/pa-overview-1.mp4
- Added greeting
- Designed animation interaction



## Slide 18 - Then I started communicating errors
slide_type: split
split_layout: content-left

heading: Error States
subheading: We heard from customers that they were unable to report error "types"
bullets:
  - Improved descriptions of what went wrong
  - Includes timestamp on hover
  - Copy meta information to share/troubleshoot

media: assets/portfolio-media/personio/new/pa-errors-2.png



## Slide 17 - Then I enhanced the thinking state
slide_type: split

heading: Thinking state
subheading: Communicate what's happening, while creating a foundation for chain of thought

media-right: assets/portfolio-media/personio/new/pa-thinking-2.mp4





## Slide 19 - Designed a stop button
slide_type: split
split_layout: content-left

heading: Stop Button
bullets:
  - Enables user to stop the stream
  - Introduces more control and trust into the system
  - Lays foundation for other input-driven actions

media: assets/portfolio-media/personio/new/pa-stop-response-2.png



## Slide 20 - Created a bigger canvas
slide_type: split
split_layout: content-left

heading: Full screen
subheading: Laying the foundation for AI first workflows
bullets:
  - Enables user to make Assistant full screen
  - Encourages AI-Native usage
  - Lays foundation for dedicated surface 

media-description: Video of transition
media: assets/portfolio-media/personio/new/pa-full-screen-1.mp4



## Slide 21 - I communicate changes directly to our slack channel, and we're starting to see positive results
slide_type: comparison


headline: Proactive communication
subheading: Helps to build positive momentum with our team and stakeholders

media-left: assets/portfolio-media/personio/new/pa-slack-post-1.png
media-right: assets/portfolio-media/personio/new/pa-slack-post-2.png

notes: I made it a practice to communicate updates when 


## Slide 22 - The UX improvements positively impacted our CSAT score
slide_type: comparison

headline: Positive impact to "Ease of Use" and "Look and Feel" 
media-left: assets/portfolio-media/personio/new/pa-csat-trend-1.jpeg
media-right: assets/portfolio-media/personio/new/pa-csat-detail-1.jpeg

notes: This is despite the Assistant often producing incorrect responses. I also want to call out that there's still a lot of work to be done to improve the UX.


## Slide 23 - And we've seen a positive improvement
slide_type: big-metric
section: CSAT Results
stat: 20% → 29%
stat_description: Modest improvement to customer satisfaction



## Slide 24 - I was the first designer to ship to production. I built out docs, and created a video tutorial for other designers to learn. (10+ Desi)
slide_type: split

heading: First designer to ship to production
bullets:
  - Developed a tutorial and documentation for others
  - 10+ Designers shipped to production by end of 2025
  - Eventually my docs were used by the COO to ship code


media: assets/portfolio-media/personio/new/pa-tutorial-1.mp4


---

## Slide 25 - Working this way isn't perfect
slide_type: title-secondary

heading: But my workflow was not perfect
subheading: So I built a tool to improve my process


---

## Slide 26 - Second project is a tool I built for myself to leave comments on websites for Cusor to execute
slide_type: title

h1: Drawbridge
subtitle: How I built a Chrome Extension to streamline visual edits for AI-Driven development
meta_project: Drawbridge (Personal Project)
meta_role: Designer & Engineer
meta_timeline: June 2025 – Current
media: assets/portfolio-media/drawbridge/drawbridge-rectangle.mp4


---

## Slide 27 - I'm my own customer
slide_type: split
split_layout: content-left

section: Customer
heading: I design, build and ship
  - AI accelerates this process
  - But I inevitably have to tweak something
  - My process was breaking down with front-end tweaks

media-description: Video: Sizzle reel of my projects
media: assets/portfolio-media/drawbridge/drawbridge-problem.mp4

---

## Slide 28 - Describing changes is time consuming
slide_type: split

section: Problem
heading: Describing changes is a Problem 
bullets:
  - I created screenshots
  - Annotated them with arrows
  - Described the changes
  - But LLM wouldn't always get it

media-description: Image of annotation
media: assets/portfolio-media/drawbridge/drawbridge-before.mp4

---


## Slide 30 - I had a simple hypothesis that I could comment directly on the web page, gather more context from the dom, and batch my fixes
slide_type: split

section: Hypothesis
heading: What if I could leave a comment?
bullets:
  - Leave comments "on" the website
  - Provide element context directly to AI
  - Do this from a plugin so I can keep my existing workflow
  - Manage them like a tasklist

media-description: maybe an image of making a comment in figma
media: assets/portfolio-media/drawbridge/figma-comment.png

---


## Slide 31 - How I fixed it
slide_type: title-secondary

heading: My solution
subheading: How Drawbridge works


---


## Slide 32 - Ok so how does this work? After you open the plugin you connect to a local repo
slide_type: split

section: Process
heading: Connect to a local file
bullets:
  - Creates a local file that stores your changes
  - Nothing is sent to the cloud
  - Only use AI in your IDE

media: assets/portfolio-media/drawbridge/drawbridge-connect.mp4

---

## Slide 33 - You then select an element on the page you want to change. Leave a comment, and move on. 
slide_type: split

section: Process
heading: Leave comments for Cursor
subheading: A familiar UX pattern for an AI teammate


media-description: image of me making a comment using drawbridge
media: assets/portfolio-media/drawbridge/db-comment-1.mp4

---

## Slide 34 - I also wanted to make it possible to draw a rectangle to capture larger areas that spanned multiple elements

slide_type: split

section: Process
heading: Draw a rectangle
subheading: Capture multiple objects on the page

media-description: drawing a rectangle to leave a comment, cut to showing the highlight on the UI***
media: assets/portfolio-media/drawbridge/db-rectangle-1.mp4

---

## Slide 35 - What's happening under the hood
slide_type: split

section: Process
heading: Engineering the workflow
subheading: Create richer context that require less verbose comments
bullets:
  - Spins up task-list.md, task-list.json and screenshots folder
  - Each comment writes to all three: natural language prompt + JSON structure + screenshot ID
  - Bounds for rectangle are also included

media-description: Markdown prompt, JSON prompt, screenshots folder
media: assets/portfolio-media/drawbridge/db-engineering-1.mp4

---

## Slide 36 - Then you use cursor to run the workflow
slide_type: split

section: Process
heading: Type "bridge" to read edits and makes changes 
subheading: Automated workflow steps through tasks and reads context


media-description: Video of Cursor processing the tasks
media: assets/portfolio-media/drawbridge/db-workflow-1.mp4

---

## Slide 37 - Then you see your changes
slide_type: split

section: Process
heading: Changes are visible in the browswer
bullets:
  - Reduces back and forth
  - Maximizes context window for token usage
  - Helps to remain in flow state

media: assets/portfolio-media/drawbridge/db-changes-1.mp4

---


## Slide 38 - Result
slide_type: big-metric

section: Result
stat: 10x Faster iteration
stat_description: One change took 2–3 minutes. Now 10 changes takes 2–3 minutes.

---

## Slide 39 - Result
slide_type: split

section: Result
heading: Featured on AI Labs
subheading: Was featured twice by a favorite YouTube publisher
bullets:
  - A 10 minute deep-dive into the plugin
  - Drove adoption on Github
  - Positive reviews and issues gave new ideas for development


media-description: youtube video from AI Labs (@agent do not autoplay just show the video embedded)
media: https://youtu.be/1cB2iqz_vnM?si=PEQAWdlCoJ80W9Ud 

---

## Slide 40 - Result
slide_type: split

section: Result
heading: 910 Github Stars
subheading: First starred software project on Github.
bullets:
  - Learned how to manage issues, PRs, releases
  - Expanded support for Claude Code

media: assets/portfolio-media/drawbridge/db-github-1.png 
---

## Slide 41 - Result
slide_type: split

section: Result
heading: Approved for Chrome Web Store
subheading: First application I've published from start to finish

media: assets/portfolio-media/drawbridge/drawbridge-chrome-store.png


---


## Slide 42 - Learnings
slide_type: comparison

section: Learnings
heading: Far from perfect
subheading: Investigating Chrome's side-panel API for better isolation

media-description: Image of the plugin in web store
media-left: assets/portfolio-media/drawbridge/db-v1.jpeg
media-right: assets/portfolio-media/drawbridge/db-v2.jpeg


---


## Slide 43 - How my sideproject inspired learnings
slide_type: title-secondary

heading: Drawbridge inspired solutions at Personio
subheading: Here's how I applied my learnings



---
## Slide 44 - How I'm shaping the vision for Personio Assistant
slide_type: title

headline: Personio Assistant Vision
subtitle: How I'm helping to drive the vision for AI at Personio
meta_team: Personio AI Team
meta_role: Product Designer, Engineer
meta_timeline: October 2025–Current
media: assets/portfolio-media/personio/new/pa-vision-1.mp4

---


## Slide 45 - We still have some major challenges to solve
slide_type: split

heading:  I built my own Assistant
subheading: Simulate an embedded sidebar ui, and "agentic" UX
bullets:
  - Built using Chrome's Side Panel API
  - Understood how this would affect the UI
  - Designed for agent response types
- Learned the Claude Agent SDK

media-description: Video of opening the pax
media: assets/portfolio-media/personio/new/pa-pax-1.mp4



## Slide 46 - My Agent performs
slide_type: split

heading: It's alive!
subheading: More capable than our production assistant
bullets:
  - Answers questions by reading page
  - Navigates the UI with browser tools
  - Quick prototyping tests ideas
  - Became a "discovery tool" for teams


media-description: Video of browser controlled
media: assets/portfolio-media/personio/new/pa-pax-2.mp4


---

## Slide 47 - Shaping the vision
slide_type: media-centered
heading: Shaping the vision
media: assets/portfolio-media/personio/new/pa-pax-funding.png
caption: Got funding from CPO + CTO for developing our AI Vision

---


## Slide 48 - There was no lack of ideas, and "Agents" have been a buzzword sometime
slide_type: media-centered
heading: Agents are the future

media: assets/portfolio-media/personio/new/pa-pedro-1.mp4
media-description: sizzle reel of pedro and pauls prototypes


caption: Leadership had been sold a vision of autonomous agents. 
notes: This was very compelling idea but there was no path there.

---


## Slide 49 - Being opinionated about how the Architecture works
slide_type: split

heading: Designing technical architecture
subheading: I drive the conversation with Product and Engineering
bullets:
  - Understand customer problems
  - Align on an architecture that scales
  - Refine the existing UX
  - Highlight product areas
  - Federating the ai model 

media: assets/portfolio-media/personio/new/pa-agent-strategy.mp4



## Slide 50 - Getting praise from the Engineering Manager
slide_type: testimonial


media: assets/portfolio-media/personio/new/pa-bannon-1.png
quote: "I haven't worked with any Product Designers who will tell a room full of engineers how to build something"
attribution: Alex Bannon, Engineering Director - AI (Ex-Spotify)



## Slide 51 - Driving collaboration with the larger Design Systems + Architecture Team
slide_type: split
split_layout: content-left

section: Collaboration
heading: Collaboration with Design Systems
bullets:
  - Designing page frame and sidebar interaction
  - Creating interaction models with product areas
  - Leading a workshop in Amsterdam next week!

media:  assets/portfolio-media/personio/new/pa-design-spec-1.mp4




## Slide 52
slide_type: split
split_layout: content-left

section: Projects
heading: Sidebar 
subheading: Crafting the intelligent layer
bullets:
  - Lives alongside your page
  - Helps you to improve your existing workflows
  - Adjusts to your preferences

media-description: Opening the sidebar, dragging to adjust
media: assets/portfolio-media/personio/new/pa-v2-sidebar-1.mp4


## Slide 53
slide_type: split
split_layout: content-left

section: Projects
heading: Context drawer
subheading: Imagining a dynamic input that adapts to your intent
bullets:
  - What does the assistant see?
  - What can you do?
  - How might this change?

media-description: Page context, Dynamic prompts, @mentions, tools
media: assets/portfolio-media/personio/new/pa-v2-context-drawer-1.mp4




## Slide 54
slide_type: split
split_layout: content-left

section: Projects
heading: Human in the loop
subheading: Streamlining control for humans over agents
bullets:
  - What does the agent want to do?
  - What does it want permission for?
  - What are your options?

media-description: Status → chain of thought → actions → result
media: assets/portfolio-media/personio/new/pa-v2-human-loop-1.mp4


## Slide 55
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
media: assets/portfolio-media/personio/new/pa-v2-fullscreen-1.mp4

---

## Slide 56
slide_type: split
split_layout: content-left

heading: Promotion workflow
subheading: Considering the steps needed to automate compliance and approval checks

media: assets/portfolio-media/personio/new/pa-wkflw-promotion-1.mp4


## Slide 57
slide_type: split
split_layout: content-left

heading: Parental leave workflow
subheading: Considering the steps needed to automate compliance and approval checks

media: assets/portfolio-media/personio/new/pa-wkflw-parental-1.mp4






## Slide 58
slide_type: simple-list

section: Results
heading: Building momentum
- Alignment with leadership on the vision
- Offsite in Amsterdam next week for workshop 
- Requests from designers to use PAX 


---

## Slide 59
slide_type: title

heading: Thanks for your time!
subtitle: Terrence Breschi · 2026
