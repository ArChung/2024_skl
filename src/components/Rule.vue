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
              <li>錄取名額：正取3名+候補5名</li>
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
              <li>逐夢金：10萬元(每一名，共三名)</li>
            </ul>
            <p class="mb-4">4. 申請資格：需同時具備以下條件</p>
            <ul class="list-disc pl-8 mb-4">
              <li>年齡介於18至40歲。</li>
              <li>僅限個人名義申請。</li>
              <li>近三年首購保單之新光新朋友(首購定義為成交新契約當下未持有新光人壽有效契約)。<br />*若申請者尚未符合申請資格(3)，須於2024年9月30日前完成新契約承保</li>
            </ul>
            <p class="mb-4">5. 評選標準：</p>
            <ul class="list-disc pl-8 mb-4">
              <li>夢想創意性25%<br />夢想提案具創意思維，擺脫既有框架，勇敢作夢、逐夢、圓夢。</li>
              <li>夢想潛力性25%<br />夢想提案具長遠發展潛力，對個人、團體、社會具正向影響力。</li>
              <li>夢想完整性50%<br />夢想提案內容描述完整清晰，例如：時程、執行方案、角色、場地、預算(不限於10萬內夢想提案)…等。</li>
            </ul>
            <p class="mb-4">6. 申請注意事項：</p>
            <ul class="list-disc pl-8 mb-4">
              <li>申請者提供任何個人資料前，需詳閱及同意新光人壽個人資料處理及利用政策。</li>
              <li>凡成為本計畫錄取者，即視為同意授權主辦單位使用其青春逐夢計畫內容及肖像，亦同意執行計畫時進行拍攝，並擔保其對於所提供本活動照片、資訊、圖片、影片、作品等擁有合法之權利（包括但不限於著作權、肖像等人格權），絕無侵害他人智慧財產權或其他權利之情事，且同意永久無償授權主辦單位或執行單位使用（包括但不限於編輯、重製、公開展示、散佈、電視廣告、平面廣告、戶外廣告、網路廣告等）。</li>
              <li>申請者違反其同意暨擔保內容者，主辦單位或執行單位得取消申請資格，相關法律責任由申請者自行負責，如因此致主辦單位或執行單位受損害者，應負賠償責任（包括但不限於所支出之律師費、訴訟費）。所有申請文件不論入選與否，恕不退還。所有個人資訊需與報名網站中所填寫之個人資訊相同，且申請書需由報名者親自撰寫。如有不同，主辦單位將以資格不符退件。</li>
              <li>本活動之說明構成注意事項的一部分而具有法律約束力，申請者於參加本計畫之同時，即表示已詳閱、瞭解及同意本計畫辦法及注意事項與個人資料保護及隱私政策等相關規定，並同意遵守主辦單位及執行單位的使用規範或其他交易有關之規定，如有違反，主辦單位或執行單位有權取消其參加資格，並就因此所生之損害，向申請者請求損害賠償。如申請者不同意本活動辦法或注意事項之全部或部分內容，請勿參與本活動。</li>
              <li>主辦單位僅提供每位錄取者各10萬元逐夢金，錄取者在執行其夢想時，應考量自身安全，並承擔個人執行夢想時所引發的危險、意外傷害和危及生命的後果，主辦單位並無義務再提供其他任何實質或非實質的援助以利錄取者完成其夢想。</li>
            </ul>

            <p class="mb-4">7. 錄取者之責任義務：</p>
            <ul class="list-disc pl-8 mb-4">
              <li>每名錄取者核給10萬元逐夢金，該筆金額將於113年10月8日前整筆匯入每名入選者之帳戶內，逐夢金需全額使用於逐夢計畫中，其金額不得折合任何等值商品、物品，或挪作他用。其入選資格以及逐夢金亦不得轉讓第三者。</li>
              <li>錄取者夢想執行期間最晚需於113年10月底前開始執行(不指定夢想執行完畢)，並須配合主辦單位拍攝逐夢計畫執行過程的紀錄影片，預定於11月初擇一日進行拍攝，主辦單位會於三位錄取者中挑選兩位錄取者進行記錄影片之拍攝，倘未能於期限內開始執行則視為錄取者棄權，將由備選者予以替補；棄權者已領取逐夢金則應返還主辦單位。</li>
              <li>錄取者在執行計畫時，應考量自身安全，並承擔個人執行逐夢計畫行為時所引發的危險、意外傷害和危及生命的後果。同時本人親屬或繼承人或相關之第三人將無法對上述之善意個人、單位或團體提出任何告訴或民事求償。</li>
              <li>入選夢想若有涉及第三人為重點人物，該圓夢紀錄片需協助取得其肖像權並與其簽訂肖像權同意書。</li>
              <li>錄取者有義務配合主辦單位進行相關活動宣傳(如電子、網路媒體、報章雜誌採訪…等)，活動宣傳之時限應為記錄影片上線起半年內，若無法配合，主辦單位有權要求錄取者返還所有逐夢金並保留次順位備取者或取消本活動錄取名額的權利。</li>
              <li>依中華民國稅法第八十八條制定之各類所得扣繳標準第二條七項規定，凡競賽獎金或獎品及機會中獎類型將列入個人所得，獎項價值超過新台幣20,000元者（含累計），得獎者依法需預先扣繳10%競技競賽和機會中獎稅金，並由主辦單位依相關法令代扣（繳納）相關稅捐。</li>
              <li>
                主辦單位鼓勵錄取者「逐夢」，但仍應兼顧「踏實」，倘錄取者於計畫執行中因故發生未能依計畫履行之情事，錄取者應(A、B為擇一條件)：<br />
                A. 立即事先與主辦單位進行協商溝通，在錄取者之逐夢目標與原來所設目標方向不變之情況下，經雙方同意後得允許錄取者對逐夢計畫的實行進行微調；<br />
                B.與主辦單位取得共識得終止履行計畫。 倘非前述A.或B情況，將視為錄取者惡意不履行，主辦單位得要求錄取者返還所有逐夢金。
              </li>
              <li>錄取者及其團隊應以維護主辦單位聲譽為行事準則，若有任何問題，歡迎主動向專案人員反應，尋求解決，不應未釐清事實前，有任何詆毀之情事發生。如有因錄取者個人不當言行或發生重大社會評價減損，致連帶影響本活動主辦單位之聲譽受損，主辦單位有權隨時取消其錄取資格並要求返還逐夢金，錄取者並應為其不當行為對外澄清說明。</li>
            </ul>

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
