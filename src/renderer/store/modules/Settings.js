import fs from 'fs-extra';
import api from '../../api';
import appPathConfig from '../../config';
const state = {
  settings: {},
};

const mutations = {
  INIT_SETTINGS(state, settings) {
    state.settings = settings;
  },
  TOGGLE_PLAY(state) {
    state.settings.play = !state.settings.play;
    api.settingsApi.setItem('play', state.settings.play);
  },
  ADJUST_VOLUME(state, volume) {
    state.settings.volume = volume;
    api.settingsApi.setItem('volume', state.settings.volume);
  },
  TOGGLE_START_AT_LOGIN(state) {
    state.settings.startAtLogin = !state.settings.startAtLogin;
    api.settingsApi.setItem('startAtLogin', state.settings.startAtLogin);
  },
};

const actions = {
  someAsyncTask({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER');
  },
  initSettings({ commit }) {
    return new Promise((resolve, reject) => {
      fs.readJSON(appPathConfig.settingsPath, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(data);
      });
    }).then((data) => {
      commit('INIT_SETTINGS', data);
    });
  },
};

export default {
  state,
  mutations,
  actions,
};
