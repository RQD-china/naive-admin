<script setup lang="ts">
import { useThemeStore } from '@/store'
import { WorkspacesRound } from '@vicons/material'
const title = import.meta.env.VITE_APP_TITLE

const themeStore = useThemeStore()
</script>

<template>
  <a h-60 f-c-c href="#/">
    <WorkspacesRound w-1em h-1em text-36 color-primary />
    <h2 v-show="!themeStore.sider.collapsed" ml-15 color-primary text-18 font-bold max-w-140 flex-shrink-0>
      {{ title }}
    </h2>
  </a>
</template>
