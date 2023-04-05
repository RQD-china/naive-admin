<script setup lang="ts">
// import MenuCollapse from './components/MenuCollapse.vue'
import BreadCrumb from "./components/BreadCrumb.vue";
import FullScreen from './components/FullScreen.vue'
// import UserAvatar from './components/UserAvatar.vue'
import GithubSite from './components/GithubSite.vue'
import ThemeMode from './components/ThemeMode.vue'
</script>

<template>
  <div flex items-center>
    <BreadCrumb />
  </div>
  <div ml-auto flex items-center>
    <ThemeMode />
    <GithubSite />
    <FullScreen />
    <!-- <UserAvatar /> -->
  </div>
</template>
