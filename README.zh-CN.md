<p align="center">
  <a href="https://github.com/zclzone/qs-admin">
    <img alt="Vue Naive Admin Logo" width="200" src="https://assets.qszone.com/images/logo_qs.svg">
  </a>
</p>
<p align="center">
  <a href="https://github.com/zclzone/qs-admin/actions"><img allt="checks" src="https://badgen.net/github/checks/zclzone/qs-admin"/></a>
  <a href="https://github.com/zclzone/qs-admin"><img allt="stars" src="https://badgen.net/github/stars/zclzone/qs-admin"/></a>
  <a href="https://github.com/zclzone/qs-admin"><img allt="forks" src="https://badgen.net/github/forks/zclzone/qs-admin"/></a>
  <a href="./LICENSE"><img allt="MIT License" src="https://badgen.net/github/license/zclzone/qs-admin"/></a>
</p>

<p align='center'>
  <b>简体中文</b> | 
  <a href="https://github.com/zclzone/qs-admin">English</a>
</p>

### 简介

[Qs Admin](https://github.com/zclzone/qs-admin) 是一个开源的基于`Monaco Editor`组件的在线代码编辑器demo，基于最新的前端技术栈，如`Vue3、Vite3、TypeScript、Pinia、Unocss和Naive UI`。具备包括复制代码、复制选中代码、不同风格的代码格式化、切换主题等功能。

### 功能

- 🍒 集成 [Naive UI](https://www.naiveui.com)
- 🍎 集成 `eslint + prettier`，代码约束和格式化统一
- 🍍 集成 `pinia`，vuex 的替代方案，轻量、简单、易用
- 📦 集成 `unplugin` 插件，自动导入，解放双手，开发效率直接起飞
- 🤹 集成 `iconify` 图标, 优雅使用icon
- 🍇 集成 `unocss`，antfu 开源的原子 css 解决方案，非常轻量

### 预览

[https://rqd-china.github.io/naive-admin/](https://rqd-china.github.io/naive-admin/)

### 快速开始

```shell
# 推荐配置git autocrlf 为 false（本项目规范使用lf换行符，此配置是为防止git自动将源文件转换为crlf）
# 不清楚为什么要这样做的请参考这篇文章：https://www.freesion.com/article/4532642129
git config --global core.autocrlf false

# 克隆项目
git clone https://github.com/zclzone/qs-admin.git

# 进入项目目录
cd qs-admin

# 安装依赖(建议使用pnpm: https://pnpm.io/zh/installation)
npm i -g pnpm # 装了可忽略
pnpm i # 或者 npm i

# 启动
pnpm dev
```

### 配置

鼠标悬停提示配置：[useMonacoEditor.ts:34](https://github.com/RQD-china/naive-admin/tree/main/src/hooks/useMonacoEditor.ts)

数据库/表名提示词配置：[suggestionKeyword.ts:1](https://github.com/RQD-china/naive-admin/tree/main/src/constant/suggestionKeyword.ts)