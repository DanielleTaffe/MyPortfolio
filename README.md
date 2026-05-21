# Danielle Taffe — Portfolio

Personal portfolio site for Danielle Taffe — Brand & Creative Strategist.

## Structure

- `index.html` — home
- `info.html` — about
- `works.html` — works index
- `works/` — individual case studies
  - `intrinsc.html`
  - `brandpatrol.html`
  - `agentfire.html`
  - `re-company.html`
- `styles.css` — global styles (design tokens, layout, motion)
- `main.js` — small interactions (sticky header, scroll reveal, copy-email button)
- `assets/` — project images

## Stack

Plain HTML, CSS, and a sprinkle of JS. No build step, no framework — open any HTML file directly in a browser.

## Fonts

Loaded from Google Fonts:
- **Archivo Black** — wordmark
- **Roboto Condensed** — body + headings
- **Geist Mono** — small uppercase labels

## Local development

Just open `index.html` in a browser, or serve the folder with any static server:

```bash
# Python
python3 -m http.server 8000

# Node
npx serve .
```

Then visit http://localhost:8000.

## Deploy

Deployed via GitHub Pages from the `main` branch (root folder).
