# Nimbus — CSS Challenge

Nimbus is a fictional analytics product, built as a CSS-focused frontend challenge. The page presents it as a small editorial-style product site rather than three unrelated exercises.

## Overview

There is no backend and no real data here. Every metric, chart and CTA is static demo content, built to give the Flexbox, Grid and animation work a believable context to live in.

## Objective

This project demonstrates:

- Flexbox layout
- CSS Grid layout
- responsive design across phone, tablet and desktop
- CSS transitions and transforms
- keyframe animation
- accessible, semantic markup

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, custom properties, `clamp()`)
- Vanilla JavaScript (a small mobile-menu toggle — the only place JS is genuinely needed)
- Self-hosted WOFF2 fonts: Archivo (display) and Inter (body)

Plain HTML, CSS and JavaScript only, with no build step, no framework and no npm dependencies.

## Design Direction

The direction is editorial-tech: a warm off-white paper background, near-black typography, and one restrained cobalt accent used only for links, the primary CTA, chart highlights and "positive" data points — never scattered across the page.

- **Colour:** warm off-white paper, near-black ink for headings, a warm dark gray for body copy, thin warm-neutral rules instead of card shadows, and a single cobalt accent.
- **Type:** Archivo (a bold, geometric display face) for headlines, numerals and section titles; Inter for body copy and UI text. Large, confident headline sizes drive the hierarchy more than colour or decoration does.
- **Structure:** numbered section labels (01, 02, 03…), thin 1px rules in place of card borders/shadows, an asymmetric information grid in the dashboard section, and CSS/SVG-drawn data visuals (line charts, bar strips, a pulsing "live" indicator) instead of stock dashboard imagery.
- **Restraint:** no gradients, no glassmorphism, no floating blobs or decorative icons, and border-radius kept minimal throughout.

## Components / Sections

1. **Hero** — large editorial headline, short supporting copy, a CSS/SVG-built data figure (metric, line chart, bar strip)
2. **Flexbox features** — three editorial feature items in a Flexbox row
3. **Dashboard grid** — an asymmetric CSS Grid of data tiles
4. **Insight** — a full-width inverted transition section with a statement and a small trend indicator
5. **Animation / CTA** — the animated call-to-action component
6. **Footer** — a minimal, single-row footer

## Flexbox Challenge

The "Three ways teams stop guessing" section (`.feature-row`) lays out exactly 3 feature items with:

- `display: flex`
- `justify-content: center` and `align-items: stretch` once the items sit in a row
- a shared `gap` between items (via padding + a vertical rule, rather than margin hacks)
- flexible, not fixed-pixel, widths via `flex: 1 1 240px` on each `.feature-item`

Below 768px the row switches to `flex-direction: column`, stacking the items with horizontal rules between them; at 768px and above it becomes a row divided by thin vertical rules. Hover state: the item's numeral turns accent-coloured, its title gains an accent underline, and it lifts slightly.

## Grid Challenge

The "Live dashboard" section (`.dashboard-grid`) lays out 6 data tiles (Active Users, Growth, Revenue, Uptime, Alerts, Sessions) with:

- `display: grid`
- `grid-template-columns: repeat(n, 1fr)`
- a single `gap` (rendered as a thin rule between tiles)
- an intentional asymmetric hierarchy at desktop: two large tiles, three mid-sized tiles, and one full-width tile — built entirely with `grid-column` spans, not absolute positioning

The grid simplifies to 2 columns at tablet widths (600–1023px) and 1 column below 600px, with tile spans re-mapped at each breakpoint so no row is ever left with an empty gap.

## Animation Challenge

The "Explore live analytics" CTA (`.cta-link`) demonstrates `transition` and `transform` together:

- **Hover:** the CTA and its arrow shift right, and both turn accent-coloured
- **Active:** a slightly smaller shift, for a subtle press feel
- **Focus-visible:** a clear, high-contrast outline for keyboard users

A second, smaller animation — a pulsing "Live" indicator dot on the first feature item — uses `@keyframes` instead of a transition, so both animation techniques are represented. Both respect `@media (prefers-reduced-motion: reduce)`, which removes the hover/active movement and collapses all animation and transition durations.

## Responsive Design

Checked in the browser at 320, 375, 480, 600, 768, 900, 1024 and 1440px. The mobile layout isn't just a scaled-down desktop view — the feature row, dashboard grid and navigation are each redesigned for their breakpoint (stacked features with horizontal rules, a re-mapped grid hierarchy, a compact nav toggle) rather than shrunk in place. There is no horizontal overflow at any tested width.

## Accessibility

- semantic landmarks (`header`, `nav`, `main`, `footer`)
- a skip link to the main content
- a single `h1` and a logical heading hierarchy
- visible keyboard focus (`:focus-visible`)
- native controls only (`<button>`, `<a>`), no ARIA used where a native element already does the job
- accessible mobile navigation: a toggle button with `aria-expanded`/`aria-controls`, Escape-to-close with focus return, and outside-click/link-click close
- `prefers-reduced-motion` support throughout

## Project Structure

```
css-challenge/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   └── fonts/
└── README.md
```

`assets/fonts/` holds the self-hosted Archivo and Inter WOFF2 files and their SIL Open Font License texts.

## Running Locally

No installation is needed. From this folder:

```bash
cd css-challenge
python -m http.server 8000
```

Then open:

http://localhost:8000

Opening `index.html` directly in a browser also works.

## Screenshots

Located in the repository's shared `screenshots/` folder:

- [flex-desktop.png](../screenshots/flex-desktop.png) — the 3-item Flexbox feature row at desktop width
- [flex-mobile.png](../screenshots/flex-mobile.png) — the same section stacked on mobile
- [grid-layout.png](../screenshots/grid-layout.png) — the asymmetric dashboard grid at desktop width
- [animation-demo.png](../screenshots/animation-demo.png) — the animated CTA in its hover state

## Author

Tirth Vaghela

- GitHub: https://github.com/Tirthvaghela
- LinkedIn: https://www.linkedin.com/in/tirthvaghela/

## Project Note

Nimbus is a fictional product built purely to demonstrate CSS layout and animation techniques for a frontend web development assignment. It has no backend, no real data, and is not deployed.
