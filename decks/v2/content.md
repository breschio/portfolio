# Deck Content

Text-based version of all presentation content.

---

## 1. Cover

# Terrence Breschi

Portfolio review for **Baseten**

### Navigation

1. **About** — Background and what I'm looking for
2. **Assistant** — Elevating the UX at Personio
3. **Drawbridge** — Visual task annotation for AI coding agents
4. **PAX** — Building an agentic assistant prototype

---

## 2. About

---

### Slide 1: I Make Things

**I make things. I move fast, learn things, and share.**

*(photos: t-shirt companies, finance tools, fundraising platforms, news feeds, jewelry ads, AI assistants, dev tools, games, paintings, drum performances)*

---

### Slide 2: Where I Am

I'm the Principal Product Designer for AI at Personio — an HR platform for European tech companies.

I design, build, and ship code. And I teach others how to do it.

---

### Slide 3: What I'm Looking For

**AI-native teams who move fast and learn things.**

---

## 3. Personio Assistant

# Personio Assistant

Overview of several enhancements I shipped directly to production—becoming the first designer at Personio to commit code.

| Role | Timeline | Tools |
|------|----------|-------|
| Principal Product Designer | May – December 2025 | Figma, Cursor |

---

### The Problem

**Beautiful Figma files, unrealized in production.**

I inherited polished designs, but production told a different story. Complex implementations were compromised or abandoned. Basic UX went unfixed while the team chased higher-fidelity craft.

- Single-line input truncated questions
- Responses streamed bottom-to-top
- No way to stop, no citations, generic errors
- Assistant described actions but couldn't navigate to them

![The Assistant interface with various UX issues](../assets/portfolio-media/personio/personio-assistant-1-gaps.png)

---

### The Approach

**"You could be the first designer at Personio to commit code."**

I bit. My FE engineer walked me through PRs. Iterating in Cursor was so fast I felt guilty asking him for help.

I targeted fixes that were visible to leadership — high impact, low risk.

![First production commit screenshot](../assets/portfolio-media/personio/personio-assistant-first-commit.jpeg)

---

### Key Features Shipped

#### Flexible Input

**Problem:** Single-line field hid text as users typed.

**Solution:** Dynamic field that grows to ~4 lines before truncating.

![VIDEO: Flexible input animation](../assets/portfolio-media/personio/personio-assistant-flexible-input.mov)

---

#### Welcome Mat

**Problem:** Static admin prompts didn't match employee needs.

**Solution:** Relevant starter prompts that demonstrate capabilities.

![Welcome mat before and after](../assets/portfolio-media/personio/personio-assistant-8-welcome-mat.png)

---

#### Navigation Button

**Problem:** Assistant described actions but left users to navigate manually.

**Solution:** "Take action" button navigates directly to the relevant screen.

![Navigation button feature](../assets/portfolio-media/personio/personio-assistant-15-response-design.png)

---

#### Also Shipped

- **Flow direction** — Top-to-bottom streaming + scroll button
- **Citations** — Inline source references for trust
- **Stop button** — Interrupt anytime
- **Error handling** — Descriptive messages + timestamps + copy function

---

### Impact

**CSAT: 19% → 22%** (+16% relative improvement)

Modest — model accuracy didn't change. But it proved: **UX was no longer the bottleneck.**

![CSAT metric breakdown](../assets/portfolio-media/personio/personio-assistant-csat-detail.jpeg)

---

#### Organizational Impact

- **5-10 designers now ship code** — I'm no longer the only one
- **Developed a tutorial** — Documentation for others to follow
- **Gave talk to design org** — Presented to the entire organization

![Tutorial documentation](../assets/portfolio-media/personio/personio-web-tutorial-harbor.jpeg)

---

### Reflection

These UX wins bought time. They proved I could ship.

But they also taught me where the real problems lived — the model couldn't see the page.

**Next: Drawbridge** — Solving my own problems with development tools

---

## 4. Drawbridge

# Drawbridge

Visual annotations for AI-assisted coding — making UI iteration 10x faster.

| Role | Timeline | Stack | Github |
|------|----------|-------|--------|
| Designer, Engineer | Jun–Dec 2025 | Chrome Extension, JS | breschio/drawbridge |

