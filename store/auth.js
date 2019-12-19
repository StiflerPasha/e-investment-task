export default {
  actions: {
    async register({ dispatch, commit }, user) {
      try {
        let { data } = await this.$axios.post('user', { ...user });
        commit('setToken', data.token);
        dispatch('fetchUser');
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },

    async login({ dispatch, commit }, { username, password }) {
      try {
        let { data } = await this.$axios.get(`auth/?username=${username}&password=${password}`);
        commit('setToken', data.token);
        dispatch('fetchUser');
      } catch (e) {
        commit('setError', e);
        throw e;
      }
    },

    async logout({ dispatch, commit }) {
      commit('clearUser');
    }
  }
};
