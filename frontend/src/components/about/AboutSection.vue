<template>
  <section id="about" class="about">
    <div class="container about__grid">
      <div class="about__img-col" ref="imgCol">
        <div class="about__avatar-wrap">
          <img src="@/assets/aaron-noels-avatar.jpg" alt="Aäron Noels" class="about__avatar" data-hover />
        </div>
      </div>

      <div class="about__text-col" ref="textCol">
        <SectionLabel label="About Me" />
        <h2 class="about__heading">I build things<br>for the web.</h2>
        <p class="about__bio">
          I'm Aäron Noels, an application developer from Belgium with a passion for crafting
          web and mobile experiences. Currently studying at PXL University College, I combine
          academic knowledge with hands-on project work to build things that look good and work well.
        </p>
        <div class="about__chips">
          <span class="about__chip"><i class="fas fa-map-marker-alt"></i> Belgium</span>
          <span class="about__chip"><i class="fas fa-graduation-cap"></i> PXL University College</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import SectionLabel from '@/components/shared/SectionLabel.vue'

const imgCol  = ref(null)
const textCol = ref(null)

onMounted(() => {
  gsap.from(imgCol.value, {
    x: -60, opacity: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: imgCol.value, start: 'top 82%' },
  })
  gsap.from(textCol.value, {
    x: 60, opacity: 0, duration: 1, ease: 'power3.out',
    scrollTrigger: { trigger: textCol.value, start: 'top 82%' },
  })
})
</script>

<style>
.about {
  background: var(--bg-secondary);
}

.about__grid {
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 88px;
  align-items: center;
}

.about__avatar-wrap {
  animation: float 4s ease-in-out infinite;
}

.about__avatar {
  width: 100%;
  max-width: 340px;
  border-radius: 6px;
  display: block;
  box-shadow:
    0 0 0 3px var(--bg-secondary),
    0 0 0 5px var(--accent),
    0 24px 64px rgba(255, 107, 53, 0.18);
  transition: transform 0.4s ease;
}

.about__avatar:hover {
  transform: rotate(1.5deg) scale(1.02);
}

.about__heading {
  font-family: var(--font-display);
  font-size: clamp(28px, 3.5vw, 52px);
  font-weight: 700;
  line-height: 1.15;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
}

.about__bio {
  font-size: 16px;
  line-height: 1.85;
  color: var(--text-muted);
  max-width: 500px;
  margin-bottom: 40px;
}

.about__chips {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.about__chip {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  background: var(--bg-surface);
  border: 1px solid rgba(255, 107, 53, 0.18);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-muted);
  transition: border-color 0.2s, color 0.2s;
}

.about__chip i { color: var(--accent); font-size: 11px; }
.about__chip:hover { border-color: var(--accent); color: var(--text-primary); }

@keyframes float {
  0%, 100% { transform: translateY(0);     }
  50%       { transform: translateY(-10px); }
}

@media (max-width: 768px) {
  .about__grid       { grid-template-columns: 1fr; gap: 48px; }
  .about__img-col    { text-align: center; }
  .about__avatar     { max-width: 240px; margin: 0 auto; }
}
</style>
