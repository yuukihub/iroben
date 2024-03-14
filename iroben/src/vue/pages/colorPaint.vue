<template>
  <v-ons-page>
    <color-pallet/>
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
  }
}
</script>
