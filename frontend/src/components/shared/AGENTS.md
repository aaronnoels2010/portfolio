<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-06-05 | Updated: 2026-06-05 -->

# shared

## Purpose
Reusable primitives used by multiple section components. Keeps cross-cutting UI elements DRY without coupling sections to each other.

## Key Files

| File | Description |
|------|-------------|
| `SectionLabel.vue` | Section header label — `─── LABEL TEXT ───` pattern; accent orange, all-caps, letter-spaced |

## For AI Agents

### Working In This Directory
- `SectionLabel` accepts a single `label: String` prop — pass the section name in uppercase (e.g. `label="About Me"`)
- The horizontal lines are `<span>` elements with `flex: 1` and a faint accent-coloured border — purely decorative
- Add new shared components here when a UI pattern appears in two or more sections

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
