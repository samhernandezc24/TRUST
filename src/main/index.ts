import path from "path";
import { app, BrowserWindow } from "electron";
import { PLATFORM_MACOS } from "./symbols";

function createVaultWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
    });
    win.loadFile(path.resolve(__dirname, "../renderer/index.html"));
}

app.whenReady().then(createVaultWindow);

app.on("window-all-closed", () => {
    if (process.platform !== PLATFORM_MACOS) {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createVaultWindow();
    }
});

