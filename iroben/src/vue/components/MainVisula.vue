<template>
  <div class="logo">
    <img class="logo_i" src="../../img/img/img_logo_i.png" alt="i">
    <img class="logo_r" src="../../img/img/img_logo_r.png" alt="r">
    <img class="logo_o" src="../../img/img/img_logo_o.png" alt="o">
    <img class="logo_b" src="../../img/img/img_logo_b.png" alt="b">
    <img class="logo_e" src="../../img/img/img_logo_e.png" alt="e">
    <img class="logo_n" src="../../img/img/img_logo_n.png" alt="n">
  </div>
  <div class="mv">
    <ul class="circles">
      <li>
        <img class="character03" src="../../img/img/img_decoration_star01.png" alt="star">
      </li>
      <li>
        <img class="character03" src="../../img/img/img_decoration_circle01.png" alt="star">
      </li>
      <li>
        <img class="character03" src="../../img/img/img_decoration_star01.png" alt="star">
      </li>
      <li>
        <img class="character03" src="../../img/img/img_decoration_star01.png" alt="star">
      </li>
      <li>
        <img class="character03" src="../../img/img/img_decoration_circle01.png" alt="star">
      </li>
    </ul>
  </div >
</template>

<script>
export default {
  name: "MainVisula"
}
</script>

<style lang="scss" scoped>
.logo {
  position: absolute;
  top: -40vh;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: max-content;
  height: max-content;
  z-index: 1;
  animation: animate_logo07 10s ease infinite;
  img {
    margin: 0 4px;
    height: 68px;
    &.logo_i {
      height: 88px;
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
.context {
  width: 100%;
  position: absolute;
  top:50vh;
}
.context h1{
  text-align: center;
  color: #fff;
  font-size: 50px;
}


.mv {
  width: 100%;
  height: 100vh;
}

.circles{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.circles img{
  width: 60px;
}
.circles li{
  position: absolute;
  display: block;
  bottom: 560px;
  animation-delay: 0s;
}
.circles li:nth-child(1){
  left: 82%;
  animation: animate_decoration 30s linear infinite;
  animation-duration: 11s;
}
.circles li:nth-child(2){
  left: 80%;
  animation: animate_decoration 30s linear infinite;
  animation-duration: 9s;
}
.circles li:nth-child(3){
  left: 89%;
  animation: animate_decoration 30s linear infinite;
  animation-duration: 13s;
}
.circles li:nth-child(4){
  left: 84%;
  animation: animate_decoration 30s linear infinite;
  animation-duration: 8s;
}
.circles li:nth-child(5){
  left: 86%;
  animation: animate_decoration 30s linear infinite;
  /*width: 20px;
  height: 20px;*/
  animation-duration: 12s;
}
.circles li:nth-child(6){
  left: 87%;
  animation: animate_decoration 30s linear infinite;
  animation-duration: 9s;
}
.circles li:nth-child(7){
  left: 88%;
  animation: animate_decoration 30s linear infinite;
  animation-duration: 13s;
}
.circles li:nth-child(8){
  left: 79%;
  animation: animate_decoration 30s linear infinite;
  animation-duration: 13s;
}
.circles li:nth-child(9){
  left: 80%;
  animation: animate_decoration 30s linear infinite;
  animation-duration: 12s;
}
.circles li:nth-child(10){
  left: 85%;
  animation: animate_decoration 30s linear infinite;
  animation-duration: 10s;
}

@keyframes animate_decoration {
  from {
    transform: translateX(-400px) translateY(0px) rotate(300deg);
  }
  to {
    transform: translateX(100px) translateY(-100px) rotate(0deg);
  }
}

@keyframes animate_logo01 {
  0% {
    transform: translateX(0px) translateY(0px);
  }
  50% {
    transform: translateX(3px) translateY(3px);
  }
  100% {
    transform: translateX(0px) translateY(0px);
  }
}

@keyframes animate_logo02 {
  0% {
    transform: translateY(3px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(3px);
  }
}

@keyframes animate_logo03 {
  0% {
    transform: translateX(-2px) translateY(-3px);
  }
  50% {
    transform: translateX(0) translateY(0px);
  }
  100% {
    transform: translateX(-2px) translateY(-3px);
  }
}

@keyframes animate_logo04 {
  0% {
    transform: translateX(-2px) translateY(-3px);
  }
  50% {
    transform: translateX(0) translateY(0px);
  }
  100% {
    transform: translateX(-2px) translateY(-3px);
  }
}

@keyframes animate_logo05 {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes animate_logo06 {
  0% {
    transform: translateX(0) translateY(0px);
  }
  50% {
    transform: translateX(-2px) translateY(-3px);
  }
  100% {
    transform: translateX(0) translateY(0px);
  }
}

@keyframes animate_logo07 {
  0% {
    transform: translateX(0) translateY(0px);
  }
  50% {
    transform: translateX(-5px) translateY(10px);
  }
  100% {
    transform: translateX(0) translateY(0px);
  }
}
</style>
