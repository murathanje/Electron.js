const electron = require("electron");
const url = require("url");
const path = require("path");
const { BrowserWindow, protocol } = require("electron");


const { app } = electron;

let mainWindow;

app.on('ready', () => {
    
    mainWindow = new BrowserWindow({})

    mainWindow.loadURL(
        url.format({

            pathname: path.join(__dirname, "main.html"),
            protocol: "file:",
            slashes: true

        })
    );
});



