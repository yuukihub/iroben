<template>
  <button type="button" class="menu-btn" v-on:click="open=!open">
    <i class="fa fa-bars" aria-hidden="true"></i>
  </button>
  <div class="menu" v-bind:class="{'is-active' : open }">
    <div class="menu__item">3級</div>
    <ul>
      <li @click="toThirdColorLists">
        慣用色一覧
      </li>
      <li @click="toThirdExam">
        理解度チェック
      </li>
    </ul>
    <div class="menu__item">2級</div>
    <ul>
      <li @click="toSecondColorLists">
        慣用色一覧
      </li>
      <li @click="toSecondExam">
        理解度チェック
      </li>
    </ul>
    <div class="menu__item">1級</div>
    <p>準備中です</p>
    <div class="menu__item">その他</div>
    <ul>
      <li @click="toColorPaint">ペイント機能</li>
    </ul>
  </div>
</template>

<script>
import paint from "@/vue/pages/Paint.vue";
import secondExam from "@/vue/pages/SecondExam.vue";
import secondColorLists from "@/vue/pages/SecondColorLists.vue";
import thirdExam from "@/vue/pages/ThirdExam.vue";
import thirdColorLists from "@/vue/pages/ThirdColorLists.vue";

export default {
  name: "SideNavigation",
  data(){
    return {
      open: false
    }
  },
  props: ['pageStack'],
  methods: {
    push() {
      this.pageStack.push(home);
    },
    pop(){
      this.pageStack.pop();
    },
    toColorPaint(){
      this.pageStack.push(paint);
      //console.log("neko")
    },
    toSecondExam() {
      this.pageStack.push(secondExam);
    },
    toSecondColorLists() {
      this.pageStack.push(secondColorLists);
    },
    toThirdExam() {
      this.pageStack.push(thirdExam);
    },
    toThirdColorLists() {
      this.pageStack.push(thirdColorLists);
    },
  },
}
</script>

<style lang="scss" scoped>
.menu-btn{
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 3;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #333;
  color: #fff;
}

.menu{
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #555;
}
.menu__item{
  width: 100%;
  height: auto;
  padding: .5em 1em;
  text-align: center;
  color: #fff;
  box-sizing: border-box;
}



/* アニメーション前のメニューの状態 */
.menu{
  transform: translateX(100vw);
  transition: all .3s linear;
}
/* アニメーション後のメニューの状態 */
.menu.is-active{
  transform: translateX(0);
}
</style>
