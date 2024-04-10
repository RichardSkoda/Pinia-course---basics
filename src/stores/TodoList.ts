import { defineStore } from 'pinia'

export type AppState = {
  todoList: Array<todoListItem>,
  id: number
}

export type todoListItem = {
  item: string,
  id: number,
  completed: boolean
}

export const useTodoListStore = defineStore('todoList', {
  state: (): AppState => ({
    todoList: [],
    id: 0
  }),

  actions: {
    addTodo(item: string) {
      this.todoList.push({ item: item, id: this.id++, completed: false })
    },
    deleteTodo(item: todoListItem) {
      this.todoList = this.todoList.filter((object: todoListItem) => object.id !== item.id)
    },
    toggleCompleted(idToFind: number) {
      const todo = this.todoList.find((obj: todoListItem) => obj.id === idToFind)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
})