<template>
  <v-ons-page>
    <color-detail :item="item"></color-detail>
  </v-ons-page>
</template>

<script>
import ColorDetail from "@/vue/templetes/colorDetail.vue";

export default {
  name: "testColorDetail",
  components: {ColorDetail},
  data(){
    return {
      item: "",
    }
  },
  mounted(){
    this.item = JSON.parse(this.colorItem);
  },
}
</script>

<style scoped>

</style>
