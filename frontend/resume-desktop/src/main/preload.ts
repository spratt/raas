// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge } from 'electron';

const electronHandler = {
    // Deliberately left empty
    // Put any IPC handlers here
};

contextBridge.exposeInMainWorld('electron', electronHandler);

export type ElectronHandler = typeof electronHandler;
