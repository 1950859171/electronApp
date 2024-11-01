<script setup lang="ts">
const { themeOverrides, Theme } = useTheme()
console.log(navigator.mediaDevices)
</script>

<template>
  <div class="w-full h-full">
    <n-config-provider
      class="w-full h-full"
      preflight-style-disabled
      :theme="Theme"
      :theme-overrides="themeOverrides"
    >
      <router-view></router-view>
    </n-config-provider>
  </div>
</template>

<style scoped></style>
