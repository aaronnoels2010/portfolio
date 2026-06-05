<template>
  <section id="skills" class="skills">
    <div class="container">
      <SectionLabel label="Skills" ref="labelEl" />

      <div class="skills__chips" ref="chipsEl">
        <span v-for="s in chips" :key="s" class="skill-chip">{{ s }}</span>
      </div>

      <div class="skills__bars" ref="barsEl">
        <div v-for="b in bars" :key="b.label" class="sbar">
          <div class="sbar__head">
            <span class="sbar__label">{{ b.label }}</span>
            <span class="sbar__pct" :ref="el => pctRefs[b.label] = el">0%</span>
          </div>
          <div class="sbar__track">
            <div class="sbar__fill" :data-pct="b.pct" :ref="el => fillRefs[b.label] = el"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SectionLabel from '@/components/shared/SectionLabel.vue'

const chipsEl = ref(null)
const barsEl  = ref(null)
const fillRefs = reactive({})
const pctRefs  = reactive({})

const chips = [
  'Vue.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3 / SCSS',
  'Node.js', 'Bootstrap', 'Git', 'REST APIs', 'Mobile Dev', 'UI / UX', 'Figma',
]

const bars = [
  { label: 'Frontend', pct: 80 },
  { label: 'Mobile',   pct: 70 },
  { label: 'Backend',  pct: 60 },
  { label: 'UI / UX',  pct: 55 },
]

onMounted(() => {
  gsap.from(chipsEl.value.children, {
    opacity: 0, y: 18, stagger: 0.045, duration: 0.5, ease: 'power3.out',
    scrollTrigger: { trigger: chipsEl.value, start: 'top 82%' },
  })

  ScrollTrigger.create({
    trigger: barsEl.value,
    start: 'top 82%',
    once: true,
    onEnter() {
      bars.forEach(b => {
        const fill = fillRefs[b.label]
        const pct  = pctRefs[b.label]
        gsap.to(fill, { width: b.pct + '%', duration: 1.3, ease: 'power3.out' })
        gsap.to({ val: 0 }, {
          val: b.pct, duration: 1.3, ease: 'power3.out',
          onUpdate() { pct.textContent = Math.round(this.targets()[0].val) + '%' },
        })
      })
    },
  })
})
</script>

<style>
.skills { background: var(--bg-primary); }

.skills__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 72px;
}

.skills__bars {
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 620px;
}

.sbar__head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}

.sbar__label {
  font-family: var(--font-display);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.sbar__pct {
  font-size: 12px;
  font-weight: 600;
  color: var(--accent);
}

.sbar__track {
  height: 2px;
  background: var(--bg-surface);
  border-radius: 2px;
  overflow: hidden;
}

.sbar__fill {
  height: 100%;
  width: 0;
  background: linear-gradient(90deg, var(--accent) 0%, #ffaa80 100%);
  border-radius: 2px;
  box-shadow: 0 0 10px var(--accent-glow);
}
</style>
