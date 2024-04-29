<template>
  <div class="relative res-container gaPage" data-ga="餐廳列表">
    <Control :style="{ height: `${resVH}px` }" id="control"></Control>
    <div class="">
      <div
        v-for="(resArray, area) in resList"
        :key="area"
        :id="`${trim(area)}-swiper`"
      >
        <resSwiper :resArray="resArray"></resSwiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import Control from "./Control.vue";
import { onMounted, provide } from "vue";
import useRes from "./useRes.js";
import resSwiper from "./ResSwiper.vue";
import _ from "lodash";
import { computed } from "@vue/reactivity";
import { isMobile } from "@/utils";
import { useWindowSize } from "@vueuse/core";
const { height } = useWindowSize();

const trim = (str) => {
  return str.replace(/\s+/g, "");
};
const { switchLocation, initController, activeIndex, locationMenu, resList } =
  useRes();

const resVH = computed(() => {
  let nav_height = isMobile() ? 45 : 70;
  console.log(height.value, height.value * 0.9, nav_height);
  return height.value * 0.9 - nav_height;
});
provide("res", { activeIndex, locationMenu, resList, switchLocation, resVH });
onMounted(() => {
  initController();
});
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

#control
  &.fixed-menu
    position: fixed
    top: 70px
    @screen md
      top: 45px
  &.bottom-menu
    top: auto
    position: absolute
    bottom: 0
</style>
