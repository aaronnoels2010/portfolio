<!-- Parent: ../AGENTS.md -->
<!-- Generated: 2026-06-05 | Updated: 2026-06-05 -->

# plugins

## Purpose
Reserved for Vue plugin registration files. Currently empty — no plugins are registered. GSAP is configured in `main.js`; there are no global Vue plugins in use.

## For AI Agents

### Working In This Directory
- To add a Vue plugin, create `<name>.js` here, call `app.use(plugin)` inside it, and import it in `src/main.js`
- Do not register GSAP here — it is not a Vue plugin; configure it directly in `main.js`

<!-- MANUAL: Any manually added notes below this line are preserved on regeneration -->
