<template>
  <b-container id="navItem" fluid>
    <a class="navLink" href="#main">{{ name }}</a>
  </b-container>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    name: String
  }
};
</script>

<style>
#navItem {
  display: flex;
}

.navLink {
  font-size: 24px;
  font-weight: bold;
  font-family: sans-serif;
  text-transform: uppercase;
  letter-spacing: 1;
}

.navLink {
  color: black;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;

  display: inline-block;
  padding: 15px 20px;
  position: relative;
}

.navLink:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 4px;
  left: 50%;
  position: absolute;
  background: orange;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
.navLink:hover:after {
  width: 100%;
  left: 0;
}

@media only screen and (max-width: 972px) {
  #navItem {
    justify-content: center;
  }
}
</style>
