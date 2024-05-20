<template>
  <div class="pt-36 pb-96 bg-[#FFF9EC] relative md:pb-0" id="intro">
    <!-- section1 -->
    <div class="flex flex-col items-center relative">
      <!-- title1 -->
      <div class="relative z-10 ani-f-b">
        <div class="relative">
          <div class="text-red absolute top-2/3 -translate-y-1/2 text-center w-full text-3xl leading-relaxed font-bold md:text-[6vw] md:translate-y-[-60%]">給每一個正在<br class="hidden md:block" />夢想路上努力的你</div>
          <img src="@/assets/imgs/title1_bg.png" class="md:hidden" />
          <img src="@/assets/imgs/title1_b_m.png" class="hidden md:block" />
        </div>
        <img src="@/assets/imgs/title1_1.png" class="ani-f-b absolute top-0 left-0 md:-mt-16 md:scale-50 md:left-12" />
        <img src="@/assets/imgs/title1_4.png" class="ani-f-l absolute -bottom-6 -left-48 md:hidden" />
        <img src="@/assets/imgs/title1_3.png" class="ani-f-r absolute -right-36 -bottom-16 md:scale-50 md:-right-12 md:-bottom-0" />
      </div>
      <!-- content1 -->
      <div class="relative -mt-24 w-full max-w-5xl">
        <div class="bg-full pt-36 pb-52 px-24 text-center leading-[2.5em] text-lg md:px-8 md:pt-32 md:leading-loose ani-f-b" :style="{ backgroundImage: `url(${getUrl('content1_bg.png')})` }">
          每個生日吹蠟燭時許的心願，每個新年年初洋洋灑灑寫下想完成的人生里程碑，<br />
          我們相信，每一個夢想都值得被實現，<br class="hidden md:block" />每一份努力都值得被肯定。 <br />
          無論你的夢想是什麼，<br class="hidden md:block" />無論你正面臨的挑戰有多少， <br />
          新光人壽都願意與你攜手同行，<br class="hidden md:block" />提供助力為你的夢想保駕護航。
        </div>
        <img src="@/assets/imgs/title1_2.png" class="absolute -left-12 bottom-12 md:scale-75 md:bottom-0 md:-mb-12 ani-f-l" />
        <img src="@/assets/imgs/title1_5.png" class="absolute right-14 top-1/2 mt-4 md:scale-50 md:top-3/4 md:mt-12" />
        <img src="@/assets/imgs/title1_6.png" class="absolute right-0 top-1/2 -mt-6 md:scale-50 md:top-3/4 md:mt-12 md:right-8" />
        <img src="@/assets/imgs/title1_4.png" class="hidden md:block absolute bottom-24 -right-24 scale-50" />
      </div>
    </div>
    <!-- section2 -->
    <div class="relative">
      <div class="relative z-20">
        <div class="flex justify-center">
          <div class="relative ani-f-b">
            <div class="text-red absolute top-2/3 -translate-y-1/2 text-center w-full text-3xl font-bold">如果你...</div>
            <img src="@/assets/imgs/title2_bg.png" class="md:hidden" />
            <img src="@/assets/imgs/title1_b_m.png" class="hidden md:block" />
          </div>
        </div>
        <div class="relative flex w-full justify-center max-w-[1200px] mx-auto -mt-10 md:flex-col">
          <img src="@/assets/imgs/pop1.png" class="block w-1/3 translate-x-8 -translate-y-24 md:w-[90%] md:translate-y-0 ani-f-b" />
          <img src="@/assets/imgs/pop2.png" class="block w-1/3 md:w-[90%] md:-mt-6 ani-f-b" />
          <img src="@/assets/imgs/pop3.png" class="block w-1/3 -translate-x-8 -translate-y-28 md:w-[90%] md:translate-y-0 md:translate-x-10 md:-mt-4 ani-f-b" />
        </div>
      </div>

      <!-- content1 -->
      <div class="relative -mt-32 w-full max-w-5xl z-10 mx-auto md:-mt-12">
        <div class="bg-full pt-64 pb-64 px-24 text-center leading-[2em] text-3xl text-red font-bold md:text-[5vw] md:px-8 md:pt-24 md:pb-24 ani-f-b" :style="{ backgroundImage: `url(${getUrl('content1_bg.png')})` }">快來投稿吧！<br />讓我們一起為夢想而努力，<br />為青春而燦爛，期待您的參與！</div>
        <img src="@/assets/imgs/title2_01.png" class="absolute top-16 left-32 md:hidden ani-f-b" />
        <img src="@/assets/imgs/title2_02.png" class="absolute top-1/2 left-36 md:hidden ani-f-b" />
        <img src="@/assets/imgs/title2_03.png" class="absolute top-1/2 mt-8 left-12 md:hidden ani-f-b" />
        <img src="@/assets/imgs/title2_04.png" class="absolute top-52 left-16 md:hidden ani-f-b" />
        <img src="@/assets/imgs/title2_05.png" class="absolute top-0 left-1/2 -ml-12 md:hidden ani-f-b" />
        <img src="@/assets/imgs/title2_06.png" class="absolute bottom-32 -left-32 md:hidden ani-f-b" />
      </div>

      <img src="@/assets/imgs/index_10_m.png" class="w-full -mt-24 hidden md:block relative z-10 ani-f-b" />
      <img src="@/assets/imgs/title3_bg.png" class="w-full -mt-12 md:hidden" />
    </div>
  </div>
</template>

<script setup>
import { getUrl } from '@/utils';
import { onMounted } from 'vue';
import useGsap from '@/utils/useGsap';
const { initAnimation, staggerFromScale } = useGsap();

onMounted(() => {
  setTimeout(() => {
    initAnimation('#intro');
  }, 10);
});
</script>

<style lang="sass" scoped></style>
