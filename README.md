<p align="center">
  <a href="https://github.com/RQD-china/naive-editor">
    <img alt="Vue Naive Admin Logo" width="200" src="https://s1.ax1x.com/2023/04/09/ppbPmge.png">
  </a>
</p>
<p align="center">
  <a href="https://github.com/RQD-china/naive-editor"><img allt="stars" src="https://badgen.net/github/stars/RQD-china/naive-editor"/></a>
  <a href="https://github.com/RQD-china/naive-editor"><img allt="forks" src="https://badgen.net/github/forks/RQD-china/naive-editor"/></a>
  <a href="./LICENSE"><img allt="MIT License" src="https://badgen.net/github/license/RQD-china/naive-editor"/></a>
</p>

<p align='center'>
  <b>English</b> | 
  <a href="https://github.com/RQD-china/naive-editor/blob/main/README.zh-CN.md">简体中文</a>
</p>

### Introduction

[Naive Editor](https://github.com/RQD-china/naive-editor) is an open source online code editor demo based on the `Monaco Editor` component, based on the latest front-end technology stack, such as `Vue3, Vite3, TypeScript, Pinia, Unocss and Naive UI`. Features include copying code, copying selected code, formatting code in different styles, switching themes and more.

### Features

- 🍒 Integrated [Naive UI](https://www.naiveui.com)，recommended by Evan You.
- 🍎 Integrated `eslint + prettier`.
- 🍍 Integrated `pinia`，lightweight, simple and easy to use alternative to vuex.
- 📦 Integrated `unplugin` auto import.
- 🤹 Integrated `iconify` icon.
- 🍇 Integrated `unocss`.

### Preview

[https://rqd-china.github.io/naive-editor/](https://rqd-china.github.io/naive-editor/)


### Getting Started

```shell
# Recommended setup git autocrlf 为 false
git config --global core.autocrlf false

# Clone Project
git clone https://github.com/RQD-china/naive-editor.git

cd naive-editor

# Install dependencies(Recommended use pnpm: https://pnpm.io/zh/installation)
npm i -g pnpm # Installed and can be ignored
pnpm i # or npm i

# Start
pnpm dev
```

### Config

Mouse hover hint configuration：[useMonacoEditor.ts:34](https://github.com/RQD-china/naive-editor/tree/main/src/hooks/useMonacoEditor.ts)

Database/Table Name Prompt Word Configuration：[suggestionKeyword.ts:1](https://github.com/RQD-china/naive-editor/tree/main/src/constant/suggestionKeyword.ts)