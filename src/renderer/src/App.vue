<script setup lang="ts">
import { useMessage } from 'naive-ui'
window.$message = useMessage()
const { themeOverrides, Theme } = useTheme()
</script>

<template>
  <div class="w-full h-full">
    <n-config-provider
      class="w-full h-full"
      preflight-style-disabled
      :theme="Theme"
      :theme-overrides="themeOverrides"
    >
      <n-message-provider>
        <router-view></router-view>
      </n-message-provider>
    </n-config-provider>
  </div>
</template>

<style scoped></style>
