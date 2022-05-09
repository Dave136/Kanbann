<template>
  <h3 class="text-left m-6">My panels</h3>
  <section class="flex flex-wrap justify-center pt-4">
    <input v-model="boardName" type="text"
      class="box-border bg-cyan-700 border-2 border-solid border-cyan-700 rounded-sm text-lg outline-none p-2 transition-all focus:active:(bg-light-800 text-cyan-700) placeholder-light-800"
      placeholder="Add new panel" @keyup.enter="addBoard">
    <board-card v-for="(board, index) in boards" :id="board.id" :key="index" :name="board.name" />
  </section>
</template>

<script setup lang="ts">
import BoardCard from '@/components/BoardCard.vue';
import { ref } from 'vue';

const boardName = ref('');
const boards = ref([{ id: 1, name: 'To do' }, { id: 1, name: 'Doing' }])

const addBoard = () => {
  boards.value.push({ id: Date.now(), name: boardName.value });
  console.log(boards.value);
  boardName.value = ''
};
</script>
