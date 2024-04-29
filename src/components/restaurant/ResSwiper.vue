<template>
  <div>
    <swiper
      class="h-[calc(90vh-70px)] md:h-auto w-full relative"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide
        v-for="(res, index) in resArray"
        :key="`${index}${res.name}`"
        class="pl-24 text-white bg-cover bg-center relative bg-black md:flex-col md:flex md:pl-0 md:bg-gradient-to-b md:from-linear-1 md:to-linear-2 md:pb-[70px] md:!h-auto"
      >
        <img
          :src="
            res.img
              ? `${getUrl(`res/${res.img}`)}`
              : `${getUrl('res/1-2-1.jpg')}`
          "
          class="absolute top-0 left-0 w-full h-full block object-contain object-right md:h-[210px] md:relative"
          alt=""
        />
        <div
          class="absolute left-24 top-36 z-10 md:relative md:left-0 md:top-0 md:pl-14 md:pr-4 md:py-6 md:grow"
        >
          <div class="text-xl text-teal-1 font-bold md:text-base">
            {{ res.name }}
          </div>
          <div class="text-3xl text-teal-1 font-bold mt-2 md:text-xl">
            {{ res.restaurant }}
          </div>
          <div
            class="flex px-4 py-3 mt-6 border-t border-teal-1 md:px-0 md:flex-col md:space-y-1 md:py-2"
          >
            <div class="text-teal-1 w-28 shrink-0">位置</div>
            <a
              target="_blank"
              :href="`https://www.google.com/maps/search/?api=1&query=${res.location}`"
              class="text-shadow-md"
              >{{ res.location }}</a
            >
          </div>
          <div
            class="flex px-4 py-3 border-t border-teal-1 md:px-0 md:flex-col md:space-y-1 md:py-2"
          >
            <div class="text-teal-1 w-28 shrink-0">電話</div>
            <a class="text-shadow-md" :href="`tel:${res.tel}`">{{ res.tel }}</a>
          </div>
          <div
            class="flex px-4 py-3 border-t border-teal-1 md:px-0 md:flex-col md:space-y-1 md:py-2"
          >
            <div class="text-teal-1 w-28 shrink-0">營業時間</div>
            <div
              class="whitespace-pre-wrap text-shadow-md"
              v-html="res.time"
            ></div>
          </div>
        </div>
      </swiper-slide>
      <div
        class="absolute flex space-x-2 bottom-0 right-0 z-10 md:bottom-auto md:top-0 md:space-x-1"
        v-show="swiper && swiper.slides.length > 1"
      >
        <img
          src="@/assets/imgs/back.png"
          class="duration-300 hover:opacity-90 cursor-pointer md:w-14 gBtn"
          :data-g="`${resArray[0].area}-上一間`"
          @click="swiper.slidePrev()"
        />
        <img
          src="@/assets/imgs/front.png"
          class="duration-300 hover:opacity-90 cursor-pointer md:w-14 gBtn"
          :data-g="`${resArray[0].area}-下一間`"
          @click="swiper.slideNext()"
        />
      </div>
    </swiper>
  </div>
</template>
<script>
import { getUrl } from "@/utils";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import { onMounted, onUnmounted, ref } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import useGA from "@/utils/useGA";
export default {
  props: {
    resArray: {
      type: Array,
      default: [],
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup(props) {
    const { clickGa, pageGa } = useGA();

    const swiper = ref(null);
    const onSwiper = (swiperIns) => {
      swiper.value = swiperIns;
    };
    const onSlideChange = () => {
      const res = props.resArray[swiper.value.activeIndex];
      console.log(props.resArray[swiper.value.activeIndex]);
      pageGa(res.name);
    };

    const _id = props.resArray[0].name.replace(/\s/g, "");

    onMounted(() => {
      ScrollTrigger.create({
        trigger: swiper.value.el,
        start: "top center",
        end: "bottom bottom",
        id: _id, //為了刪掉特定的ScrollTrigger事件
        // markers: true,
        onEnter: (self) => {
          const res = props.resArray[swiper.value.activeIndex];
          pageGa(res.name);
        },
        onEnterBack: (self) => {
          const res = props.resArray[swiper.value.activeIndex];
          pageGa(res.name);
        },
      });
    });

    onUnmounted(() => {
      // 刪掉特定的ScrollTrigger事件
      // https://greensock.com/forums/topic/27906-scrolltrigger-kill-or-%E2%80%9Ddestroy%E2%80%9D-one-specific-st-instance/
      ScrollTrigger.getById(_id).kill();
    });

    return {
      onSwiper,
      onSlideChange,
      getUrl,
      swiper,
    };
  },
};
</script>

<style lang="sass" scoped>
:deep(.swiper-slide)
  position: relative
  &:after
    content: ''
    pointer-events: none
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: linear-gradient(113.41deg, #000000 -11.45%, rgba(0, 0, 0, 0) 38.27%)
    @screen md
      display: none
</style>
