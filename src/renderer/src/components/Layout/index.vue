<script setup lang="ts"></script>
<template>
  <n-layout style="--n-color: transparent">
    <n-layout-header bordered style="height: 56px"><Header></Header> </n-layout-header>
    <n-layout-content content-style="padding: 4px;height:calc(100vh - 56px)">
      <router-view></router-view>
    </n-layout-content>
  </n-layout>
</template>
<style></style>
