<!-- Generated: 2026-06-05 | Updated: 2026-06-05 -->

# frontend

## Purpose
Personal portfolio website for Aäron Noels — a dark, atmospheric single-page Vue 3 app. Features a fixed frosted-glass navbar, a fullscreen hero with Vanta NET particle background and typewriter animation, scroll-triggered section reveals (GSAP), animated skill bars, placeholder project cards, and a contact section. No Vue Router or Pinia — all state is component-local.

## Key Files

| File | Description |
|------|-------------|
| `package.json` | Dependencies and scripts (`serve`, `build`, `lint`) |
| `babel.config.js` | Babel transpilation config |
| `src/main.js` | Entry point — registers GSAP ScrollTrigger, imports global CSS, mounts `App.vue` |
| `src/App.vue` | Root component — composes all section components and `CustomCursor` |
| `public/index.html` | SPA shell — loads Space Grotesk + Inter fonts and Font Awesome kit via CDN |

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `src/` | All application source code (see `src/AGENTS.md`) |
| `public/` | Static assets and SPA shell (see `public/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- **Vue 3** project — all components use `<script setup>` (Composition API)
- Use **pnpm** for all package operations (`pnpm install`, `pnpm build`, `pnpm serve`, `pnpm lint`)
- No Vue Router or Pinia — add new sections as components in `App.vue`
- No Bootstrap — styling uses plain CSS with design tokens defined in `src/assets/styles/main.css`
- SCSS is available via `sass-loader` — use `<style lang="scss">` when needed

### Design Tokens (defined in `src/assets/styles/main.css`)
```
--bg-primary:   #080808    --accent:       #ff6b35
--bg-secondary: #111111    --accent-glow:  rgba(255,107,53,0.15)
--bg-surface:   #1a1a1a    --text-primary: #f0f0f0
--font-display: Space Grotesk   --text-muted:   #555555
--font-body:    Inter
```

### Testing Requirements
- No test suite — validate visually via `pnpm serve`
- Lint with `pnpm lint` before committing

### Common Patterns
- GSAP ScrollTrigger registered globally in `main.js` — import only `{ gsap }` in components, not `ScrollTrigger`
- Shared utility classes (`btn`, `btn--primary`, `btn--ghost`, `skill-chip`) defined globally in `main.css`
- All interactive elements use `data-hover` attribute for custom cursor scaling
- Responsive breakpoint: `768px`

## Dependencies

### External
- `vue` 3.4.x — UI framework
- `gsap` 3.12.x — animations and ScrollTrigger
- `vanta` 0.5.x + `three` 0.160.x — Vanta NET particle background in hero
- `core-js` 3.x — polyfills
- `sass` / `sass-loader` — SCSS compilation

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
