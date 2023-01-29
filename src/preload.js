// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

/*const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('api', {
    sendData: (channel, data) => {
        ipcRenderer.send(channel, data);
    },
    receiveData: (channel, cb) => {
        ipcRenderer.on(channel, (event, ...args) => cb(...args));
    }
});*/

/*const { Terminal } = require('xterm');
const { AttachAddon } = require('xterm-addon-attach');

const terminal = new Terminal();
const attachAddon = new AttachAddon(ptyProcess);
terminal.loadAddon(attachAddon);

// Add the terminal to the HTML page
document.getElementById('terminal').appendChild(terminal.element);*/

