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
    resizeCanvas(){
      let canvas = document.getElementById("canvas");
      let colorPalletHeight = document.querySelector(".c-colorPaint").clientHeight;
      let width = window.innerWidth;
      let height = window.innerHeight - colorPalletHeight;
      canvas.setAttribute('width',width);
      canvas.setAttribute('height',height);
    },
  }
}
</script>

<style lang="scss" scoped>
#canvas {
  background-image: url("../../img/img_background.png") !important;
  width: 100%;
}
</style>
