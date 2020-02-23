<template>
  <img src="@/assets/aaron-noels-circle.png" />
</template>

<script>
export default {
  name: "CircleAvatar"
};
</script>

<style>
img {
  height: 100%;
  transition: height 2s;
  transition-timing-function: ease-out;
}

img:hover {
  overl: aquamarine;
}
</style>