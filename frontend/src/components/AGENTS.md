<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-06-05 | Updated: 2026-06-05 -->

# components

## Purpose
All Vue UI components, organized by feature. Each subdirectory is a self-contained page section or shared utility. Sections are composed in `App.vue` in page order.

## Subdirectories

| Directory | Purpose |
|-----------|---------|
| `navbar/` | Fixed frosted-glass nav bar with scroll-aware styling (see `navbar/AGENTS.md`) |
| `hero/` | Fullscreen hero — Vanta NET background, typewriter name, entrance animations (see `hero/AGENTS.md`) |
| `about/` | Split layout — floating avatar left, bio + chips right (see `about/AGENTS.md`) |
| `skills/` | Animated chip cloud + fill-on-scroll progress bars (see `skills/AGENTS.md`) |
| `projects/` | 3-column placeholder project card grid (see `projects/AGENTS.md`) |
| `contact/` | Centered CTA, social links, site footer (see `contact/AGENTS.md`) |
| `cursor/` | Custom orange-ring cursor overlay (see `cursor/AGENTS.md`) |
| `shared/` | Reusable cross-section primitives (see `shared/AGENTS.md`) |

## For AI Agents

### Working In This Directory
- All components use `<script setup>` (Vue 3 Composition API)
- GSAP ScrollTrigger is registered globally — only import `{ gsap }` in components
- Add `data-hover` to any interactive element to trigger the cursor ring expansion
- Global utility classes (`btn`, `skill-chip`, etc.) come from `src/assets/styles/main.css` — no local re-declaration
- Responsive breakpoint: `768px` (defined per-component in `<style>` blocks)

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
