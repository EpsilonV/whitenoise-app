const state = {
  play: false,
};

const mutations = {
  TOGGLE_PLAY(state) {
    state.play = !state.play;
  },
};

const actions = {
  someAsyncTask({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER');
  },
};

export default {
  state,
  mutations,
  actions,
};
