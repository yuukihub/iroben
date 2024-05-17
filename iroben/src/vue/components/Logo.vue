<template>
  <div class="c-logo">
    <img class="logo_i" src="../../img/img/common/img_logo_i.png" alt="i">
    <img class="logo_r" src="../../img/img/common/img_logo_r.png" alt="r">
    <img class="logo_o" src="../../img/img/common/img_logo_o.png" alt="o">
    <img class="logo_b" src="../../img/img/common/img_logo_b.png" alt="b">
    <img class="logo_e" src="../../img/img/common/img_logo_e.png" alt="e">
    <img class="logo_n" src="../../img/img/common/img_logo_n.png" alt="n">
  </div>
</template>

<script>
export default {
  name: "Logo"
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/include";
@import "./src/scss/components/transition";
.c-logo {
  position: absolute;
  top: -40px;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: max-content;
  text-align: center;
  animation: fadeInUp01 1.3s 0s ease-in-out forwards;
  z-index: index($z-map, topLogo);

  &.--home {
    img {
      margin: 0 3px;
      height: 6vh;
      &.logo_i {
        height: 7vh;
      }
    }
  }


  img {
    margin: 0 5px;
    height: 7vh;
    @include mq(sp) {
      height: 7vh;
    }

    &.logo_i {
      height: 10vh;
      @include mq(sp) {
        height: 8vh;
      }
    }
  }

  .logo_i {
    animation: animate_logo01 6s ease infinite;
  }

  .logo_r {
    animation: animate_logo02 4s ease infinite;
  }

  .logo_o {
    animation: animate_logo03 6s ease infinite;
  }

  .logo_b {
    animation: animate_logo04 5s ease infinite;
  }

  .logo_e {
    animation: animate_logo05 4s ease infinite;
  }

  .logo_n {
    animation: animate_logo06 4s ease infinite;
  }
}

</style>
