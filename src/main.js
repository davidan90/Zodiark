'use strict';

const electron = require('electron');
const { app, BrowserWindow, crashReporter, ipcMain, dialog } = electron;
const fs = require('fs');

ipcMain.on('synchronous-message', (event, arg) => {
  console.info('ipcMain', arg);
  saveFile('my_testfile.txt', arg);
  event.returnValue = 'done'
});

const saveFile = (defaultPath, fileContent) => {
  dialog.showSaveDialog({ defaultPath }, fileName => {
    if (fileName) {
      fs.writeFile(fileName, fileContent, 'utf8', err => {

      });
    }
  });
}

// Report crashes to our server.
crashReporter.start({
  productName: 'timeTracker',
  companyName: 'kgde',
  submitURL: '',
  uploadToServer: false
});

var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform != 'darwin') {
    app.quit();
  }
});

app.on('ready', function() {
    // Create the browser window. 
    //Frame false means there wont be chrome style in the window
    //Movable true means, you can move the window

    mainWindow = new BrowserWindow({width: 1200, height: 600, frame: false, movable: true});
    mainWindow.loadURL('file://' + __dirname + '/index.html');

    // This line means open chrome console
    // mainWindow.openDevTools();

    // This line means open the app in a maximize mode Works in Windows and Mac
    // mainWindow.maximize();

    // Emitted when the window is closed.
    mainWindow.on('closed', function() {
    mainWindow = null;
  });
});