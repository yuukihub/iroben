<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>

    <div class="toggle_wrap">
      <toggle @onClick="toggle()"></toggle>
    </div>

    <div v-if="isActive === false">
      初期の内容
      <div class="c-colorLists">
        <ul>
          <li v-for="(item, index) in secondExam" :key="index">
            <div class="color" v-bind:style="{background: item.colorCode}">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      切り替えた内容
      <div class="c-colorLists">
        <ul>
          <li v-for="(item, index) in faultCountArray" :key="index">
            <div class="color" v-bind:style="{background: item.colorCode}">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </v-ons-page>
</template>

<script>
import customToolbar from "../components/CustomToolbar.vue";
import {secondExam} from "@/resource/secondExam";
import Toggle from "@/vue/components/Toggle.vue";

export default {
  name: "ColorPaint",
  components: {
    Toggle,
    customToolbar,
  },
  data(){
    return {
      faultItem: this.$store.state["second"].faultArray,
      faultCountArray: "",
      secondExam: secondExam,
      isActive: false
    }
  },
  created() {
    //this.$store.stateのfaultArrayに重複して入っている色は削除
    let faultItemArray = JSON.parse(JSON.stringify(this.faultItem));
    this.faultCountArray = Array.from(
        new Map(faultItemArray.map((faultItemArray) => [faultItemArray.id, faultItemArray])).values()
    );
  },
  methods: {
    toggle() {
      this.isActive = !this.isActive
    }
  },
}
</script>

<style lang="scss" scoped>
.toggle_wrap {
  display: flex;
  align-items: center;
}
.toggle_title {
  margin-right: 4px;
}
.c-colorPallet {
  width: 100%;
}
.c-colorLists{
  ul {
    display: flex;
    flex-wrap: wrap;
  }
}
.color {
  width: 2vh;
  height: 2vh;
  border-radius: 100%;
  margin: 0 4px 4px 0;
}
.active {
  color:red;
}
</style>
