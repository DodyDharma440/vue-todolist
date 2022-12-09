<script setup lang="ts">
import type { ITodo } from "@/interfaces";

type Props = {
  todo: ITodo;
  removeTodo: (index: number) => void;
  markComplete: (index: number) => void;
  id: number;
};

defineProps<Props>();
</script>

<template>
  <div
    className="bg-white flex shadow-sm border border-gray-200 p-4 rounded-md mb-2"
  >
    <div class="flex-1 mr-2" :class="{ 'opacity-5': todo.isCompleted }">
      <h5 class="text-xl font-bold">{{ todo.title }}</h5>
      <p>{{ todo.description }}</p>
    </div>
    <div class="flex">
      <button
        @click="markComplete(id)"
        class="border border-green-600 bg-green-50 text-green-600 rounded-md mr-2 h-fit px-2"
      >
        <v-icon name="hi-check" />
      </button>
      <button
        @click="removeTodo(id)"
        class="border border-red-600 bg-red-50 text-red-600 rounded-md mr-2 h-fit px-2"
      >
        <v-icon name="hi-trash" />
      </button>
    </div>
  </div>
</template>
