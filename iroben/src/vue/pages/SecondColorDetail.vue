<template>
  <v-ons-page>
    <color-detail :item="item"></color-detail>
  </v-ons-page>
</template>

<script>
import ColorDetail from "@/vue/templetes/ColorDetail.vue";

export default {
  name: "secondColorDetail",
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
