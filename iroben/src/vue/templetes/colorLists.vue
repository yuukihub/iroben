<template>
  <div class="wrap">
    <button @click="clearItem">クリア</button>
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
              <img class="" src="../../img/icon_flag.svg" alt="flag">
              不正解<span class="count">{{faultCountArray[item.id]}}</span>回
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
      faultItem: this.$store.state[this.level].faultArray,
      faultCountArray: "",
    }
  },
  props: {
    colorLists: {
      type: Array,
      default: '[]',
      required: true
    },
    level: {
      type: String,
      required: true
    }
  },
  created() {
    let faultCountArray = [];
    let item = JSON.parse(JSON.stringify(this.faultItem));
    for(let key in item){
      faultCountArray.push(item[key].id);
    }
    // 同じ文字を一度以上カウントしないようにユニークな配列を作成
    const unique = Array.from(new Set(faultCountArray));

    const occurrenceCount = Object.fromEntries(
        unique.map(char => {
          const occurrenceCount = faultCountArray.filter(c => c === char).length;
          return [char, occurrenceCount]
        })
    )
    this.faultCountArray = occurrenceCount;
  },
  methods: {
    pop(){
      this.pageStack.pop();
    },
    getItem (item) {
      this.value = item;
      this.$emit('onClick', this.value)
    },
    clearItem(){
      let items = localStorage.getItem("faultItems");
      this.$store.commit("reset", { level:this.level});
    },
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
    padding: 0.3vh;
    background: map_get($color, white);
    border: 1px solid map_get($color, gray03);
    border-radius: 3px;
  }
  .color {
    width: 5.5vh;
    height: 6.5vh;
  }
  .eyeImage {
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
    }
  }
  .right {
    display: flex;
    align-items: center;
    .faultItem {
      display: flex;
      align-items: center;
      margin-right: 8px;
      img {
        margin-right: 8px;
      }
    }
  }
}
.wave {
  margin-bottom: -3px;
}
</style>
