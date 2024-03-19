<template>
  <div class="wrap">
    <div v-if="status">
      <div class="exam_inner">
        <div class="c-colorCard">
          <img class="eye_image" src="../../img/icon_eye.svg" alt="目">
          <div class="color" :style="{background: currentQuestion.colorCode}"></div>
          <div class="counter">
            {{number+1}} / {{questions.length}}
          </div>
        </div>
      </div>
      <div class="exam_inner">
        <button
            class="c-answerButton"
            href="#"
            v-for="(answer,index) in setChoice"
            @click="selectAnswer(index)"
            :class="{'is-disabled':isShowIllustration}">
          <div v-if="answerFlag">
            <div class="answer_colorWrap" :style="{background: answer.colorCode}">
              <div class="answer_color"></div>
            </div>
          </div>
          <div class="answer">{{answer.name}}</div>
          <div v-if="!answerFlag">
            <img src="../../img/icon_circle.svg" alt="アイコン">
          </div>
          <div v-else="answerFlag">
            <div v-if="currentQuestion.answer === index+1">
              <img src="../../img/icon_success.svg" alt="アイコン">
            </div>
            <div v-else>
              <img src="../../img/icon_error.svg" alt="アイコン">
            </div>
          </div>
        </button>
      </div>
    </div>
    <div v-else>
      <h2 class="result_title">結果発表</h2>
      <div class="c-score">
        <div class="scores">
          <h2 class="score">{{correctCount}}</h2>
          <span class="slash"></span>
        </div>
        <h3 class="summary">{{questions.length}}<span class="unit">点</span></h3>
      </div>
      <div class="score_wrap">
        <p class="sub_title">
          <templete v-if="level === 'second'">
            <a href="#" @click="toColorList">2級の慣用色一覧</a>に<br>
          </templete>
          <template v-else-if="level === 'third'">
            <a href="#" @click="toColorList">3級の慣用色一覧</a>に<br>
          </template>
          間違えた回数を記録しています。
        </p>
        <p class="text">
          また、間違えた色は<a href="#" @click="toPaint">ペイント機能</a>で<br>
          落書きすることもできます。
        </p>
        <img :src="`../../img/img_explain_ColorPalletToggle.png`" alt="不正解のみを表示したカラーパレット">
        <p class="text">
          ペイント機能の<br class="is-sp">
          「不正解のみスイッチ」を<br>
          オンにすると、<br class="is-sp">
          間違えた色が表示されます。<br>
        </p>
        <p class="text">
          復習にぜひご活用ください。
        </p>
      </div>
    </div>

    <div class="result-wrap">
      <div v-if="correctFlag">
        <confetti></confetti>
        <div class="result_image">
          <img src="../../img/img_success.svg" alt="正解">
          <button @click="next()">{{btnTitle}}</button>
        </div>
      </div>
      <div class="result_image" v-if="faultFlag">
        <div class="result_image">
          <img class="result_image" src="../../img/img_error.svg" alt="不正解">
          <button @click="next()">{{btnTitle}}</button>
        </div>
      </div>
      <div class="l-overlay"></div>
    </div>

    <div class="bottom">
      <img src="../../img/img_wave-bottom.svg" alt="wave">
    </div>
  </div>
</template>

<script>
import Confetti from "@/vue/components/Confetti.vue";

