<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': scrolled }">
    <div class="container navbar__inner">
      <a href="#hero" class="navbar__logo" data-hover>Aäron Noels</a>

      <div class="navbar__links" :class="{ 'navbar__links--open': open }">
        <a
          v-for="item in items"
          :key="item.id"
          :href="`#${item.id}`"
          class="navbar__link"
          data-hover
          @click="open = false"
        >{{ item.label }}</a>
      </div>

      <button class="navbar__burger" :class="{ 'navbar__burger--open': open }" @click="open = !open" aria-label="Menu" data-hover>
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const open     = ref(false)

const items = [
  { id: 'hero',     label: 'Home'     },
  { id: 'about',    label: 'About'    },
  { id: 'skills',   label: 'Skills'   },
  { id: 'projects', label: 'Projects' },
  { id: 'contact',  label: 'Contact'  },
]

function onScroll() { scrolled.value = window.scrollY > 60 }
onMounted(()  => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style>
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 28px 0;
  transition: padding 0.3s, background 0.3s, backdrop-filter 0.3s, border-color 0.3s;
  border-bottom: 1px solid transparent;
}

.navbar--scrolled {
  padding: 16px 0;
  background: rgba(8, 8, 8, 0.82);
  backdrop-filter: blur(14px);
  border-color: rgba(255, 107, 53, 0.08);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar__logo {
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.08em;
}

.navbar__links {
  display: flex;
  gap: 44px;
}

.navbar__link {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted);
  position: relative;
  transition: color 0.2s;
}

.navbar__link::after {
  content: '';
  position: absolute;
  bottom: -4px; left: 0;
  width: 0; height: 1px;
  background: var(--accent);
  transition: width 0.3s;
}

.navbar__link:hover        { color: var(--text-primary); }
.navbar__link:hover::after { width: 100%; }

.navbar__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  padding: 4px;
}

.navbar__burger span {
  display: block;
  width: 22px;
  height: 1.5px;
  background: var(--text-primary);
  transition: transform 0.3s, opacity 0.3s;
  transform-origin: center;
}

.navbar__burger--open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.navbar__burger--open span:nth-child(2) { opacity: 0; }
.navbar__burger--open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

@media (max-width: 768px) {
  .navbar__links {
    position: fixed;
    inset: 0;
    background: var(--bg-primary);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 52px;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s;
    z-index: 100;
  }
  .navbar__links--open { opacity: 1; pointer-events: all; }
  .navbar__link        { font-size: 20px; color: var(--text-primary); }
  .navbar__burger      { display: flex; position: relative; z-index: 101; }
}
</style>
