<template>
  <div class="colorDetail-wrap">
    <div class="c-colorCard">
      <img class="eye_image" src="../../img/img/common/img_eye.svg" alt="目">
      <div class="color" :style="`background-color:${item.colorCode}`">
        <div  class="fault_count"
              v-if="faultCountArray[item.id]">
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
</template>

<script>
export default {
  name: "ColorDetail",
  data(){
    return {
      faultItem: this.$store.state.questions[this.level].faultArray,
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
      required: true
    },
    level: {
      type: String,
      required: true
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";
@import "./src/scss/components/colorCard";
@import "./src/scss/components/transition";
.colorDetail-wrap {
  margin-top: 120px;
  display: inherit;
  min-height: inherit;
  @include mq(regular) {
    margin-top: 240px;
  }
  @include mq(big) {
    margin-top: 340px;
  }
  @include mq(xsmall) {
    padding: 0 16px;
  }
  .c-colorCard {
    @include KintoSans();
    @include fadeIn();
    margin-bottom: 56px;
    @include mq(sp){
      margin-top: 1vh;
    }
  }
  .eye_image {
    position: absolute;
    top: 12px;
    left: 0;
    right: 0;
    margin: auto;
    z-index: index($z-map, eyeImage);
  }
  .color {
    border-radius: 10px 10px 0 0;
    display: block;
    margin: 3%;
    height: 27vh;
    position: relative;
    @include mq(xsmall) {
      height: 22vh;
    }
    .fault_count {
      font-size: 14px;
      background: white;
      display: flex;
      align-items: center;
      padding: 4px;
      position: absolute;
      bottom: 16px;
      right: 16px;
      p {
        display: flex;
        align-items: center;
      }
      img {
        margin-right: 4px;
      }
    }
    .count {
      font-family: "MiuraGotic",serif;
      font-size: 24px;
      line-height: 60%;
      letter-spacing: -2px;
      margin-right: 4px;
    }
  }
  .descBlock {
    h2,
    .tone_number {
      font-family: "KintoSans", serif;
      font-weight: normal;
      display: flex;
      justify-content: center;
    }
    h2 {
      font-family: "KintoSans", serif;
      font-weight: 500;
      text-align: center;
      font-size: 22px;
      padding: 4px;
      margin: 0;
    }
    .tone_number {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      border-top: 1px solid map_get($color, gray03);
      padding-top: 16px;
      margin: 16px;
      @include mq(sp) {
        padding-top: 8px;
        margin: 8px 8px 0 8px;
      }
      ul {
        display: flex;
        align-items: center;
      }
      li {
        border: 1px solid map_get($color, gray03);
        border-radius: 40px;
        padding: 0 10px;
        text-align: center;
        margin-right: 8px;
        font-size: 14px;
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
        margin: 8px 16px;
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
    top: -40px;
    z-index: -1;
    .character01 {
      width: 18%;
      margin-top: 10px;
    }
    .character02 {
      width: 14%;
      margin-right: 4px;
    }
    .character03 {
      width: 15%;
    }
  }
}
</style>
