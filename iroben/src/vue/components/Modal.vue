<template>
  <div>
   <article class="c-modal">
     <div class="modal-color" :style="`background-color:${colorCode}`">
       <h2 class="modal-title">
         <p class="modal-subtitle">
           {{colorSubTitle}}
         </p>
         {{colorTitle}}
       </h2>
       <div class="modal-toneNumber">
         <div class="modal-toneNumber_inner">
           <p>
             色相番号：
           </p>
           <ul>
             <li v-for="(toneNumber, index) in colorToneNumber" :key="index">
               {{toneNumber}}
             </li>
           </ul>
         </div>
       </div>
     </div>
     <p class="modal-description">
       {{colorDescription}}
     </p>
      <a href="#" class="modal-close" @click="closeModal">✕</a>
    </article>
    <!--<a href="#!" class="overlay"></a>-->
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    colorTitle: {
      type: String,
      required: true
    },
    colorCode: {
      type: String,
      required: true
    },
    colorSubTitle: {
      type: String,
      required: true
    },
    toneNumber: {
      type: String,
      required: true
    },
    colorDescription: {
      type: String,
      required: true
    },
    colorToneNumber: {
      type: Array,
      default: "[]",
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
@import "./src/scss/foundation/mixins";
.c-modal {
  max-width: 280px;
  width: 100%;
  background: map_get($color, white);
  position: absolute;
  top: -50%;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 6px;
  @include boxShadow();
  .modal-title {
    display: table;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    background: map_get($color, white);
    padding: 4px;
    margin: auto;
  }
  .modal-color {
    padding: 50px;
    border-radius: 6px 6px 0 0;
  }
  .modal-subtitle {
    font-size: 12px;
    background: map_get($color, white);
    margin: 0;
    font-weight: normal;
    text-align: center;
    width: 100%;
  }
  .modal-toneNumber{
    display: flex;
    justify-content: center;
    margin-top: 8px;
    &_inner {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: map_get($color, white);
      padding: 4px;
    }
    ul {
      display: flex;
      justify-content: center;
    }
    li {
      &:not(:last-child):after {
        content: (",");
        margin-right: 4px;
      }
    }
  }
  .modal-description {
    padding: 16px;
  }
  .eye_image {
    position: absolute;
    top: -5px;
    left: 0;
    right: 0;
    margin: auto;
  }


  .overlay{
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: #000;
    opacity: 0.7;
    top: -80%;
    left: 0;
  }
  .modal-close{
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 18px;
    color: map_get($color, white);
    text-decoration: none;
  }

}
</style>
