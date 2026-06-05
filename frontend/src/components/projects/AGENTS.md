<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-06-05 | Updated: 2026-06-05 -->

# projects

## Purpose
Three-column card grid showcasing projects. Currently all three cards are placeholder content with gradient thumbnails. Cards stagger up on scroll. Each card lifts with an orange glow on hover.

## Key Files

| File | Description |
|------|-------------|
| `ProjectsSection.vue` | Full projects section — responsive grid, placeholder cards, scroll stagger |

## For AI Agents

### Working In This Directory
- Project data is a hardcoded `projects` array in `<script setup>` — replace placeholder content there when real projects are ready
- Each project needs: `id`, `title`, `desc`, `tags[]`, `gradient` (CSS gradient string for the thumbnail)
- The large faded number in the card thumbnail is `String(p.id).padStart(2, '0')` — decorative only
- Tech tag chips reuse the global `.skill-chip .skill-chip--sm` classes from `main.css`
- Grid is 3-col → 2-col (≤ 900px) → 1-col (≤ 580px)
- Background is `--bg-secondary`

## Dependencies

### Internal
- `@/components/shared/SectionLabel.vue`

### External
- `gsap` — scroll stagger animation
- Font Awesome (CDN) — `fa-arrow-right` on card links

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
