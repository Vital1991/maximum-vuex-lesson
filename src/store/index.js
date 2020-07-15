import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    list: [],
  },
  mutations: {
    addTask(state, task) {
      state.list.push(task);
    },
  },
  actions: {
    addTask({ commit }, task) {
      commit('addTask', task);
    },
  },
});
