<template>
  <div>
    <label class="c-toggle">
      <input type="checkbox" @click="toggle_switch" v-model="checkedFlag">
      <span class="slider"></span>
      <span class="labels" data-off="OFF" data-on="ON" ></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Toggle",
  data(){
    return {
      checkedFlag: this.$store.state.toggles[this.level],
    }
  },
  props: {
    level: {
      type: String,
      required: false
    },
  },
  methods: {
    toggle_switch () {
      this.$emit('onClick');
    },
  }
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";
.c-toggle {
  position: relative;
  display: inline-block;
  width: 70px;
  height: 32px;
  border-radius: 24px;
  cursor: pointer;
  background-color: map_get($color, white);

  input {
    display: none;
  }

  .slider {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 24px;
    border: 2px solid map_get($color, gray03);
    transition: all 0.4s ease-in-out;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      bottom: 0;
      left: 3px;
      width: 16px;
      height: 16px;
      margin: auto;
      border-radius: 24px;
      border: 2px solid map_get($color, gray03);
      background-color: map_get($color, white);
      transition: all 0.4s ease-in-out;
    }
  }

  input:checked + .slider {
    border-color: map_get($color, main01);

    &::before {
      border-color: map_get($color, main01);
      background-color: #c6e5ff;
      transform: translateX(38px);
    }
  }

  .labels {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    color: map_get($color, text);
    font-size: 0.76rem;
    font-family: sans-serif;
    transition: all 0.4s ease-in-out;

    &::after {
      content: attr(data-off);
      position: absolute;
      top: 0;
      bottom: 0;
      right: 12px;
      margin: auto;
      height: max-content;
      opacity: 1;
      transition: all 0.4s ease-in-out;
    }

    &::before {
      content: attr(data-on);
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      height: max-content;
      left: 16px;
      opacity: 0;
      transition: all 0.4s ease-in-out;
    }
  }

  input:checked ~ .labels {
    &::after {
      opacity: 0;
    }

    &::before {
      opacity: 1;
    }
  }
}

</style>
