<template>
  <ul>
    <li v-for="todo in todos" v-bind:key="todo.id">
      <input type="checkbox" :value="todo.isCom" @change="changeCom(todo.id)" />
      <span :class="{ line: todo.content }">할 일: {{ todo.task }}</span>
      <button @click="deleteTodo(todo.id)">삭제</button>
    </li>
  </ul>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      todos: (state) => state.todos,
    }),
  },
  mounted() {
    this.$store.dispatch("getTodos");
  },
  methods: {
    deleteTodo(id) {
      this.$store.dispatch("deleteTodo", id);
    },
    changeCom(id) {
      this.$store.dispatch("changeCom", id);
    },
  },
};
</script>

<style>
.line {
  text-decoration: line-through;
}
</style>
