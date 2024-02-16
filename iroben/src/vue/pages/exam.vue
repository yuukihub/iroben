<template>
  <v-ons-page>
test
  </v-ons-page>
</template>

<script>
import customToolbar from '../../CustomToolbar.vue';
import top from'../pages/top.vue';

export default {
  name: "exam",
  components: {
    customToolbar,
  },
  methods: {
    pop(){
      this.pageStack.pop();
    },
    push() {
      this.pageStack.push(top);
    },
  },
  props: ['pageStack'],
  key: 'key_page3',
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
</style>
