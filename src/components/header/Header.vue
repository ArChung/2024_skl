<template>
  <div class="h-screen flex flex-col w-full overflow-hidden border-b-8 border-red box-content md:h-auto" ref="target">
    <nav class="bg-white px-8 py-2 h-[90px] md:h-[50px] md:px-4 md:py-2">
      <img src="@/assets/imgs/logo.png" alt="" srcset="" class="h-full" />
    </nav>

    <img src="@/assets/imgs/m_index.png" class="hidden md:block" />

    <div class="flex-grow w-full overflow-hidden md:hidden" :style="containerStyle">
      <div class="h-full w-full bg-cover bg-center index_banner" :style="[{ backgroundImage: `url(${getUrl('index_01.png')})` }, cardStyle]">
        <img src="@/assets/imgs/index_02.png" class="object-right" :style="layerStyle(30)" />
        <img src="@/assets/imgs/index_021.png" class="object-left-bottom" :style="layerStyle(10)" />
        <img src="@/assets/imgs/index_03.png" class="object-bottom" :style="layerStyle(5)" />
        <img src="@/assets/imgs/index_04.png" class="" :style="layerStyle(-10)" />
        <img src="@/assets/imgs/index_05.png" class="" :style="layerStyle(-15)" />
        <img src="@/assets/imgs/index_06.png" class="object-[40%_100%]" :style="layerStyle(-20)" />
        <img src="@/assets/imgs/index_07.png" class="" :style="layerStyle(-25)" />
        <img src="@/assets/imgs/index_08.png" class="object-[35%_50%]" :style="layerStyle(-50)" />
        <img src="@/assets/imgs/index_09.png" class="" :style="layerStyle(-35)" />
        <img src="@/assets/imgs/index_10.png" class="object-[65%_50%]" :style="layerStyle(-50)" />
        <img src="@/assets/imgs/index_11.png" class="" :style="layerStyle(-45)" />
        <img src="@/assets/imgs/index_12.png" class="object-[30%_100%]" :style="layerStyle(-30)" />
        <img src="@/assets/imgs/index_13.png" class="" :style="layerStyle(-100)" />
        <img src="@/assets/imgs/index_14.png" class="" :style="layerStyle(-60)" />
        <img src="@/assets/imgs/index_15.png" class="" :style="layerStyle(-120)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { getUrl } from '@/utils';
import { computed, reactive, ref } from 'vue';
import { useMediaQuery, useParallax } from '@vueuse/core';

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
  return {
    transform: `translateX(${parallax.tilt * -value}px) translateY(${parallax.roll * value}px) `,
  };
};

const cardStyle = computed(() => ({
  transform: `scale(1.03) rotateX(${parallax.roll * 3}deg) rotateY(${parallax.tilt * 3}deg)`,
}));

// import { onMounted, ref } from 'vue';
// import RulePop from './RulePop.vue';
// import useGsap from '@/utils/useGsap';
// const { initAnimation, staggerFromScale } = useGsap();
// const showRule = ref(false);

// onMounted(() => {
//   initAnimation('#intro');
// });
</script>

<style lang="sass" scoped>
.index_banner
  position: relative
  img
    position: absolute
    width: 100%
    height: 100%
    object-fit: contain
</style>
