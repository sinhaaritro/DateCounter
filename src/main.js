console.log("Main.js connection")

const { app , BrowserWindow, Menu } = require ('electron')
const path = require('path')
const url = require('url')

let win;

//Create a widow
function createWindow () {
    //Create a browser window
    win = new BrowserWindow({
        width:320,
        height:335,
        icon: path.join(__dirname, 'assets/icons/png/icon.png'),
        webPreferences: {
            nodeIntegration: true
        },
        resizable: false,
        maximizable: false,
        show: false,
        frame: false,
        transparent: true,
    })

    //load the index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));

    //Open ChromeDevTools
    //win.webContents.openDevTools();

    //Emitted when the window is closed
    win.on('closed', () => {
        // Dereference the window object
        win = null
    })

    win.once('ready-to-show', () => {
        win.show();
    })

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function(){
    createWindow()
    //Application Menu
    Menu.setApplicationMenu(null)
})

// Quit
app.on('window-all-closed', () => {
    //macOS
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    //macOS recreate window
    if(win === null) {
        createWindow()
    }
})