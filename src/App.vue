<template>
  <div>
    <menu-vue></menu-vue>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuVue from "./components/MenuVue.vue";
export default {
  components: { MenuVue },
};
</script>

<style></style>
