<template>
  <div class="wrap">
    <div v-if="status">
      <div class="exam_inner">
        <div class="c-colorCard">
          <img class="eye_image" src="../../img/img/common/img_eye.svg" alt="目">
          <div class="color" :style="{background: currentQuestion.colorCode}"></div>
          <div class="counter">
            <span class="current_number">
              {{ number + 1 }}
            </span>
            / {{ questions.length }}
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
          <div class="answer">{{ answer.name }}</div>
          <div v-if="!answerFlag">
            <img class="result_icon" src="../../img/icon/icon_circle.svg" alt="アイコン">
          </div>
          <div v-else="answerFlag">
            <div v-if="currentQuestion.answer === index+1">
              <img class="result_icon" src="../../img/icon/icon_success.svg" alt="アイコン">
            </div>
            <div v-else>
              <img class="result_icon" src="../../img/icon/icon_error.svg" alt="アイコン">
            </div>
          </div>
        </button>
      </div>
    </div>
    <div v-else>
      <h2 class="result_title">結果発表</h2>
      <div class="c-score">
        <div class="scores">
          <h2 class="score">{{ correctCount }}</h2>
          <span class="slash"></span>
        </div>
        <h3 class="summary">{{ questions.length }}<span class="unit">点</span></h3>
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
          落書きすることもできます。<br>
          復習にぜひご活用ください。
        </p>
        <img class="img_colorPallet"
             src="../../img/img/exam/img_explain_ColorPalletToggle.png"
             alt="不正解のみを表示したカラーパレット">
      </div>
    </div>

    <div class="result-wrap">
      <div class="result_image">
        <template v-if="correctFlag">
          <confetti></confetti>
          <img src="../../img/img/exam/img_success.svg" alt="正解">
          <button @click="next()">{{ btnTitle }}</button>
        </template>
        <template v-if="faultFlag">
          <img src="../../img/img/exam/img_error.svg" alt="不正解">
          <button @click="next()">{{ btnTitle }}</button>
        </template>
      </div>
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
  data() {
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
    setChoice() {
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
        this.$store.commit("addFaultItem", {level: this.level, item: this.currentQuestion});
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

      if (this.questionLength === 0) {
        this.status = false;
      }
    },
    intRandom(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    toPaint() {
      this.$emit('toPaint');
    },
    toColorList() {
      this.$emit('toColorList');
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";
@import "./src/scss/components/colorCard";
.wrap {
  margin-top: 112px;
}
.c-answerButton {
  display: flex;
  align-items: center;
  background: map_get($color, white);
  border: 1px solid map_get($color, gray03);
  border-radius: 4px;
  font-size: 16px;
  max-width: 342px;
  width: 100%;
  padding: 4px 24px;
  color: map_get($color, text);
  margin: 24px auto;
  min-height: 48px;
  @include mq(regular) {
    max-width: 440px;
  }
  @include mq(sp) {
    margin: 16px auto;
    max-width: 278px;
    width: 100%;
  }

  &:focus {
    border: 2px solid map_get($color, link);
  }

  &:last-child {
    margin-bottom: 56px;
  }

  &.is-disabled {
    pointer-events: none;
  }

  .answer {
    display: block;
    text-align: center;
    width: 100%;

    &_color {
      width: 40px;
      height: 48px;
      border-radius: 0;
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
  position: absolute;
  top: 153px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  height: min-content;
  text-align: center;

  img {
    max-width: 160px;
    width: 100%;
    display: block;
    margin: 0 auto 16px;
    animation: fadeIn 0.8s ease 0.1s 0.8 normal backwards;
  }

  button {
    width: max-content;
    height: 40px;
    margin: auto;
    text-align: left;
    background: map_get($color, white);
    border-radius: 5px;
    padding: 8px;
    animation: fadeIn 0.8s ease 0.1s 0.8 normal backwards;
    border: 1px solid map_get($color, gray03);
    font-size: 16px;
  }
}

.counter {
  font-family: "MiuraGotic", serif;
  font-size: 24px;
  letter-spacing: -2px;
  margin: 16px 0;
  text-align: center;
  color: map_get($color, text);

  .current_number {
    font-family: "MiuraGotic", serif;
    font-size: 32px;
  }
}

.result_title {
  @include KintoSans();
  font-weight: 500;
  text-align: center;
  margin-top: 0;
  font-size: 18px;
  margin-bottom: 40px;
}

.score_wrap {
  position: relative;
  @include KintoSans();
  max-width: 93%;
  width: 100%;
  background: map_get($color, white);
  margin: 64px auto 24px;
  padding: 24px 16px;

  &::before {
    content: "";
    background-image: url("../../img/img/exam/img_characters_watch.svg");
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: -53px;
    left: 0;
    right: 0;
    width: 160px;
    height: 90px;
    margin: auto;
    z-index: -1;
  }
}

.c-score {
  position: relative;
  width: max-content;
  height: 100px;
  margin: 24px auto;
  color: map_get($color, text);

  .scores {
    position: relative;
    width: 100%;
    margin: auto;
  }

  .score {
    font-family: "MiuraGotic", serif;
    letter-spacing: -8px;
    font-size: 88px;
    display: block;
    text-align: center;
    margin: 0;
  }

  .slash {
    position: absolute;
    right: -12px;
    bottom: -26px;
    display: block;
    width: 40px;
    border: 1px solid;
    transform: rotate(-30deg);
  }

  .summary {
    font-family: "MiuraGotic", serif;
    font-size: 40px;
    letter-spacing: -3px;
    position: absolute;
    right: -38px;
    bottom: 9px;
    margin: 0;
  }

  .unit {
    font-size: 14px;
  }
}

.sub_title {
  margin: 0 auto 16px;
  display: block;
  text-align: center;
  @include mq(sp) {
    margin: auto;
  }
}

.text {
  text-align: center;
}

.img_colorPallet {
  display: block;
  margin: 24px auto;
}

.result_icon {
  width: 24px;
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
