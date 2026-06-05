<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-06-05 | Updated: 2026-06-05 -->

# src

## Purpose
All application source code. Entry point is `main.js` — it registers GSAP's ScrollTrigger plugin globally, imports the design system CSS, and mounts `App.vue`. `App.vue` is intentionally thin: it composes the custom cursor and all page sections.

## Key Files

| File | Description |
|------|-------------|
| `main.js` | Entry — `gsap.registerPlugin(ScrollTrigger)`, imports `assets/styles/main.css`, mounts `App` |
| `App.vue` | Root — renders `CustomCursor` + `NavBar` + all five section components |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `components/` | All Vue UI components organized by feature (see `components/AGENTS.md`) |
| `assets/` | Images and global CSS design system (see `assets/AGENTS.md`) |
| `plugins/` | Empty — no plugins currently registered |

## For AI Agents

### Working In This Directory
- `ScrollTrigger` is registered **once** in `main.js` — components import only `{ gsap }`, never `ScrollTrigger` directly
- `App.vue` uses `<script setup>` — keep it as a thin compositor, no logic here
- Import paths use `@/` as alias for `src/`
- Component files use PascalCase naming

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
