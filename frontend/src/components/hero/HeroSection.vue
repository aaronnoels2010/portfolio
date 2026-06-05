<template>
  <section id="hero" class="hero">
    <div class="hero__bg" ref="bgEl"></div>

    <div class="container hero__content">
      <p class="hero__eyebrow" ref="eyebrowEl">Full Stack Developer</p>

      <h1 class="hero__name" ref="nameEl">
        <span class="hero__line">{{ line1 }}<span class="hero__caret" v-show="caret === 1">|</span></span>
        <span class="hero__line">{{ line2 }}<span class="hero__caret hero__caret--blink" v-show="caret === 2">|</span></span>
      </h1>

      <p class="hero__quote" ref="quoteEl">
        "Applicatieontwikkelaar met een passie voor webapplicaties en mobiele applicaties."
      </p>

      <div class="hero__actions" ref="actionsEl">
        <a href="#" class="btn btn--primary" data-hover>Download CV</a>
        <a href="#about" class="btn btn--ghost" data-hover>
          View Work <i class="fas fa-chevron-down hero__arrow"></i>
        </a>
      </div>
    </div>

    <div class="hero__scroll" ref="scrollEl">
      <i class="fas fa-chevron-down"></i>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { gsap } from 'gsap'
import * as THREE from 'three'

const bgEl      = ref(null)
const eyebrowEl = ref(null)
const nameEl    = ref(null)
const quoteEl   = ref(null)
const actionsEl = ref(null)
const scrollEl  = ref(null)

const line1 = ref('')
const line2 = ref('')
const caret = ref(0)

let vanta = null

function type(setter, text, speed = 68) {
  return new Promise(resolve => {
    let i = 0
    const id = setInterval(() => {
      setter(text.slice(0, ++i))
      if (i >= text.length) { clearInterval(id); resolve() }
    }, speed)
  })
}

onMounted(async () => {
  // Vanta background
  try {
    const { default: NET } = await import('vanta/dist/vanta.net.min')
    vanta = NET({
      el: bgEl.value,
      THREE,
      mouseControls: true,
      touchControls: false,
      color:           0xff6b35,
      backgroundColor: 0x080808,
      points:          9.0,
      maxDistance:     23.0,
      spacing:         18.0,
      showDots:        true,
    })
  } catch (_) { /* renders fine without Vanta */ }

  // Initial hidden state
  gsap.set([eyebrowEl.value, quoteEl.value, actionsEl.value, scrollEl.value], {
    opacity: 0, y: 28,
  })

  // Entrance sequence
  await gsap.to(eyebrowEl.value, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.3 })

  caret.value = 1
  await type(v => line1.value = v, 'Aäron')
  caret.value = 2
  await type(v => line2.value = v, 'Noels,', 72)

  gsap.to(quoteEl.value,   { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.1 })
  gsap.to(actionsEl.value, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.25 })
  gsap.to(scrollEl.value,  { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out', delay: 0.4 })
})

onUnmounted(() => { if (vanta) vanta.destroy() })
</script>

<style>
.hero {
  position: relative;
  height: 100vh;
  min-height: 640px;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__content {
  position: relative;
  z-index: 1;
}

.hero__eyebrow {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 28px;
}

.hero__name {
  font-family: var(--font-display);
  font-size: clamp(52px, 9.5vw, 136px);
  font-weight: 700;
  line-height: 1.0;
  letter-spacing: -0.025em;
  display: flex;
  flex-direction: column;
  margin-bottom: 36px;
}

.hero__line {
  display: block;
  min-height: 1.05em;
}

.hero__caret {
  color: var(--accent);
  font-weight: 300;
}

.hero__caret--blink {
  animation: blink 0.75s step-end infinite;
}

.hero__quote {
  font-size: clamp(14px, 1.8vw, 18px);
  color: var(--text-muted);
  font-style: italic;
  max-width: 540px;
  line-height: 1.75;
  margin-bottom: 52px;
}

.hero__actions {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.hero__arrow {
  transition: transform 0.3s;
}

.btn--ghost:hover .hero__arrow {
  transform: translateY(4px);
}

.hero__scroll {
  position: absolute;
  bottom: 36px;
  left: 50%;
  transform: translateX(-50%);
  color: var(--accent);
  opacity: 0.5;
  z-index: 1;
  animation: bounce 2.2s ease-in-out infinite;
}

@keyframes blink {
  from, to { opacity: 1; }
  50%       { opacity: 0; }
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0);   }
  50%       { transform: translateX(-50%) translateY(9px); }
}
</style>
