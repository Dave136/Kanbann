<script setup lang="ts">
import AppHeader from './components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<template>
  <app-header></app-header>
  <router-view class="pb-16"></router-view>
  <app-footer></app-footer>
</template>

<style>
#app {
  box-sizing: border-box;
  color: #37474f;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding: 0;
}
</style>
