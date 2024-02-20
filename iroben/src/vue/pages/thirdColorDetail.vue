<template>
  <p>このページは、ID.{{ $route.params.id }}の詳細を表示する</p>
</template>

<script>
export default {
  name: "thirdColorDetail",
  props: { id: Number }
}
</script>

<style scoped>

</style>
