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

# 打包工具

## Webpack

## Gulp

# 开发框架

## Vue

## React

### 简介

#### 是什么

用于构建用户界面的javascript库

1. 发送请求获取数据
2. 处理数据（过滤或者整理格式等）
3. **操作DOM呈现页面**

前两个部分是自己做，后面一个部分是react帮你操作

> 是一个将数据渲染为html视图的开源javascript库

#### 谁开发的

由facebook开发，并且开源

#### 为什么学

1. 原生JavaScript操作DOM繁琐、效率低（`DOM-API操作UI`）
2. 使用JavaScript直接操作DOM,浏览器会进行大量的**重绘重排**
3. 原生JavaScript没有**组件化**编码方案，代码复用率低。

#### 特点

1. 采用`组件化`模式、`声明式编码`，提高开发效率及组件复用率。
2. 在React Native中可以使用React语法进行`移动端开发`。
   1. 这里学了React Native，只用js也可以开发移动端app
3. 使用`虚拟DOM`+优秀的`Diff算法`，尽量减少与真实DOM的交互

## Angular

# JavaScript

# TypeScript

## 安装

使用国内镜像：

```
npm config set registry https://registry.npmmirror.com
```

安装 typescript：

```
npm install -g typescript
```

安装完成后我们可以使用 **tsc** 命令来执行 TypeScript 的相关代码，以下是查看版本号：

```
$ tsc -v
Version 3.2.2
```

## 基础语法

### 组成

TypeScript 程序由以下几个部分组成：

- 模块
- 函数
- 变量
- 语句和表达式
- 注释

我们可以同时编译多个 ts 文件：

```
tsc file1.ts file2.ts file3.ts
```

### 常用编译参数

tsc 常用编译参数如下所示：

- --help     
  - 显示帮助信息
- --module  
  - 载入扩展模块
- --target  
  - 设置ECMA版本
- --declaration  
  - 额外生成一个 .d.ts扩展名的文件

```
tsc ts-hw.ts --declaration//会生成 ts-hw.d.ts、ts-hw.js 两个文件。
```

- --removeComments  

  - 删除文件的注释

- --out  

  - 编译多个文件并合并到一个输出的文件

- --sourdemap  

  - 生成一个sourcemap（.map）文件

  - sourcemap是一个存储源代码与编译代码对应位置映射的信息文件

- --module nolmplicitAny
  - 在表达式和声明生有隐含的any类型时报错

- --watch
  - 在监视模式下运行编译器。会监视输出文件，在它们改变时重新编译。

### 保留关键字

TypeScript保留关键字如下表所示：

1. break
2. as
3. catch
4. switch
5. case
6. if
7. throw
8. else
9. var
10. number
11. string
12. get
13. module
14. type
15. instanceof
16. typeof
17. public
18. private
19. enum
20. export
21. finally
22. for
23. while
24. void
25. null
26. super
27. this
28. new
29. in
30. return
31. true
32. false
33. any
34. extands
35. static
36. let
37. package
38. implement
39. interface
40. function
41. new
42. try
43. yield
44. const
45. continue
46. do

### 空白和换行

TtypeScript会忽略程序中出现的空格、制表和换行符。

空格、制表通常用来缩进代码、使代码易于阅读和理解

### 区分大小写

### 分号是可选的

每行指令都是一段语句，你可以使用分号或者不使用，分号在TypeScript中是可选的，建议使用

如果写在同一行的多条语句，一定要使用分号来分割，不然就会报错

### 注释

注释和js一样有两种类型

//单行

/**/多行

### TypeScript与面向对象

面向对象是对现实世界理解和抽象的方法

TypeScript是一种面向对象的编程语言

#### 两个概念

面向对象主要有两个概念：对象和类。

- ##### 对象

对象是类的一个实例，有状态和行为。

例如：一条狗是一个对象，它的状态有：颜色、名字、品种；行为有：摇尾巴、叫、吃等。

- 类

类是一个末班，它描述一类对象的行为和状态

- 方法

方法是类的操作的实现步骤

#### 面向对象编程实例

```
class Site  {
    name():void {
        console.log("zhousujuan");
        
    }
}
var obj = new Site();
obj.name();

/*
以上实例定义了一个类Site，该类有一个方法name(),该方法在终端上输出字符串zhousujuan。
new 关键字创建类的对象，该对象调用方法name().
*/
```

编译后生成的 JavaScript 代码如下：

```
var Site = /** @class */ (function () {
    function Site() {
    }
    Site.prototype.name = function () {
        console.log("zhousujuan");
    };
    return Site;
}());
var obj = new Site();
obj.name();
/*
以上实例定义了一个类Site，该类有一个方法name(),该方法在终端上输出字符串zhousujuan。
new 关键字创建类的对象，该对象调用方法name().
*/ 

```

执行以上 JavaScript 代码，输出结果如下:

```
zhousujuan
```

# 数据可视化方案

## AntV

### X6

#### 简介

X6 是 AntV 旗下的图编辑引擎，提供了一系列开箱即用的交互组件和简单易用的节点定制能力，方便我们快速搭建 DAG 图、ER 图、流程图等应用。

#### 特性

- 🌱　极易定制：支持使用 SVG/HTML/React/Vue 定制节点样式和交互；
- 🚀　开箱即用：内置 10+ 图编辑配套扩展，如框选、对齐线、小地图等；
- 🧲　数据驱动：基于 MVC 架构，用户更加专注于数据逻辑和业务逻辑；
- 💯　事件驱动：可以监听图表内发生的任何事件。

#### 安装

通过 npm 或 yarn 命令安装 X6。

```shell
# npm
$ npm install @antv/x6 --save

# yarn
$ yarn add @antv/x6
```

安装完成之后，使用 `import` 或 `require` 进行引用。

```ts
import { Graph } from '@antv/x6';
```

如果是直接通过 `script` 标签引入，可以使用下面三个 CDN 中的任何一个，默认返回 X6 的最新版：

- https://unpkg.com/@antv/x6/dist/x6.js
- https://cdn.jsdelivr.net/npm/@antv/x6/dist/x6.js
- https://cdnjs.cloudflare.com/ajax/libs/antv-x6/1.3.20/x6.js (不支持获取最新版)

```html
<script src="https://unpkg.com/@antv/x6/dist/x6.js"></script>
```

对于生产环境，我们推荐使用一个明确的版本号，以避免新版本造成的不可预期的破坏：

- https://unpkg.com/@antv/x6@1.1.1/dist/x6.js
- https://cdn.jsdelivr.net/npm/@antv/x6@1.1.1/dist/x6.js
- https://cdnjs.cloudflare.com/ajax/libs/antv-x6/1.1.1/x6.js

```html
<script src="https://unpkg.com/@antv/x6@1.1.1/dist/x6.js"></script>
```

#### 案例

