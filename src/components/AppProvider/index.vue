<template>
  <n-config-provider :theme-overrides="themeOverrides" :theme="themeMode">
    <n-loading-bar-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-message-provider>
            <slot></slot>
            <NaiveProviderContent />
          </n-message-provider>
        </n-notification-provider>
      </n-dialog-provider>
    </n-loading-bar-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { defineComponent, h } from 'vue'
import { useLoadingBar, useDialog, useMessage, useNotification, darkTheme } from 'naive-ui'
import { useThemeStore } from '~/src/store'
import { BuiltInGlobalTheme } from 'naive-ui/es/themes/interface';

const themStore = useThemeStore()
const themeMode = ref<BuiltInGlobalTheme | undefined>(undefined)

const themeOverrides: Object = {
  common: {
    primaryColor: '#2376b7FF',
    primaryColorHover: '#2376b7E3',
    primaryColorPressed: '#2B4C59FF',
    primaryColorSuppl: '#2376b763',
  },
}

const NaiveProviderContent = defineComponent({
  setup() {
    setupNaiveTools()
  },
  render() {
    return h('div')
  },
})

// 挂载naive组件的方法至window, 以便在全局使用
function setupNaiveTools() {
  window.$loadingBar = useLoadingBar()
  window.$dialog = useDialog()
  window.$message = useMessage()
  window.$notification = useNotification()
}

watch(
  () => themStore.darkMode,
  (newValue) => {
    if (newValue) {
      document.documentElement.classList.add('dark')
      themeMode.value = darkTheme
    }
    else {
      document.documentElement.classList.remove('dark')
      themeMode.value = undefined
    }
  },
  {
    immediate: true,
  },
)

</script>
