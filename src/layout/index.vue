<template>
  <n-layout has-sider wh-full>
    <n-layout-sider bordered collapse-mode="width" :collapsed-width="themeStore.sider.collapsedWidth" h-100vh
      :width="themeStore.sider.width" :native-scrollbar="false" :collapsed="themeStore.sider.collapsed"
      dark="bg-dark border-0">
      <SideBar />
    </n-layout-sider>
    <article flex-1 flex-col overflow-hidden>
      <header bg-white px-15 border-b bc-eee flex items-center dark="bg-dark border-0"
        :style="`height: ${themeStore.header.height}px`">
        <AppHeader />
      </header>
      <section flex-1 overflow-hidden bg="#f5f6fb" dark:bg-hex-101014>
        <button>main</button>
      </section>
    </article>
  </n-layout>
</template>

<script setup lang="ts">
import SideBar from './sidebar/index.vue'
import AppHeader from './header/index.vue'

import { useThemeStore } from '@/store'

const themeStore = useThemeStore()
</script>