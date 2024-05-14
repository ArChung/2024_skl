<template>
  <div id="product" ref="target">
    <div class="container flex flex-col items-center relative px-8 md:px-0">
      <!-- line -->
      <div class="flex w-full items-end justify-center space-x-6 py-12">
        <img src="@/assets/imgs/line3.png" class="flex-shrink w-[40%] md:w-full" />
        <img src="@/assets/imgs/line2.png" class="flex-grow md:hidden" />
      </div>

      <div class="ani-f-b relative pt-36 pb-36 bg-full flex flex-col justify-center items-center md:py-12 md:w-full" :style="{ backgroundImage: `url(${getUrl('content1_bg.png')})` }">
        <div class="font-bold text-red text-2xl">|<span class="mx-4">保險商品</span>|</div>
        <div class="px-24 text-center leading-[2.5em] text-lg mt-8 md:px-0 md:leading-loose">逐夢的路上，<br class="hidden md:block" />您可以為自己準備更多穩健方案， <br />選擇適合的保單內容，<br class="hidden md:block" />讓逐夢的路上能走得更踏實</div>
      </div>

      <Cards class="ani-f-b"></Cards>

      <div class="pb-12 pt-32 flex justify-center relative w-full md:pb-12 ani-f-b">
        <a href="#" target="_blank" class="block duration-300 hover:scale-90">
          <img src="@/assets/imgs/btn.png" class="w-[250px]" />
        </a>
        <img src="@/assets/imgs/butterfly.png" class="absolute top-2 left-8 md:hidden ani-f-b" />
      </div>
    </div>

    <div class="w-full mt-12">
      <img src="@/assets/imgs/dancin_m.png" class="hidden md:block ani-f-b" />
      <div class="container relative md:hidden">
        <img src="@/assets/imgs/line2.png" class="" />
        <img src="@/assets/imgs/dancin.png" class="absolute left-1/2 ml-[200px] top-0 mt-[-250px] ani-f-r" />
      </div>
      <div class="bg-full mt-10" :style="{ backgroundImage: `url(${getUrl('bg4.png')})` }">
        <div class="container py-20 text-center">
          <div class="font-bold text-red text-2xl">|<span class="mx-4">活動專線</span>|</div>
          <div class="px-24 leading-[2.5em] text-lg mt-8 md:px-8">
            若您在投稿過程中有任何疑問，<br />請在平日上班時段(10:30-18:30)洽詢客服，由活動小組為您服務。<br />
            連絡電話<a class="hover:underline" href="tel:02-2627-7067">02-2627-7067#1222</a>或來信<a class="hover:underline" href="mailto:joan.chen@unisincere.com.tw">joan.chen@unisincere.com.tw</a>
          </div>
        </div>
      </div>
    </div>

    <div class="py-7 bg-red flex justify-center">
      <img src="@/assets/imgs/logo2.png" class="" />
    </div>
  </div>
</template>

<script setup>
import { getUrl } from '@/utils';
import { computed, reactive, ref, onMounted } from 'vue';
import { useMediaQuery, useParallax } from '@vueuse/core';
import Cards from './Cards.vue';
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
  return {
    transform: `translateX(${parallax.tilt * -value}px) translateY(${parallax.roll * value}px) `,
  };
};

const cardStyle = computed(() => ({
  transform: `rotateX(${parallax.roll * 20}deg) rotateY(${parallax.tilt * 20}deg)`,
}));

// import { onMounted, ref } from 'vue';
// import RulePop from './RulePop.vue';
// import useGsap from '@/utils/useGsap';
// const { initAnimation, staggerFromScale } = useGsap();
// const showRule = ref(false);

onMounted(() => {
  setTimeout(() => {
    initAnimation('#product');
  }, 10);
});
</script>

<style lang="sass" scoped></style>
