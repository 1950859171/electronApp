<script setup lang="ts">
import logo from '@renderer/assets/svg/logo.svg'
</script>
<template>
  <div class="w-full h-full flex" style="-webkit-app-region: drag">
    <div class="flex flex-1">
      <!-- logo -->
      <img :src="logo" alt="logo" />
      <!-- title -->
      <h1 class="flex items-center text-xl font-bold">Rhythm River</h1>
    </div>
    <div class="flex items-center w-75"></div>
  </div>
</template>
