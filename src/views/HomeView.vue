<template>
  <div>
    <h1>Home go</h1>
    <button @click="goApp">go App</button>
    <button @click="changeBack">change Back</button>
    <button @click="changeBack">change Back</button>
    {{ back }}
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      back: (state) => state.back,
    }),
  },
  watch: {
    back(newVale, oldValue) {
      console.log(`newVale: ${newVale}, oldValue: ${oldValue}`);
    },
  },
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
    changeBack() {
      console.log(this, "vue");
      this.$store.commit("SET_BACK", new Date());
    },
  },
  created() {
    const selfThis = this;
    window.call_func = function (val) {
      console.log(val);
      alert(val);
      console.log("asf");
    };
    window.call_func_back = function (val) {
      console.log(val);
      selfThis.$store.commit("SET_BACK", val);
    };
  },
};
</script>

<style></style>
