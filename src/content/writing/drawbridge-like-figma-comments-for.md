---
title: "Drawbridge is \"Figma comments\" for Cursor"
description: "As a product designer working with Cursor, I constantly have to move back and forth between the browser and my development environment to describe visual edits…"
pubDate: 2025-08-12
draft: false
substackUrl: "https://terrencebreschi.substack.com/p/drawbridge-like-figma-comments-for"
heroImage: "/assets/writing/drawbridge-like-figma-comments-for/01.png"
---
## **Problem**

As a product designer working with Cursor, I constantly have to move back and forth between the browser and my development environment to describe visual edits I want to make.

![](/assets/writing/drawbridge-like-figma-comments-for/01.png)

*Annotated screenshot shared with cursor.*

Initially, this meant describing the changes I wanted in plain text— until I discovered that taking screenshots with annotations (pink boxes, arrows, etc.) seemed to provide better results.

This was a boon at the time, I could bend Cursor to my will if I gave it enough visual context!

But, the process felt tedious and disconnected from the vibe I was trying to cultivate. Move fast, make things!

##
**Hypothesis**

What if I could just click on the interface itself, leave a comment or instruction, and send that directly to Cursor or my local tools?

![](/assets/writing/drawbridge-like-figma-comments-for/02.jpg)

*Leave a comment for Cursor*

Furthermore, if I could attach more context (DOM elements + Screenshot and comment) that might be far more effective than trying to explain everything in words.

Just click and comment.

## **Solution**

Drawbridge is “Figma comments for Cursor”.

<video src="/assets/writing/drawbridge-like-figma-comments-for/03.mp4" autoplay loop muted playsinline preload="none"></video>

These tasks are automatically synced to a `markdown` file for easy tracking in cursor. This stays in sync with a corresponding JSON file that contains rich context Cursor needs to understand and execute your intent. Read: JSON prompt.

<video src="/assets/writing/drawbridge-like-figma-comments-for/04.mp4" autoplay loop muted playsinline preload="none"></video>

When I want Cursor to run my tasks, I just type “bridge” into the input and Cursor looks at the markdown files to understand what it needs to do.

<video src="/assets/writing/drawbridge-like-figma-comments-for/05.mp4" autoplay loop muted playsinline preload="none"></video>

Cursor then reviews the comment as well as the JSON prompt and a screenshot to better-inform it’s work.

## **Result**

Now I can work with my UI in a much more efficient way. I make a series of visual edits, batch them, and send them directly to Cursor.

Higher context, lower effort.

<video src="/assets/writing/drawbridge-like-figma-comments-for/06.mp4" autoplay loop muted playsinline preload="none"></video>

## Result

It’s not perfect, but it’s a start… and it’s led me to better-understand what it means to build with AI.

First it’s help to acquaint me with others who have built projects in this space. Drawbridge is largely inspired by [AI Dev Tasks](https://github.com/snarktank/ai-dev-tasks) which is a simple way to structure large projects into bite-sized tasks for LLMs to chew on.

I highly recommend checking out the [github](https://github.com/snarktank/ai-dev-tasks) and experimenting with the workflow.

60% of the time it works every time.

Secondly, playing with different models can really impact your results - duh - but in this case Gemini Pro and Auto seem to perform best. Claude too, but lately it’s been a little wonky.

**¯\_(ツ)_/¯**

## Ask

There are definitely opportunities to refine this thing, and I’m open to feedback on how to improve it. If you are working in this space would you please…

1. Try and let me know what you think!
2. Point me to other tools that are doing this better?

[Drawbridge](https://github.com/breschio/drawbridge) (Github)

Thanks :)
