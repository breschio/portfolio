---
title: "gridwork"
year: 2026
tools: [Swift, macOS, Figma]
description: "A macOS window manager where you draw the window into place."
featured: true
links:
  - label: "Site"
    href: "https://breschio.github.io/gridwork-site/"
  - label: "Download 1.0.3"
    href: "https://github.com/breschio/gridwork-site/releases/download/v1.0.3/gridwork-1.0.3.zip"
---

Press ⇧⌘D and the screen becomes a quiet grid. Drag across the cells you
want; the frontmost window fills them. That is the whole app.

Every window manager I tried solved the problem with presets — halves,
thirds, quarters, a keyboard shortcut for each. That works until your layout
isn't one of the presets. Drawing the region directly removes the vocabulary
entirely: there is nothing to memorize because there is nothing to name.

Three decisions carried the design:

**Placements are fractions, not pixels.** A half-width window is half-width
on the laptop and half-width on the 32" display. Layouts travel.

**The grid is yours.** Two to twelve rows and columns, plus margin and
gutter, set once and then never thought about again.

**No network code exists in the binary.** Not a policy — an absence. Nothing
is collected because there is nothing to collect it with.

The visual language borrows from Agnes Martin: hand-ruled grids, graphite on
pale gesso, bands from a distance and pencil up close. Restraint as a
feature, not a style. Shipped notarized, under a megabyte.
