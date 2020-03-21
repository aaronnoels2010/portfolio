<template>
  <div id="footer">
    <div id="footerLinks">
      <FooterItem />
      <FooterItem />
      <FooterItem />
    </div>
    <PxlLogo />
  </div>
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
#footer {
  align-items: center;
  border-top: 2px solid black;
  display: flex;
  height: 15vh;
}

#footerLinks {
  display: flex;
  flex: 5;
  flex-direction: row;
  justify-content: space-evenly;
}
</style>