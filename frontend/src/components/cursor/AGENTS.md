<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-06-05 | Updated: 2026-06-05 -->

# cursor

## Purpose
Custom cursor overlay rendered above all content. Replaces the default OS cursor with a small white dot (tracks mouse exactly) and a larger orange ring (follows with a 10% lerp lag for a smooth trailing effect). The ring expands when hovering over interactive elements marked with `data-hover`.

## Key Files

| File | Description |
|------|-------------|
| `CustomCursor.vue` | Cursor overlay — dot + lagging ring, `data-hover` expansion, hidden on touch devices |

## For AI Agents

### Working In This Directory
- The dot uses direct `style.transform` for zero-lag tracking; the ring uses a `requestAnimationFrame` lerp loop (`ringX += (mouseX - ringX) * 0.1`)
- `data-hover` must be added to any new `<a>`, `<button>`, or interactive element for the ring to expand on hover — the selector in `onMounted` runs once on mount, so elements added dynamically after mount won't be picked up
- Hidden automatically on touch devices via `@media (hover: none)` — no JS needed
- `cancelAnimationFrame` is called in `onUnmounted` to prevent the loop running after the component is gone
- The cursor does **not** set `cursor: none` on `body` — that is handled by `main.css`

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
