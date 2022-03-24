# docker

## docker 概述

### docker为什么会出现？

一款产品：开发--上线  两套环境！应用环境，应用配置！

开发

运维

问题：我在我的电脑可以运行！版本更新导致服务不可用！对于运维来说，考验就十分大？

开发即运维!

环境配置四十分麻烦的，每一个机器都要部署环境（集群Redis，ES,  Hadoop ...）!  费时费力。

发布一个项目  （jar +  (Redis  MySQL  jdk  ES)），项目能不能都带上环境安装打包！

之前服务器配置一个应用的环境 Redis MySQL jdk  ES  Hadoop , 配置超麻烦，不能跨平台。

Windows，最后发布到Linux！

传统：开发jar   ，运维来做！

现在：开发打包部署上线，一套流程做完！

docker给以上问题提出了解决方案！

# Webpack

# Gulp

# Vue

# React

## 简介

### 是什么

用于构建用户界面的javascript库

1. 发送请求获取数据
2. 处理数据（过滤或者整理格式等）
3. **操作DOM呈现页面**

前两个部分是自己做，后面一个部分是react帮你操作

> 是一个将数据渲染为html视图的开源javascript库

### 谁开发的

由facebook开发，并且开源

### 为什么学

1. 原生JavaScript操作DOM繁琐、效率低（`DOM-API操作UI`）
2. 使用JavaScript直接操作DOM,浏览器会进行大量的**重绘重排**
3. 原生JavaScript没有**组件化**编码方案，代码复用率低。

### 特点

1. 采用`组件化`模式、`声明式编码`，提高开发效率及组件复用率。
2. 在React Native中可以使用React语法进行`移动端开发`。
   1. 这里学了React Native，只用js也可以开发移动端app
3. 使用`虚拟DOM`+优秀的`Diff算法`，尽量减少与真实DOM的交互

# Angular

# JavaScript

# TypeScript
