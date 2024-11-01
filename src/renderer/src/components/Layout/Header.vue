<script setup lang="ts">
import logo from '@renderer/assets/svg/logo.svg'
import { useThemeVars } from 'naive-ui'
const { changeTheme, Theme } = useTheme()
const themeVars = useThemeVars()
function handleUpdateValue(value: string) {
  changeTheme(value === 'light' ? 'dark' : 'light')
}
</script>
<template>
  <div class="w-full h-full flex" style="-webkit-app-region: drag">
    <div class="flex flex-1">
      <!-- logo -->
      <img :src="logo" alt="logo" style="-webkit-app-region: no-drag" />
      <!-- title -->
      <h1
class="flex items-center text-xl font-bold" :style="{ color: themeVars.textColor2 }"
        style="-webkit-app-region: no-drag">
        Rhythm River
      </h1>
    </div>
    <div class="flex items-center w-75">
      <n-switch
checked-value="light" unchecked-value="dark" :style="{ '--n-button-color': Theme ? '#000' : '#fff' }"
        style="-webkit-app-region: no-drag" @update:value="handleUpdateValue">
        <template #icon>
          <span v-if="!Theme" class="i-meteocons:clear-day-fill text-xl"></span>
          <span v-else class="i-meteocons:clear-night-fill text-xl"></span>
        </template>
      </n-switch>
    </div>
  </div>
</template>
