# AngularJS

## 是什么

- Google开源的前端JS结构化框架
  - https://angularjs.org/
  - 官网
- 特性和优点
  - 双向数据绑定
  - 声明式依赖注入
  - 解耦应用逻辑，数据模型和视图
    - 解耦
    - 解耦性：针对的是==》它的耦合度
    - 耦合度：个体与个体的关系是否密切，越密切，耦合度越高
    - 开发过程中，一直追求的是低耦合度（为了避免牵一发而动全身）
  - 完善的页面指令
  - 定制表单验证
  - Ajax封装
- 与jQuery的比较
  - jQuery
    - js函数库
    - 封装简化dom操作
- 能做什么项目

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



## 作用域与控制器

- 作用域对象：
  - 一个js实力对象，ng-app指令，默认会常见一个根作用域对象（$rootScope）
  - 它的属相和方法与页面中的指令或表达式是关联的

- 控制器
  - 用来控制angularjs应用数据的实例对象
  - ng-controller：指定控制器构造函数，Angular会自动new此函数创建控制器对象
  - 同时Angular还有创建一个新的作用域对象$scope,它是$rootScope的子对象
  - 在控制器函数中声明$scope形参，Angualr会自动将$scope对象传入

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
    <!-- 
        1.作用域对象：
            一个js实力对象，ng-app指令，默认会常见一个根作用域对象（$rootScope）
            它的属相和方法与页面中的指令或表达式是关联的

        2.控制器对象
            用来控制angularjs应用数据的 实例对象
            ng-controller：指定控制器构造函数，Angular会自动new此函数创建控制器对象
            同时Angular还有创建一个新的作用域对象$scope,它是$rootScope的子对象
            在控制器函数中声明$scope形参，Angualr会自动将$scope对象传入
     -->

     <div ng-controller="MyController">
        <input type="text" ng-model="firstName">
        <input type="text" ng-model="lastName">
        <p>输入的姓名为：{{firstName + '-' +lastName}}</p>
        <p>输入的姓名1为：{{getName()}}</p>
     </div>
     
     <!-- 引入angularjs -->
     <script src="http://code.angularjs.org/1.2.25/angular.min.js"></script>
     <script type="text/javascript">
        function MyController($scope){//形参必须是$scope
            console.log($scope)
            $scope.firstName="zhou"
            $scope.lastName="sujuan"
            $scope.getName=function(){
                return $scope.firstName+' '+$scope.lastName
            }
        }
     </script>
</body>
</html>
```

> 这里的内容是大概知道了，但是在我本地的电脑里面，也不知道为什么不能够，成功的运行出来，后面还需要自己及时的处理这个问题。

问题解决===>

> 在家里面的自己的电脑里面，不能正常的运行出来，但是今天在公司的电脑上面，可以正常的运行出来，说明是家里面的电脑的问题，不是自己代码的原因，在代码成功运行之后，还进行了代码的优化处理（样式的优化，添加空格，方便后期的美观）

问题解决===》

> 今天晚上回家的时候，发现自己的代码，在本地也能正常运行了，具体的原因我也不太清除，反正是实现了代码的正常运行，看来，应该是昨天的电脑，并没有反应过来===》**加强对电脑的认识**

## 依赖注入

### 依赖对象

完成某个特定的功能需要某个对象才能实现，这个对象就是依赖对象

### 依赖注入

- 依赖的对象以形参的形式被注入进来使用，这种方式就是**声明式**依赖注入

#### 开发的两种方式：

需求：将数组的每一项值+10输出

1. ##### 声明式

   1. 更加注重的是执行的结果
   2. 只要拿到结果，就可以
   3. 声明式是对命令式的局部包装
   4. 像考试的选择填空题

2. ##### 命令式

   1. 更加注重的是执行的过程
   2. 要根据我的命令来，一步一步的来
   3. 像考试的解答题

- angular的"$scope"对象就是依赖对象，并且是依赖注入的形式进行使用
- ！！！形参必须是特定的名称，否则angular无法注入抛出异常

### 例子

- 回调函数的event就是依赖对象
- 回调函数有形参就是依赖注入

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>依赖注入</title>
    <!-- 引入angularjs -->
    <script type="text/javascript" src="http://apps.bdimg.com/libs/angular.js/1.4.6/angular.min.js"></script>
</head>
<body>
    <!-- 
        依赖对象：完成某个特定的功能需要某个对象才能实现，这个对象就是依赖对象
        依赖注入：依赖的对象以形参的形式被注入进来使用，这种方式就是声明式依赖注入
        angular的"$scope"对象就是依赖对象，并且是依赖注入的形式进行使用
        ！！！形参必须是特定的名称，否则angular无法注入抛出异常

        回调函数的event就是依赖对象
        回调函数有形参就是依赖注入
     -->

     <button id="btn">click</button>
     <script>
         window.onload=function(){
             document.getElementById("btn").onclick=function(event){
                alert(event.clientX)
             }
         }
     </script>

     <script>
         var arr=[1,2,3,4,5]
         var newArr=[]
         //命令式
         for(var i=0;i<arr.length;i++){
             var value=arr[i]+10
            newArr.push(value)
         }
         console.log(newArr)
        //  声明式
        let newArr1=arr.map(function(item,index){
            // console.log(item,index)
            return item+10
        })
        
        console.log(newArr1)

     </script>
</body>
</html>
```

