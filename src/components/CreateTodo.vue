<template>
  <form @submit.prevent="addTodo">
    <input type="text" v-model="task" />
    <button>click</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      task: "",
    };
  },
  methods: {
    addTodo() {
      this.$store.dispatch("addTodo", this.task);
      this.task = "";
    },
  },
};
</script>

<style></style>
