import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref({
    token: '',
    username: '',
    avatar: '',
    role: '',
    id: ''
  })
  async function login(data: { username: string; password: string }) {
    const info = await Api.login(data)
    userInfo.value = {
      ...info
    }
  }
  return { userInfo, login }
})