export default {
  name: "colorExam",
  components: {
    Confetti
  },
  data(){
    return {
      number: 0,
      correctCount: 0,
      questionLength: this.questions.length,
      status: true,
      correctFlag: false,
      faultFlag: false,
      btnTitle: "次へ進む",
      answerFlag: false,
      faultItemArray: [],
      isShowIllustration: false,
    }
  },
  props: {
    questions: {
      type: Array,
      default: "[]",
      required: true
    },
    level: {
      type: String,
      required: true
    }
  },
  computed: {
    currentQuestion() {
      //最後の問題の場合
      if (this.questionLength === 1) {
        //ボタンの文言を変更
        this.btnTitle = "結果を見る";
      }
      //ランダムに問題を出題
      for (let i = (this.questions.length - 1); 0 < i; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        let selected = this.questions[i];
        this.questions[i] = this.questions[random];
        this.questions[random] = selected;
      }
      return this.questions[this.number];

    },
    setChoice(){
      //ランダムに選択肢を選定
      let choicesArray = this.currentQuestion.choices;
      for (let i = choicesArray.length - 1; i > 0; i--) {
        let random = Math.floor(Math.random() * (i + 1));
        let tmp = choicesArray[i];
        choicesArray[i] = choicesArray[random];
        choicesArray[random] = tmp;
      }
      return choicesArray[0];
    }
  },
  methods: {
    selectAnswer(index) {
      this.answerFlag = true;
      this.isShowIllustration = true;

      if (index + 1 === this.currentQuestion.answer) {
        //正解の場合
        this.correctCount++;
        this.correctFlag = true;
      } else {
        //不正解の場合
        this.$store.commit("addFaultItem", { level:this.level , item: this.currentQuestion});
        this.faultFlag = true;
      }

    },
    next() {
      this.number++;
      this.questionLength--;
      this.correctFlag = false;
      this.faultFlag = false;
      this.answerFlag = false;
      this.isShowIllustration = false;

      if(this.questionLength === 0){
        this.status = false;
      }
    },
    intRandom(min, max){
      return Math.floor( Math.random() * (max - min + 1)) + min;
    },
    toPaint(){
      this.$emit('toPaint');
    },
    toColorList(){
      this.$emit('toColorList');
    },
  }
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
@import "./src/scss/components/colorCard";
.c-answerButton {
  display: flex;
  align-items: center;
  font-size: 14px;
  background: map_get($color, white);
  border: 1px solid map_get($color, gray03);
  border-radius: 4px;
  max-width: 342px;
  width: 100%;
  padding: 4px 24px;
  height: 48px;
  color: map_get($color, text);
  margin: 24px auto;
  &:focus {
    border: 2px solid map_get($color, link);
  }
  &.is-disabled {
    pointer-events: none;
  }
  .answer {
    display: block;
    text-align: center;
    width: 100%;
    &_color {
      width:28px;
      height: 32px;
      border-radius: 3px;
      border: 3px solid map_get($color, white);
    }
    &_colorWrap {
      border: 1px solid map_get($color, gray03);
      border-radius: 3px;
    }
  }
  .circle {
    display: block;
    width: 24px;
    height: 24px;
    border: 1px solid map_get($color, gray03);
    border-radius: 100%;
  }
}

.exam_inner {
  @include mq(xsmall) {
    padding: 0 16px;
  }
}
.result_image {
  img {
    max-width: 160px;
    width: 100%;
    display: block;
    position: absolute;
    top: -320px;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: fadeIn 0.8s ease 0.1s 0.8 normal backwards;
  }
  button {
    position: absolute;
    top: -40px;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100px;
    height: 40px;
    margin: auto;
    text-align: left;
    background: map_get($color, white);
    border-radius: 5px;
    padding: 8px;
    animation: fadeIn 0.8s ease 0.1s 0.8 normal backwards;
    border: 1px solid map_get($color, gray03);
    &::after {
      content: url("../../img/icon_movingArrowRight.svg");
      width: 24px;
      height: 24px;
      position: absolute;
      top: 6px;
      right: 5px;
    }
  }
}
.color {
  background: #87CEEB;
  border-radius: 10px 10px 0 0;
  display: block;
  margin: 3%;
  height: 365px;
  @include mq(sp) {
    height: 230px;
  }
}
.counter {
  margin: 16px 0;
  text-align: center;
}
.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  height: 60vh;
  background: map_get($color, white);
  @include mq(sp) {
    height: 52vh;
  }
  img {
    position: absolute;
    top: -70px;
    left: 0;
    right: 0;
  }
}
.result_title {
  text-align: center;
  margin-top: 0;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 40px;
}
.score_wrap {
  background: map_get($color, white);
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
  margin: 85px auto 16px;
  display: block;
  text-align: center;
  @include mq(sp) {
    margin: 105px auto 16px;
  }
}
.text {
  text-align: center;
  padding-bottom: 24px;
}
img {
  display: block;
  margin: 0 auto 24px ;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
