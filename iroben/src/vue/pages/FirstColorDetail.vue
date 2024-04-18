<template>
  <v-ons-page>
    <custom-header :custom-button-flag="false"></custom-header>
    <color-detail :item="item" :level="'second'"></color-detail>
  </v-ons-page>
</template>

<script>
import ColorDetail from "@/vue/templetes/ColorDetail.vue";
import CustomHeader from "@/vue/components/CustomHeader.vue";

export default {
  name: "FirstColorDetail",
  components: {CustomHeader, ColorDetail},
  data() {
    return {
      item: "",
    }
  },
  mounted() {
    this.item = JSON.parse(this.colorItem);
  },
}
</script>

<style scoped>

</style>
