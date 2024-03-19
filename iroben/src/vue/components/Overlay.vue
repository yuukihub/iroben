<template>
  <a href="#" class="overlay" @click="closeModal"></a>
</template>

<script>
export default {
  name: "Overlay",
  methods: {
    closeModal(){
      this.$emit('closeModal');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
.overlay {
  position: absolute;
  left: 0; top: 0;
  width: 100%; height: 100%;
  background: rgba(100, 100, 100, .8);
  z-index: index($z-map, overlay);
}
</style>
