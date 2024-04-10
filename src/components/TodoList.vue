<template>
  <div v-for="todo in todoList" :key="todo.id" class="item">
    <div class="content">
      <span :class="{completed: todo.completed}">{{ todo.item }}</span>
      <div>
        <span @click.stop="toggleCompleted(todo.id)">&#10004</span>
        <span @click="deleteTodo(todo)" class="x">&#10060</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTodoListStore } from '@/stores/TodoList';
import { storeToRefs } from 'pinia';
import type { TodoComment } from 'typescript';

const store =useTodoListStore()
const {todoList} = storeToRefs(store)
const {toggleCompleted, deleteTodo} = store

</script>

<style lang="scss">
span {
  margin: 0 10px;
  cursor: pointer;
}
.item {
  display: flex;
  justify-content: center;
}
.content {
  display: flex;
  font-size: 1.5em;
  justify-content: space-between;
  width: 80vw;
  padding: 5px;
}
.completed {
  text-decoration: line-through;
}

</style>