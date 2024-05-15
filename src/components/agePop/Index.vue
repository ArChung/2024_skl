<template>
  <div id="agePop" class="pb-[10vh] pop inset-0 z-50 fixed bg-linear-1 flex justify-center items-center">
    <div class="absolute inset-0 z-0" :style="{ backgroundImage: `url(${getUrl('wave-r.png')})` }"></div>
    <div class="age-content w-full max-w-2xl space-y-8 conatiner flex flex-col justify-center items-center text-gold md:px-8 md:w-full relative z-10">
      <div class="relative max-w-md mb-20">
        <img :src="getUrl(`title0${index}.png`)" v-for="index in 8" :key="index" class="inset-0 ani-logo" :class="[index === 1 ? 'relative' : 'absolute', index === 8 ? 'mt-20' : '']" />
      </div>
      <div class="tracking-wider text-xl ani-f-b">請先確認您是否已滿18歲</div>
      <div class="flex w-full space-x-8 ani-f-b">
        <div data-g="18歲年齡檢查否 " class="gBtn border btn border-gold no-btn text-center py-3 cursor-pointer duration-300 hover:text-white grow" @click="popAlert()">否</div>
        <div data-g="18歲年齡檢查_是" class="gBtn border border-gold btn yes-btn text-center py-3 cursor-pointer duration-300 hover:text-white grow" @click="onYes">是111</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from 'vue';
import { getUrl } from '@/utils/index.js';
import useGsap from '@/utils/useGsap';
import { gsap } from 'gsap';

const show = inject('showAgeCheck');

onMounted(() => {
  const tl = gsap.timeline();
  tl.from('#agePop .ani-logo', {
    opacity: 0,
    scale: 1.1,
    duration: 2,
    stagger: 0.07,
    ease: 'Power4.easeOut',
  }).from(
    '#agePop .ani-f-b',
    {
      duration: 1.2,
      opacity: 0,
      y: `+30`,
      stagger: 0.3,
    },
    '-=1.8'
  );
});

const popAlert = () => {
  alert('須年滿 18 歲才能進入此網站');
};

const onYes = () => {
  const tl = gsap.timeline();

  tl.to('#agePop .age-content ', {
    y: 20,
    ease: 'Power2.easeInOuut',
    duration: 0.3,
  })
    .to('#agePop .age-content ', {
      y: -50,
      autoAlpha: 0,
      ease: 'Power2.easeIn',
    })
    .call(() => {
      show.value = false;
    });
};
</script>

<style lang="sass" scoped>
.btn
  background: linear-gradient(180deg, #00BAB3 -140%, #00637B 11.97%, #00142C 144.69%)
</style>
