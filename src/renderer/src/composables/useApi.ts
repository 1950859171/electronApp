import axios from 'axios'
import { useUserStore } from '@renderer/stores/user'
const instance = axios.create({
  baseURL: 'https://xfz.25002.cn/api.php/',
  timeout: 1000
})
// 添加请求拦截器
instance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  function (response) {
    console.log(response)
    return response.data
  },
  function (error) {
    return Promise.reject(error)
  }
)
function request(options: {
  url: string
  data?: object
  method?: 'post' | 'get'
  withToken?: boolean
}): Promise<any> {
  const opt = Object.assign(
    {
      withToken: true,
      method: 'post',
      data: {},
      token: ''
    },
    options
  )
  if (opt.withToken) {
    if (!useUserStore().userInfo.token) {
      window.$message.error('请先登录')
      return useRouter().replace('/login')
    }
    ;(opt.data as any).token = useUserStore().userInfo.token
  }
  return instance({
    ...opt
  })
}

export const Api = {
  login: (data: { username: string; password: string }) => {
    return request({ url: 'login', data, method: 'post' })
  },
  getAppConfig: () => {
    return request({ url: 'login/config' })
  }
}
