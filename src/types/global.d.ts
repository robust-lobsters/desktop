import type { ElectronAPI } from '@electron-toolkit/preload'
import type { RendererApi } from './shared'

declare global {
  interface Window {
    electron: ElectronAPI
    api: RendererApi
  }
}

export {}
