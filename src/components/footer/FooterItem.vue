<template>
  <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
    <i class="fas fa-camera"></i>
    <p class="fas fa-camera">GITHUB</p>
  </div>
</template>

<script>
export default {
  name: "FooterItem",
  methods: {
    handleMouseEnter: function(event) {
      event.srcElement.className += " animated infinite jello";
    },
    handleMouseLeave: function(event) {
      event.srcElement.className = event.srcElement.className.substring(
        0,
        event.srcElement.className.indexOf("animated")
      );
    }
  }
};
</script>

<style>
</style>