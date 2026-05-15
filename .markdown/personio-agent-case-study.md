# Personio Agent Experience (PAX)

## Summary

In two afternoons, I built a Chrome extension prototype that demonstrated capabilities our production AI assistant couldn't match—and last week, it successfully completed a task end-to-end that the production assistant still can't do.

---

## The Problem

Personio's AI Assistant had a 19% CSAT score. The CEO and COO were sending screenshots of wrong answers directly to the team. After a layoff that eliminated 80% of the US workforce, the AI team was explicitly spared because "AI is a priority." The pressure to deliver was existential.

**[SCREENSHOT: CEO/COO Slack messages showing frustration with assistant reliability]**

The assistant's failures were architectural:

**No page context.** Users would ask questions about content visible right in front of them, and the assistant couldn't answer. It literally couldn't see the page.

**[SCREENSHOT: Production assistant failing on page content question — answer visible on screen but assistant can't see it]**

**No agentic capabilities.** The assistant could answer questions (poorly), but couldn't take actions. Competitors were shipping agents that could actually do things.

**Complex, undocumented backend.** The system used Claude through Bedrock, ML models for routing, and Bedrock Knowledge bases. No one could explain how it all worked together.

I had spent months making tactical UX improvements—flexible input fields, better error states, source citations. They helped the wrapper, but the engine was still broken.

---

## The Failed Approach

My first instinct was to fix the backend.

I spent a week and a half trying to replace the existing system with OpenAI's AgentKit. The theory: swap in a better orchestration layer, use AgentKit's visual UI for task management, create a model other teams could adopt.

I got it partially working. I replaced the backend call. But I hit a wall.

The assistant was architecturally isolated from the app. It couldn't see page content. It couldn't access internal APIs (security restrictions). I confirmed this with our front-end engineer—the assistant wasn't incorporated into the web app in a way that would let it observe anything.

**The realization:** The problem wasn't the brain. It was the eyes. Swapping in a smarter model wouldn't help if the model couldn't see anything.

I stepped away from the work. I didn't have a solution yet.

---

## The Insight

For the next few weeks, I worked on Drawbridge, my open-source tool for bridging visual feedback to AI coding assistants.

Drawbridge had its own problems:

- **UI obstruction.** My annotation panels kept covering the content I was trying to work with—the same problem Personio's floating assistant had.
- **Code injection fragility.** Injecting code into pages was brittle. Styles conflicted. Elements interfered with each other. The code became verbose trying to avoid conflicts.

While researching solutions, I discovered Chrome's Sidepanel API.

The sidepanel lives *next to* the page, not over it. It uses native browser capabilities. It can access the active tab. And critically—it's completely isolated from the page's codebase.

The connection clicked: What if I built the Personio assistant as a Chrome extension instead of fighting to embed it in the app?

A Chrome extension could:
- See page content through the activeTab permission
- Sit alongside the UI without obstruction
- Bypass the undocumented backend entirely
- Let me test AI capabilities in isolation

I biased toward action and started building.

---

## The Two-Afternoon Build

I built PAX on December 16-17, 2024. About four hours each day.

**Day 1:** Chrome extension scaffolding—sidepanel, service worker, content scripts. Basic page context capture. Claude API connection.

**Day 2:** Structured context system, navigation map, initial agentic workflows.

I used Cursor with Claude Opus 4.5 for architecture decisions and Sonnet 4.5 for front-end implementation.

**[DIAGRAM: PAX architecture — sidepanel, service worker, content scripts, Claude API]**

---

## What I Built

### Sidepanel Interface

PAX uses Chrome's Sidepanel API. The chat interface sits alongside the page instead of floating over it. Users can see their content while talking to the assistant.

**[SCREENSHOT: PAX sidepanel interface — assistant alongside page content, nothing obstructed]**

### Page Context Awareness

PAX captures structured page context: title, meta description, headings, main content, selected text, modal content (up to 5,000 characters). This context is embedded in the system prompt and refreshed before each message.

When users ask about something visible on the page, PAX can actually answer—because it can see what they're looking at.

**[VIDEO: Side-by-side comparison — same question asked to production assistant (fails) vs. PAX (succeeds)]**

**[DIAGRAM: Context capture and refresh flow — what gets captured, when, how it's sent to Claude]**

### Autonomous Navigation

PAX can navigate Personio's interface. I built a custom navigation map (JSON structure defining routes and UI elements) that tells the agent where things are and how to reach them.

**[SCREENSHOT: Navigation map structure — JSON defining routes and UI elements]**

**[VIDEO: PAX navigating the UI autonomously — user asks to go somewhere, PAX finds and clicks the right elements]**

### Semi-Agentic Workflows

PAX can execute multi-step tasks. The "Request time off" workflow:

1. User asks to request time off
2. PAX navigates to Team and Calendar
3. Clicks "Request time off"
4. Selects time-off type
5. Selects dates
6. Completes submission

**[VIDEO: Full "Request time off" workflow — from user request through successful submission]**

### Context Drawer

A drawer above the input shows the current page context and available actions. Two types:

- **Instant Actions:** One tap, agent executes. No additional input needed.
- **Prompt Starters:** Templates the user completes before sending.

**[SCREENSHOT: Context drawer collapsed — showing current page title]**

**[SCREENSHOT: Context drawer expanded — showing available instant actions and prompt starters]**

This drawer is the foundation for a federated model where product teams can define what PAX does on their surfaces—distributing AI capability development across the organization.

---

## The Demo

My PM had seen an early video and encouraged me to demo at a quarterly planning session.

**The audience:** Director of Product Management, Product Design Manager, Director of Engineering, Staff Engineers, Product Managers—essentially the leadership and senior ICs for my product area.

**What I showed:**

1. A question the production assistant fails—PAX answers correctly because it can see the page
2. PAX navigating the UI autonomously
3. The "Request time off" workflow, with PAX taking action on the UI

**The reaction:**

- "Best demo they've seen"
- "More impressive than what the team has done with thousands of hours"
- PM's response: "Ship it"

A fellow designer Slacked me afterward: "This is a no-brainer. What's stopping us from building this now?"

**[SCREENSHOT: Slack reactions after demo — "ship it" and "no-brainer" messages]**

---

## What "Ship It" Actually Meant

The demo generated enthusiasm, not a green light.

The Director of Product Management was new enough that she wasn't going to push for dramatic changes. My PM was supportive but didn't control resourcing. "Ship it" was a show of support, not an allocation of budget.

**What I did next:**

I translated enthusiasm into concrete steps:

- Wrote budget proposals to get PAX off my personal API key
- Created an official repo in our company GitHub
- Got the work in front of the CPO, who has now brought the CTO into the document

I'm waiting on feedback this week. Best case: budget approval, a dedicated spot on the roadmap, and CTO interest in the approach.

---

## Proof It Works

Last week, at a leadership offsite, I was quietly working on PAX during a meeting.

I asked it to request a day off. It navigated to the right page, opened the modal, selected the time-off type, chose the dates, and submitted the request.

It worked. End-to-end.

I let out a "yes" that was maybe not as quiet as I intended. Then I shared screenshots with my PM, Engineering Director, and Design Manager.

**[SCREENSHOT: "Request time off" completion — the successful submission from the leadership offsite]**

This is the proof point: PAX doesn't just demo well. It actually completes tasks the production assistant can't attempt.

---

## What I Learned

**The problem was structural, not technical.** I wasted a week and a half trying to improve the brain before realizing the assistant had no eyes. Once I reframed the problem, the solution came quickly.

**Side projects create leverage.** The insight that led to PAX came from building Drawbridge. Working on personal tools taught me techniques I could apply at work.

**Building real beats building fake.** The existing vision work used scripted prototypes on a fake stack. I built something functional in two afternoons. That's what changed the conversation.

**Enthusiasm isn't allocation.** "Ship it" felt like a win, but the real work is translating excitement into budget, roadmap spots, and organizational buy-in. I'm still doing that work.

**Bias toward action compounds.** I could have waited for permission, written proposals, requested engineering support. Instead I built it myself. That prototype is now in front of the CTO.

---

## What's Next

**Immediate challenges I'm solving:**

- Modal interactions (agent gets confused about state after opening modals)
- Expanding navigation map coverage
- Context persistence across multi-step actions

**What I'm pushing for:**

1. **Evaluation framework** — A way to measure the assistant vs. the agent so we can make data-driven decisions about the approach
2. **API access** — Connecting PAX to internal APIs (like Analytics) so the agent can answer questions and build charts without navigating the UI

**The bigger vision:**

PAX becomes an "AI Labs" beta—opt-in for customers who want to try the new approach. Product teams contribute surface-specific prompts and workflows. The assistant becomes a platform, not a bottleneck.

That's the direction. First I need to get it resourced.

---

## Technical Details

**Stack:**
- Chrome Extension (Manifest V3)
- Chrome Sidepanel API
- Service Worker + Content Scripts
- Claude API (Opus 4.5, Sonnet 4.5)
- Custom navigation map (JSON)

**Context Capture:**
- Page title, meta description, headings, main content, selected text, modal content
- Up to 5,000 characters
- Refreshed on: sidepanel open, tab switch, page load, before each message
- Tool call available for screenshots when UI changes

**Development:**
- Cursor IDE
- ~8 hours total build time (two afternoons)

---

## Assets Checklist

### Screenshots
- [ ] CEO/COO Slack messages showing frustration
- [ ] Production assistant failing on page content question
- [ ] PAX sidepanel interface
- [ ] Navigation map structure (JSON)
- [ ] Context drawer collapsed
- [ ] Context drawer expanded
- [ ] "Request time off" successful completion (leadership offsite)
- [ ] Slack reactions after demo

### Videos
- [ ] Side-by-side: production assistant vs. PAX on same query
- [ ] PAX navigating UI autonomously
- [ ] Full "Request time off" workflow

### Diagrams
- [ ] PAX architecture (sidepanel, service worker, content scripts)
- [ ] Context capture and refresh flow