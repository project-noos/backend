const {app, BrowserWindow} = require('electron');

let mainWindow;

app.on('window-all-closed',  () => {
  app.quit();
});

app.on('ready', function () {
  mainWindow = new BrowserWindow({width: 1024, height: 768, webPreferences: {nodeIntegration: true, webviewTag: true}});
  mainWindow.loadURL('http://localhost:3000');
  mainWindow.openDevTools();
});
