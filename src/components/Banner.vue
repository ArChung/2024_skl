<template>
  <div class="sence relative h-[1000px]" ref="container">
    <div class="bg-gold w-32 h-32 absolute left-1/2 top-1/2" :style="layer0"></div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { useMediaQuery, useParallax } from '@vueuse/core';
const container = ref(null);
const parallax = reactive(useParallax(container));
const { tilt, roll, source } = useParallax(container);

const test = '';
const layerBase = {
  position: 'absolute',
  transition: '.3s ease-out all',
};

const _LEVEL0 = -40;
const layer0 = computed(() => ({
  ...layerBase,
  transform: `translateX(${parallax.tilt * _LEVEL0}px) translateY(${parallax.roll * _LEVEL0}px) scale(1.33)`,
}));

// import { getUrl } from '@/utils/index.js';
// import { ref, onMounted, inject, watchEffect } from 'vue';
// import { gsap } from 'gsap';
// import useGsap from '@/utils/useGsap';
// import { useWindowSize } from '@vueuse/core';

// const { height } = useWindowSize();

// const show = inject('showAgeCheck');
// const { staggerFromScale } = useGsap();

// onMounted(() => {
//   watchEffect(() => {
//     if (show.value) return;
//     staggerFromScale('#banner .ani-logo');
//     gsap.from('#banner .bgImg', {
//       scale: 1.1,
//       duration: 5,
//     });
//   });
// });
</script>

<style lang="sass" scoped>
// .index-title
//   @apply absolute left-3/4 -translate-x-1/3 top-[20%] w-[30%] max-w-[480px]
//   @screen md
//     top: auto
//     bottom: 8%
//     left: 50%
//     width: min(68vw,35vh)
//     @apply -translate-x-1/2
// .scrollBtn
//   @apply absolute text-teal items-center text-5xl bg-gradient-to-r from-[#01465E] to-[#01A6A7] tracking-[0.15em] rotate-90 py-5 pl-12 pr-[5em] font-bold bottom-0 left-0 z-10  flex origin-bottom-left translate-y-[-7em] font-bebas xl:hidden
// #banner
//   height: 90vh
//   height: calc(var(--vh, 1vh) * 0.9 + 2px)
</style>
