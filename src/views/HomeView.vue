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
      // eslint-disable-next-line no-undef
      webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify(param));
    },
    call_func(val) {
      alert("wow");
      alert(val); //전달받은 데이터 확인
    },
  },
};
</script>

<style></style>
