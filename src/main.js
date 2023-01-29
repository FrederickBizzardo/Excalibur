const { app, BrowserWindow, Menu, mainWindow } = require('electron');
const path = require('path');

//const { spawn } = require('child_process');
//const pty = require('node-pty');

var os = require('os');
var pty = require('node-pty');


//const shell = process.platform === 'win32' ? 'powershell.exe' : 'bash';
var shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  app.quit();
}




const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    /*titleBarStyle: 'hidden',
    titleBarOverlay: true,*/
    width: 800,
    height: 600,
    minWidth: 800,
    minHeight:600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  /*const ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.cwd(),
    env: process.env
  });

  ptyProcess.on('data', data => {
    console.log(data);
  });

  ptyProcess.write('echo "Hello from PowerShell"\n');*/

  var ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env
  });
  
  ptyProcess.on('data', function(data) {
    process.stdout.write(data);
  });
  
  ptyProcess.write('ls\r');
  ptyProcess.resize(100, 40);
  ptyProcess.write('ls\r');


//  const term = new Terminal();

// Attach the xterm to the pty process
//term.attach(ptyProcess);

// Add the xterm to the HTML
//const terminalContainer = document.getElementById('terminal');
//terminalContainer.appendChild(term.element);

  // and load the index.html of the app.
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Open the DevTools.
  mainWindow.webContents.openDevTools();

  

  /////////////////////////////////////////////////////
  //This code was added
  //mainWindow.webContents.on('did-finish-load', () => {
  //  mainWindow.webContents.executeJavaScript(`require = window.require`);
  //});
 ///////////////////////////////////////////////////////




  // Declare all menu
  /*const menu_list = [
    {
      label: "File",
      submenu: [
        {
          label: "Open File...",
          click: function () {
            console.log("Open File Clicked");
          },
        },
      ],
    },
  ];
  const menu_design = Menu.buildFromTemplate(menu_list);
  Menu.setApplicationMenu(menu_design);*/
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.

/*const { app, BrowserWindow } = require('electron');
const path = require('path');
const os = require('os');
const pty = require('node-pty');
const xterm = require('xterm');

var shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';

const createWindow = () => {
    // Create the browser window
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            preload: path.join(__dirname, 'preload.js'),
        },
    });

    // Create the pty process
    var ptyProcess = pty.spawn(shell, [], {
        name: 'xterm-color',
        cols: 80,
        rows: 30,
        cwd: process.env.HOME,
        env: process.env
    });

    // Attach the pty process to xterm.js
    const term = new xterm.Terminal();
    term.attach(ptyProcess);

    // Load index.html and add xterm to the page
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
    mainWindow.webContents.on('did-finish-load', () => {
        mainWindow.webContents.executeJavaScript(`
            var terminalContainer = document.getElementById('terminal');
            terminalContainer.appendChild(term.element);
        `);
    });
};

app.on('ready', createWindow);*/



/*const { app, BrowserWindow } = require('electron');
const path = require('path');
const pty = require('node-pty');
const os = require('os');


const createWindow = () => {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });
  
  // Determine the shell to use based on the OS
  var shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash';
  
  // Create the pty process
  var ptyProcess = pty.spawn(shell, [], {
    name: 'xterm-color',
    cols: 80,
    rows: 30,
    cwd: process.env.HOME,
    env: process.env
  });
  
  // Log the data received from the pty process
  ptyProcess.on('data', function(data) {
    console.log(data);
  });
  
  // Load the index.html file
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
};


//This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
}); */


