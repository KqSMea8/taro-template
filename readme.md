---
title: 安装及使用
---

## 安装

项目基于 node，请确保已具备较新的 node 环境（>=8.0.0），推荐使用 node 版本管理工具 nvm 来管理 node，这样不仅可以很方便地切换 node 版本，而且全局安装时候也不用加 sudo 了。

安装 Sinx 脚手架 

```bash
# 使用 npm 安装 CLI
$ npm install -g sinx
```

安装 Taro 开发工具 @tarojs/cli

```bash
# 使用 npm 安装 CLI
$ npm install -g @tarojs/cli
# OR 使用 yarn 安装 CLI
$ yarn global add @tarojs/cli
# OR 安装了 cnpm，使用 cnpm 安装 CLI
$ cnpm install -g @tarojs/cli
```

## 使用

使用命令创建模板项目

```bash
$ sinx init mp-app
# 选择 mp-app 类型
```

使用命令启动项目

```bash
$ cd 你的项目根目录
$ sinx start
# 或者直接运行
$ npm start
```


## 更新

Taro 提供了更新命令来更新 CLI 工具自身和项目中 Taro 相关的依赖

更新 Taro CLI 工具

```bash
# taro
$ taro update self
# npm
npm i -g @tarojs/cli@latest
# yarn
yarn global add @tarojs/cli@latest
```

更新项目中 Taro 相关的依赖

```bash
$ taro update project
```


## 环境及依赖检测

Taro 提供了命令来一键检测 Taro 环境及依赖的版本等信息，方便大家查看项目的环境及依赖，排查环境问题。在提 issue 的时候，请附上 `taro info` 打印的信息，帮助开发人员快速定位问题。

```bash
$ taro info
```
