<script setup lang="ts">
const colors = ref(['#F5F5F5', '#87CEEB', '#98FF98', '#FFFACD', '#FFB6C1', '#E6E6FA', '#FFCCCB'])
async function msg(){
const res = await window.api.emit('message', 'Hello')
console.log(res)
}
</script>
<template>
  <div>
    <n-button type="primary" @click="msg"> Primary </n-button>
    <div
      v-for="item in colors"
      :key="item"
      class="w-100px h-100px"
      :style="{ backgroundColor: item }"
    ></div>
  </div>
</template>
