<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-06-05 | Updated: 2026-06-05 -->

# hero

## Purpose
Fullscreen opening section (`100vh`). Vanta NET animated particle web fills the background. On mount, a GSAP entrance sequence plays: eyebrow label fades in → two-line typewriter name types out with a blinking orange caret → quote and CTAs fade up. Scroll indicator bounces at the bottom.

## Key Files

| File | Description |
|------|-------------|
| `HeroSection.vue` | Full hero — Vanta background, reactive typewriter, GSAP entrance timeline, CTA buttons |

## For AI Agents

### Working In This Directory
- Vanta is loaded via **dynamic import** inside `onMounted` — if Vanta fails to load the section still renders correctly
- The typewriter is reactive: `line1` and `line2` are `ref('')` updated by a `setInterval` Promise chain
- `caret` ref controls which line shows the blinking cursor (`1` = typing line 1, `2` = typing line 2)
- `vantaEffect.destroy()` is called in `onUnmounted` to prevent memory leaks
- The name text (`'Aäron'`, `'Noels,'`) is hardcoded in the `type()` calls — update there if the name changes
- `THREE` is imported statically at the top and passed to Vanta as `{ THREE }` — required by Vanta's API

### Common Patterns
- `await gsap.to(el, {...})` works because GSAP 3 tweens are thennable
- CTA buttons use global `.btn .btn--primary` / `.btn--ghost` classes from `main.css`

## Dependencies

### Internal
- No child components

### External
- `gsap` — entrance animations
- `vanta/dist/vanta.net.min` — NET particle background (dynamic import)
- `three` — peer dependency passed to Vanta
- Font Awesome (CDN) — `fa-chevron-down` on scroll indicator and ghost CTA

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
