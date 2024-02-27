<template>
  <div class="wrap">
    <img class="wave" src="../../img/img_wave-bottom.svg" alt="wave">
    <ul class="c-colorLists">
      <li v-for="(item, index) in colorLists" :key="index" @click="getItem(item)">
        <div class="left">
          <div class="colorPanel">
            <img class="eyeImage" src="../../img/icon_eye.svg" alt="目">
            <div class="color" v-bind:style="{background: item.colorCode}">
            </div>
          </div>
          <span class="title">
              {{item.title}}
            </span>
        </div>
        <div class="right">
            <span class="faultItem">
              不正解：<span class="count">1</span>回
            </span>
          <img src="../../img/icon_arrowRight.svg" alt="右矢印">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "colorLists",
  data () {
    return {
      value: String,
    }
  },
  methods: {
    pop(){
      this.pageStack.pop();
    },
    getItem (item) {
      this.value = item;
      this.$emit('onClick', this.value)
    }
  },
  props: {
    colorLists: {
      type: Array,
      default: '[]',
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
.c-colorLists {
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 24px;
    background: map_get($color, white);
    border-bottom: 1px solid map_get($color, gray03);
  }
  .colorPanel {
    position: relative;
    padding: 4px;
    background: map_get($color, white);
    border: 1px solid map_get($color, gray03);
    border-radius: 3px;
  }
  .color {
    width: 42px;
    height: 48px;
  }
  .eyeImage {
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 18px;
    width: 100%;
  }
  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: map_get($color, text);
    text-decoration: none;
  }
  .left {
    display: flex;
    align-items: center;
    .title {
      margin-left: 16px;
    }
  }
  .right {
    display: flex;
    align-items: center;
    .faultItem {
      margin-right: 8px;
    }
  }
}
.wave {
  margin-bottom: -3px;
}
</style>
