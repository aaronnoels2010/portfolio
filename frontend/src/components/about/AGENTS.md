<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-06-05 | Updated: 2026-06-05 -->

# about

## Purpose
Two-column section introducing Aäron Noels. Left column: avatar image with orange glow ring and CSS float animation. Right column: `SectionLabel`, heading, bio paragraph, and detail chips (location + university). Both columns slide in from opposite sides on scroll via GSAP ScrollTrigger.

## Key Files

| File | Description |
|------|-------------|
| `AboutSection.vue` | Full about section — split grid layout, animated avatar, bio, detail chips |

## For AI Agents

### Working In This Directory
- Background is `--bg-secondary` (`#111111`) — alternates with the hero's `--bg-primary` for visual rhythm
- The float animation lives on `.about__avatar-wrap` (not the `<img>`) to avoid conflicting with hover transforms
- Bio text and detail chips are hardcoded — update directly in the template
- "Open to work" chip is intentionally absent (removed per design decision)
- GSAP animations use `scrollTrigger: { start: 'top 82%' }` — adjust if the reveal feels too early/late

## Dependencies

### Internal
- `@/assets/aaron-noels-avatar.jpg` — avatar image
- `@/components/shared/SectionLabel.vue`

### External
- `gsap` — slide-in scroll animations
- Font Awesome (CDN) — `fa-map-marker-alt`, `fa-graduation-cap` icons in chips

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
