// In the renderer process
//const { app,remote } = require('electron');
//const xterm = remote.require('xterm');

//This code was added
//const xterm = require('xterm');

//const term = new xterm.Terminal();

// Attach the xterm to the pty process
//term.attach(ptyProcess);

// Add the xterm to the HTML
//const terminalContainer = document.getElementById('terminal');
//terminalContainer.appendChild(term.element);
//app.commandLine.appendSwitch('--enable-experimental-web-platform-features');


// In the renderer process
//const { remote } = require('electron');
//const xterm = remote.require('xterm');
const term = new xterm.Terminal({
  cursorBlink: true
});

// Attach the xterm to the pty process
term.attach(ptyProcess);
term.open(document.getElementById('terminal'));


ipcRenderer.on('data', (event, data) => {
    term.write(data);
  });
  
  ptyProcess.on('data', (data) => {
    ipcRenderer.send('data', data);
  });