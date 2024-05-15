<template>
  <div id="video" class="relative flex flex-col items-center pb-24 -mt-48 md:mt-0 md:mb-12" ref="target">
    <div class="w-full px-12 max-w-5xl relative z-10 -mt-52 md:px-0 md:mt-0 ani-f-b">
      <iframe class="w-full aspect-[16/9] shadow-xl" src="https://www.youtube.com/embed/6zTGay6bmaU?si=qargspDAEIQl8B8y&rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
    <img src="@/assets/imgs/bg3.png" class="absolute w-full top-0 left-0 md:relative md:aspect-[16/9]" />
    <div class="md:absolute bottom-0 md:w-full md:px-2" :style="containerStyle">
      <div class="relative mt-24 inline-block max-w-3xl group cursor-pointer" :style="cardStyle">
        <img src="@/assets/imgs/btn01.png" class="" :style="layerStyle(10)" />
        <img src="@/assets/imgs/btn02.png" class="absolute w-full top-0 left-0 bg-contain" :style="layerStyle(-30)" />
        <img src="@/assets/imgs/btn03.png" class="absolute w-full top-0 left-0 bg-contain" :style="layerStyle(-10)" />
        <div class="absolute w-full top-0 left-0" :style="layerStyle(-25)">
          <img src="@/assets/imgs/btn04.png" class="absolute w-full top-0 left-0 bg-contain group-hover:opacity-80 group-hover:scale-105 duration-200" />
        </div>
        <img src="@/assets/imgs/btn05.png" class="absolute w-full top-0 left-0 bg-contain" :style="layerStyle(-60)" />
        <img src="@/assets/imgs/btn06.png" class="absolute w-full top-0 left-0 bg-contain" :style="layerStyle(-50)" />
        <div class="absolute w-full top-0 left-0" :style="layerStyle(-60)">
          <img src="@/assets/imgs/btn07.png" class="absolute w-full top-0 left-0 bg-contain group-hover:scale-90 duration-200" />
        </div>
      </div>

      <img src="@/assets/imgs/star3_01.png" class="absolute top-3/4 left-0 -ml-24 md:hidden" />
      <img src="@/assets/imgs/star3_02.png" class="absolute top-1/2 left-0 -ml-72 md:hidden" />
      <img src="@/assets/imgs/star3_03.png" class="absolute top-full left-full md:hidden" />
    </div>
    <img src="@/assets/imgs/star3_04.png" class="absolute top-36 right-24 md:hidden" />
  </div>
</template>

<script setup>
import { getUrl } from '@/utils';
import { computed, reactive, ref, onMounted } from 'vue';
import { useMediaQuery, useParallax } from '@vueuse/core';
import useGsap from '@/utils/useGsap';
const { initAnimation, staggerFromScale } = useGsap();

const target = ref(null);
const isMobile = useMediaQuery('(max-width: 700px)');
const parallax = reactive(useParallax(target));

const layerBase = {
  // position: 'absolute',
  // height: '100%',
  // width: '100%',
  transition: '.3s ease-out all',
};

const containerStyle = {
  perspective: '800px',
};
const layerStyle = (value) => {
  return isMobile.value
    ? {}
    : {
        transform: `translateX(${parallax.tilt * -value}px) translateY(${parallax.roll * value}px) `,
      };
};

const cardStyle = computed(() => {
  return isMobile.value
    ? {}
    : {
        transform: `rotateX(${parallax.roll * 20}deg) rotateY(${parallax.tilt * 20}deg)`,
      };
});

// import RulePop from './RulePop.vue';
// import useGsap from '@/utils/useGsap';
// const showRule = ref(false);

onMounted(() => {
  setTimeout(() => {
    initAnimation('#video');
  }, 10);
});
</script>

<style lang="sass" scoped></style>
