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
          <img src="../../img/img/img_blur_star01.png" alt="star">
        </li>
        <li>
          <img src="../../img/img/img_star01.png" alt="star">
        </li>
        <li>
          <img src="../../img/img/img_star02.png" alt="star">
        </li>
        <li>
          <img src="../../img/img/img_blur_decoration02.png" alt="heart">
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
        <li>
          <img src="../../img/img/img_decoration_home01.png" alt="decoration">
        </li>
        <li>
          <img src="../../img/img/img_decoration_home01.png" alt="decoration">
        </li>
      </ul>
    </div>
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
  top: -59vh;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: max-content;
  text-align: center;
  animation: fadeInUp01 1.3s 0s ease-in-out forwards;
  z-index: 1;
  img {
    margin: 0 5px;
    height: 7vh;
    &.logo_i {
      height: 10vh;
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
  height: 50vh;
}
.front_block,
.back_block {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  animation: fadeInUp01 1.3s 0s ease-in-out forwards;
}
.front_block {
  z-index: 2;
  img {
    width: 40px;
  }
}
.back_block img{
  width: 32px;
}
.front_block li,
.back_block li{
  position: absolute;
  display: block;
  bottom: 65vh;
  animation-delay: 0s;
  left: 100%;
}
.front_block  {
  li:nth-child(1){
    animation: animate_decoration_front01 30s linear infinite;
    animation-duration:40s;
    animation-delay: -23s;
    img {
      width: 48px;
    }
  }
  li:nth-child(2){
    animation: animate_decoration_front04 60s linear infinite;
    animation-duration: 44s;
    animation-delay: -10s;
    img {
      width: 64px;
    }
  }
  li:nth-child(3){
    animation: animate_decoration_front01  30s linear infinite;
    animation-duration: 40s;
    animation-delay: -1s;
  }
  li:nth-child(4){
    animation: animate_decoration_front03 linear infinite;
    animation-duration: 40s;
    animation-delay: 2s;
  }
  li:nth-child(5){
    animation: animate_decoration_front02 linear infinite;
    animation-duration: 40s;
    animation-delay: -21s;
    img {
      width: 100vw;
    }
  }
}
.back_block  {
  li:nth-child(1){
    animation: animate_decoration_back01 30s linear infinite;
    animation-duration: 34s;
  }
  li:nth-child(2){
    animation: animate_decoration_back01 40s linear infinite;
    animation-duration: 32s;
    animation-delay: 5s;
  }
  li:nth-child(3){
    animation: animate_decoration_back01 30s linear infinite;
    animation-duration: 45s;
    animation-delay: 8s;
  }
  li:nth-child(4){
    animation: animate_decoration_back01 30s linear infinite;
    animation-duration: 32s;
    animation-delay: 2s;
  }
  li:nth-child(5){
    animation: animate_decoration_back03 30s linear infinite;
    animation-duration: 100s;
    animation-delay: -20s;
    img {
      width: 80vw;
    }
  }
  li:nth-child(6){
    animation: animate_decoration_back03 30s linear infinite;
    animation-duration: 100s;
    animation-delay: 8s;
    img {
      width: 80vw;
    }
  }
}


@keyframes animate_decoration_front01{
  0% {
    transform: translateX(-120vw) translateY(2vh) rotate(300deg);
  }
  50% {
    transform: translateX(-60vw) translateY(-5vh);
  }
  100% {
    transform: translateX(0) translateY(2vh) rotate(0deg);
  }
}

@keyframes animate_decoration_front02 {
  0% {
    transform: translateX(-220vw) translateY(0px);
  }
  50% {
    transform: translateX(-60vw) translateY(5vh);
  }
  100% {
    transform: translateX(0px) translateY(0px);
  }
}

@keyframes animate_decoration_front03 {
  0% {
    transform: translateX(-120vw) translateY(0) rotate(-10deg);
  }
  50% {
    transform: translateX(-60vw) translateY(4vh);
  }
  100% {
    transform: translateX(0px) translateY(0) rotate(0deg);
  }
}

@keyframes animate_decoration_front04 {
  0% {
    transform: translateX(-120vw) translateY(4vh);
  }
  50% {
    transform: translateX(-60vw) translateY(0);
  }
  100% {
    transform: translateX(0px) translateY(4vh);
  }
}

@keyframes animate_decoration_back01 {
  0% {
    transform: translateX(0) translateY(-15vh) rotate(0deg);
  }
  50% {
    transform: translateX(-60vw) translateY(-20vh) rotate(200deg);
  }
  100% {
    transform: translateX(-120vw) translateY(-15vh) rotate(400deg);
  }
}

@keyframes animate_decoration_back02 {
  from {
    transform: translateX(0) translateY(-25vh) rotate(0deg);
  }
  to {
    transform: translateX(-120vw) translateY(-10vh) rotate(200deg);
  }
}

@keyframes animate_decoration_back03 {
  from {
    transform: translateX(0) translateY(-10vh);
  }
  to {
    transform: translateX(-320vw) translateY(0px);
  }
}

@keyframes animate_logo01 {
  0% {
    transform: translateX(0px) translateY(0px);
  }
  50% {
    transform: translateX(2px) translateY(4px);
  }
  100% {
    transform: translateX(0px) translateY(0px);
  }
}

@keyframes animate_logo02 {
  0% {
    transform: translateY(2px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(2px);
  }
}

@keyframes animate_logo03 {
  0% {
    transform: translateX(-1px) translateY(-3px);
  }
  50% {
    transform: translateX(0) translateY(0px);
  }
  100% {
    transform: translateX(-1px) translateY(-3px);
  }
}

@keyframes animate_logo04 {
  0% {
    transform: translateX(-2px) translateY(-2px);
  }
  50% {
    transform: translateX(0) translateY(0px);
  }
  100% {
    transform: translateX(-2px) translateY(-2px);
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
    transform: translateX(-1px) translateY(-2px);
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
    transform: translateX(-1px) translateY(3px);
  }
  100% {
    transform: translateX(0) translateY(0px);
  }
}
</style>
