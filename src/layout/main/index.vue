<template>
    <div class="main-app">
        <EditorTools :has-selected-code="hasSelectedCode" @copy-code="copyCode" @format-code="formatCode"
            @switch-theme="switchTheme" />
        <MonacoEditor ref="monacoEdit" :readonly="false" language="sql" @content-change="editorContentChange"
            @selection-change="editorSelectionChange" />
    </div>
</template>
<script setup lang="ts">
import MonacoEditor from './components/MonacoEditor.vue'
import EditorTools from "./components/EditorTools.vue";
import { ref } from "vue"
import { useEditorStore } from '~/src/store/modules/editor';

const monacoEdit = ref<any>(null)

const editorStore = useEditorStore()

const hasSelectedCode = ref<boolean>(false)

// 编辑器内容改变回调
function editorContentChange(val: string) {
    editorStore.setValue(val)
}

// 编辑器选中内容改变回调
function editorSelectionChange(val: string) {
    hasSelectedCode.value = Boolean(val)
}

function copyCode() {
    monacoEdit.value.copyCode()
}

function formatCode(style: string) {
    monacoEdit.value.formatCode(style)
}

function switchTheme() {
    monacoEdit.value.switchTheme()
}
</script> 

<style scoped lang="scss">
.main-app {
    border-color: rgba(#fff, .09);
}
</style>
  
  