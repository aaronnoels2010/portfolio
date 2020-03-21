<template>
  <b-container id="circleAvatar" fluid>
    <img src="@/assets/aaron-noels-circle.png" />
  </b-container>
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

#circleAvatar {
  display: flex;
  height: 20vh;
}

@media only screen and (max-width: 972px) {
  #circleAvatar {
    display: flex;
    justify-content: center;
    order: -1;
  }
}
</style>
