<template>
  <div>
    <CustomCursor />
    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  </div>
</template>

<script setup>
import CustomCursor from '@/components/cursor/CustomCursor.vue'
import NavBar from '@/components/navbar/NavBar.vue'
import HeroSection from '@/components/hero/HeroSection.vue'
import AboutSection from '@/components/about/AboutSection.vue'
import SkillsSection from '@/components/skills/SkillsSection.vue'
import ProjectsSection from '@/components/projects/ProjectsSection.vue'
import ContactSection from '@/components/contact/ContactSection.vue'
</script>

<style></style>
