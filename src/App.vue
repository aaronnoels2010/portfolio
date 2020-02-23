<template>
  <div>
    <NavBar></NavBar>
    <div id="stage1">
      <TypeWriter :name="name"></TypeWriter>
      <div class="quote">
        <Quote />
      </div>
      <div class="center-content">
        <a id="cv-button" href="../../assets/pdf/cv-aaron.pdf" download>Download mij!</a>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import Quote from "./components/home/Quote";
import TypeWriter from "./components/home/TypeWriter";
export default {
  name: "App",
  components: {
    Footer,
    NavBar,
    Quote,
    TypeWriter
  },
  data() {
    return {
      name: "Aäron Noels,"
    };
  }
};
</script>

<style>
#cv-button {
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 25px;
  color: grey;
  font-size: 32px;
  padding: 8px;
}

.quote {
  display: flex;
  text-align: center;
}

.center-content {
  display: flex;
  justify-content: center;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#stage1 {
  height: 80vh;
}
</style>
