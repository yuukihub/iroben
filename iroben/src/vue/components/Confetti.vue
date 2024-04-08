<template>
  <div className="confetti-wrap">
    <div className="c-confetti-piece"></div>
    <div className="c-confetti-piece"></div>
    <div className="c-confetti-piece"></div>
    <div className="c-confetti-piece"></div>
    <div className="c-confetti-piece"></div>
    <div className="c-confetti-piece"></div>
    <div className="c-confetti-piece"></div>
    <div className="c-confetti-piece"></div>
    <div className="c-confetti-piece"></div>
    <div className="c-confetti-piece"></div>
    <div className="c-confetti-piece"></div>
    <div className="c-confetti-piece"></div>
    <div className="c-confetti-piece"></div>
  </div>
</template>

<script>
export default {
  name: "confetti"
}
</script>

<style lang="scss" scoped>
@import "./src/scss/foundation/variables";

$yellow: #ffd300;
$blue: #17d3ff;
$pink: #ff4e91;

$duration: 1000;

@function randomNum($min, $max) {
  $rand: random();
  $randomNum: $min + floor($rand * (($max - $min) + 1));

  @return $randomNum;
}

.icon {
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 32px;
  position: relative;
}

.confetti-wrap {
  position: absolute;
  top: -223px;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88vw;
  height: 300px;
  overflow: hidden;
  z-index: index($z-map, confetti);
}

.c-confetti-piece {
  position: absolute;
  width: 8px;
  height: 16px;
  background: $yellow;
  top: 0;
  opacity: 0;

  @for $i from 1 through 13 {
    &:nth-child(#{$i}) {
      left: $i * 7%;
      transform: rotate(#{randomNum(-80, 80)}deg);
      animation: makeItRain $duration * 1ms infinite ease-out;
      animation-delay: #{randomNum(0, $duration * .5)}ms;
      animation-duration: #{randomNum($duration * .7, $duration * 1.2)}ms
    }
  }

  &:nth-child(odd) {
    background: $blue;
  }

  &:nth-child(even) {
    z-index: index($z-map, confetti);
  }

  &:nth-child(4n) {
    width: 5px;
    height: 12px;
    animation-duration: $duration * 2ms;
  }

  &:nth-child(3n) {
    width: 3px;
    height: 10px;
    animation-duration: $duration * 2.5ms;
    animation-delay: $duration * 1ms;
  }

  &:nth-child(4n-7) {
    background: $pink;
  }
}

@keyframes makeItRain {
  from {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  to {
    transform: translateY(200px);
  }
}

</style>
