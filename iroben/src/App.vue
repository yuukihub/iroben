<template>
  <div id="app">
    <!--VueRouterを呼び出し-->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/product">Product</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
