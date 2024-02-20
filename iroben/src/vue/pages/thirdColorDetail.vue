<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>
    <p>このページは、{{item}}の詳細を表示する</p>
  </v-ons-page>
</template>

<script>
import customToolbar from '../../CustomToolbar.vue';

export default {
  name: "thirdColorDetail",
  components: {customToolbar},
  props: ['item'],
}
</script>

<style scoped>

</style>
