# 安装

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

# 基础语法

## 组成

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

## 常用编译参数

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

## 保留关键字

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

## 空白和换行

TtypeScript会忽略程序中出现的空格、制表和换行符。

空格、制表通常用来缩进代码、使代码易于阅读和理解

## 区分大小写

## 分号是可选的

每行指令都是一段语句，你可以使用分号或者不使用，分号在TypeScript中是可选的，建议使用

如果写在同一行的多条语句，一定要使用分号来分割，不然就会报错

## 注释

注释和js一样有两种类型

//单行

/**/多行

## TypeScript与面向对象

面向对象是对现实世界理解和抽象的方法

TypeScript是一种面向对象的