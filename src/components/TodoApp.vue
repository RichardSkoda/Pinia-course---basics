<template>
  <div class="todo-app">
    <h1>To Do List</h1>
    <TodoFrom/>
    <TodoList/>

  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TodoFrom from '@/components/TodoForm.vue'
import TodoList from '@/components/TodoList.vue'

</script>

<style lang="scss" scoped>
.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 30vw;
  background-color: #f7f9fc;
}

</style>