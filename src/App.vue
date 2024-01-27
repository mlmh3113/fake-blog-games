<script setup>

import { RouterView } from 'vue-router'
import Banner from './components/Banner.vue'
import MainPicture from './components/MainPicture.vue'
import Menu from './components/Menu.vue'


</script>

<template>
  <Banner />
  <MainPicture />
  <Menu />
  <RouterView />
</template>

<style >


 body{
  background-color: white;
  box-sizing: border-box;
    
 }


 h2{
  color: grey;
 }


</style>
