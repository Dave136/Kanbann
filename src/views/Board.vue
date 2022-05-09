<template>
  <section class="text-left">
    <h3 class="text-cyan-700 text-left m-6"><span class="text-cyan-600">My panels</span> → {{ name }}</h3>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

type Props = {
  id: number,
  name: string,
}

defineProps<Props>();
</script>