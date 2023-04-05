<script setup lang="ts">
import { Github } from "@vicons/fa";
function handleLinkClick() {
  window.open('https://github.com/RQD-china/naive-admin')
}
</script>

<template>
  <n-icon mr-20 size="18" style="cursor: pointer" @click="handleLinkClick">
    <Github />
  </n-icon>
</template>
