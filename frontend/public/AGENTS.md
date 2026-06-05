<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-06-05 | Updated: 2026-06-05 -->

# public

## Purpose
Static files served as-is and copied verbatim into the build output. `index.html` is the SPA shell Vue CLI injects the built bundle into. CDN fonts and the Font Awesome icon kit are loaded here.

## Key Files

| File | Description |
|------|-------------|
| `index.html` | SPA shell — loads Space Grotesk + Inter (Google Fonts), Font Awesome kit, mounts `<div id="app">` |
| `favicon.ico` | Browser tab icon |

## For AI Agents

### Working In This Directory
- CDN links in `index.html`: Google Fonts (Space Grotesk, Inter), Font Awesome kit (`kit.fontawesome.com/2ed52cc382.js`)
- `style.css` was removed — all global styles now live in `src/assets/styles/main.css`
- To add a new global CDN dependency, add it to `index.html` `<head>`
- Do not add Vue component logic here; this directory is purely static

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
