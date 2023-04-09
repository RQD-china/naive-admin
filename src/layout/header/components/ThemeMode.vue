<template>
  <n-icon mr-20 cursor-pointer size="18" @click="theme.toggleDarkMode">
    <ModeNightOutlined v-if="theme.darkMode" />
    <WbSunnyOutlined v-else />
  </n-icon>
</template>

<script lang="ts" setup>
import { useThemeStore } from '@/store'
import { WbSunnyOutlined, ModeNightOutlined } from "@vicons/material";

const theme = useThemeStore()
</script>