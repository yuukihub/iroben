<template>
  <v-ons-button :class="{'button is-disabled':!isDisabledFlag,'button':isDisabledFlag}"
                @click="click">
    <div class="c-button">
      {{label}}
    </div>
  </v-ons-button>
</template>

<script>
export default {
  name: "TheButton",
  props: {
    isDisabledFlag: {
      type: Boolean,
      default: false,
      required: false,
    },
    label: {
      type: String,
      default: "",
      required: true,
    }
  },
  methods: {
    click(){
      this.$emit('onClick');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "src/scss/foundation/include";
.c-button {
  width: 100%;
  text-align: center;
  padding: 8px;
}
.is-disabled {
  pointer-events: none;
  .c-button {
    background: map_get($color, gray02);
    color: map_get($color, white);
  }
}
.button {
  padding: 0;
  width: 100%;
}
</style>
