---
title: webpack
---
# webpack

## 1. webpack是什么？

webpack 是一种前端资源构建工具，一个静态模块打包器(module bundler)。
在 webpack 看来, 前端的所有资源文件(js/json/css/img/less/…)都会作为模块处理。它将根据模块的依赖关系进行静态分析，打包生成对应的静态资源(bundle)。



## 2. webpack五大核心概念

+ Entry
  入口(Entry)指示 webpack 以哪个文件为入口起点开始打包，分析构建内部依赖图。
+ Output
  输出(Output)指示 webpack 打包后的资源 bundles 输出到哪里去，以及如何命名。
+ Loader
  Loader 让 webpack 能 够 去 处 理 那 些 非 JavaScript 文 件 (webpack 自 身 只 理 解JavaScript)
+ Plugins
  插件(Plugins)可以用于执行范围更广的任务。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量等。
+ Mode
  模式(Mode)指示 webpack 使用相应模式的配置。（development / production）



## 3. webpack初体验

### 3.1初始化配置

1. 初始化 package.json
   输入指令:npm init 会生成一个packcage.json文件，可以查看下载依赖的版本号
2. 下载并安装 webpack
   输入指令: （这里我使用的版本：webpack@4.41.6 webpack-cli@3.3.11）
   npm install webpack webpack-cli -g (全局)
   npm install webpack webpack-cli -D (下载的包都是开发时依赖)

``` js
// npx是npm的一个伴生命令，在npm5.2以上已经内置，可以直接使用，其它版本需要安装使用。
// npx是运行本地的webpack
npx webpack

// 实现编译时的自动监测文件变化的功能（并执行文件打包）
npx webpack --watch

```



