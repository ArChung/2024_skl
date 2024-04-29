<template>
  <div class="control-container duration-100">
    <div class="res-menu divide-y divide-white divide-opacity-10 relative z-20">
      <div
        class="menuItem gBtn"
        :data-g="`餐廳列表-${item.zh}`"
        v-for="item in locationMenu"
        :key="item.id"
        @click="onMenu(item.id)"
      >
        <div class="item-t">{{ item.en }}</div>
        <div class="zh">{{ item.zh }}</div>
      </div>
    </div>
    <!-- <Transition
      name="resMenu"
      :duration="300"
      v-for="(item, index) in resList"
      :key="index"
    >
      <div class="sub-container relative" v-show="showIndex === index">
        <div class="sub-wrap relative z-10">
          <div
            class="clozBtn cursor-pointer hover:opacity-70 duration-300"
            @click="showIndex = null"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-8 h-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </div>
          <div class="sub-list">
            <div
              class="res gBtn"
              :data-g="`餐廳選單-${sub_index}`"
              v-for="(res, sub_index) in item"
              :key="`res-${sub_index}`"
              @click="onMenuItem(index, sub_index)"
            >
              {{ sub_index }}
            </div>
          </div>
        </div>
        <div
          class="absolute inset-0 bg-opacity-70"
          @click="showIndex = null"
        ></div>
      </div>
    </Transition> -->
  </div>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { inject, ref } from "vue";
import useRes from "./useRes";
import useGA from "@/utils/useGA";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { isMobile } from "@/utils";

const { clickGa } = useGA();
const showIndex = ref(null);

const { activeIndex, locationMenu, resList, switchLocation } = inject("res");

// const onMenuItem = (location, resName) => {
//   showIndex.value = null;
//   switchLocation(location, resName);
// };

const onMenu = (id) => {
  console.log("id: ", id);
  clickGa("area-memu-" + id);
  let nav = document.querySelector("nav");

  // showSideMenu.value = false;
  gsap.to(window, {
    duration: 0.8,
    scrollTo: {
      y: `#${id}-swiper`,
      offsetY: nav.offsetHeight,
    },
  });
};
</script>

<style lang="sass" scoped>
=bg-linear
  @apply from-linear-1 to-linear-3 via-linear-2
.control-container
  position: absolute
  top: 0
  left: 0
  --width: 55px
  @apply z-10
  @screen md
    --width: 40px

.sub-container
  position: absolute
  width: 100vw
  height: 100%
  top: 0
  left: 0
  display: flex
  padding-left: var(--width)
  .sub-wrap
    height: 100%
    color: white
    background: linear-gradient(90deg, #00142C -18.44%, #00637B 27.08%, #00BAB3 107.68%)
    @apply pb-8 pl-10 pr-20 pt-20
    .clozBtn
      @apply absolute top-0 right-0 flex justify-center items-center w-[60px] h-[60px]
      background: linear-gradient(0deg, #00142C -16.67%, #00637B 68.5%, #00BAB3 135.83%)

    .sub-list
      @apply space-y-2
      .res
        @apply text-white duration-300 cursor-pointer hover:opacity-50 text-lg py-2
.res-menu
  height: 100%
  width: var(--width)
  display: flex
  flex-direction: column

  .menuItem
    @apply h-full w-full flex items-center py-4 flex-col cursor-pointer bg-linear-1
    // background: rgba(black,.8)

    &:hover,&.active
      background: linear-gradient(0deg, #00142C -35.71%, #00637B 32.14%, #00BAB3 100%)
      .item-t
        line-height: 0.85em
    .item-t
      @apply font-bebas duration-300 overflow-hidden
      font-size: 100px
      background: linear-gradient(180deg, #00BAB3 -101.56%, #00637B 137.52%, #00142C 396.6%)
      line-height: 0em
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
      background-clip: text
      text-fill-color: transparent
      @screen md
        font-size: 70px


    .zh
      color: white
      @screen md
        @apply pt-8
        writing-mode: vertical-rl
        letter-spacing: 1em


// animation
.resMenu-enter-active
  @apply duration-100
  .sub-wrap
    @apply duration-300

.resMenu-leave-active
  @apply duration-100
  .sub-wrap
    @apply duration-300

.resMenu-enter-from
  @apply opacity-0
  .sub-wrap
    @apply -translate-x-full opacity-0
.resMenu-leave-to
  @apply opacity-0
  .sub-wrap
    @apply -translate-x-full opacity-0
</style>
