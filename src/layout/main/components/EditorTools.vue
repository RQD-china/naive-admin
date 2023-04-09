<template>
    <div class="editor-tools" flex items-center h-60px border-b border-b-solid p-10px m-10px rounded-4 bg-white
        dark="bg-dark border border-solid">
        <n-button block class="editor-tools_btn" @click="handleClickCopyBtn">
            <template #icon>
                <n-icon>
                    <CopyAllOutlined />
                </n-icon>
            </template>
            {{ props.hasSelectedCode ? '复制选中代码' : '复制' }}
        </n-button>
        <n-dropdown :show="isFormatDropdownShow" :options="formatStyleOptions" @select="handleSelectFormatStyle">
            <n-button block class="editor-tools_btn" @click="handleClickFormatBtn">
                <template #icon>
                    <n-icon>
                        <TextFormatOutlined />
                    </n-icon>
                </template>
                {{ formatStyleOptions.find(optionItem => optionItem.key === formatStyle)?.label }}
                <n-icon ml-8px size="18" @click.stop="showFormatDropdown">
                    <ExpandCircleDownOutlined />
                </n-icon>
            </n-button>
        </n-dropdown>
        <n-button block class="editor-tools_btn" @click="handleClickSwitchThemeBtn">
            <template #icon>
                <n-icon>
                    <ModeNightOutlined v-if="editorStore.theme === 'vs-dark'" />
                    <WbSunnyOutlined v-else />
                </n-icon>
            </template>
            切换编辑器主题
        </n-button>
        <n-button block class="editor-tools_btn" @click="handleClickHelpBtn">
            <template #icon>
                <n-icon>
                    <LiveHelpOutlined />
                </n-icon>
            </template>
            使用说明
        </n-button>
    </div>
</template>
  
<script setup lang="ts">
import { CopyAllOutlined, TextFormatOutlined, WbSunnyOutlined, ModeNightOutlined, ExpandCircleDownOutlined, LiveHelpOutlined } from "@vicons/material"
import { useEditorStore } from '@/store'
import { DropdownOption } from "naive-ui";

const emit = defineEmits<{
    (event: 'format-code', style: string): void
    (event: 'copy-code'): void
    (event: 'switch-theme'): void
}>()
const props = defineProps({
    hasSelectedCode: {
        type: Boolean,
        default: false,
    },
})

const editorStore = useEditorStore()

const isFormatDropdownShow = ref<boolean>(false)

const formatStyleOptions: DropdownOption[] = [
    {
        label: '标准格式化',
        key: 'standard',
    },
    {
        label: '左悬挂格式化',
        key: "tabularLeft"
    },
    {
        label: '右悬挂格式化',
        key: 'tabularRight'
    },
]
let formatStyle: string = 'standard'

// 点击复制按钮
function handleClickCopyBtn() {
    emit('copy-code')
}

// 点击格式化按钮
function handleClickFormatBtn() {
    emit('format-code', formatStyle)
}

// 显示格式化风格下拉框
function showFormatDropdown() {
    isFormatDropdownShow.value = !isFormatDropdownShow.value
}

// 选择格式化风格
function handleSelectFormatStyle(key: string) {
    formatStyle = key
    isFormatDropdownShow.value = false
}

// 点击切换主题按钮
function handleClickSwitchThemeBtn() {
    emit('switch-theme')
}

// 点击使用说明
function handleClickHelpBtn() {
    window.open('https://github.com/RQD-china/naive-admin/blob/develop/README.md')
}
</script>

<style scoped lang="scss">
.editor-tools_btn {
    margin-right: 10px;
    width: inherit;

    &:last-child {
        margin-right: 0;
    }
}
</style>