<template>
  <div class="container" id="wine">
    <!-- wine1 -->

    <div class="py-24 relative gaPage" data-ga="格蘭利威12年">
      <div
        class="left-1/2 translate-x-1 bg-linear-1 wineBg md:left-0 md:translate-x-0"
      >
        <div
          class="w-full h-full"
          :style="{ backgroundImage: `url(${getUrl('wave1.png')})` }"
        ></div>
      </div>

      <div class="flex space-x-12 md:space-x-0 md:flex-col-reverse">
        <div class="w-full flex flex-col items-start">
          <div
            class="linear-text-4 text-8xl font-bebas -ml-1 ani-f-b md:text-[18vw]"
          >
            THE GLENLIVET <br />12 YEAR OLD
          </div>
          <div class="text-teal-3 font-bold text-xl ani-f-b">
            格蘭利威12年 首席三桶 單一麥芽蘇格蘭威士忌
          </div>
          <div class="mt-12 space-y-8 ani-stagger-f-b md:space-y-2">
            <div
              class="flex text-base items-start ani md:flex-col"
              v-for="(item, index) in data1"
              :key="index"
            >
              <div
                class="bg-teal-2 text-white py-1 px-8 tracking-widest shrink-0"
              >
                {{ item.name }}
              </div>
              <div class="text-teal-3 py-1 pl-5 md:pl-0 md:py-3">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center relative">
          <img
            src="@/assets/imgs/wine1.png"
            class="ani-f-r md:w-[25vw] md:pb-6"
          />
          <img
            src="@/assets/imgs/wave.png"
            class="absolute right-0 top-0 translate-y-full translate-x-1/2"
          />
        </div>
      </div>
    </div>
    <!-- wine2 -->
    <!-- <div class="py-24 relative gaPage" data-ga="格蘭利威18年">
      <div
        class="right-1/2 bg-linear-2 -translate-x-12 wineBg md:right-0 md:-translate-x-0"
      >
        <div
          class="w-full h-full"
          :style="{ backgroundImage: `url(${getUrl('wave2.png')})` }"
        ></div>
      </div>

      <div
        class="flex space-x-12 flex-row-reverse md:flex-col-reverse md:space-x-0"
      >
        <div class="w-full flex flex-col items-start">
          <div
            class="linear-text-3 text-8xl font-bebas -ml-1 ani-f-b md:text-[18vw]"
          >
            THE GLENLIVET<br />18 YEAR OLD
          </div>
          <div class="text-teal-3 font-bold text-xl ani-f-b">
            格蘭利威18年 單一麥芽威士忌
          </div>
          <div class="mt-12 space-y-8 ani-stagger-f-b md:space-y-2">
            <div
              class="flex text-base items-start ani md:flex-col"
              v-for="(item, index) in data2"
              :key="index"
            >
              <div
                class="bg-gold-1 text-white py-1 px-8 tracking-widest shrink-0"
              >
                {{ item.name }}
              </div>
              <div class="text-teal-3 py-1 pl-5 md:pl-0 md:py-3">
                {{ item.content }}
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center relative">
          <img
            src="@/assets/imgs/wine2.png"
            class="ani-f-l md:w-[25vw] md:pb-6"
          />
          <img
            src="@/assets/imgs/wave.png"
            class="absolute left-0 top-0 translate-y-full -translate-x-1/2"
          />
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getUrl } from '@/utils';
import useGsap from '@/utils/useGsap';
const { initAnimation } = useGsap();

onMounted(() => {
  initAnimation('#wine');
});

const data1 = ref([
  {
    name: '色澤',
    content: '深邃飽和金黃色澤',
  },
  {
    name: '酒桶',
    content: '美國橡木桶、初次裝填蘭姆桶、初次裝填波本桶',
  },
  {
    name: '尾韻',
    content: '尾韻悠長，絲滑而綿密',
  },
  {
    name: '香氣',
    content: '香甜奶油焦糖，明朗的熱帶水果氣息',
  },
  {
    name: '口感',
    content:
      '入口後，由蘭姆桶醞釀的香甜鳳梨，熟蜜桃等熱帶水果，層次豐富；揉合波本桶的迷人奶油風味，與蜂蜜交織出無與倫比的滑順細緻口感，與經典淡雅的花香',
  },
]);

const data2 = ref([
  {
    name: '色澤',
    content: '杏桃金色',
  },
  {
    name: '酒桶',
    content: '初次裝填和二次裝填美國橡木桶以及雪莉桶',
  },
  {
    name: '風味',
    content: '熟成柑橘與冬季香料香氣',
  },
  {
    name: '尾韻',
    content: '葡萄乾與香料悠長尾韻',
  },
  {
    name: '香氣',
    content: '濃郁果香與太妃糖香氣',
  },
  {
    name: '口感',
    content: '風味平衡，帶點甜美橙香',
  },
]);
</script>

<style lang="sass" scoped>
.wineBg
  @apply absolute w-[calc(50vw)] h-1/2 z-0 bottom-[20%]
  @screen md
    bottom: auto
    top: 15%
    height: 60vw
    width: calc(100vw - 1rem)
</style>
