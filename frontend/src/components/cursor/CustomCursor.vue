<template>
  <div class="cursor-wrap" aria-hidden="true">
    <div class="cursor-dot" ref="dot"></div>
    <div class="cursor-ring" ref="ring"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const dot  = ref(null)
const ring = ref(null)

let mouseX = 0, mouseY = 0
let ringX  = 0, ringY  = 0
let raf    = null

function onMove(e) {
  mouseX = e.clientX
  mouseY = e.clientY
  dot.value.style.transform = `translate(${mouseX}px, ${mouseY}px)`
}

function onEnter() { ring.value.classList.add('cursor-ring--hover') }
function onLeave() { ring.value.classList.remove('cursor-ring--hover') }

function tick() {
  ringX += (mouseX - ringX) * 0.1
  ringY += (mouseY - ringY) * 0.1
  ring.value.style.transform = `translate(${ringX}px, ${ringY}px)`
  raf = requestAnimationFrame(tick)
}

onMounted(() => {
  window.addEventListener('mousemove', onMove)
  raf = requestAnimationFrame(tick)
  document.querySelectorAll('a, button, [data-hover]').forEach(el => {
    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)
  })
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMove)
  cancelAnimationFrame(raf)
})
</script>

<style>
.cursor-wrap { pointer-events: none; }

.cursor-dot,
.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  will-change: transform;
}

.cursor-dot {
  width: 6px;
  height: 6px;
  background: #fff;
  margin-top: -3px;
  margin-left: -3px;
}

.cursor-ring {
  width: 34px;
  height: 34px;
  border: 1.5px solid var(--accent);
  margin-top: -17px;
  margin-left: -17px;
  transition: width 0.25s, height 0.25s, margin 0.25s, background 0.25s;
}

.cursor-ring--hover {
  width: 52px;
  height: 52px;
  margin-top: -26px;
  margin-left: -26px;
  background: var(--accent-glow);
}

@media (hover: none) {
  .cursor-dot, .cursor-ring { display: none; }
}
</style>
