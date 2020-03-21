<template>
  <div id="homePage">
    <div id="stageOne">
      <TypeWriter :name="name"></TypeWriter>
      <div class="quote">
        <Quote></Quote>
      </div>
      <div class="centerContent">
        <b-button>Download</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import TypeWriter from "./TypeWriter";
import Quote from "./Quote";

export default {
  components: { TypeWriter, Quote },
  name: "HomePage",
  data() {
    return {
      name: "Aäron Noels,"
    };
  }
};
</script>

<style>
#stageOne {
  display: flex;
  flex-direction: column;
  height: 80vh;
}

#cvButton {
  text-decoration: none;
  background-color: transparent;
  border: 3px solid gray;
  border-radius: 25px;
  color: grey;
  font-size: 32px;
  padding: 16px;
}

#cvButton:visited {
  text-decoration: none;
}

.quote {
  display: flex;
  text-align: center;
}

.centerContent {
  display: flex;
  justify-content: center;
}
</style>
