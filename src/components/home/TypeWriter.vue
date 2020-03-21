<template>
  <div id="typeWriter">
    <h1 id="typeWriterContent">{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "TypeWriter",
  props: {
    name: String
  }
};
</script>

<style>
#typeWriter {
  display: flex;
  justify-content: flex-start;
}

#typeWriterContent {
  font-size: 7vw;
  overflow: hidden;
  border-right: 0.15em solid orange;
  white-space: nowrap;
  margin: 0 auto;
  letter-spacing: 0.15em;
  animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}
</style>
