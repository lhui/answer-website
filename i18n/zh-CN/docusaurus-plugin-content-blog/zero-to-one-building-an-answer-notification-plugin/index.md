---
date: 2025-01-05
title: "从零到一：构建一个 Answer 消息通知插件"
authors: [lihui]
category: Tutorials
featured: false
image: 2023-07-22-cover@4x.png
description: "学习如何从零开始构建一个 Apache Answer 的通知插件。"

---

在开发 notification wecom 插件之前，我对于 Go 语言，以及如何构建一个 Answer 插件了解不多。在这篇文章中，我将分享我是如何从零开始构建一个 Answer 插件的，以及一起看下通知类的插件是如何构建运行的。

首先应该感谢另一个插件 notification-dingtalk 的作者 [https://github.com/LinkinStars](https://github.com/LinkinStars)，他的插件让我了解了如何构建一个插件，代码的接口是怎样的。在这篇文章中，我将分享下我的开发构建过程，希望对未来的通知类插件的构建有所帮助。

## 准备工作

首先，我们针对的是后端的插件，在开始之前，我们首先需要思考以下的问题，

1. 插件的类型，比如本文是 notification 类型的插件，具体支持的类型，可以参考 [插件开发文档](https://answer.apache.org/docs/development/plugins)
2. 插件的基本结构以及如何适配到 Answer 中，可以参考 [插件开发文档](https://answer.apache.org/docs/development/plugins), 本文的内容也是从上述的内容做的优化

环境准备如下

- 安装 Go 1.22.0 及以上版本（当前是 1.22.0，后续请查看[插件的仓库](https://github.com/apache/incubator-answer-plugins)的推荐版本）
- Node.js >=16.17
- pnpm >=7


## 开发过程

### 1. 创建插件项目

首先我们需要将 Answer 项目运行起来，然后创建一个插件项目。因此第一步是克隆并运行 Answer。

```bash
git clone https://github.com/apache/incubator-answer.git
cd incubator-answer
make ui # 此处因为是后端的的项目，因此可以只编译一遍 UI 即可
```

经过上述的命令，我们便可以将 Answer 项目运行起来，运行分为两个步骤，初始化 + 尝试运行。

初始化:

```bash
go run cmd/answer/main.go init -C ./answer-data
```
并登录 http://localhost:3000/install, 配置下数据初始化，如果简单开发插件的话，可以本地使用 sqlite 数据库即可。

初始化配置后，软件会自动停止，然后我们再执行以下命令测试下是否成功即可。


```bash
go run cmd/answer/main.go run -C ./answer-data
```

上述的内容完成之后，我们便可以开始插件的初始化工作了。

切换到插件的目录，然后执行以下命令，创建一个插件项目。

```bash
cd ui/src/plugins/
npx create-answer-plugin <pluginName> # 此处推荐使用 '-' 做连接符 比如 notification-wecom
``` 

上述命令执行完成后，会生成一个插件的项目，我们可以看到以下的目录结构。




### 2. 实现接口


### 3. 合并 i18n 文件


### 4. 编译插件


### 5. 部署插件

## 总结

在这篇文章中，我们学习了如何从零开始构建一个 Answer 插件。我们首先了解了插件的类型，然后创建了一个消息通知的项目，并尝试运行，并按照插件实现了对应的方法，编译了插件，最后将其提交到插件的仓库中。

## 参考

- [notification-dingtalk](https://github.com/apache/incubator-answer-plugins/tree/main/notification-dingtalk)
- [插件开发文档](https://answer.apache.org/docs/plugins)
- [插件开发开发者文档](https://answer.apache.org/docs/development/plugins)
- [插件 i18n 文档](https://answer.apache.org/docs/development/plugins/plugin-translation)
- [The Packaging Process for Answer Plugins](http://localhost:3000/zh-CN/blog/why-the-answer-plugin-system-was-designed-this-way)



