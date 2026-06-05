<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-06-05 | Updated: 2026-06-05 -->

# styles

## Purpose
Single source of truth for the design system. Imported once in `src/main.js` — provides CSS custom properties (design tokens), global resets, the shared container, and utility classes used across all components.

## Key Files

| File | Description |
|------|-------------|
| `main.css` | Design tokens, reset, `.container`, `.btn`, `.btn--primary`, `.btn--ghost`, `.skill-chip`, `.skill-chip--sm` |

## For AI Agents

### Working In This Directory
- All design tokens are CSS custom properties on `:root` — always use `var(--token)` in components, never hardcode hex values
- Shared utility classes (`btn`, `skill-chip`) are defined here — do not redefine them in component `<style>` blocks
- This file is imported globally — changes affect every component
- Do not use `@import` inside component `<style>` blocks to pull in this file; it is already available everywhere

### Token Reference
```
--bg-primary / --bg-secondary / --bg-surface    backgrounds (dark → darker → surface)
--accent                                         #ff6b35  orange brand colour
--accent-glow / --accent-glow-strong            rgba glow variants for box-shadow
--text-primary / --text-muted                   foreground colours
--font-display (Space Grotesk) / --font-body (Inter)
```

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
