<template>
  <v-ons-page>
    <p>このページは、ID.{{ $route.params.id }}の詳細を表示する</p>
  </v-ons-page>
</template>

<script>
export default {
  name: "thirdColorDetail",
  props: { id: Number }
}
</script>

<style scoped>

</style>
