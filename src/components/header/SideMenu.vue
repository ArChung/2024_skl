<template>
  <transition name="side" :duration="300">
    <div
      class="fixed inset-0 z-50 bg-black bg-opacity-50 hidden md:block"
      v-show="showSideMenu"
    >
      <div
        class="absolute h-full right-0 sideMenu overflow-y-scroll bg-gradient-to-r from-linear-1 to-linear-3"
        v-on-click-outside="closeSideMenu"
      >
        <div class="menuWrap">
          <Menu></Menu>
        </div>
        <closeIcon
          class="absolute right-6 top-6 cursor-pointer duration-300 hover:rotate-90"
          @click="showSideMenu = false"
        ></closeIcon>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { inject } from 'vue';
import closeIcon from './closIcon.vue';
import Menu from './Menu.vue';
import { vOnClickOutside } from '@vueuse/components';

const showSideMenu = inject('showSideMenu');

const closeSideMenu = () => {
  showSideMenu.value = false;
};
</script>

<style lang="sass" scoped>
.sideMenu, .text
  width: min(calc(100% - 50px),400px)
  @apply bg-white pt-24
  .menuWrap
    @apply flex flex-col items-center min-h-full text-3xl space-y-12


.side-enter-active
  @apply duration-100
  .sideMenu
    @apply duration-300

.side-leave-active
  @apply duration-100
  .sideMenu
    @apply duration-300

.side-enter-from
  @apply opacity-0
  .sideMenu
    @apply translate-x-full opacity-0
.side-leave-to
  @apply opacity-0
  .sideMenu
    @apply translate-x-full opacity-0
</style>
