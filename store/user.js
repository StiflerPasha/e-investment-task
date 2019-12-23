export default {
  state: {
    user: {},
    token: null
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    clearUser(state) {
      state.user = {};
      state.token = null;
    }
  },
  actions: {
    async updateUser({ dispatch, commit, getters }, toUpdate) {
      try {
        let token = getters.token;
        await this.$axios.put('user', { ...toUpdate, token }, {
          headers: { 'content-type': 'application/json' }
        });

        dispatch('fetchUser');

      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },

    async fetchUser({ dispatch, commit, getters }) {
      try {
        let token = getters.token;
        let { data } = await this.$axios.get(`user/?token=${token}`);

        commit('setUser', data);

      } catch (e) {
        commit('setError', e);
        throw e;
      }
    }
  },
  getters: {
    user: s => s.user,
    token: s => s.token
  }
};
