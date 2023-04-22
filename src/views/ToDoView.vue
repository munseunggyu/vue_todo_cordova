<template>
  <div>
    <h1>Todo</h1>
    <create-todo></create-todo>
    <item-list></item-list>
  </div>
</template>

<script>
import CreateTodo from "@/components/CreateTodo.vue";
import ItemList from "@/components/ItemList.vue";

export default {
  components: { CreateTodo, ItemList },
};
</script>

<style></style>
