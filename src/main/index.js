import { app, BrowserWindow, Tray } from 'electron' // eslint-disable-line
import path from 'path';

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\') // eslint-disable-line
}
const topIcon = path.join(__static, '/control.png');

let mainWindow;
const winURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:9080'
  : `file://${__dirname}/index.html`;
function createWindow() {
  /**
   * Initial window options
   */
  const appIcon = new Tray(topIcon);
  mainWindow = new BrowserWindow({
    height: 500,
    useContentSize: true,
    frame: false,
    width: 400,
  });

  appIcon.on('click', (event, bounds) => {
    if (mainWindow && mainWindow.isVisible()) {
      mainWindow.hide();
    } else {
      mainWindow.setPosition(...[
        (bounds.x - 150) + (bounds.width / 2),
        process.platform === 'darwin' ? bounds.y : bounds.y - 500,
      ]);
      mainWindow.show();
    }
  });
  mainWindow.loadURL(winURL);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
