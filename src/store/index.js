// import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
// const url = "http://localhost:5500";
const store = new Vuex.Store({
  state: {
    token: localStorage.getItem("token") || null,
    todos: [],
  },
  mutations: {
    SET_TODO(state, value) {
      state.todos = value;
    },
    ADD_TODO(state, value) {
      state.todos.push({
        task: value.title,
        isCom: value.content,
        id: value.id,
      });
    },
    DEL_TODO(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
    CHANGE_TODO(state, id) {
      state.todos = state.todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCom: !todo.isCom };
        } else {
          return todo;
        }
      });
    },
  },
  actions: {
    async getTodos({ state, commit }) {
      try {
        // const todos =
        // await axios.get(`${url}/todos`, {
        //   headers: {
        //     Authorization: context.state.token,
        //   },
        // });
        commit("SET_TODO", state.todos);
      } catch (error) {
        console.log(error);
      }
    },
    async addTodo({ commit }, payload) {
      try {
        // const todo = await axios.post(
        //   `${url}/todos`,
        //   {
        //     title: value,
        //     content: false,
        //   },
        //   {
        //     headers: {
        //       Authorization: context.state.token,
        //     },
        //   }
        // );
        const timestamp = new Date().getTime(); // 현재 날짜와 시간을 밀리초 단위로 나타내는 타임스탬프
        const id = `item_${timestamp}`; // 'item_' + 타임스탬프

        const data = {
          id,
          title: payload,
          content: false,
        };
        commit("ADD_TODO", data);
      } catch (error) {
        console.log(error);
      }
    },
    deleteTodo({ commit }, id) {
      commit("DEL_TODO", id);
    },
    changeCom({ commit }, id) {
      commit("CHANGE_TODO", id);
    },
  },
});

export { store };
