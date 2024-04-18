<template>
  <v-ons-page>
    <header class="l-header">
      <div class="top">
        <div class="bar"></div>
      </div>
      <img src="../../img/img/common/img_wave_top.svg" alt="wave">
    </header>
    <h1>
      <img class="logo" src="../../img/img/top/img_top_title.svg" alt="iroben">
    </h1>
    <main-visual></main-visual>
    <div class="bottom">
      <div class="bottom_inner">
        <p class="desc">アプリをご利用いただくには、<br>
          利用規約をご確認の上ご利用ください</p>
        <div class="agree">
          <input type="checkbox" v-model="checked">
          <div class="agree_inner">
            <a href="#" @click="toAgreement">利用規約</a>
            <p>に同意する</p>
          </div>
        </div>
        <div class="button_area">
          <custom-button label="はじめる"
                      :is-disabled-flag="checked"
                      @click="toHome"></custom-button>
        </div>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import customToolbar from '../components/CustomHeader.vue';
import CustomButton from "@/vue/components/CustomButton.vue";
import Home from './Home.vue';
import Agreement from "@/vue/pages/Agreement.vue";
import MainVisual from "@/vue/components/MainVisual.vue";
import Tutorial from "@/vue/pages/Tutorial.vue";

export default {
  name: "top",
  components: {CustomButton, Tutorial, MainVisual, customToolbar},
  data() {
    return {
      checked: false,
      today: "",
      timestamp:"",
      expire:30,
      showTutorialFlag: true,
    }
  },
  beforeCreate() {
    // 現在の日付データを取得
    //this.today = new Date();

    //30日後の日付データを作成
    //this.today.setTime(this.today.getTime() + this.expire*24*60*60*1000);

    //GMT形式に変換して変数date2に格納する
    //this.timestamp = this.today.toGMTString();





    if (navigator.cookieEnabled) {
      var name, count = 1;
      if (document.cookie.indexOf("name=") === -1) { // cookieのセットを確認する。
        name = window.prompt("名前の入力", ""); // cookieがない場合、画面から入力する。
        // name, countの有効期限は5分後をセット
        var now = new Date();
        now.setMinutes(now.getMinutes() + 5);
        document.cookie = "name=" + encodeURIComponent(name) + ";expires=" + now.toUTCString();
        document.cookie = "count=1; max-age=300";
      } else {
        var cookies = document.cookie.split("; "); // cookieを"; "で分割し配列に変換する
        for (var i = 0; i < cookies.length; i++) {
          var cookie = cookies[i].split("="); // "="で分割して名前と値に分割する
          switch(cookie[0]) {
            case "name" :
              name = cookie[1];
              break;
            case "count" :
              count = cookie[1];
              break;
          }
        }
      }

      alert("名前は" + decodeURIComponent(name) + "です。訪問回数は" + count + "回です。");
      count = parseInt(count) + 1;  // 訪問回数に１加算する
      document.cookie = "count=" + count + "; max-age=300";
    }


  },
  methods: {
    pop() {
      this.pageStack.pop();
    },
    toHome() {
      this.pageStack.push(Home);
    },
    toAgreement() {
      this.pageStack.push(Agreement);
    }
  },
  props: ["pageStack"],
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";
@import '../src/scss/components/checkbox';
@import "./src/scss/components/transition";
@import "./src/scss/components/contentArea";

.l-header {
  .top {
    .bar {
      background: white;
      height: 2vh;
    }

    img {
      width: 100%;
    }
  }
}

h1 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 !important;
  top: 14vh;
  @include mq(xsmall) {
    top: 10vh;
  }
}

.img_wave {
  width: 100%;
  position: absolute;
  top: -14vh;
  z-index: -1;
}

.logo {
  display: block;
  width: 48vw;
  margin: auto;
  animation: fadeInUp02 1s 0s ease-in-out forwards;
  @include mq(regular) {
    width: 40vw;
  }
}
</style>
