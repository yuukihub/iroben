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
  computed(){
    console.log("読み込み");
  },
  methods: {
    pop(){
      this.pageStack.pop();
      console.log("押されました");
    },
    push() {
      console.log("押されました");
      router.push('thirdColorLists');
    },
  },
}
</script>

<style scoped>

</style>
