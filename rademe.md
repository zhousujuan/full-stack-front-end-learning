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

## 基础类型

TypeScript 包含的数据类型如下表:

| 数据类型   | 关键字    | 描述                                                         |
| :--------- | --------- | :----------------------------------------------------------- |
| 任意类型   | any       | 声明为 any 的变量可以赋予任意类型的值。                      |
| 数字类型   | number    | 双精度 64 位浮点值。它可以用来表示整数和分数。                                          `let binaryLiteral: number = 0b1010; // 二进制                  let octalLiteral: number = 0o744;    // 八进制                   let decLiteral: number = 6;    // 十进制                         let hexLiteral: number = 0xf00d;    // 十六进制` |
| 字符串类型 | string    | 一个字符系列，使用单引号（**'**）或双引号（**"**）来表示字符串类型。反引号（**`**）来定义多行文本和内嵌表达式。`let name: string = "Runoob"; let years: number = 5; let words: string = `您好，今年是 ${ name } 发布 ${ years + 1} 周年`;` |
| 布尔类型   | boolean   | 表示逻辑值：true 和 false。`let flag: boolean = true;`       |
| 数组类型   | 无        | 声明变量为数组。`// 在元素类型后面加上[] let arr: number[] = [1, 2]; // 或者使用数组泛型 let arr: Array<number> = [1, 2];` |
| 元组       | 无        | 元组类型用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。`let x: [string, number]; x = ['Runoob', 1];    // 运行正常 x = [1, 'Runoob'];    // 报错 console.log(x[0]);    // 输出 Runoob` |
| 枚举       | enum      | 枚举类型用于定义数值集合。`enum Color {Red, Green, Blue}; let c: Color = Color.Blue; console.log(c);    // 输出 2` |
| void       | void      | 用于标识方法返回值的类型，表示该方法没有返回值。`function hello(): void {    alert("Hello Runoob"); }` |
| null       | null      | 表示对象值缺失。                                             |
| undefined  | undefined | 用于初始化变量为一个未定义的值                               |
| never      | never     | never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。 |



**注意：**TypeScript 和 JavaScript 没有整数类型

### Any 类型

任意值是 TypeScript 针对编程时类型不明确的变量使用的一种数据类型，它常用于以下三种情况。

1、变量的值会动态改变时，比如来自用户的输入，任意值类型可以让这些变量跳过编译阶段的类型检查，示例代码如下：

```
let x: any = 1;    // 数字类型
x = 'I am who I am';    // 字符串类型
x = false;    // 布尔类型
```

改写现有代码时，任意值允许在编译时可选择地包含或移除类型检查，示例代码如下：

```
let x: any = 4;
x.ifItExists();    // 正确，ifItExists方法在运行时可能存在，但这里并不会检查
x.toFixed();    // 正确
```

定义存储各种类型数据的数组时，示例代码如下：

```
let arrayList: any[] = [1, false, 'fine'];
arrayList[1] = 100;
```

------

### Null 和 Undefined

#### null

在 JavaScript 中 null 表示 "什么都没有"。

null是一个只有一个值的特殊类型。表示一个空对象引用。

用 typeof 检测 null 返回是 object。

#### undefined

在 JavaScript 中, undefined 是一个没有设置值的变量。

typeof 一个没有值的变量会返回 undefined。

Null 和 Undefined 是其他任何类型（包括 void）的子类型，可以赋值给其它类型，如数字类型，此时，赋值后的类型会变成 null 或 undefined。而在TypeScript中启用严格的空校验（--strictNullChecks）特性，就可以使得null 和 undefined 只能被赋值给 void 或本身对应的类型，示例代码如下：

```
// 启用 --strictNullChecks
let x: number;
x = 1; // 运行正确
x = undefined;    // 运行错误
x = null;    // 运行错误
```

上面的例子中变量 x 只能是数字类型。如果一个类型可能出现 null 或 undefined， 可以用 | 来支持多种类型，示例代码如下：

```
// 启用 --strictNullChecks
let x: number | null | undefined;
x = 1; // 运行正确
x = undefined;    // 运行正确
x = null;    // 运行正确
```

