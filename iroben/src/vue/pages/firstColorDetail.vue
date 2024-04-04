<template>
  <v-ons-page>
    <custom-toolbar :custom-button-flag="false"></custom-toolbar>
    <color-detail :item="item" :level="'second'"></color-detail>
  </v-ons-page>
</template>

<script>
import ColorDetail from "@/vue/templetes/ColorDetail.vue";
import CustomToolbar from "@/vue/components/CustomToolbar.vue";

export default {
  name: "firstColorDetail",
  components: {CustomToolbar, ColorDetail},
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
