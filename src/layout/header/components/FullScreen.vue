<template>
  <n-icon mr-20 cursor-pointer size="18" @click="toggle">
    <CloseFullscreenOutlined v-if="isFullscreen" />
    <OpenInFullOutlined v-else />
  </n-icon>
</template>

<script setup lang="ts">
import { useFullscreen } from '@vueuse/core'
import { OpenInFullOutlined, CloseFullscreenOutlined } from '@vicons/material'

const { isFullscreen, toggle } = useFullscreen()
</script>