<template>
  <div>
    <h1>Home go</h1>
    <button @click="goApp">go App</button>
    <button @click="changeBack">change Back</button>
    {{ back }}
  </div>
</template>

<script>
import { store } from "@/store";
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
      // console.log(this, "vue");
      // this.$store.commit("SET_BACK", new Date());
      store.commit("SET_BACK", new Date());
    },
  },
  created() {
    window.call_func = function (val) {
      console.log(val);
      // alert(val);
    };
    window.call_func_back = function (val) {
      console.log(val);
      store.commit("SET_BACK", val);
    };
  },
};
</script>

<style></style>
