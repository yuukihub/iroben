<template>
  <h2 class="c-heading">
    {{title}}
    <!--<svg width="67" height="48" viewBox="0 0 67 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M63 23.0816C61.7028 22.9506 60.925 21.9366 60.0227 21.0954C58.0748 19.2796 55.7935 17.8396 53.6037 16.3507C49.9057 13.8363 46.6346 11.0214 42.6231 9.06817C36.7596 6.2131 29.6833 1.07484 23.2296 6.14412C20.0115 8.67187 20.5561 17.2859 21.7 20.8196C23.7901 27.2763 28.1471 33.0131 32.7898 37.7018C33.3501 38.2677 29.6369 35.2822 28.5287 34.7226C25.516 33.2013 23.3946 30.6082 20.4708 29.0676C18.3322 27.9407 10.3917 25.5256 10.3917 29.5365C10.3917 31.218 10.0421 33.2922 10.5009 34.8881C11.5192 38.4301 13.8293 40.6887 15.7727 43.6327C16.4837 44.7097 11.9646 43.0929 11.3204 42.9155C8.54143 42.1501 6.41675 39.9386 4 38.4742"
            stroke="#25C3FB"
            stroke-width="7"
            stroke-linecap="round"
            class="svg_wave01"></path>
    </svg>-->
  </h2>
</template>

<script>
export default {
  name: "Heading",
  props: {
    title: {
      type: String,
      default: "",
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";
.c-heading {
  @include KintoSans();
  font-weight: 500;
  font-size: 1.3rem;
  width: 80vw;
  margin: 0 auto 24px;
  text-align: center;
  @-webkit-keyframes animate-svg-stroke-1 {
    0% {
      stroke-dashoffset: 139.5904083251953px;
      stroke-dasharray: 139.5904083251953px;
    }

    100% {
      stroke-dashoffset: 279.1808166503906px;
      stroke-dasharray: 139.5904083251953px;
    }
  }

  @keyframes animate-svg-stroke-1 {
    0% {
      stroke-dashoffset: 139.5904083251953px;
      stroke-dasharray: 139.5904083251953px;
    }

    100% {
      stroke-dashoffset: 279.1808166503906px;
      stroke-dasharray: 139.5904083251953px;
    }
  }
  .svg_wave01 {
    -webkit-animation: animate-svg-stroke-1 1.3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
    animation: animate-svg-stroke-1 1.3s cubic-bezier(0.47, 0, 0.745, 0.715) 0.8s both;
  }
}
</style>
