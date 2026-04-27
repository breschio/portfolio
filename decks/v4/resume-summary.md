# Resume Summary — Terrence Breschi

Extracted from the Design Case Studies deck (v4). Use this as source material when updating your resume.

---

## Case Study 1: Personio Assistant (UX)

**Company:** Personio · AI Team
**Role:** Product Designer
**Timeline:** May 2025 – Present

### Context

The Personio Assistant is a conversational AI partner for HR workflows — helping users get insights into company data, deflect support tickets, produce charts and visualizations, and become a strategic partner. The customer base is HR admins, managers, and employees at European tech companies.

### Problem

- Customer satisfaction (CSAT) was at **20%** — customers were dissatisfied with Assistant responses
- Data was unreliable: incorrect dates/times, wrong files provided
- UX had significant gaps: missing functionality, neglected details, broken experiences
- Leadership was vocal about issues, but fixes were not on the roadmap

### What I Did

- Conducted an industry audit / competitive landscape analysis
- Followed a process of understand → prototype → share → refine
- Designed and iterated on key UX improvements:
  - **Input redesign** — Multi-line text input allowing editing of longer queries, with refined default and active states, larger submit button
  - **Welcome experience** — Replaced warning dialog with a friendlier greeting, added disclaimer under input, designed animated interaction, generated directional prompts
  - **Thinking state** — Communicated system activity while laying the foundation for chain-of-thought UX
  - **Error states** — Improved error descriptions, added timestamps on hover, enabled copying meta information for troubleshooting
  - **Stop button** — Enabled users to stop the stream, introducing more control and trust
  - **Full screen mode** — Laid the foundation for AI-first workflows and a dedicated surface
- Proactively communicated design progress via Slack to build momentum with stakeholders

### Results

- CSAT improved from **20% → 29%** with positive impact to "Ease of Use" and "Look and Feel" scores
- Became the **first designer at Personio to ship code to production**
- Developed tutorials and documentation that enabled **10+ designers** to ship to production by end of 2025
- Documentation was eventually used by the **COO to ship code**

---

## Case Study 2: Drawbridge (Design Tool)

**Project:** Drawbridge — Personal / Open Source
**Role:** Designer & Engineer
**Timeline:** June 2025 – Present

### Context

A Chrome Extension built to streamline visual edits for AI-driven development. Born out of friction in the designer-who-codes workflow — specifically the pain of communicating front-end tweaks to LLMs.

### Problem

- AI accelerates the design-to-code process, but front-end tweaks still break the workflow
- Describing visual changes to LLMs was inefficient: creating screenshots, annotating with arrows, writing descriptions — and the LLM still wouldn't always get it

### What I Built

- A Chrome Extension that lets you leave "Figma-style comments" directly on a live website, providing structured context to AI coding tools (Cursor, Claude Code)
- **Core workflow:**
  - Connect to a local file (nothing sent to the cloud)
  - Click or draw a rectangle to select elements on the page
  - Leave comments with context (CSS selector, bounding rect, screenshot) automatically captured
  - Type "bridge" in the IDE to trigger an automated workflow that reads edits and applies changes
  - Changes are visible in the browser in real-time
- **Technical architecture:** Each comment writes to three outputs — a markdown task list, a JSON structure, and a screenshot, giving the AI rich context that requires less verbose instructions

### Results

- **10x faster iteration** — previously one change took 2–3 minutes; now 10 changes take 2–3 minutes
- **910 GitHub Stars** — first starred software project on GitHub
- **Featured twice on AI Labs** (YouTube) with a 10-minute deep-dive that drove adoption
- **Published on the Chrome Web Store** — first application shipped from start to finish
- Learned to manage issues, PRs, releases; expanded support for Claude Code
- Iterating on improvements: investigating Chrome's Side Panel API for better isolation

---

## Case Study 3: Personio Assistant Vision (Product Strategy)

**Company:** Personio · AI Team
**Role:** Product Designer & Engineer
**Timeline:** October 2025 – Present

### Context

After the UX improvements and learnings from building Drawbridge, applied those insights to drive the broader AI vision at Personio.

### What I Did

- **Built a functional AI assistant prototype (PAX)** using Chrome's Side Panel API and the Claude Agent SDK
  - Simulated an embedded sidebar UI with agentic UX
  - More capable than the production assistant: reads pages, navigates UI with browser tools
  - Became a "discovery tool" used by multiple teams
- **Secured funding from CPO + CTO** for developing the AI vision
- **Designed technical architecture** in collaboration with Product and Engineering:
  - Customer problem alignment
  - Scalable architecture design
  - UX refinement across product areas
  - Federated AI model strategy
- **Drove vision design across key product areas:**
  - **Sidebar** — An intelligent layer alongside the page that improves existing workflows and adapts to user preferences
  - **Context drawer** — A dynamic input that adapts to user intent, surfacing what the assistant sees and can do
  - **Human-in-the-loop** — Streamlined control for humans over agents: permissions, options, and transparency
  - **Full screen mode** — Dedicated space for AI-first work, async workflow management
  - **Agentic workflows** — Designed promotion and parental leave workflows considering compliance and approval automation
- **Collaborated with the Design Systems team** on page frame and sidebar interaction patterns
- **Leading a workshop in Amsterdam** on interaction models with product areas

### Results

- Leadership alignment on the AI vision
- Amsterdam offsite workshop for cross-team collaboration
- PAX adoption — requests from other designers to use the prototype
- Testimonial from Engineering Director (ex-Spotify): *"I haven't worked with any Product Designers who will tell a room full of engineers how to build something"*

---

## Key Themes Across All Work

- **Builder mindset** — Designs, prototypes, codes, and ships end-to-end
- **AI-native workflow** — Uses AI tools extensively and builds tools to improve AI-assisted development
- **Proactive leadership** — Identifies gaps, builds solutions without waiting for roadmap prioritization
- **Cross-functional influence** — Drives conversations with engineering, product, and executive leadership
- **Measurable impact** — Tracks outcomes through CSAT, adoption metrics, and stakeholder alignment
