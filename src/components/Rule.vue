<template>
  <div id="rule" ref="target">
    <div class="container flex flex-col items-center relative px-8 md:px-0">
      <!-- 01.活動說明 -->
      <div class="font-bold text-red text-2xl">|<span class="mx-4">活動說明</span>|</div>
      <img src="@/assets/imgs/line.png" class="py-8 md:hidden ani-f-b" />
      <img src="@/assets/imgs/line2.png" class="py-8 hidden md:block ani-f-b" />

      <div class="flex space-x-8 relative z-10 bg-full md:flex-col md:space-x-0" :style="{ backgroundImage: isMobile ? `url(${getUrl('bg_m.png')})` : `` }">
        <div class="relative w-[45%] md:w-full ani-f-l">
          <div class="text-white bg-full pl-6 pr-9 pt-2 pb-4 absolute top-0 left-24 md:left-8" :style="{ backgroundImage: `url(${getUrl('title-img.png')})` }">活動時程</div>
          <div class="text-[#6D7278] bg-full pl-24 pr-20 pt-20 pb-20 md:px-8 md:pb-12" :style="{ backgroundImage: isMobile ? `` : `url(${getUrl('title-bg.png')})` }">
            <ul class="list-disc space-y-3 pl-4">
              <li>報名時間：113年6月1日至8月31日</li>
              <li>評選時間：暫訂113年9月5日至9月6日</li>
              <li>名單公布：暫訂113年9月9日</li>
              <li>錄取名額：3名+備選5名</li>
              <li>
                撥款時程：113年10月8日前<br />
                ( 最晚須於9/18前回覆意願並簽署授權合約)
              </li>
            </ul>
          </div>
        </div>

        <div class="relative w-[55%] mt-20 md:w-full md:mt-0 ani-f-r">
          <div class="text-white bg-full pl-6 pr-9 pt-2 pb-4 absolute top-0 left-24 md:left-8" :style="{ backgroundImage: `url(${getUrl('title-img.png')})` }">活動標準</div>
          <div class="text-[#6D7278] bg-full pl-24 pr-20 pt-20 pb-20 md:px-8" :style="{ backgroundImage: isMobile ? '' : `url(${getUrl('titlebg2.png')})` }">
            <div class="text-red font-bold -ml-4">•夢想創意性 25%</div>
            <div class="">夢想提案具創意思維，擺脫既有框架，勇敢作夢、逐夢、圓夢。</div>

            <div class="text-red font-bold -ml-4 mt-6">•夢想潛力性 25%</div>
            <div class="">夢想提案具長遠發展潛力，對個人、團體、社會具正向影響力。</div>
            <div class="text-red font-bold -ml-4 mt-6">•夢想完整性 50%</div>
            <div class="">夢想提案內容描述完整清晰，例如：時程、執行方案、角色、場地、預算(不限於10萬內夢想提案)…等。</div>
          </div>
        </div>
      </div>

      <!-- 02.插圖 -->
      <img src="@/assets/imgs/content3_m.png" class="hidden md:block relative z-10 -mt-12 ani-f-b" />
      <div class="relative -mt-24 inline-block md:hidden ani-f-b">
        <img src="@/assets/imgs/content3_1.png" class="" :style="layerStyle(10)" />
        <img src="@/assets/imgs/content3_2.png" class="absolute w-full top-0 left-0 bg-contain" :style="layerStyle(-30)" />
        <img src="@/assets/imgs/content3_3.png" class="absolute w-full top-0 left-0 bg-contain" :style="layerStyle(-50)" />
        <img src="@/assets/imgs/content3_4.png" class="absolute w-full top-0 left-0 bg-contain" :style="layerStyle(-80)" />
        <img src="@/assets/imgs/content3_5.png" class="absolute w-full top-0 left-0 bg-contain" :style="layerStyle(-60)" />
        <img src="@/assets/imgs/content3_6.png" class="absolute w-full top-0 left-0 bg-contain" :style="layerStyle(-50)" />
        <img src="@/assets/imgs/content3_7.png" class="absolute w-full top-0 left-0 bg-contain" :style="layerStyle(-100)" />
      </div>

      <!-- 03. 活動辦法  -->
      <div class="font-bold text-red text-2xl mt-12">|<span class="mx-4">活動說明</span>|</div>
      <img src="@/assets/imgs/line.png" class="py-8 md:hidden ani-f-b" />
      <img src="@/assets/imgs/line2.png" class="py-8 hidden md:block mx-auto w-[90%] ani-f-b" />

      <div class="px-12 w-full ani-f-b">
        <div class="border-red w-full h-[350px] overflow-y-scroll border scrollbar-thin scrollbar-thumb-teal-3 scrollbar-track-gray-900 scrollbar-thumb-rounded-full">
          <div class="p-8 bg-[#FFF9EC]">
            <h1 class="text-2xl font-bold mb-4 text-red">青春逐夢計畫活動辦法</h1>
            <p class="mb-4">1. 主辦單位：新光人壽新光新朋友專案小組</p>
            <p class="mb-4">2. 徵件主題：青春逐夢計畫！</p>
            <p class="mb-4">3. 活動時程及方式</p>
            <ul class="list-disc pl-8 mb-4">
              <li>報名日期：活動公告日起至113年8月31日</li>
              <li>報名方式：青春逐夢計畫網站填妥申請資料及計畫內容</li>
              <li>評選時間：報名截止日後15個工作日</li>
              <li>錄取名額：正取3名+候補5名</li>
              <li>逐夢金:10萬元(每一名，共三名)</li>
            </ul>
            <p class="mb-4">4. 申請資格：需同時具備以下條件</p>
            <ul class="list-disc pl-8 mb-4">
              <li>年齡介於18至40歲。</li>
              <li>僅限個人名義申請。</li>
              <li>近三年首購保單之新光新朋友(首購定義為成交新契約當下未持有新光人壽有效契約)。</li>
            </ul>
            <p class="mb-4">5. 評選標準：</p>
            <ul class="list-disc pl-8 mb-4">
              <li>夢想創意性25%</li>
              <li>夢想潛力性25%</li>
              <li>夢想完整性50%</li>
            </ul>
            <!-- 更多內容略 -->
            <p class="mb-4">8. 其他：</p>
            <ul class="list-disc pl-8 mb-4">
              <li>主辦單位保有隨時解釋、補充、修改、變更本活動辦法及注意事項之權利，並有權決定取消、終止、或暫停本活動。活動內容若發生任何爭議概以主辦單位最後決定為準。</li>
              <li>若有未盡事項與活動疑問，請電洽02-2389-5858#7281,#7286（新光人壽新光新朋友專案小組）。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getUrl } from '@/utils';
import { computed, reactive, ref, onMounted } from 'vue';
import { useMediaQuery, useParallax } from '@vueuse/core';
import useGsap from '@/utils/useGsap';
const { initAnimation, staggerFromScale } = useGsap();

const target = ref(null);
const isMobile = useMediaQuery('(max-width: 768px)');
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
    initAnimation('#rule');
  }, 10);
});
</script>

<style lang="sass" scoped></style>
