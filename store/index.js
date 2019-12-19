import Vue  from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import user from './user';

Vue.use(Vuex);

const store = () => new Vuex.Store({
  state: {
    error: null
  },
  mutations: {
    setError(state, error) {
      state.error = error;
    },
    clearError(state) {
      state.error = null;
    }
  },
  getters: {
    error: s => s.error
  },
  modules: {
    auth,
    user
  }
});

export default store;

