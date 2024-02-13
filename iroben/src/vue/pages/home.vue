<template>
  <v-ons-page>
    <custom-toolbar :back-label="'Page 1'">Page 2</custom-toolbar>
    <p style="text-align: center">homeだよ</p>
    <div class="characters-wrap">
      <img class="character03" src="../../img/character03_art.svg" alt="character03">
      <img class="character02" src="../../img/character02_art.svg" alt="character02">
      <img class="character01" src="../../img/character01_art.svg" alt="character01">
    </div>
    <div class="bottom">
      <img src="../../img/mave-bottom.svg" alt="wave">
    </div>
  </v-ons-page>
</template>

<script>
import customToolbar from '../../CustomToolbar.vue';
//import app from './App.vue';

export default {
  name: "home",
  methods: {
    pop() {
      this.pageStack.pop();
    }
  },
  props: ['pageStack'],
  components: { customToolbar },
  key: 'key_page2',
}
</script>

<style lang="scss" scoped>
.characters-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 2vh;
  .character01 {
    width: 18%;
  }
  .character02 {
    width: 17%;
  }
  .character03 {
    width: 18%;
  }
}
.bottom {
  img {
    position: absolute;
    bottom: 0;
  }
}
</style>
