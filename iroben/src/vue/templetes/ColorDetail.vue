<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>
    <div class="colorDetail-wrap">
      <div class="top">
        <div class="characters_wrap">
          <img class="character01" src="../../img/character01_watch.svg" alt="character01">
          <img class="character02" src="../../img/character02_watch.svg" alt="character02">
          <img class="character03" src="../../img/character03_watch.svg" alt="character03">
        </div>
        <img class="wave" src="../../img/img_wave-bottom.svg" alt="wave">
      </div>
      <div class="c-colorCard">
        <img class="eye_image" src="../../img/icon_eye.svg" alt="目">
        <div class="color" :style="`background-color:${item.colorCode}`">
          <div  class="fault_count"
                v-if="faultCountArray[item.id]">
            <img  class="" src="../../img/icon_flag.svg" alt="flag">
            <p>
              不正解：<span class="count">{{faultCountArray[item.id]}}</span>回
            </p>
          </div>
        </div>
        <div class="descBlock">
          <p class="sub_title">
            {{item.subTitle}}
          </p>
          <h2>{{item.title}}</h2>
          <div class="tone_number">
            <p>
              色相番号：
            </p>
            <ul>
              <li v-for="(toneNumber, index) in item.toneNumber" :key="index">
                {{toneNumber}}
              </li>
            </ul>
          </div>
          <p class="desc">
            {{item.description}}
          </p>
        </div>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import customToolbar from '../components/CustomToolbar.vue';

export default {
  name: "colorDetail",
  components: {customToolbar},
  data(){
    return {
      faultItem: this.$store.state[this.level].faultArray,
      faultCountArray: "",
    }
  },
  created() {
    let faultCountArray = [];
    let faultItemArray = JSON.parse(JSON.stringify(this.faultItem));
    for(let key in faultItemArray){
      faultCountArray.push(faultItemArray[key].id);
    }
    // 同じ文字を一度以上カウントしないようにユニークな配列を作成
    const unique = Array.from(new Set(faultCountArray));

    const faultCount = Object.fromEntries(
        unique.map(char => {
          const occurrenceCount = faultCountArray.filter(c => c === char).length;
          return [char, occurrenceCount]
        })
    )
    this.faultCountArray = faultCount;
  },
  props: {
    item: {
      type: Object,
      default: "{}",
      required: true
    },
    level: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss">
@import "./src/scss/foundation/variables";
@import "./src/scss/foundation/mixins";
@import "./src/scss/components/colorCard";
.colorDetail-wrap {
  display: inherit;
  min-height: inherit;
  @include mq(xsmall) {
    padding: 0 16px;
  }
  .c-colorCard {
    @include mq(sp){
      margin-top: 1vh;
    }
  }
  .color {
    position: relative;
    border-radius: 10px 10px 0 0;
    display: block;
    margin: 3%;
    height: 290px;
    @include mq(sp) {
      height: 180px;
    }
    @include mq(xsmall) {
      height: 160px;
    }
    .fault_count {
      background: white;
      display: flex;
      align-items: center;
      padding: 4px;
      position: absolute;
      bottom: 16px;
      right: 16px;
      font-size: 12px;
      img {
        margin-right: 4px;
      }
    }
    .count {
    font-weight: bold;
    }
  }
  .descBlock {
    h2,
    .tone_number {
      display: flex;
      justify-content: center;
    }
    h2 {
      text-align: center;
      font-size: 18px;
      font-weight: bold;
      padding: 4px;
      margin: 0;
    }
    .tone_number {
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 1px solid map_get($color, gray03);
      padding-top: 16px;
      margin: 16px;
      @include mq(sp) {
        padding-top: 8px;
        margin: 8px;
      }
      ul {
        display: flex;
        align-items: center;
      }
      li {
        border: 1px solid #DAE0E6;
        border-radius: 40px;
        padding: 2px 10px;
        text-align: center;
        margin-right: 8px;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .sub_title {
      margin-top: 16px;
      text-align: center;
      @include mq(sp) {
        margin-top: 8px;
      }
    }
    .desc {
      margin: 16px;
      border-top: 1px solid map_get($color, gray03);
      padding-top: 16px;
      @include mq(sp) {
        padding-top: 8px;
      }
    }
  }
  .characters_wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    right: 0;
    top: -90px;
    @include mq(sp){
      top: -80px;
    }
    .character01 {
      width: 13%;
      margin-top: 10px;
    }
    .character02 {
      width: 9%;
      margin-right: 4px;
    }
    .character03 {
      width: 10%;
    }
  }
  .top {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: map_get($color, white);
    .wave {
      position: absolute;
      top: -80px;
      left: 0;
      right: 0;
      @include mq(sp){
        top: -69px;
      }
    }
  }
}
</style>
