<template>
  <b-container id="navbar" fluid>
    <b-button variant="outline" v-on:click="verwerk" id="responsive"
      ><i id="menuIcon" class="fas fa-bars"></i
    ></b-button>
    <b-container id="content">
      <NavItem name="home"></NavItem>
      <NavItem name="about"></NavItem>
      <CircleAvatar />
      <NavItem name="name"></NavItem>
      <NavItem name="name"></NavItem>
    </b-container>
  </b-container>
</template>

<script>
import CircleAvatar from "./CircleAvatar";
import NavItem from "./NavItem";
export default {
  name: "NavBar",
  components: {
    CircleAvatar,
    NavItem
  },
  methods: {
    verwerk: function() {
      const navbar = document.getElementById("content");
      const menuIcon = document.getElementById("menuIcon");
      if (menuIcon.className === "fas fa-bars") {
        navbar.style.display = "flex";
        menuIcon.className = "fas fa-times";
      } else {
        navbar.style.display = "none";
        menuIcon.className = "fas fa-bars";
      }
    }
  }
};
</script>

<style>
#responsive {
  display: none;
}

#content {
  display: flex;
  align-items: center;
}

#navbar {
  margin-top: 16px;
  background-color: white;
  display: flex;
  position: sticky;
  top: 0;
}

@media only screen and (max-width: 972px) {
  #content {
    display: none;
    flex-direction: column;
  }

  #navbar {
    position: sticky;
    flex-direction: column;
    height: 100%;
  }

  #responsive {
    background-color: white;
    display: block;
    position: absolute;
    top: 16px;
    left: 16px;
  }
}
</style>