更多内容可以查看：[JavaScript typeof, null, 和 undefined](https://www.runoob.com/js/js-typeof.html)

------

### never 类型

never 是其它类型（包括 null 和 undefined）的子类型，代表从不会出现的值。这意味着声明为 never 类型的变量只能被 never 类型所赋值，在函数中它通常表现为抛出异常或无法执行到终止点（例如无限循环），示例代码如下：

```
let x: never;
let y: number;

// 运行错误，数字类型不能转为 never 类型
x = 123;

// 运行正确，never 类型可以赋值给 never类型
x = (()=>{ throw new Error('exception')})();

// 运行正确，never 类型可以赋值给 数字类型
y = (()=>{ throw new Error('exception')})();

// 返回值为 never 的函数可以是抛出异常的情况
function error(message: string): never {
    throw new Error(message);
}

// 返回值为 never 的函数可以是无法被执行到的终止点的情况
function loop(): never {
    while (true) {}
}
```

## 变量声明

变量是一种使用方便的占位符，用于引用计算机内存地址。

我们可以把变量看做存储数据的容器。

TypeScript 变量的命名规则：

- 变量名称可以包含数字和字母。
- 除了下划线 **_** 和美元 **$** 符号外，不能包含其他特殊字符，包括空格。
- 变量名不能以数字开头。

变量使用前必须先声明，我们可以使用 var 来声明变量。

我们可以使用以下四种方式来声明变量：

声明变量的类型及初始值：

```
var [变量名] : [类型] = 值;
```

例如：

```
var uname:string = "Runoob";
```

声明变量的类型，但没有初始值，变量值会设置为 undefined：

```
var [变量名] : [类型];
```

例如：

```
var uname:string;
```

声明变量并初始值，但不设置类型，该变量可以是任意类型：

```
var [变量名] = 值;
```

例如：

```
var uname = "Runoob";
```

声明变量没有设置类型和初始值，类型可以是任意类型，默认初始值为 undefined：

```
var [变量名];
```

例如：

```
var uname;
```

### 实例

```ts
var uname:string = "Runoob";
var score1:number = 50;
var score2:number = 42.50
var sum = score1 + score2
console.log("名字: "+uname)
console.log("第一个科目成绩: "+score1)
console.log("第二个科目成绩: "+score2)
console.log("总成绩: "+sum)
```

**注意：**变量不要使用 name 否则会与 DOM 中的全局 window 对象下的 name 属性出现了重名。

使用 tsc 命令编译以上代码，得到如下 JavaScript 代码：

```ts
var uname = "Runoob"; 
var score1 = 50; 
var score2 = 42.50; 
var sum = score1 + score2; 
console.log("名字: " + uname); 
console.log("第一个科目成绩: " + score1); 
console.log("第二个科目成绩: " + score2); 
console.log("总成绩: " + sum);
```

执行该 JavaScript 代码输出结果为：

```
名字: Runoob
第一个科目成绩: 50
第二个科目成绩: 42.5
总成绩: 92.5
```

TypeScript 遵循强类型，如果将不同的类型赋值给变量会编译错误，如下实例：

```
var num:number = "hello"     // 这个代码会编译错误
```

------

### 类型断言（Type Assertion）

类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型。

语法格式：

```
<类型>值
```

或:

```
值 as 类型
```

#### 实例

```ts
var str = '1'  
var str2:number = <number> <any> str   //str、str2 是 string 类型 console.log(str2)
```



### TypeScript 是怎么确定单个断言是否足够

当 S 类型是 T 类型的子集，或者 T 类型是 S 类型的子集时，S 能被成功断言成 T。这是为了在进行类型断言时提供额外的安全性，完全毫无根据的断言是危险的，如果你想这么做，你可以使用 any。

它之所以不被称为**类型转换**，是因为转换通常意味着某种运行时的支持。但是，类型断言纯粹是一个编译时语法，同时，它也是一种为编译器提供关于如何分析代码的方法。

编译后，以上代码会生成如下 JavaScript 代码：

```
var str = '1'; var str2 = str;  //str、str2 是 string 类型 console.log(str2);
```

执行输出结果为：

```
1
```

------

### 类型推断

当类型没有给出时，TypeScript 编译器利用类型推断来推断类型。

如果由于缺乏声明而不能推断出类型，那么它的类型被视作默认的动态 any 类型。

```
var num = 2;    // 类型推断为 number 
console.log("num 变量的值为 "+num);  
num = "12";    // 编译错误 console.log(num);
```



- 第一行代码声明了变量 num 并=设置初始值为 2。 注意变量声明没有指定类型。因此，程序使用类型推断来确定变量的数据类型，第一次赋值为 2，**num** 设置为 number 类型。

- 第三行代码，当我们再次为变量设置字符串类型的值时，这时编译会错误。因为变量已经设置为了 number 类型。

  ```
  error TS2322: Type '"12"' is not assignable to type 'number'.
  ```

------

### 变量作用域

变量作用域指定了变量定义的位置。

程序中变量的可用性由变量作用域决定。

TypeScript 有以下几种作用域：

- **全局作用域** − 全局变量定义在程序结构的外部，它可以在你代码的任何位置使用。
- **类作用域** − 这个变量也可以称为 **字段**。类变量声明在一个类里头，但在类的方法外面。 该变量可以通过类的对象来访问。类变量也可以是静态的，静态的变量可以通过类名直接访问。
- **局部作用域** − 局部变量，局部变量只能在声明它的一个代码块（如：方法）中使用。

以下实例说明了三种作用域的使用：

```
var global_num = 12          // 全局变量 
class Numbers {
num_val = 13;             // 实例变量   
static sval = 10;         // 静态变量      
storeNum():void {       
var local_num = 14;    // 局部变量   
}  
}  
console.log("全局变量为: "+global_num)   
console.log(Numbers.sval)   // 静态变量 
var obj = new Numbers();  
console.log("实例变量: "+obj.num_val)
```

以上代码使用 tsc 命令编译为 JavaScript 代码为：

```
var global_num = 12; // 全局变量 
var Numbers = /** @class */ (function () {    
function Numbers() {        
this.num_val = 13; // 实例变量    }    
Numbers.prototype.storeNum = function () {
var local_num = 14; // 局部变量    
};    
Numbers.sval = 10; // 静态变量    
return Numbers; }()); 
console.log("全局变量为: " + global_num); 
console.log(Numbers.sval); // 静态变量 
var obj = new Numbers(); 
console.log("实例变量: " + obj.num_val);
```

执行以上 JavaScript 代码，输出结果为：

```
全局变量为: 12
10
实例变量: 13
```

如果我们在方法外部调用局部变量 local_num，会报错：

```
error TS2322: Could not find symbol 'local_num'.
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

#### 画布 Graph

在 X6 中，Graph 是图的载体，它包含了图上的所有元素（节点、边等），同时挂载了图的相关操作（如交互监听、元素操作、渲染等）。

##### 平移、缩放、居中

普通画布(未开启 [scroller](https://x6.antv.vision/zh/docs/tutorial/basic/scroller) 模式)通过开启 `panning` 选项来支持拖拽平移。



#### 案例

