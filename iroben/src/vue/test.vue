<template>
  <div>
    <h2>商品一覧</h2>
    <ul>
      <li v-for="(item, index) in products" :key="index">
        <a :href="'/product/' + item.id">
          {{item.id}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      products : [
        {"id":1},
        {"id":2},
        {"id":3},
      ]
    }
  },
}
</script>

<style scoped>

</style>
