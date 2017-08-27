import path from 'path';
// import { remote } from 'electron'; // eslint-disable-line no-use-before-define

// const app = remote.app;

const appPathConfig = {
  settingsPath: path.join(__static, '/settings.json'),
  soundsPath: path.join(__static, '/sounds.json'),
};

export default appPathConfig;

