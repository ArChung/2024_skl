<template>
  <nav class="bg-gradient-to-b from-[#00142C] text-white fixed w-full z-50">
    <div
      class="px-12 flex justify-between items-center h-[70px] md:px-4 md:h-[45px]"
    >
      <img src="@/assets/imgs/logo.png" alt="" srcset="" class="md:w-[100px]" />
      <div class="flex space-x-12 md:hidden">
        <Menu></Menu>
      </div>
      <menuIcon @click="showSideMenu = true" class="hidden md:block"></menuIcon>
    </div>
    <SideMenu></SideMenu>
  </nav>
</template>

<script setup>
import { provide, ref } from 'vue';
import Menu from './Menu.vue';
import menuIcon from './menuIcon.vue';
import SideMenu from './SideMenu.vue';

const showSideMenu = ref(false);
provide('showSideMenu', showSideMenu);
</script>

<style lang="sass" scoped></style>
