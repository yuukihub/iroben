<template>
  <div>
    <div class="c-loading">
      <div id="h">
        <div class="strand_h" id="blue"></div>
        <div class="strand_h" id="pink"></div>
      </div>

      <div id="v">
        <div class="strand_v" id="green"></div>
        <div class="strand_v" id="yellow"></div>
      </div>
    </div>
    <overlay></overlay>
  </div>
</template>

<script>
import Overlay from "@/vue/components/Overlay.vue";

export default {
  name: "Loading",
  components: {Overlay}
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
p {
  position: absolute;
  top: 0;
  z-index: index($z-map, loading);
}
.c-loading {
  margin: auto;
  height: 50px;
  width: 50px;
  transform: rotate(-16deg);
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: index($z-map, loading);
}

.strand_h {
  height: 10px;
  width: 50px;
  border-radius: 10px;
  opacity: 0.8;
}

#blue {
  margin-top: 8px;
  background-color: #6dcadc;
  animation: blue 2s infinite;
}

#pink {
  margin-top: 9px;
  background-color: #e01463;
  animation: pink 2s infinite;
}

@keyframes blue {
  0% {
    transform: translateX(0);
    width: 10px;
  }
  35% {
    width: 50px;
    transform: translateX(0);
  }
  65%{
    transform: translateX(40px);
    width: 10px;
  }
  100% {
    transform: translateX(0);
    width: 10px;
  }
}

@keyframes pink {
  0% {
    transform: translateX(40px);
    width: 10px;
  }
  35% {
    width: 50px;
    transform: translateX(0);
  }
  65%{
    transform: translateX(0px);
    width: 10px;
  }
  100% {
    transform: translateX(40px);
    width: 10px;
  }
}

#v {
  position: relative;
  top: -40px;
}

.strand_v {
  height: 50px;
  width: 10px;
  border-radius: 10px;
  opacity: 0.8;
}

#green {
  margin-left: 9px;
  display: inline-block;
  background-color: #3db991;
  animation: green 2s infinite;
}

#yellow {
  display: inline-block;
  margin-left: 8px;
  background-color: #e9a81f;
  animation: yellow 2s infinite;
}

@keyframes green {
  0% {
    transform: translateY(40px);
    height: 10px;
  }
  35% {
    height: 50px;
    transform: translateY(0);
  }
  65%{
    transform: translateY(0);
    height: 10px;
  }
  100% {
    transform: translateY(40px);
    height: 10px;
  }
}

@keyframes yellow {
  0% {
    transform: translateY(0);
    height: 10px;
  }
  35% {
    height: 50px;
    transform: translateY(0);
  }
  65%{
    transform: translateY(40px);
    height: 10px;
  }
  100% {
    transform: translateY(0px);
    height: 10px;
  }
}

a,
a:visited {
  text-decoration: none;
  color: #6dcadc;
}

a:focus,
a:hover {
  color: #e01463;
}
</style>
