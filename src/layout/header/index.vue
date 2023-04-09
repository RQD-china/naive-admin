<template>
  <div flex items-center>
    <BreadCrumb />
  </div>
  <div ml-auto flex items-center>
    <ThemeMode />
    <GithubSite />
    <FullScreen />
  </div>
</template>

<script setup lang="ts">
import BreadCrumb from "./components/BreadCrumb.vue";
import FullScreen from './components/FullScreen.vue'
import GithubSite from './components/GithubSite.vue'
import ThemeMode from './components/ThemeMode.vue'
</script>