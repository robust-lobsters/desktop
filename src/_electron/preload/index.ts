import type { RendererApi } from "types/electron.ts"
import { contextBridge, ipcRenderer } from "electron"
import { electronAPI } from "@electron-toolkit/preload"

const api: RendererApi = {
  ping: () => ipcRenderer.invoke("ping"),
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI)
    contextBridge.exposeInMainWorld("api", api)
  } catch (error) {
    console.error("Failed to expose Electron API in the renderer:", error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
