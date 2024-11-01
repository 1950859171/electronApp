import { IpcMainInvokeEvent } from 'electron'
import { type StatusType } from '../../../index'
export default function message(event: IpcMainInvokeEvent, data: string): StatusType {
  console.log('event', event, data)
  const message = 'message!'
  return {
    success: true,
    message
  }
}
