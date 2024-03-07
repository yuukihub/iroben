<template>
  <div>
    <toggle @onClick="togglePush"></toggle>
    <div v-if="isToggleFlag === false">
      <div class="c-colorLists">
        <ul>
          <li v-for="(item, index) in colorLists" :key="index">
            <div class="color" v-bind:style="{background: item.colorCode}">
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <div class="c-colorLists">
        <ul>
          <li v-for="(item, index) in faultCountArray" :key="index">
            <div class="color" v-bind:style="{background: item.colorCode}">
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Toggle from "@/vue/components/Toggle.vue";

export default {
  name: "ColorPalletList",
  components: {Toggle},
  props: {
    colorLists: {
      type: Object,
      default: "{}",
      required: true
    },
    isToggleFlag: {
      type: Boolean,
      default: false,
      required: true
    },
    faultCountArray: {
      type: Array,
      default: "[]",
      required: true
    }
  },
  methods: {
    togglePush() {
      this.$emit("onClick");
    },
  }
}
</script>

<style lang="scss" scoped>
.c-colorLists{
  ul {
    display: flex;
    flex-wrap: wrap;
  }
}
.color {
  width: 3vh;
  height: 3vh;
  border-radius: 100%;
  margin: 0 6px 6px 0;
}
</style>

