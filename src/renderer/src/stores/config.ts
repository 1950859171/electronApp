import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('config', () => {
  const appConfig = ref({

  })
  async function getAppConfig(){
    const config = await Api.getAppConfig()
    appConfig.value = config
  }

  return { appConfig, getAppConfig }
})