---

### The Problem

**2-3 minutes per UI tweak**

Describing visual changes to AI took forever. Identify the element, explain what to change, wait for response, check result, repeat.

Annotated screenshots helped accuracy, but added overhead. And the AI was still guessing which element you meant.

![VIDEO: The problem demonstration](../assets/portfolio-media/drawbridge/drawbridge-problem.mp4)

---

### The Insight

> "The AI needed **structural** context, not just **visual** context."

A screenshot shows you a button. The DOM tells you it's `div.hero-section > button.cta-primary`. The AI needs both.

---

### Designing the Workflow

I discovered [AI Dev Tasks](https://github.com/snarktank/ai-dev-tasks) — a methodology for structuring AI-assisted development. Core idea: break work into discrete tasks with clear checkpoints.

This forced me to understand the agent loop:
- **Annotations = micro-tasks** — each one is a discrete, verifiable unit
- **The moat = task queue** — structured list with status tracking
- **`bridge` command = step-by-step execution** — with approval modes
- **Status lifecycle** (to do → doing → done) — mirrors task completion

Understanding this pattern empowered me to imagine more complex functionality.

---

### The Solution: Annotate → Queue → Execute

1. **Select DOM elements** directly in the browser (press 'C')
2. **Draw rectangles** for non-DOM annotations (press 'R')
3. **Leave comments** describing the change
4. **Queue into a "moat"** that syncs to your project
5. **Run `bridge`** to process the entire queue

![Drawbridge in action](../assets/portfolio-media/drawbridge/drawbridge-comment-2.gif)

---

### UI Iterations

**Problem:** My first version covered the page.

I built three docked layouts to accommodate different page structures:
- **Bottom dock** — default, works for most pages
- **Left dock** — for right-heavy layouts
- **Right dock** — for left-heavy layouts

![PLACEHOLDER: UI dock variations]

---

### The Code Injection Problem

**Problem:** My CSS wasn't protected. Styles from host pages bled into the plugin, breaking the UI unpredictably.

**Failed attempts:** Aggressive class naming, `!important` overrides, inline styles. All brittle.

**Discovery:** Chrome's Sidepanel API. The sidepanel lives *next to* the page, completely isolated from the page's codebase. No style conflicts. No DOM interference.

This insight became the foundation for my next project.

---

### Technical Decisions

- **Native screenshot API** — Chrome's `captureVisibleTab` over html2canvas (faster, more reliable)
- **Freeform rectangles** — For annotations that don't map to a single element
- **Dependency detection** — Same-element annotations process in order

![VIDEO: Rectangle annotation](../assets/portfolio-media/drawbridge/drawbridge-rectangle.mp4)

---

### Results

**10x faster iteration.** What took 2-3 minutes per change now takes 2-3 minutes for 10 changes.

| GitHub stars | Forks | Releases shipped |
|--------------|-------|------------------|
| 573 | 38 | 5 |

---

### Featured: AI LABS Tutorial

10-minute deep dive on a 107K-subscriber channel.

| Views | Likes |
|-------|-------|
| 17K | 561 |

![YOUTUBE: Drawbridge Demo - AI Labs](https://www.youtube.com/embed/1cB2iqz_vnM)

---

### What I Learned

- **"Go deeper."** Visual annotation wasn't enough — you need the image and the selector.
- **Build for yourself first.** I knew the problem because I lived it daily.
- **Open source until proven valuable.** Stars and organic coverage validate the problem exists.
- **Sidepanel API unlocks isolation.** This became the foundation for PAX.

---

## 5. Personio Agent (PAX)

# Personio Agent

A Chrome extension prototype that demonstrated capabilities our production assistant couldn't match — built in two afternoons.

| Role | Timeline | Build Time | Tools |
|------|----------|------------|-------|
| Principal Product Designer | Dec 2024 – Present | ~8 hours | Cursor, Claude Opus 4.5, Sonnet 4.5 |

---

### The Problem

UX fixes moved CSAT from 19% → 22%. But answer accuracy stayed flat.

The assistant couldn't see the page. Users asked questions about content right in front of them, and it couldn't answer.

> "The problem wasn't the brain. **It was the eyes.**"

---

### The Failed Attempt

I tried to swap in GPT with AgentKit — rip out the API, replace the backend.

Got it partially working. Then hit a wall: the assistant was **architecturally isolated** from the app. It couldn't access page content. Confirmed with my FE engineer.

I stepped away. No clear path forward.

---

### The Insight

While working on Drawbridge, I discovered Chrome's Sidepanel API — a way to isolate code from the page while still accessing it.

> "What if I built the assistant as a **Chrome extension** instead of fighting to embed it in the app?"

---

### The Hypothesis

1. **Context is foundational** — The assistant can't be agentic without knowing where it is and what's on the page.
2. **Sidepanel solves obstruction** — Sits alongside content, not over it.
3. **Independence** — Build and prove the concept without waiting for engineering.

---

### Two-Day Build

December 16-17, 2025. ~8 hours total.

**Day 1:** Chrome extension scaffolding, page context capture, Claude API connection.

**Day 2:** Structured context system, navigation map, initial workflows.

It worked almost immediately. Page context reading succeeded on first attempt.

---

### Iteration

**Navigation map:** Before the map, constant 404 errors. Built a JSON map of routes and UI elements in 30 minutes. After: agent navigated the entire app reliably.

**Infinite looping:** Agent re-ran all previous tasks before completing new ones. Required prompt engineering to bifurcate tasks and respond only to latest intent.

---

### Key Decisions

#### Why a Chrome Extension?

- **Page access:** activeTab permission gives full visibility
- **No obstruction:** Sidepanel sits alongside, not over
- **Bypass complexity:** Test AI in isolation from backend
- **Independence:** Build and prove concept without waiting

---

#### Why Make It Configurable?

API key, model selection, system prompt — all adjustable. Enables other teams to test their own hypotheses. PAX becomes a proving ground, not a bottleneck.

---

### The Demo

Quarterly Planning Session. Audience: Director of PM, Design Manager, Director of Engineering, Staff Engineers, PMs.

1. Question production assistant fails → **PAX answers correctly**
2. PAX navigating UI **autonomously**
3. "Request time off" workflow with agent **taking action**

---

### The Reaction

- "**Best demo they've seen**"
- "More impressive than what the team has done with thousands of hours"
- PM: "**Ship it**"

**Enthusiasm, not allocation.** The real work was translating excitement into budget, roadmap, and buy-in.

---

### Translating Enthusiasm into Action

1. **Budget proposals** — Wrote proposals to move off personal API key
2. **Official repo** — Created repo in company GitHub
3. **Pitched to CPO** — Positioned PAX as a tool for AI strategy

Result: Internal support and funding secured.

---

### Influencing the C-Suite

I positioned PAX as a tool for developing Personio's AI vision for the next 2-3 years.

- **CPO engagement** — Got the work in front of the CPO, who brought in the CTO
- **Strategic framing** — Not "my side project" but "a prototype for our AI strategy"
- **Budget secured** — Moved from personal API key to company resources

![PLACEHOLDER: CPO Slack thread screenshot]

---

### The Payslip Moment

**"Find my latest payslip"** — the task our assistant always fails. CEO and COO regularly complained about it.

Leadership retreat, January 2025. I asked PAX to request a day off. It navigated to the right page, opened the modal, selected dates, submitted.

**It worked end-to-end.** A task the production assistant still can't do.

Audible celebration. Then shared screenshots with PM, Engineering Director, and Design Manager.

![PLACEHOLDER: PAX successfully completing task]

---

### What I Learned

1. **The problem was structural, not technical** — Spent 1.5 weeks improving the brain before realizing it had no eyes.
2. **Side projects create leverage** — Drawbridge taught me the Sidepanel API. That became PAX.
3. **Building real beats building fake** — Previous vision work was scripted on a fake stack. I built something functional. That changed the conversation.

---

### What's Next

1. **Company API for Claude** — Replace personal API key to share with others
2. **Evaluation framework** — PAX vs. production assistant on real use cases
3. **Federated model** — Share PAX with other teams, teach them to test

---

> Thank you
