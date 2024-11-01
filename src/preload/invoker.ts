import { ipcRenderer } from 'electron'
import { type HandlerType, type StatusType } from '../index'
export default function invoker(channel: keyof HandlerType, data: any): Promise<StatusType> {
  return ipcRenderer.invoke('rendererAction', {
    channel,
    data
  })
}
