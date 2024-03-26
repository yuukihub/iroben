<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page"
               v-for="page in pageStack"
               :key="page.key"
               :page-stack="pageStack"></component>
    <router-view />
  </v-ons-navigator>
</template>

<script>
  //import Home from './vue/pages/Home.vue';
  import Top from './vue/pages/Top.vue';
  import Blender from './vue/components/Blender.vue';
  export default {
    data() {
      return {
        pageStack: [Blender]
      }
    }
  }
</script>
