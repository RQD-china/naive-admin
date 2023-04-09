<template>
  <n-menu ref="menu" class="side-menu" accordion :indent="18" :collapsed-icon-size="22" :collapsed-width="64"
    :options="menuOptions" value="home" />
</template>

<style lang="scss">
.side-menu:not(.n-menu--collapsed) {
  .n-menu-item-content {
    &::before {
      left: 5px;
      right: 5px;
    }

    &.n-menu-item-content--selected,
    &:hover {
      &::before {
        border-left: 4px solid var(--primary-color);
      }
    }
  }
}
</style>

<script setup lang="ts">
import type { MenuOption } from 'naive-ui'
import { renderNIcon } from '@/utils'
import { HomeFilled } from "@vicons/material";

const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        'a',
        {
          href: '#/',
          rel: 'noopenner noreferrer'
        },
        'SQL编辑器'
      ),
    key: 'home',
    icon: renderNIcon(HomeFilled)
  },
  {
    key: 'divider-1',
    type: 'divider',
    props: {
      style: {
        marginLeft: '32px'
      }
    }
  }
]
</script>