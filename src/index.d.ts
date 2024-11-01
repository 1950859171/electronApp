export type StatusType = {
  success: boolean
  status?: number
  message?: string
}
export type HandlerType = {
  message: (msg: string) => Promise<StatusType>
}
export type InvokeDataType = { channel: keyof HandlerType; data?: any }
