<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>
    <ul class="c-colorLists">
      <li v-for="(item, index) in faultCountArray" :key="index">
        <div class="color" v-bind:style="{background: item.colorCode}">
          {{faultCountArray[index].title}}
        </div>
      </li>
    </ul>
  </v-ons-page>
</template>

<script>
import customToolbar from "../components/CustomToolbar.vue";
export default {
  name: "ColorPaint",
  components: {
    customToolbar,
  },
  data(){
    return {
      faultItem: this.$store.state["second"].faultArray,
      faultCountArray: "",
    }
  },
  created() {
    //this.$store.stateのfaultArrayに重複して入っている色は削除
    let faultItemArray = JSON.parse(JSON.stringify(this.faultItem));
    let uniqueFaultItem = Array.from(
        new Map(faultItemArray.map((faultItemArray) => [faultItemArray.id, faultItemArray])).values()
    );
    this.faultCountArray = uniqueFaultItem;
  },
}
</script>

<style lang="scss" scoped>
.color {
  width: 8vh;
  height: 6.5vh;
}
</style>
