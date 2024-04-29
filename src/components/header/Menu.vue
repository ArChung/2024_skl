<template>
  <a href="#banner" class="menu-btn" @click="onMenu">台味星指南</a>
  <a href="#intro" class="menu-btn" @click="onMenu">活動辦法</a>
  <a href="#res" class="menu-btn" @click="onMenu">合作酒吧及餐酒館</a>
  <a href="#wine" class="menu-btn" @click="onMenu">酒款介紹</a>
  <a
    href="https://bit.ly/3YfYTOV"
    target="_blank"
    class="gBtn text-gold menu-btn"
    data-g="menu-hotel-event"
    >星級飯店活動</a
  >
</template>

<script setup>
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { inject } from 'vue';

import useGA from '@/utils/useGA';

const { clickGa } = useGA();
const showSideMenu = inject('showSideMenu');
const onMenu = (e) => {
  e.preventDefault();
  console.log(e.currentTarget.hash, e.currentTarget.innerText);
  clickGa('memu-' + e.currentTarget.innerText);

  showSideMenu.value = false;
  gsap.to(window, {
    duration: 0.8,
    scrollTo: {
      y: e.currentTarget.hash,
      offsetY: 70,
    },
  });
};
</script>

<style lang="sass" scoped>
.menu-btn
  @apply duration-300 text-lg
  @screen md
    @apply text-2xl
  &:hover
    @apply opacity-50
</style>
