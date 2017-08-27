import fs from 'fs-extra';
import appPathConfig from '../config';

const appSettings = fs.readJsonSync(appPathConfig.settingsPath);

export default {
  setItem(key, value) {
    appSettings[key] = value;
    fs.writeJson(appPathConfig.settingsPath, appSettings);
  },
};
