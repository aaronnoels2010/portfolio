<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-06-05 | Updated: 2026-06-05 -->

# assets

## Purpose
Static image assets and the global CSS design system. Images are webpack-processed (hashed filenames). The `styles/` subdirectory contains the single source of truth for design tokens and shared utility classes.

## Key Files

| File | Description |
|------|-------------|
| `aaron-noels-avatar.jpg` | Rectangular photo — used in `AboutSection` |
| `aaron-noels-circle.png` | Circular-cropped avatar — no longer used (navbar redesigned) |
| `pxl-logo.png` | PXL University College logo — not currently rendered |
| `logo.png` / `logo.svg` | Vue CLI scaffolding artifacts — unused, safe to remove |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `styles/` | Global CSS: design tokens, resets, shared utility classes (see `styles/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- Reference images via `@/assets/<filename>` in components
- `aaron-noels-circle.png` and `pxl-logo.png` are no longer referenced — safe to delete
- Do not import CSS files from components — global styles are imported once in `main.js`

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
