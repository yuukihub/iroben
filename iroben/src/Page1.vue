<template>
  <v-ons-page>
    <custom-toolbar>Page 1</custom-toolbar>
    <h1>
      <img class="logo" src="./img/logo.svg" alt="iroben">
    </h1>

    <img class="slider" src="./img/iphone.png" alt="iphone">
    <div class="characters-wrap">
      <img class="character01" src="./img/character01.svg" alt="character01">
      <img class="character02" src="./img/character02.svg" alt="character02">
      <img class="character03" src="./img/character03.svg" alt="character03">
    </div>

    <div class="bottom">
      <img src="./img/mave-bottom.svg" alt="wave">
      <div class="bottom-inner">
        <div class="bar">
          <p class="desc">アプリをご利用いただくには、<br>
            利用規約をご確認の上ご利用ください</p>
          <div class="agree">
            <input type="checkbox">
            <a href="#">利用規約</a>
            <p>に同意する</p>
          </div>
          <div class="inner">
            <v-ons-button class="c-button" @click="push">はじめる</v-ons-button>
          </div>
        </div>
      </div>
    </div>

  </v-ons-page>
</template>

<script>
  import customToolbar from './CustomToolbar.vue';
  import page2 from './Page2.vue';
  export default {
     methods: {
       pop(){
         this.pageStack.pop();
       },
       push() {
         this.pageStack.push(page2);
       },
     },
     props: ['pageStack'],
     components: { customToolbar },
     key: 'key_page1',
  }
</script>

<style lang="scss" scoped>
h1 {
  position: absolute;
  top: 115px;
  left: 0;
  right: 0;
  margin: 0;
}
.logo {
  display: block;
  max-width: 244px;
  width: 100%;
  margin: auto;
}
.slider {
  position: absolute;
  bottom: 70px;
  left: 0;
  right: 0;
  margin: auto;
}
.characters-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 27vh;
  z-index: 1;
  .character01 {
    max-width: 50px;
    width: 100%;
  }
  .character02 {
    max-width: 54px;
    width: 100%;
  }
  .character03 {
    max-width: 76px;
    width: 100%;
  }
}
.bottom {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  &-inner {
    position: relative;
  }
  .bar {
    background: white;
    height: 217px;
  }
  img {
    margin: -7px;
  }
  .desc {
    margin: 0;
    padding: 16px 0;
    text-align: center;
  }
  .agree {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 0 16px 0;
    p {
      margin: 0;
    }
  }
}
</style>
