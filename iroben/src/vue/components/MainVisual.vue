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
    <ul class="front_block">
      <li>
        <img src="../../img/img/img_star01.png" alt="star">
      </li>
      <li>
        <img class="img_star_blur" src="../../img/img/img_star_blur01.png" alt="star">
      </li>
      <li>
        <img src="../../img/img/img_star04.png" alt="star">
      </li>
      <li>
        <img src="../../img/img/img_star02.png" alt="star">
      </li>
      <li>
        <img src="../../img/img/img_star01.png" alt="star">
      </li>
    </ul>
    <ul class="back_block">
      <li>
        <img src="../../img/img/img_star01.png" alt="star">
      </li>
      <li>
        <img src="../../img/img/img_star03.png" alt="star">
      </li>
      <li>
        <img src="../../img/img/img_star01.png" alt="star">
      </li>
      <li>
        <img src="../../img/img/img_star02.png" alt="star">
      </li>
    </ul>
  </div >
</template>

<script>
export default {
  name: "MainVisual"
}
</script>

<style lang="scss" scoped>
@import "./src/scss/components/transition";
.logo {
  position: absolute;
  top: -50vh;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: max-content;
  height: max-content;
  animation: fadeInUp01 1.3s 0s ease-in-out forwards;
  img {
    margin: 0 4px;
    height: 68px;
    &.logo_i {
      height: 94px;
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
.front_block,
.back_block {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.front_block {
  img {
    width: 40px;
  }
  .img_star_blur {
    width: 48px;
  }
}
.back_block img{
  width: 32px;
}
.front_block li,
.back_block li{
  position: absolute;
  display: block;
  bottom: 560px;
  animation-delay: 0s;
  left: 100%;
}
.front_block  {
  li:nth-child(1){
    animation: animate_decoration_front01 30s linear infinite;
    animation-duration:28s;
  }
  li:nth-child(2){
    animation: animate_decoration_front02 60s linear infinite;
    animation-duration: 36s;
    animation-delay: 4s;
  }
  li:nth-child(3){
    animation: animate_decoration_front01  30s linear infinite;
    animation-duration: 36s;
    animation-delay: 1s;
  }
  li:nth-child(4){
    animation: animate_decoration_front01 linear infinite;
    animation-duration: 36s;
    animation-delay: 8s;
  }
  li:nth-child(5){
    animation: animate_decoration_front01 linear infinite;
    animation-duration: 36s;
    animation-delay: 10s;
  }
}
.back_block  {
  li {
    z-index: -1;
  }
  li:nth-child(1){
    animation: animate_decoration_back01 30s linear infinite;
    animation-duration: 34s;
  }
  li:nth-child(2){
    animation: animate_decoration_back02 40s linear infinite;
    animation-duration: 32s;
    animation-delay: 5s;
  }
  li:nth-child(3){
    animation: animate_decoration_back01 20s linear infinite;
    animation-duration: 45s;
    animation-delay: 8s;
  }
  li:nth-child(4){
    animation: animate_decoration_back02 30s linear infinite;
    animation-duration: 32s;
    animation-delay: 2s;
  }
}


@keyframes animate_decoration_front01{
  0% {
    transform: translateX(-500px) translateY(-100px) rotate(300deg);
  }
  50% {
    transform: translateX(-200px) translateY(-50px);
  }
  100% {
    transform: translateX(0px) translateY(-100px) rotate(0deg);
  }
}

@keyframes animate_decoration_front02 {
  0% {
    transform: translateX(-500px) translateY(-70px) rotate(30deg);
  }
  50% {
    transform: translateX(-200px) translateY(-50px);
  }
  100% {
    transform: translateX(0px) translateY(-70px) rotate(0deg);
  }
}

@keyframes animate_decoration_back01 {
  0% {
    transform: translateX(0) translateY(-100px) rotate(0deg);
  }
  50% {
    transform: translateX(-500px) translateY(-150px) rotate(150deg);
  }
  100% {
    transform: translateX(-500px) translateY(0px) rotate(300deg);
  }
}

@keyframes animate_decoration_back02 {
  from {
    transform: translateX(0) translateY(-150px);
  }
  to {
    transform: translateX(-500px) translateY(-100px);
  }
}

@keyframes animate_logo01 {
  0% {
    transform: translateX(0px) translateY(0px);
  }
  50% {
    transform: translateX(6px) translateY(6px);
  }
  100% {
    transform: translateX(0px) translateY(0px);
  }
}

@keyframes animate_logo02 {
  0% {
    transform: translateY(6px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(6px);
  }
}

@keyframes animate_logo03 {
  0% {
    transform: translateX(-6px) translateY(-8px);
  }
  50% {
    transform: translateX(0) translateY(0px);
  }
  100% {
    transform: translateX(-6px) translateY(-8px);
  }
}

@keyframes animate_logo04 {
  0% {
    transform: translateX(-4px) translateY(-6px);
  }
  50% {
    transform: translateX(0) translateY(0px);
  }
  100% {
    transform: translateX(-4px) translateY(-6px);
  }
}

@keyframes animate_logo05 {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(6px);
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
    transform: translateX(-4px) translateY(-6px);
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
    transform: translateX(-3px) translateY(6px);
  }
  100% {
    transform: translateX(0) translateY(0px);
  }
}
</style>
