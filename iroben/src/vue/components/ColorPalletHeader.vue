<template>
  <div>
    ペイント機能<toggle :level="'paint'" @click="changeMode()"></toggle>
  </div>
</template>

<script>
import Toggle from "@/vue/components/Toggle.vue";

export default {
  name: "ColorPalletHeader",
  components: {Toggle},
  data(){
    return {
      paintFlag: Boolean,
    }
  },
  methods: {
    changeMode(){
      /*this.$store.commit("toggle",
          { level:"paint",
            flag:this.paintFlag = !this.paintFlag
          }
      );
      console.log(this.$store.state.toggles.paint);*/
      onsole.log("test")
    },
  }
}
</script>

<style scoped>

</style>
