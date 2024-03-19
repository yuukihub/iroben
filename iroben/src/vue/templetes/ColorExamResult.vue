<template>
  <h2 class="result_title">結果発表</h2>
  <div class="c-score">
    <div class="scores">
      <h2 class="score">{{score}}</h2>
      <span class="slash"></span>
    </div>
    <h3 class="summary">{{summary}}<span class="unit">点</span></h3>
  </div>
  <div>
    <p class="sub_title">
      間違えた色は
      <template v-if="level === 'second'">
        <a href="#">2級一覧ページ</a>
      </template>
      <template v-else-if="level === 'third'">
        <a href="#">3級一覧ページ</a>
      </template>
      で確認できます。
    </p>
    <p class="text">
      また、<a href="#">ペイント機能</a>の不正解のみの<br>
      スイッチをオンにすると、<br>
      今まで間違えた色が表示されます。
    </p>
    <img :src="`../../img/img_${level}_colorPallet.png`" alt="不正解のみを表示したカラーパレット">
    <p class="text">
      ぜひ復習にご活用ください。
    </p>
    <v-ons-button class="c-button" @click="toThirdExam">3級の慣用色テスト</v-ons-button>
  </div>
</template>

<script>
import thirdExam from "../pages/ThirdExam.vue";

export default {
  name: "ColorExamResult",
  props: {
    score: {
      type: Number,
      required: true,
    },
    summary: {
      type: Number,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },

  },
  methods: {
    toThirdExam() {
      this.pageStack.push(thirdExam);
    },
  }
}
</script>

<style lang="scss" scoped>
.result_title {
  text-align: center;
  margin-top: 0;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 32px;
}
.c-score {
  position: relative;
  width: 60px;
  height: 100px;
  margin: 24px auto;
  .scores {
    position: relative;
    width: 100%;
    margin: auto;
  }
  .score {
    display: block;
    font-size: 48px;
    text-align: center;
    margin: 0;
  }
  .slash {
    position: absolute;
    right: -5px;
    bottom: -20px;
    display: block;
    width: 40px;
    border: 1px solid;
    transform: rotate(-30deg);
  }
  .summary {
    position: absolute;
    right: -32px;
    bottom: 30px;
    font-size: 24px;
    margin: 0;
  }
  .unit {
    font-size: 14px;
  }
}
.sub_title {
  margin: 105px auto 16px;
  display: block;
  text-align: center;
}
.text {
  text-align: center;
  margin-bottom: 24px;
}
img {
  display: block;
  margin: 24px auto;
}
.bottom {
  height: 56vh;
}
</style>
