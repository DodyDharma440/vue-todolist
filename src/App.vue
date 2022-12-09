<script setup lang="ts">
import { ref } from "vue";
import type { ITodo, ITodoInput } from "@/interfaces";
import TodoItem from "@/components/TodoItem.vue";

let { value: todos } = ref<ITodo[]>([]);
let { value: todoForm } = ref<ITodoInput>({
  title: "",
  description: "",
});

const addTodo = (e: Event) => {
  e.preventDefault();

  todos.push({
    ...todoForm,
    isCompleted: false,
  });
  todoForm = {
    title: "",
    description: "",
  };
};

const removeTodo = (index: number) => {
  todos.splice(index, 1);
};

const markComplete = (index: number) => {
  const todo = todos[index];
  todos[index].isCompleted = !todo.isCompleted;
};

const handleChange = (e: Event) => {
  const { value, name } = e.target as HTMLInputElement;
  todoForm[name as keyof ITodoInput] = value;
};
</script>

<template>
  <div class="container max-w-xl mx-auto p-2">
    <form @submit="addTodo">
      <div class="flex flex-col">
        <div class="mb-2 w-full">
          <div class="mb-1">
            <label>Title</label>
          </div>
          <input
            class="border w-full border-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 ring-indigo-600"
            :value="todoForm.title"
            @change="handleChange"
            name="title"
            required
          />
        </div>
        <div class="mb-2 w-full">
          <div class="mb-1">
            <label>Description</label>
          </div>
          <textarea
            class="border w-full border-gray-200 px-4 py-2 rounded-md focus:outline-none focus:ring-2 ring-indigo-600"
            :value="todoForm.description"
            @change="handleChange"
            name="description"
            required
          />
        </div>
      </div>
      <div class="text-center">
        <button
          class="px-4 py-2 bg-indigo-600 text-white rounded-md"
          type="submit"
        >
          Add todo
        </button>
      </div>
    </form>
    <hr class="border-gray-200 my-4" />
    <h2 class="text-center text-2xl font-bold mb-4">Todo Lists</h2>
    <div v-for="(todo, index) in todos" :key="index">
      <TodoItem
        :todo="todo"
        :remove-todo="removeTodo"
        :mark-complete="markComplete"
        :id="0"
      />
    </div>
  </div>
</template>

<style scoped>
.group {
  display: flex;
  gap: 10px;
}
.button-count {
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
  padding: 12px 16px;
  font-weight: bold;
  color: #000;
  background-color: #fff;
  border: none;
  cursor: pointer;
}
</style>
