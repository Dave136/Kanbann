<template>
  <router-link
    class="w-2/6 lg:w-[250px] bg-cyan-700 shadow-md shadow-gray-700 box-border rounded-sm text-light-600 my-2 mx-6 p-4 text-left no-underline transition-all w-full h-[100px] hover:(bg-cyan-600 font-bold)"
    :to="{
      name: `board`, params: { id, name }
    }">
    <span class="text-xl font-bold">{{ name }}</span>
  </router-link>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

type Props = {
  id: number;
  name: string;
}

defineProps<Props>();
</script>