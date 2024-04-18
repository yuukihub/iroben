<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page"
               v-for="page in pageStack"
               :key="page.key"
               :page-stack="pageStack"></component>
  </v-ons-navigator>
</template>

<script>
import Top from './vue/pages/Top.vue';
import Tutprial from './vue/pages/Tutorial.vue';
export default {
  data() {
    return {
      pageStack: [Top]
    }
  }
}
</script>

