<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-06-05 | Updated: 2026-06-05 -->

# navbar

## Purpose
Fixed top navigation bar. Transparent on page load; gains a frosted-glass dark background (`backdrop-filter: blur`) once the user scrolls past 60px. Collapses to an animated hamburger on mobile (`< 768px`), which opens a fullscreen overlay menu.

## Key Files

| File | Description |
|------|-------------|
| `NavBar.vue` | Full navbar — scroll watcher, hamburger toggle, five nav links, "AN" logo |

## For AI Agents

### Working In This Directory
- `scrolled` and `open` are reactive refs — no direct DOM manipulation
- Nav items are driven by the `items` array; add/rename sections there
- The mobile menu is a fullscreen overlay (`position: fixed; inset: 0`) toggled via `opacity` + `pointer-events`
- Logo links to `#hero`; each nav link uses `href="#<section-id>"` — keep IDs in sync with section components
- The hamburger uses three `<span>` elements animated with CSS transforms (no icon library dependency)

### Common Patterns
- Scroll listener registered in `onMounted` / cleaned up in `onUnmounted`
- `navbar--scrolled` class drives the frosted background transition via CSS

## Dependencies

### External
- No icon library used for the burger — pure CSS spans

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
