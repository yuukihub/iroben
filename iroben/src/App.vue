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
  import Home from './vue/pages/Home.vue';
  export default {
    data() {
      return {
        pageStack: [Home]
      }
    }
  }
</script>
