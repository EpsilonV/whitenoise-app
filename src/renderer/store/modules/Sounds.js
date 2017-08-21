const state = {
  sings: [],
};

const mutations = {
  INIT_SINGS(state, sings) {
    state.sings = sings;
  },
  TOGGLE_SELECT(state, payload) {
    state.sings[payload.index].playing = !state.sings[payload.index].playing;
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

