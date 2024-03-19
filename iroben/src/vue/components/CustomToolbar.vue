<template>
    <header class="l-header">
      <div v-if="headerDesign">
        <div class="top">
          <div class="bar"></div>
        </div>
        <img src="../../img/img_wave-top.svg" alt="wave">
      </div>
      <div class="contents">
        <div>
          <v-ons-back-button :on-click="pop"></v-ons-back-button>
        </div>
        <p class="title">{{ title }}</p>
        <the-mini-button :label="``"
                         :icon="'../img/icon_delete.svg'"
                         :button-type="'error'"
                         @click="click"></the-mini-button>
      </div>
    </header>
</template>

<script>
  import TheMiniButton from "@/vue/components/TheMiniButton.vue";

  export default {
    components: {TheMiniButton},
    props: {
      headerDesign: {
        type: Boolean,
        default: true,
        required: false
      },
      title: {
        type: String,
        default: "",
        required: false
      },
    },
    methods: {
      click(){
        this.$emit('clear');
      }
    }
  }
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
.l-header{
  .contents {
    display: flex;
    align-items: center;
    position: absolute;
    top: 24px;
    //left: 16px;
    width: 100%;
  }
  .top {
    position: relative;
    .bar {
      background: white;
      height: 55px;
    }
    img {
      width: 100%;
    }
  }
  .title {
    width: 100%;
    text-align: center;
    //padding-right: 56px;
    font-size: 16px;
    font-weight: bold;
    color: map_get($color, text);
  }
  .back-button {
    padding-left: 0;
    &__label {
      display: block;
      width: 100%;
      text-align: center;
    }
  }
}
</style>
