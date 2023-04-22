<template>
  <div>
    <h1>Home go</h1>
    <button @click="goApp">go App</button>
  </div>
</template>

<script>
export default {
  methods: {
    goApp() {
      const param = {
        name: "kim",
        age: "21",
        address: "seoul",
      };
      webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(param));
    },
  },
};
</script>

<style></style>
