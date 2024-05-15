<template>
  <div>
    <div class="flex space-x-8 justify-center w-full -mt-16 relative z-10 md:mt-0 md:flex-col md:space-x-0 md:items-center md:space-y-6 px-8">
      <a href="https://www.skl.com.tw/content.html?insId=WDA" target="_blank" class="card" :style="{ backgroundImage: `url(${getUrl('p_bg01.png')})` }">
        <div class="tag bg-[#FF6C23]">
          意外保障
          <div class="arr border-r-[#C14E01] border-t-[#C14E01]"></div>
        </div>

        <img src="@/assets/imgs/pro1.png" class="" />
        <div class="t1">新光人壽Go平安終身傷害保險</div>
        <div class="t2">
          <div class="note from-[#F39800] to-[#FF5500]">終身保障</div>
          <div class="price">每年$4,500 起</div>
        </div>

        <div class="flex justify-center">
          <div class="btn">
            我有興趣
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </a>

      <a href="https://www.skl.com.tw/content.html?insId=WFA" target="_blank" class="card" :style="{ backgroundImage: `url(${getUrl('p_bg02.png')})` }">
        <div class="tag bg-[#E6A904]">
          壽險保障
          <div class="arr border-r-[#C14E01] border-t-[#C14E01]"></div>
        </div>

        <img src="@/assets/imgs/pro2.png" class="" />
        <div class="t1">新光人壽Go普惠new定期保險</div>
        <div class="t2">
          <div class="note from-[#F7C94B] to-[#E6A904]">十年滿期領回</div>
          <div class="price">每年$11,100 起</div>
        </div>

        <div class="flex justify-center">
          <div class="btn">
            我有興趣
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </a>

      <a href="https://www.skl.com.tw/content.html?insId=NQA" target="_blank" class="card" :style="{ backgroundImage: `url(${getUrl('p_bg03.png')})` }">
        <div class="tag bg-[#31B2B3]">
          意外保障
          <div class="arr border-r-[#248B8B] border-t-[#248B8B]"></div>
        </div>

        <img src="@/assets/imgs/pro3.png" class="" />
        <div class="t1">新光人壽安心守護手術醫療<br />終身健康保險</div>
        <div class="t2">
          <div class="note from-[#31B2B3] to-[#248B8B]">終身保障</div>
          <div class="price">每年$3,744 起</div>
        </div>

        <div class="flex justify-center">
          <div class="btn">
            我有興趣
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
      </a>
    </div>
    <div class="text-xs px-8 mt-4">以上費用以30歲女性最低保額為例，實際保障內容依保單條款為主，有任何保單相關問題，請洽新光人壽業務員</div>
  </div>
</template>

<script setup>
import { getUrl } from '@/utils';
</script>

<style lang="sass" scoped>
.card
  @apply bg-cover bg-center p-3 rounded relative pb-6 duration-300
  .tag
    @apply absolute top-3 -left-4 text-sm text-white py-1 px-3
    .arr
      width: 0
      height: 0
      position: absolute
      @apply border-8 top-full left-0
  .t1
    @apply text-white font-bold text-xl h-24 flex justify-center items-center drop-shadow-[3px_3px_2px_rgba(0,0,0,0.25)] text-center
  .t2
    @apply flex justify-center space-x-4 items-center
    .note
      @apply bg-gradient-to-b text-white font-bold shadow-lg px-2 py-1 drop-shadow-sm text-lg text-center w-32
    .price
      @apply font-bold text-xl text-white
  .btn
    @apply rounded  border-white border-2 flex justify-center items-center mt-6 px-12 text-white py-1 duration-300
  &:hover
    @apply scale-105 shadow-2xl
    .btn
      @apply bg-white text-red shadow-lg
</style>
