<template>
  <div class="overflow-x-hidden">
    <headerVue></headerVue>
    <Intro></Intro>
    <Video></Video>
    <Rule></Rule>
    <Product></Product>
  </div>
</template>

<script setup>
import headerVue from '@/components/header/Header.vue';
import Intro from './components/Intro.vue';
import Video from './components/Video.vue';
import Rule from './components/Rule.vue';
import Product from './components/Product.vue';
// import Warning from './components/footer/warning.vue';
// import Wine from './components/Wine.vue';
// import Restaurant from './components/restaurant/Index.vue';
// import Age from './components/agePop/Index.vue';

// import { provide, ref, onMounted } from 'vue';
// import useGa from '@/utils/useGA.js';

// const { initGABtn } = useGa();
// const showAgeCheck = ref(true);
// provide('showAgeCheck', showAgeCheck);
// onMounted(() => {
//   initGABtn();
// });
</script>

<style scoped lang="sass"></style>
