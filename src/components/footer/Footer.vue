<template>
  <footer>
    <div class="links">
      <FooterItem />
      <FooterItem />
      <FooterItem />
    </div>
    <div class="logoContainer">
      <PxlLogo />
    </div>
  </footer>
</template>

<script>
import FooterItem from "./FooterItem";
import PxlLogo from "./PxlLogo";
export default {
  name: "Footer",
  components: {
    FooterItem,
    PxlLogo
  }
};
</script>

<style>
footer {
  align-items: center;
  border-top: 2px solid black;
  display: flex;
  height: 15vh;
}

.links {
  display: flex;
  flex: 5;
  flex-direction: row;
  justify-content: space-evenly;
}

.logoContainer {
  display: flex;
  height: 100%;
}
</style>