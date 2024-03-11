<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>
    <color-pallet></color-pallet>
  </v-ons-page>
</template>

<script>

import ColorPallet from "@/vue/components/ColorPallet.vue";
import CustomToolbar from "@/vue/components/CustomToolbar.vue";

export default {
  name: "colorPaint",
  components: {
    CustomToolbar,
    ColorPallet
  },
}
</script>

<style scoped>

</style>
