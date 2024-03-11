<template>
  <v-ons-page>
    <color-pallet-header></color-pallet-header>
    <color-pallet></color-pallet>
  </v-ons-page>
</template>

<script>

import ColorPallet from "@/vue/components/ColorPallet.vue";
import ColorPalletHeader from "@/vue/components/ColorPalletHeader.vue";

export default {
  name: "colorPaint",
  components: {
    ColorPalletHeader,
    ColorPallet
  },
}
</script>

<style scoped>

</style>
