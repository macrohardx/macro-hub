import { app, BrowserWindow, systemPreferences, ipcMain, Tray, Menu } from 'electron';
import * as url from 'url';
import * as path from 'path';
import * as dotenv from 'dotenv'
import { inject, injectable } from 'inversify';
dotenv.config()

import { container, iFoo } from './container';
import { TYPES } from './types';


@injectable()
class App {

    private mainWindow: BrowserWindow;

    private trayIcon: Tray

    private foo: iFoo

    constructor(@inject(TYPES.Foo) foo: iFoo) {
        this.foo = foo;
        this.foo.sayHello();
    }

    public start(): void {
        this._initAppListeners();
    }

    private _initAppListeners(): void {
        app.on('ready', this._createInterface.bind(this));
        app.on('window-all-closed', this._quit.bind(this));
    }

    private _createInterface() {
        this._createMainWindow();
        this._createTrayIcon();
    }

    private _createMainWindow(): void {
        this.mainWindow = new BrowserWindow({
            width: 400,
            height: 600,
            minWidth: 600,
            minHeight: 300,
            webPreferences: { nodeIntegration: true },
            frame: false
        });
        if (process.env.PACKAGE) {
            this.mainWindow.loadURL(url.format({
                pathname: path.join(__dirname, '/../frontend/index.html'),
                protocol: 'file:',
                slashes: true
            }));
        }
        else {
            this.mainWindow.loadURL(process.env.HOST);
        }
        let accentColor = systemPreferences.getAccentColor();
        this.mainWindow.webContents.send('accent-color', `#${accentColor}`);
    }

    private _createTrayIcon() {
        this.trayIcon = new Tray(`${__dirname}/assets/tray.ico`);
        this.trayIcon.setToolTip('MacroHub - online');
        this.trayIcon.setContextMenu(Menu.buildFromTemplate([
            { label: 'Open', click: this.mainWindow.show },
            { type: 'separator' },
            { label: 'Exit', click: this._quit.bind(this) }
        ]));
    }

    private _quit() {
        this.mainWindow = null
        app.quit()
    }
}

var myApp = container.resolve<App>(App);
myApp.start()