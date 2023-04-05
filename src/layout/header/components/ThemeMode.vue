<script lang="ts" setup>
import { useThemeStore } from '@/store'
import { MoonRegular, SunRegular } from "@vicons/fa";

const theme = useThemeStore()
</script>

<template>
  <n-icon mr-20 cursor-pointer size="18" @click="theme.toggleDarkMode">
    <MoonRegular v-if="theme.darkMode" />
    <SunRegular v-else />
  </n-icon>
</template>
