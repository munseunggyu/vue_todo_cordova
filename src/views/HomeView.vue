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
      console.log(val);
      alert(val); //전달받은 데이터 확인
    },
  },
  created() {
    window.call_func = function (val) {
      console.log(val);
      alert(val);
      console.log("asf");
    };

    // eslint-disable-next-line no-unused-vars
    function call_func(val) {
      console.log(val);
      alert(val);
      console.log("created");
    }
  },
};
</script>

<style></style>
