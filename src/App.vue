<template>
  <b-container fluid>
    <NavBar />
    <HomePage />
  </b-container>
</template>

<script>
import NavBar from "./components/navbar/NavBar";
import HomePage from "./components/home/HomePage";
export default {
  name: "App",

  components: {
    HomePage,
    NavBar
  },

  data: () => ({
    //
  })
};
</script>

<style></style>
