<template>
  <div
    class="z-50 text-[#FAECE5] fixed px-4 inset-0 bg-black bg-opacity-75 flex justify-center pt-12 pb-[15vh] items-start overflow-y-scroll sm:px-2"
  >
    <div
      class="relative content px-3 py-5 w-full md:py-4 max-w-3xl bg-linear-1"
    >
      <div
        class="absolute inset-0 z-0"
        :style="{ backgroundImage: `url(${getUrl('wave-r.png')})` }"
      ></div>
      <!-- close btn -->
      <div
        class="duration-300 hover:opacity-80 cursor-pointer absolute right-0 top-0 p-3 bg-gradient-to-t z-20 from-teal-3 to text-teal-1"
        @click="$emit('close')"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8 text-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <!-- content -->
      <div
        class="w-full py-8 px-16 leading-relaxed tracking-wide sm:p-4 relative z-10"
      >
        <div
          class="text-3xl tracking-wider font-bold text-white text-center noto-seirf"
        >
          活動辦法
        </div>
        <div class="mt-5">
          <div class="">
            <span class="text-gold">活動時間</span>
            <span class="text-gold mx-5 sm:mx-2"><span class="">|</span></span>
            <span>2022/12/16 ~ 2023/1/15</span>
          </div>
          <div class="my-6 border-gold border-t"></div>
          <p class="">
            格蘭利威攜手全台29間指標酒吧及餐酒館，推出「台味星指南」品酩饗宴活動，
            <br /><br />
            第一重：活動期間至合作酒吧及餐酒館內用，並掃描店內活動QR
            Code加入「保樂力加酩家沙龍」LINE官方帳號，即可品飲格蘭利威12年首席三桶單一麥芽威士忌乙杯（含純飲或high
            ball）。※數量有限，兌/贈完即止
            <br /><br />
            第二重：活動期間至合作酒吧及餐酒館點購格蘭利威12年首席三桶單一麥芽威士忌2杯（含純飲或high
            ball），即贈店家招牌下酒菜乙份。※下酒菜依各酒吧及餐酒館提供為主，數量有限，兌/贈完即止
            <br />
          </p>
          <div class="flex mt-4">
            <span class="text-gold mr-5 flex-shrink-0">註1</span>
            <span
              >12年首席三桶品酩饗宴活動，皆各以每人乙杯為上限，數量有限，兌/贈完即止。
            </span>
          </div>
          <div class="flex mt-4">
            <span class="text-gold mr-5 flex-shrink-0">註2</span>
            <span
              >店家招牌下酒菜依各酒吧及餐酒館提供為主，數量有限，兌/贈完即止。
            </span>
          </div>
          <div class="my-6 border-gold border-t"></div>
          <div class="text-xl text-gold">注意事項</div>
          <ul class="list-decimal text-gold list-outside pl-4 mt-3 space-y-2">
            <li v-for="item in ruleList">
              <div class="text-white pl-3 py-1">
                {{ item }}
              </div>
            </li>
          </ul>
          <div class="my-6 border-gold border-t"></div>
          <div class="flex md:flex-col">
            <span class="text-gold flex-shrink-0">聯絡信箱</span>
            <span class="text-gold mx-5"><span class="sm:hidden">|</span></span>
            <span
              >本活動係由精鏡傳媒股份有限公司承辦執行，如有本次活動相關事宜或任何疑義，請
              email 來信至
              <a href="mailto:salesteam@mirrormedia.mg" class="text-gold"
                >salesteam@mirrormedia.mg</a
              >。
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { getUrl } from '@/utils';

const ruleList = ref([
  '必須年滿 18 歲始可參加本次活動，活動皆需由合作酒吧及餐酒館之店員確認符合法規飲酒年齡後始得參加。',
  '各合作酒吧及餐酒館資訊僅提供參考，參加者可依各酒吧及餐酒館官網、粉絲專頁或去電查詢與確認，若合作酒吧及餐酒館營業資訊有其他異動，將不另行於此活動頁面更新與通知。 ',
  '活動期間，若發生問題或不可抗力之因素導致活動無法進行，主辦單位有權保留變更或終止本活動時間、內容之權利。 ',
  '嚴禁以各種方式侵入、干擾、破壞本活動之功能運作，亦不得採取不法或不正當之行為參加本活動。 ',
  '主辦單位保有本活動之最終解釋權、最終核准權及變更、修改及補充本活動辦法及注意事項之權利，相關異動以本活動網頁公告為主，恕不另行通知。 ',
  '參加者於參加本活動同時，即已充分閱讀並同意接受本活動所有相關辦法、注意事項等全部規範(含更新修正內容)，如有違反本活動辦法之情事，主辦單位有權取消其領取贈品之資格，並就因此產生之損害向參加者請求賠償。如涉及刑事責任者，主辦單位將依法告訴、告發。"',
]);
</script>

<style lang="sass" scoped></style>
