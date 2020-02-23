<template>
  <nav>
    <NavItem name="home"></NavItem>
    <NavItem name="about"></NavItem>
    <CircleAvatar />
    <NavItem name="name"></NavItem>
    <NavItem name="name"></NavItem>
  </nav>
</template>

<script>
import CircleAvatar from "./CircleAvatar";
import NavItem from "./NavItem";
export default {
  name: "NavBar",
  components: {
    CircleAvatar,
    NavItem
  }
};
</script>

<style>
nav {
  align-items: center;
  background-color: white;
  display: flex;
  height: 20vh;
  justify-content: space-evenly;
  position: sticky;
  top: 0;
}
</style>