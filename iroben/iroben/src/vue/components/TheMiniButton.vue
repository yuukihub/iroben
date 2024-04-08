<template>
  <div class="c-button --mini">
    <template v-if="buttonType === 'error'">
      <button class="is-error">
        {{ label }}
      </button>
    </template>
    <template v-else-if="buttonType === 'disabled'">
      <button class="disabled">
        {{ label }}
      </button>
    </template>
    <template v-else>
      <button>
        {{ label }}
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: "TheMiniButton",
  props: {
    label: {
      type: String,
      default: "",
      required: true,
    },
    buttonType: {
      type: String,
      default: "",
      required: true,
    },
    icon: {
      type: String,
      default: "",
      required: false,
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../src/scss/foundation/include";

.--mini {
  button {
    font-size: 16px;
    color: map_get($color, text);
    display: flex;
    align-items: center;
    width: max-content;
    text-align: left;
    background: map_get($color, white);
    border-radius: 4px;
    padding: 12px;
    border: 1px solid map_get($color, gray02);
    box-shadow: inherit;

    img {
      width: 32px;
      height: auto;
    }

    &.is-error {
      color: map_get($color, white);
      border: 1px solid map_get($color, error);
      background: map_get($color, error);
    }

    &.is-disabled {
      color: map_get($color, white);
      border: 1px solid map_get($color, gray03);
      background: map_get($color, gray03);
    }
  }

  &:not(:last-child) {
    margin-right: 16px;
  }
}
</style>
