<template>
  <section id="projects" class="projects">
    <div class="container">
      <SectionLabel label="Projects" />

      <div class="projects__grid" ref="gridEl">
        <div v-for="p in projects" :key="p.id" class="pcard" data-hover>
          <div class="pcard__thumb" :style="{ background: p.gradient }">
            <span class="pcard__num">{{ String(p.id).padStart(2, '0') }}</span>
          </div>
          <div class="pcard__body">
            <h3 class="pcard__title">{{ p.title }}</h3>
            <p class="pcard__desc">{{ p.desc }}</p>
            <div class="pcard__tags">
              <span v-for="t in p.tags" :key="t" class="skill-chip skill-chip--sm">{{ t }}</span>
            </div>
            <a href="#" class="pcard__link" data-hover>
              View Project <i class="fas fa-arrow-right pcard__arrow"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import SectionLabel from '@/components/shared/SectionLabel.vue'

const gridEl = ref(null)

const projects = [
  {
    id: 1,
    title: 'Project Alpha',
    desc: 'A full-stack web application built with Vue 3 and a RESTful API backend.',
    tags: ['Vue.js', 'Node.js', 'CSS'],
    gradient: 'linear-gradient(135deg, #181008 0%, #2a1a0a 60%, #100808 100%)',
  },
  {
    id: 2,
    title: 'Project Beta',
    desc: 'Mobile-first application focused on seamless user experience and performance.',
    tags: ['Mobile', 'JavaScript', 'API'],
    gradient: 'linear-gradient(135deg, #080f18 0%, #0a1a0a 60%, #181008 100%)',
  },
  {
    id: 3,
    title: 'Project Gamma',
    desc: 'Interactive platform with real-time data, custom animations, and modern UI.',
    tags: ['Vue.js', 'SCSS', 'GSAP'],
    gradient: 'linear-gradient(135deg, #10080f 0%, #1a0a18 60%, #080818 100%)',
  },
]

onMounted(() => {
  gsap.from(gridEl.value.children, {
    y: 60, opacity: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: gridEl.value, start: 'top 82%' },
  })
})
</script>

<style>
.projects { background: var(--bg-secondary); }

.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.pcard {
  background: var(--bg-surface);
  border: 1px solid rgba(240, 240, 240, 0.05);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.35s, border-color 0.35s, box-shadow 0.35s;
}

.pcard:hover {
  transform: translateY(-10px);
  border-color: rgba(255, 107, 53, 0.28);
  box-shadow: 0 24px 64px rgba(0,0,0,0.5), 0 0 36px var(--accent-glow);
}

.pcard__thumb {
  height: 188px;
  position: relative;
}

.pcard__num {
  position: absolute;
  bottom: 16px; right: 20px;
  font-family: var(--font-display);
  font-size: 72px;
  font-weight: 700;
  color: rgba(255, 107, 53, 0.12);
  line-height: 1;
  user-select: none;
}

.pcard__body {
  padding: 28px;
}

.pcard__title {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
}

.pcard__desc {
  font-size: 14px;
  color: var(--text-muted);
  line-height: 1.75;
  margin-bottom: 20px;
}

.pcard__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
}

.pcard__link {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: gap 0.2s;
}

.pcard__link:hover { gap: 14px; }
.pcard__arrow      { font-size: 10px; }

@media (max-width: 900px) { .projects__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 580px) { .projects__grid { grid-template-columns: 1fr; } }
</style>
