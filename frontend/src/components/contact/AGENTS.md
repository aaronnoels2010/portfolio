<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-06-05 | Updated: 2026-06-05 -->

# contact

## Purpose
Final page section — centered contact CTA, three social links (GitHub, LinkedIn, Email), and the site footer. The CTA button pulses with an orange glow animation. All elements fade up on scroll. The `<footer>` lives inside this component.

## Key Files

| File | Description |
|------|-------------|
| `ContactSection.vue` | Contact section + site footer — heading, CTA mailto link, social links, copyright line |

## For AI Agents

### Working In This Directory
- Email (`aaron.noels@ae.be`) is hardcoded in two places: the CTA `href` and the Email social link — update both if it changes
- GitHub and LinkedIn `href` values are currently `#` — fill in real profile URLs when available
- The pulsing glow is a CSS `@keyframes pulse` animation on `.contact__cta` — adjust timing in the style block
- The `<footer>` is part of this component (not a separate component) — it contains the copyright line
- Background is `--bg-primary` with `padding-bottom: 0` so the footer sits flush at the bottom

## Dependencies

### Internal
- `@/components/shared/SectionLabel.vue`

### External
- `gsap` — scroll fade-up animation
- Font Awesome (CDN) — `fa-envelope`, `fab fa-github`, `fab fa-linkedin`

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
