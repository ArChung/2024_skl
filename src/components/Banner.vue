<template>
  <div
    class="relative w-full gaPage"
    data-ga="主畫面"
    id="banner"
    :style="{ '--vh': `${height}px` }"
  >
    <!-- bg -->
    <div class="w-full h-full relative overflow-hidden">
      <img
        src="@/assets/imgs/index-banner.jpg"
        class="absolute w-full h-full object-cover md:hidden bgImg"
      />
      <img
        src="@/assets/imgs/index-banner-m.png"
        class="absolute w-full h-full object-cover hidden md:block bgImg"
      />
    </div>

    <!-- decoration -->
    <img
      src="@/assets/imgs/wave.png"
      class="absolute right-0 bottom-0 translate-y-1/2 md:hidden"
    />

    <!-- title -->
    <div class="index-title mb-20 md:mb-6">
      <img
        :src="getUrl(`title0${index}.png`)"
        v-for="index in 8"
        :key="index"
        class="inset-0 ani-logo"
        :class="[
          index === 1 ? 'relative' : 'absolute',
          index === 8 ? 'mt-20 md:mt-12' : '',
        ]"
      />
    </div>

    <!-- scrollBtn -->
    <div class="scrollBtn">
      <span class="mt-1 mr-4">SCROLL</span>
      <img src="@/assets/imgs/arrow.png" alt="" class="mt-2 animate-bounce" />
    </div>
  </div>
</template>

<script setup>
import { getUrl } from '@/utils/index.js';
import { ref, onMounted, inject, watchEffect } from 'vue';
import { gsap } from 'gsap';
import useGsap from '@/utils/useGsap';
import { useWindowSize } from '@vueuse/core';

const { height } = useWindowSize();

const show = inject('showAgeCheck');
const { staggerFromScale } = useGsap();

onMounted(() => {
  watchEffect(() => {
    if (show.value) return;
    staggerFromScale('#banner .ani-logo');
    gsap.from('#banner .bgImg', {
      scale: 1.1,
      duration: 5,
    });
  });
});
</script>

<style lang="sass" scoped>
.index-title
  @apply absolute left-3/4 -translate-x-1/3 top-[20%] w-[30%] max-w-[480px]
  @screen md
    top: auto
    bottom: 8%
    left: 50%
    width: min(68vw,35vh)
    @apply -translate-x-1/2
.scrollBtn
  @apply absolute text-teal items-center text-5xl bg-gradient-to-r from-[#01465E] to-[#01A6A7] tracking-[0.15em] rotate-90 py-5 pl-12 pr-[5em] font-bold bottom-0 left-0 z-10  flex origin-bottom-left translate-y-[-7em] font-bebas xl:hidden
#banner
  height: 90vh
  height: calc(var(--vh, 1vh) * 0.9 + 2px)
</style>
