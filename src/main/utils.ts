import { nativeImage, type NativeImage } from 'electron'
import https from 'node:https'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
// 获取当前模块的路径
const __filename = fileURLToPath(import.meta.url)
// 获取当前模块所在的目录路径
const __dirname = dirname(__filename)
export async function getNativeImagefromRemoteUrl(
  url: string,
  fileName: string
): Promise<NativeImage> {
  return new Promise((resolve, reject) => {
    const iconPath = path.join(__dirname, fileName)
    if (fs.existsSync(iconPath)) fs.unlinkSync(path.join(__dirname, fileName))
    const file = fs.createWriteStream(iconPath)
    https
      .get(url, (response) => {
        response.pipe(file)
        file.on('finish', () => {
          file.close((err) => {
            if (!err) resolve(nativeImage.createFromPath(iconPath))
            else reject(err)
          })
        })
      })
      .on('error', (err) => {
        fs.unlink(iconPath, () => {}) // 删除部分下载的文件
        reject(err)
      })
  })
}
