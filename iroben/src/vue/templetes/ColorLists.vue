<template>
  <custom-toolbar :title="title"
                  :custom-button-flag="true"
                  :custom-button-disabled-flag="faultItem.length"
                  @clear="openConfirmModal"></custom-toolbar>
  <div class="wrap">
    <div class="characters_wrap">
      <img class="character01" src="../../img/character01_watch.svg" alt="character01">
      <img class="character02" src="../../img/character02_watch.svg" alt="character02">
      <img class="character03" src="../../img/character03_watch.svg" alt="character03">
    </div>
    <img class="wave" src="../../img/img_wave-bottom.svg" alt="wave">
    <ul class="c-colorLists">
      <li v-for="(item, index) in colorLists" :key="index" @click="getItem(item)">
        <div class="left">
          <div class="colorPanel">
            <img class="eye_image" src="../../img/icon_eye.svg" alt="目">
            <div class="color" :style="{background: item.colorCode}">
            </div>
          </div>
          <span class="title">
              {{item.title}}
            </span>
        </div>
        <div class="right">
            <span class="faultItem"
                  :class="{'is-disabled':!faultCountArray[item.id]}">
              <img  class="" src="../../img/icon_flag.svg"
                    v-if="faultCountArray[item.id]"
                    alt="flag">
              不正解
              <span v-if="!faultCountArray[item.id]">
                <span class="count">0</span>
              </span>
              <span v-else>
                <span class="count" :id="faultCountArray[item.id]">{{faultCountArray[item.id]}}</span>
              </span>
              <span class="unit">
                回
              </span>
            </span>
          <img src="../../img/icon_arrowRight.svg" alt="右矢印">
        </div>
      </li>
    </ul>
  </div>
  <transition appear>
    <modal v-show="openModalFlag"
           :buttonFlag="true"
           :ok-label="'削除する'"
           :cancel-label="'キャンセル'"
           @click="closeModal"
           @runProcess="clearItem">
      <div class="modal-error">
        <h4>確認</h4>
        <p class="sub_title">不正解回数をリセットします</p>
        <p class="desc">
          カラーパレットに記録されている<br>
          <span v-if="level === 'second'">2</span>
          <span v-else-if="level === 'third'">3</span>
          級の「不正解のみ」の色も<br>
          同時にリセットされます。
        </p>
        <img :src="`../../img/img_${level}_colorPallet.png`" alt="不正解のみを表示したカラーパレット">
        <p class="desc">
          本当に削除しますか？
        </p>
      </div>
    </modal>
  </transition>

  <transition appear>
    <loading v-show="deleteFlag"></loading>
  </transition>

</template>

<script>
import Modal from "@/vue/components/Modal.vue";
import Loading from "@/vue/components/Loading.vue";
import TheMiniButton from "@/vue/components/TheMiniButton.vue";
import CustomToolbar from "@/vue/components/CustomToolbar.vue";

export default {
  name: "colorLists",
  components: {CustomToolbar, TheMiniButton, Loading, Modal},
  data () {
    return {
      value: String,
      faultItem: this.$store.state[this.level].faultArray,
      faultCountArray: "",
      icon: "",
      openModalFlag: false,
      deleteFlag: false,
    }
  },
  props: {
    colorLists: {
      type: Array,
      default: "[]",
      required: true
    },
    level: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
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
  methods: {
    pop(){
      this.pageStack.pop();
    },
    getItem (item) {
      this.value = item;
      this.$emit('onClick', this.value)
    },
    openConfirmModal() {
      this.openModalFlag = true;
    },
    closeModal(){
      this.openModalFlag = false;
    },
    clearItem(){
      this.openModalFlag = false;
      this.deleteFlag = true;
      this.$store.commit("reset", { level:this.level});

      setTimeout(() => {
            this.faultCountArray = true;        //表記を「0回」に戻す
            this.deleteFlag = false           //ローディングを非表示
          }
          ,2500
      )
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";
@import "./src/scss/components/transition";
.wrap {
  position: relative;
}
.c-colorLists {
  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    background: map_get($color, white);
    border-bottom: 1px solid map_get($color, gray03);
    @include mq(xsmall) {
      padding: 12px 8px;
    }
  }
  .colorPanel {
    position: relative;
    padding: 0.3vh;
    background: map_get($color, white);
    border: 1px solid map_get($color, gray03);
    border-radius: 3px;
  }
  .color {
    width: 5.5vh;
    height: 6.5vh;
    @include mq(xsmall) {
      width: 4.5vh;
      height: 5.5vh;
    }
  }
  .eye_image {
    position: absolute;
    top: 0px;
    left: 0;
    right: 0;
    margin: auto;
    max-width: 2.3vh;
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
      @include mq(xsmall) {
        margin-left: 8px;
      }
    }
  }
  .right {
    display: flex;
    align-items: center;
    .faultItem {
      display: flex;
      align-items: center;
      margin-right: 8px;
      @include mq(xsmall) {
        margin-right: 0;
      }
      &.is-disabled {
        color: map_get($color, gray02);
      }
      img {
        margin-right: 8px;
        @include mq(xsmall) {
          margin-right: 4px;
          width: 12px;
        }
      }
      .count {
        font-weight: bold;
        margin: 0 2px 0 2px;
        @include mq(xsmall) {
          font-size: 12px;
        }
      }
    }
  }
}
.wave {
  margin-bottom: -3px;
}
.modal-error {
  h4 {
    font-size: 16px;
    font-weight: bold;
    background: map_get($color, error);
    border-radius: 6px 6px 0 0;
    color: map_get($color, white);
    padding: 24px 0;
    text-align: center;
    margin: 0;
  }
  .sub_title {
    text-align: center;
    margin: 16px auto;
    font-weight: bold;
  }
  .desc {
    text-align: center;
    padding: 0 24px;
  }
  img {
    width: 180px;
    height: auto;
    display: block;
    margin: 16px auto;
  }
}
.characters_wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: -10px;
  @include mq(sp){
    top: 0px;
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
</style>
