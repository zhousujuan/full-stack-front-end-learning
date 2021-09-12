# Angularjs

jQuery和angular实现同一个

输入框的双向数据绑定的事件

jq

```jq
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text">
    <p>您输入的内容是:<span></span></p>
    <!-- 引入jQuery -->
    <script type="text/javascript" src="http://code.jquery.com/jquery-1.11.1.min.js"></script>
    <script type="text/javascript">
    $(function(){
        /*
        document.ready文档（结构）加载完毕
        window.onload:整个页面加载完毕
        */
       $('input').keyup(function(){
           var value=$(this).val();
           $('span').html(value)
       })

    })
    </script>
</body>
</html>
```

angularjs

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body ng-app>
    <input type="text" ng-model="user_input">
    <p>您输入的内容是：<span>{{user_input}}</span></p>

    <script type="text/javascript" src="http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min.js"></script>
</body>
</html>
```

比较两个的运行速度，发现我们的angular的速度要快一点。

---

angularjs讲解

ng-app:告诉angualar核心它管理当前标签所包含的整个区域

​      并且会自动创建$rootScope根作用域对象



  ng-model：将当前输入框的值与谁关联（属性名：属性值）

​       并作为当前作用域对象（$rootScope）的属性

​       {{}}（表达式）：显示数据，从当前作用域对象的指定属性名上取

## angularjs表达式和语句

  1.表达式：通常有一个返回值，可以放在任何需要值的地方

​       比如，函数调用的参数，一个变量名，一个运算

  2.语句：通常表示一个完整的执行单位，一段完整的js可执行的代码

​      有的语句也可以用表达式来执行，叫做表达式语句

  3.区别：语句使用封号结尾，有些语句我们没有加封号

​      比如：console.log()虽然没有封号，但也是语句

​      js引擎在解析代码的时候会自动加上封号



## angularjs 双向数据绑定

学双向数据绑定之前，你得先了解数据绑定

### 数据绑定

- 数据绑定：数据从一个地方A转移（传递）到另一个地方B,而且这个操作由框架来完成

这里的框架就是angularjs

数据从a到b

我们这里的a就好比是我们的页面

而b就是我们的内存

一旦数据可以从a自动流向内存，那么就实现了我们的数据绑定

### 双向数据绑定

- 双向数据绑定：数据可以从View（视图层）流向Model（模型），也可以从Model流向View

  - 视图层----》页面
  - Model---》数据层
  - 说白了我们的数据可以在页面和内存之间来回往返

  

  视图（View）：也就是我们的页面（主要是Angular指令和表达式）

​       模型（Model）：作用域对象（当前为$rootScope）,他可以包含一些属性或方法

> 什么是对象？什么是函数？

​       当改变view中的数据，Model对象的对应属性也会随之改变：ng-model指令 数据从View==》Model

​       当Model域对象的属性发生改变时，页面对应数据随之更新：{{}}表达式 数据从Model==》View

​       ng-model是双向数据绑定，而{{}}是单向数据绑定



