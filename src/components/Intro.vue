<template>
  <div class="container" id="intro">
    <!-- intro -->
    <div
      class="flex space-x-12 py-12 ani-f-b md:flex-col md:space-x-0 gaPage"
      data-ga="活動辦法"
    >
      <div class="font-bebas w-full flex items-end">
        <div>
          <div class="text-6xl border-text tracking-wider">2022</div>
          <div class="linear-text-1 text-9xl -ml-2 md:text-7xl">12.16</div>
        </div>
        <div class="linear-text-1 text-9xl md:text-7xl mx-3">-</div>
        <div>
          <div class="text-6xl border-text tracking-wider">2023</div>
          <div class="linear-text-1 text-9xl -ml-2 md:text-7xl">1.15</div>
        </div>
      </div>
      <div class="w-full text-xl text-teal-3 leading-relaxed pb-4 pt-16">
        挑戰風味極致、突破品酩佐饌體驗，格蘭利威持續號召「台味覺醒」！攜手全台29家指標酒吧及餐酒館推出全新一波《台味星指南》，特色酒食搭配格蘭利威12年首席三桶，再次為你帶來味蕾感官的創新體驗。
      </div>
    </div>

    <!-- wines -->
    <div
      class="flex pt-20 pb-3 border-t border-gold md:flex-col md:py-12 gaPage"
      data-ga="活動辦法-12年"
    >
      <div class="relative max-w-1/2 w-full">
        <img src="@/assets/imgs/rulePic1.png" class="ani-f-l" />
      </div>
      <div class="grow relative z-10 flex flex-col items-start">
        <div
          class="linear-text-4 font-bebas whitespace-nowrap leading-[.9em] -translate-x-16 text-[7rem] pt-0 tracking-wider ani-f-b md:text-[17vw] md:-translate-x-0 md:pt-0"
        >
          THE GLENLIVET<br />
          12 YEAR OLD
        </div>

        <div
          class="text-xl text-teal-3 leading-relaxed pt-8 pl-12 ani-f-b md:pl-0 md:pt-6"
        >
          <div class="text-2xl font-bold mb-4">第一重</div>
          至合作酒吧及餐酒館內用，並加入「保樂力加酩家沙龍」LINE官方帳號，即可品飲格蘭利威12年首席三桶威士忌乙杯。（含純飲或high
          ball）
          <div class="mt-4 text-teal-1 md:mt-4 text-base">
            ※數量有限，兌/贈完即止
          </div>
        </div>
        <div
          class="text-xl text-teal-3 leading-relaxed pt-8 pl-12 ani-f-b md:pl-0 md:pt-6"
        >
          <div class="text-2xl font-bold mb-4">第二重</div>
          至合作酒吧及餐酒館點購格蘭利威12年首席三桶威士忌2杯（含純飲或high
          ball），即贈店家招牌下酒菜乙份。
          <div class="mt-4 text-teal-1 md:mt-4 text-base">
            ※下酒菜依各酒吧及餐酒館提供為主，數量有限，兌/贈完即止
          </div>
        </div>
      </div>
    </div>

    <div class="flex py-12 justify-center">
      <div
        class="bg-linear-1 font-bold text-2xl text-center text-white w-full max-w-lg py-4 tracking-widest cursor-pointer duration-300 hover:opacity-80 ani-f-b md:text-base md:py-2 gBtn"
        data-g="詳細活動辦法"
        @click="showRule = true"
      >
        活動辦法
      </div>
    </div>
  </div>
  <Transition name="fade">
    <RulePop v-show="showRule" @close="showRule = false"></RulePop>
  </Transition>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import RulePop from './RulePop.vue';
import useGsap from '@/utils/useGsap';
const { initAnimation, staggerFromScale } = useGsap();
const showRule = ref(false);

onMounted(() => {
  initAnimation('#intro');
});
</script>

<style lang="sass" scoped></style>
