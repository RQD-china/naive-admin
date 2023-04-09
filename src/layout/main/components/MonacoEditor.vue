<template>
    <div class="editor" h-100vh p-10px m-10px rounded-4 bg-white dark="bg-dark border border-solid">
        <div ref="editorContainer" :style="{ height: props.height + (isNumber(props.height) ? 'px' : '') }"></div>
    </div>
</template>
  
<script setup lang="ts">
import { useClipboard, useDebounceFn } from '@vueuse/core'
import { isNumber } from "@/utils"
import { IndentStyle, format } from "sql-formatter"
import { useEditorStore, useThemeStore } from '@/store'
import { useMonacoEditor } from "@/hooks/useMonacoEditor"
import * as monaco from 'monaco-editor'

const emit = defineEmits<{
    (event: 'content-change', content: string): void
    (event: 'selection-change', content: string): void
}>()
const props = defineProps({
    value: {
        type: String,
        default: '',
    },
    height: { // 编辑器height
        type: [String, Number],
        default: '100%',
    },
    readonly: { // 是否只读
        type: Boolean,
        default: false,
    },
    language: { // 编辑器语言/高亮类型（javascript、curl等,javascript：自带的，curl:自定义的高亮规则）
        type: String,
        default: 'javascript',
    }
})

const { copy: copyContent, isSupported: isClipboardSupported } = useClipboard()
const themeStore = useThemeStore()
const editorStore = useEditorStore()

const editorContainer = ref<any>(null)

let selectedCode: string = ''
let editor: monaco.editor.IStandaloneCodeEditor
const { initEditor, registerHoverProvider, registerCompletion } = useMonacoEditor()

// 复制
function copyCode() {
    if (isClipboardSupported) {
        if (selectedCode) {
            copyContent(selectedCode)
        } else {
            if (editor) {
                copyContent(toRaw(editor).getValue())
            }
        }
        window.$message.success('复制成功')
    } else {
        window.$message.error('当前浏览器环境不支持Clipboard API')
    }
}

// 格式化
function formatCode(indentStyle: IndentStyle) {
    if (editor) {
        toRaw(editor).setValue(
            format(editor?.getValue() || '', {
                indentStyle,
            }),
        )
    }
}

// 切换主题
function switchTheme() {
    if (editorStore.theme === 'vs') {
        editorStore.setTheme('vs-dark')
    } else {
        editorStore.setTheme('vs')
    }
    monaco.editor?.setTheme(editorStore.theme)

}

// 向父组件暴露方法调用
defineExpose({
    copyCode,
    formatCode,
    switchTheme,
})

// 初始化
onMounted(() => {
    registerHoverProvider(props.language)
    registerCompletion()
    if (!editor) {
        editor = initEditor(editorContainer, editorStore.value, props.language, props.readonly, editorStore.theme)
    }
    // 内容改变时给父组件实时返回值
    editor?.onDidChangeModelContent(() => {
        const editorContent: string = toRaw(editor).getValue()
        emit('content-change', editorContent)
    })
    // 选中代码改变时给父组件实时返回值
    editor?.onDidChangeCursorSelection(useDebounceFn((event: any) => {
        const selection: monaco.IRange = event.selection;
        const nowSelectedCode: string = editor?.getModel()?.getValueInRange(selection) || ''
        if (nowSelectedCode !== selectedCode) {
            selectedCode = nowSelectedCode
            emit('selection-change', selectedCode)
        }
    }, 400))
})

// 监听页面主题变化
watch(() => themeStore.darkMode, (darkMode: boolean) => {
    if (darkMode) {
        editorStore.setTheme('vs-dark')
    } else {
        editorStore.setTheme('vs')
    }
    monaco.editor.setTheme(editorStore.theme)
})

// 销毁编辑器实例
onBeforeUnmount(() => {
    editor?.dispose()
})
</script>