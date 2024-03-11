<template>
  <div>
   <article class="c-modal">
      <h2>{{title}}</h2>
      <a href="#" class="modal_close" @click="closeModal">✕</a>
      <slot></slot>
    </article>
    <a href="#!" class="overlay"></a>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    title: {
      type: String,
      required: true
    },
  },
  methods: {
    closeModal(){
      this.$emit('closeModal');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";
.c-modal {
  width: 80%;
  background: map_get($color, white);
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: auto;
  //display: none;
  /*&:target{
    opacity: 1;
    visibility: visible;
    transition: opacity 0.5s, visibility 0.5s;
  }
  &:not(:target) {
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.5s, visibility 0.5s;
  }*/
  .overlay{
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #000;
    opacity: 0.7;
    top: 0;
    left: 0;
  }
  .modal_close{
    position: absolute;
    top: 5px;
    right: 10px;
    text-decoration: none;
  }
}

</style>
