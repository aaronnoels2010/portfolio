<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-06-05 | Updated: 2026-06-05 -->

# skills

## Purpose
Two-part skills section. Top: a wrapping cloud of technology chips that stagger in on scroll. Bottom: four category progress bars (Frontend, Mobile, Backend, UI/UX) that fill left-to-right with a simultaneous percentage count-up animation when scrolled into view.

## Key Files

| File | Description |
|------|-------------|
| `SkillsSection.vue` | Full skills section — chip cloud + animated fill bars |

## For AI Agents

### Working In This Directory
- Skill chips and bar data are hardcoded arrays (`chips`, `bars`) at the top of `<script setup>` — edit there to add/remove/rename skills or adjust percentages
- Bar fills use `reactive({})` template refs (`fillRefs`, `pctRefs`) keyed by label — the keys must match `b.label` in the `bars` array exactly
- The bar animation fires once via `ScrollTrigger.create({ once: true })` — it will not re-animate on scroll back
- GSAP counter object `{ val: 0 }` is used to animate the percentage text — the `onUpdate` callback reads `this.targets()[0].val`
- Background is `--bg-primary` — alternates with about's `--bg-secondary`

## Dependencies

### Internal
- `@/components/shared/SectionLabel.vue`

### External
- `gsap` — chip stagger and bar fill animations

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
