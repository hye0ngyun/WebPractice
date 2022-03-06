<script>
let id = 0;

export default {
  data() {
    return {
      newTodo: "",
      hideCompleted: false,
      todos: [
        { id: id++, text: "Learn HTML", done: true },
        { id: id++, text: "Learn JavaScript", done: true },
        { id: id++, text: "Learn Vue", done: false },
      ],
    };
  },
  computed: {
    // ...
    filteredTodos() {
      return this.todos.filter((el) => el.done !== true);
    },
  },
  methods: {
    addTodo() {
      this.todos.push({ id: id++, text: this.newTodo, done: false });
      this.newTodo = "";
    },
    removeTodo(todo) {
      this.todos = this.todos.filter((t) => t !== todo);
    },
  },
};
</script>

<template>
  <input v-model="newTodo" @keyup.enter="addTodo" />
  <button @click="addTodo">Add Todo</button>
  <ul>
    <li v-if="!hideCompleted" v-for="todo in todos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ done: todo.done }">{{
        todo.text + ": " + todo.done
      }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
    <li v-else v-for="todo in filteredTodos" :key="todo.id">
      <input type="checkbox" v-model="todo.done" />
      <span :class="{ done: todo.done }">{{
        todo.text + ": " + todo.done
      }}</span>
      <button @click="removeTodo(todo)">X</button>
    </li>
  </ul>
  <button @click="hideCompleted = !hideCompleted">
    {{ hideCompleted ? "Show all" : "Hide completed" }}
  </button>
</template>

<style>
.done {
  text-decoration: line-through;
}
</style>
