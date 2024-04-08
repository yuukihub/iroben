<template>
  <canvas id="canvas"></canvas>
</template>

<script>
export default {
  name: 'ColorPalletCanvas',
  mounted() {
    this.resizeCanvas();
  },
  methods: {
    resizeCanvas() {
      let canvas = document.getElementById("canvas");
      let width = window.innerWidth;
      let height = window.innerHeight;
      canvas.setAttribute('width', width);
      canvas.setAttribute('height', height);
    },
  }
}
</script>

<style lang="scss" scoped>
#canvas {
  position: absolute;
  top: 0;
  background-image: url("../../img/img/paint/img_background.png") !important;
  width: 100%;
  z-index: -1;
  height: 100vh;
}
</style>
