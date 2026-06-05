<template>
  <div class="section-label">
    <span class="section-label__line"></span>
    <span class="section-label__text">{{ label }}</span>
    <span class="section-label__line"></span>
  </div>
</template>

<script setup>
defineProps({ label: String })
</script>

<style>
.section-label {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
}

.section-label__text {
  font-family: var(--font-display);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--accent);
  white-space: nowrap;
}

.section-label__line {
  flex: 1;
  height: 1px;
  background: var(--accent);
  opacity: 0.25;
}
</style>
