<template>
  <div class="noDrinkBar z-50">
    <div class="txt">禁止酒駕</div>
    <img src="@/assets/imgs/img-nodrive.png" alt="" />
    <div class="txt">酒後不開車 安全有保障</div>
  </div>
</template>

<script setup></script>

<style lang="sass" scoped>

.noDrinkBar
  position: fixed
  bottom: 0
  left: 0
  width: 100%
  background-color: black
  height: 10vh
  color: white
  display: flex
  align-items: center
  justify-content: center
  font-size: 5vh
  letter-spacing: 1.45vw
  .txt
    padding-left: 2vw
  img
    max-height: 80%

  @screen lg
    font-size: 5.9vw
    letter-spacing: 0
    img
      max-height: 7vw

    .txt
      padding: 0 0.5vw
</style>
