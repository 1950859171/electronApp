import handler from './handler'
import { type InvokeDataType } from '../../index'
import { IpcMainInvokeEvent } from 'electron'
import { type StatusType } from '../../index'
export default function handlerController(
  e: IpcMainInvokeEvent,
  InvokeData: InvokeDataType
): StatusType {
  const { channel } = InvokeData
  return handler[channel](e, InvokeData.data)
}
