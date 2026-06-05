<template>
  <section id="contact" class="contact">
    <div class="container contact__inner">
      <SectionLabel label="Contact" />

      <h2 class="contact__heading" ref="headingEl">
        Let's build something<br>together.
      </h2>
      <p class="contact__sub" ref="subEl">
        Have a project in mind or want to chat?<br>
        I'm always open to new opportunities.
      </p>

      <a href="mailto:aaron.noels@ae.be" class="btn btn--primary contact__cta" ref="ctaEl" data-hover>
        <i class="fas fa-envelope"></i> Send me a message
      </a>

      <div class="contact__socials" ref="socialsEl">
        <a href="https://github.com/aaronnoels2010" class="contact__social" data-hover>
          <i class="fab fa-github"></i><span>GitHub</span>
        </a>
        <a href="https://www.linkedin.com/in/a%C3%A4ron-noels-70b94b173/" class="contact__social" data-hover>
          <i class="fab fa-linkedin"></i><span>LinkedIn</span>
        </a>
        <a href="mailto:noels.aaron@gmail.com" class="contact__social" data-hover>
          <i class="fas fa-envelope"></i><span>Email</span>
        </a>
      </div>
    </div>

    <footer class="site-footer">
      <div class="container site-footer__inner">
        <span>© 2026 Aäron Noels</span>
        <span>Built with Vue 3</span>
      </div>
    </footer>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'
import SectionLabel from '@/components/shared/SectionLabel.vue'

const headingEl = ref(null)
const subEl     = ref(null)
const ctaEl     = ref(null)
const socialsEl = ref(null)

onMounted(() => {
  gsap.from([headingEl.value, subEl.value, ctaEl.value, socialsEl.value], {
    y: 40, opacity: 0, stagger: 0.15, duration: 0.9, ease: 'power3.out',
    scrollTrigger: { trigger: headingEl.value, start: 'top 82%' },
  })
})
</script>

<style>
.contact {
  background: var(--bg-primary);
  padding-bottom: 0;
}

.contact__inner {
  text-align: center;
  padding-bottom: 112px;
}

.contact__heading {
  font-family: var(--font-display);
  font-size: clamp(30px, 5vw, 68px);
  font-weight: 700;
  letter-spacing: -0.025em;
  line-height: 1.12;
  margin-bottom: 24px;
}

.contact__sub {
  font-size: 16px;
  color: var(--text-muted);
  line-height: 1.85;
  margin-bottom: 52px;
}

.contact__cta {
  font-size: 13px;
  padding: 20px 52px;
  margin-bottom: 72px;
  animation: pulse 3s ease-in-out infinite;
}

.contact__socials {
  display: flex;
  justify-content: center;
  gap: 56px;
}

.contact__social {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  color: var(--text-muted);
  transition: color 0.2s, transform 0.2s, filter 0.2s;
}

.contact__social i    { font-size: 22px; }
.contact__social span { font-size: 10px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; }

.contact__social:hover {
  color: var(--accent);
  transform: translateY(-5px);
  filter: drop-shadow(0 0 8px var(--accent));
}

/* Footer */
.site-footer {
  border-top: 1px solid rgba(240, 240, 240, 0.05);
  padding: 24px 0;
}

.site-footer__inner {
  display: flex;
  justify-content: space-between;
  font-size: 11px;
  letter-spacing: 0.06em;
  color: var(--text-muted);
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 24px var(--accent-glow); }
  50%       { box-shadow: 0 0 52px var(--accent-glow-strong); }
}
</style>
