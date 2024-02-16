<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" :key="page.key" :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
  import top from './vue/pages/top.vue';

  export default {
    data() {
      return {
        pageStack: [top]
      }
    }
  }
</script>
