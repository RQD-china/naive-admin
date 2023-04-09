import { Position } from "monaco-editor"
import * as monaco from 'monaco-editor'
import { databaseData } from "@/constant"
// @ts-ignore
import { language } from 'monaco-editor/esm/vs/basic-languages/sql/sql'

const { keywords } = language

export function useMonacoEditor() {
    // 初始化编辑器
    function initEditor(editorRef: Ref, value: string, language: string, readOnly: boolean, theme: string): monaco.editor.IStandaloneCodeEditor {
        // 创建编辑器实例
        return monaco.editor.create(editorRef.value, {
            value, // 编辑器内容
            language,   // 编辑器语言
            readOnly, // 是否只读  取值 true | false
            theme, // 主题
            folding: true, // 是否折叠
            foldingHighlight: true, // 折叠等高线
            foldingStrategy: "indentation", // 折叠方式  auto | indentation
            showFoldingControls: "always", // 是否一直显示折叠 always | mouseover
            disableLayerHinting: true, // 等宽优化
            emptySelectionClipboard: false, // 空选择剪切板
            selectionClipboard: false, // 选择剪切板
            automaticLayout: true, // 自动布局
            codeLens: false, // 代码镜头
            scrollBeyondLastLine: false, // 滚动完最后一行后再滚动一屏幕
            colorDecorators: true, // 颜色装饰器
            accessibilitySupport: "off", // 辅助功能支持  "auto" | "off" | "on"
            lineNumbers: "on", // 行号 取值： "on" | "off" | "relative" | "interval" | function
            lineNumbersMinChars: 5, // 行号最小字符   number
            minimap: { enabled: true }, // 代码小地图
        })

    }

    // 配置光标悬停提示功能
    function registerHoverProvider(language: string) {
        monaco.languages.registerHoverProvider(language, {
            provideHover: function (model: any, position: Position) {
                const lineword = model.getLineContent(position.lineNumber) // 获取光标悬停所在行的所有内容
                const word = model.getWordAtPosition(position)?.word // 获取光标悬停的单词
                if (word === "naiveEditor") {
                    return {
                        contents: [
                            { value: `${word}` },
                            {
                                value: [
                                    "naiveEditor是基于Monaco Editor组件开发的一个SQL编辑器demo",
                                    "组件库使用了NaiveUI",
                                ].join("\n\n"),
                            },
                        ],
                    };
                } else if (undefined !== word) {
                    return {
                        contents: [
                            { value: `${word}` },
                            {
                                value: [
                                    lineword
                                ].join("\n\n"),
                            },
                        ],
                    }
                }
            },
        })
    }
    // 获取 SQL 关键词提示
    function getSQLSuggest() {
        return keywords.map((key: string) => ({
            label: key,
            kind: monaco.languages.CompletionItemKind.Enum,
            insertText: key,
        }))
    }
    // 获取数据库名提示
    function getDBSuggest() {
        return Object.keys(databaseData).map((key: string) => ({
            label: key,
            kind: monaco.languages.CompletionItemKind.Constant,
            insertText: key,
        }))
    }
    // 获取表名提示
    function getTableSuggest(dbName: string) {
        const tableNames = databaseData[dbName]
        if (!tableNames) {
            return []
        }
        return tableNames.map((name: string) => ({
            label: name,
            kind: monaco.languages.CompletionItemKind.Constant,
            insertText: name,
        }))
    }
    // 配置数据库/表名提示
    function registerCompletion() {
        monaco.languages.registerCompletionItemProvider('sql', {
            triggerCharacters: ['.', ...keywords],
            provideCompletionItems: (model, position) => {
                let suggestions: monaco.languages.CompletionItem[] | any[] = []

                const { lineNumber, column } = position

                const textBeforePointer = model.getValueInRange({
                    startLineNumber: lineNumber,
                    startColumn: 0,
                    endLineNumber: lineNumber,
                    endColumn: column,
                })

                const tokens = textBeforePointer.trim().split(/\s+/)
                const lastToken = tokens[tokens.length - 1] // 获取最后一段非空字符串
                if (lastToken.endsWith('.')) {
                    const tokenNoDot = lastToken.slice(0, lastToken.length - 1)
                    if (Object.keys(databaseData).includes(tokenNoDot)) {
                        suggestions = [...getTableSuggest(tokenNoDot)]
                    }
                } else if (lastToken === '.') {
                    suggestions = []
                } else {
                    suggestions = [...getDBSuggest(), ...getSQLSuggest()]
                }

                return {
                    suggestions,
                }
            },
        })
    }

    return {
        initEditor,
        registerHoverProvider,
        registerCompletion
    }
}