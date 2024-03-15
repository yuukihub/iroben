<template>
  <v-ons-navigator :page-stack="pageStack">
    <component :is="page" v-for="page in pageStack" :key="page.key" :page-stack="pageStack"></component>
    <router-view />
  </v-ons-navigator>
</template>

<script>
  import top from './vue/pages/Top.vue';
  import exam from './vue/pages/ThirdExam.vue';
  import list from './vue/pages/ThirdColorLists.vue';

  export default {
    data() {
      return {
        //pageStack: [ColorPaint]
        pageStack: [top]
      }
    }
  }
</script>
