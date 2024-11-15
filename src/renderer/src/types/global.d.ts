declare module 'virtual:generated-pages'
import { MessageApiInjection } from 'naive-ui'
// 定义全局window变量
declare global {
  interface Window {
    $message: MessageApiInjection
  }
}
