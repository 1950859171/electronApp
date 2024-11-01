import { ElectronAPI } from '@electron-toolkit/preload'
// import { type StatusType } from '../index'
import invoker from './invoker'
export interface IElectronAPI {
  emit: typeof invoker
}
declare global {
  interface Window {
    electron: ElectronAPI
    api: IElectronAPI
  }
}
