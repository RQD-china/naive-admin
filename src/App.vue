<template>
  <AppProvider>
    <Layout />
  </AppProvider>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import AppProvider from '@/components/AppProvider/index.vue'
import Layout from '@/layout/index.vue'

onMounted(() => {
  window.$loadingBar.start()
  setTimeout(() => {
    window.$loadingBar.finish()
    window.$message.success('加载完成，Perfect~')
  }, 500)
})
</script>
