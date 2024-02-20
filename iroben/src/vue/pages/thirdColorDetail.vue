<template>
  <v-ons-page>
    <custom-toolbar></custom-toolbar>
    <p>このページは、ID.{{ $route.params.id }}の詳細を表示する</p>
  </v-ons-page>
</template>

<script>
import customToolbar from '../../CustomToolbar.vue';
import thirdColorLists from'../pages/thirdColorLists.vue';
import router from '../../router/index'

export default {
  name: "thirdColorDetail",
  components: {customToolbar},
  props: { id: Number },
}
</script>

<style scoped>

</style>
