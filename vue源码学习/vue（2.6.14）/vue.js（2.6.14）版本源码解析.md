# 2021-08-06

## 前提：

这个版本的源码生啃的解析的主要动力来源，是因为我在掘金上面看到，有个大哥在一年前发布的一篇源码的生啃技术贴，直呼666啊。太给力了，活生生的就啃完了。

想着，既然有人拥有这样的毅力，那为什么，我不能尼？所以就开始了这样的进程

这里，我是跟着大佬的脚步进行的源码解析。

:bell:  [点击此处跳转大佬原文章地址哦](https://juejin.cn/post/6846687602679119885)

在这里，我发现，大佬在给我们的源码的链接中，版本号是`2.6.14`，大佬说的是自己生啃的源码的版本是`2.6.11`，但是在我对两个版本进行对比之后，发现，大佬其实讲的版本是`2.6.14`,所以，接下来我们就开始吧。冲冲冲》》》

## 相关链接

首先更新的内容是git上面的，再是我们的博客上面的内容。会码云的可以直接拉取代码，进行学习哦。里面的 《vue.js（2.6.14）版本源码解析》跟本文是同一篇文章哈。

:black_nib: [我的git资源链接](https://gitee.com/zhousujuan/full-stack-front-end-learning.git)：
里面包含原版vue（v2.6.14）源码、注释过的代码和本文的md文档等资源

## 正文

### 第1~10行（6-10）

前面的是注释内容，

讲解一些代码的版本号等问题，

所以我们直接从第6行这里开始我们的源码学习

**源码：**

```js
//init
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Vue = factory());
  }(this, function () { 'use strict';
                       /*
                       此部分省略核心代码
                       下面的添加的括号是为了保持代码的前后括号的完整性
                       */  
                       
          }
    )
 );
```

我们这里的function里面的内容，运用的是三元表达式，可以变形为以下代码：

```js
if(typeof exports === 'object' && typeof moudle!=='undefined'){//检查CommonJS
            moudle.exports=factory()
        }else{
            if(typeof define==='function'&&define.amd){//AMD异步模块定义，检查JavaScript依赖管理库
            define(factory)
        }else{
            (global=global||self,global.Vue=factory());
        }
```

等价于以下代码：

```js
/*factory()是个匿名函数，
  该函数并没有自执行
  设计参数window，并传入window对象，不会污染全局变量，也不会被别的代码污染
*/        
window.Vue.factory()
```



### 第11~14行（14行）

其他的部分是空行，只有单独的14行是有用的

```JS
//工具代码
//冻结的对象无法再更改
var emptyObject = Object.freeze({});
```

**相关知识点引用链接：**[Object.freeze()方法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)

- 官网demo：

```js
<script>
       const obj={
           prop:42
       };

       Object.freeze(obj);

       obj.prop=33;//在严格模式下抛出错误
       /*
        Object.freeze() 方法可以冻结一个对象。
        一个被冻结的对象再也不能被修改；
        冻结了一个对象则不能向这个对象添加新的属性，
        不能删除已有属性，
        不能修改该对象已有属性的可枚举性、可配置性、可写性，
        以及不能修改已有属性的值。
        此外，冻结一个对象后该对象的原型也不能被修改。
        freeze() 返回和传入的参数相同的对象。
       */
       console.log(obj.prop);//预计输出: 42
    </script>
```

- 语法：

```js
Object.freeze(obj)
```

- 参数

obj要被冻结的对象

- 返回值

被冻结的对象

### 第15~111行

下面的函数是封装用来判断基本类型、引用类型、类型转换等的方法

```js
    // These helpers produce better VM code in JS engines due to their
    // explicitness and function inlining.
    //上面两行英文翻译：这些帮助器由于其明确性和内联功能，在JS引擎中产生了更好的VM代码。
    
    //下面的函数是封装用来判断基本类型、引用类型、类型转换的方法

    function isUndef (v) {//判断是否未定义
      return v === undefined || v === null
    }
  
    function isDef (v) {//判断是否已定义
      return v !== undefined && v !== null
    }
  
    function isTrue (v) {//判断是否为true
      return v === true
    }
  
    function isFalse (v) {//判断是否为false
      return v === false
    }
  
    /**
     * Check if value is primitive.
     * 翻译：检查值是否为原始值。
     */
    function isPrimitive (value) {//判断为原始类型
      return (
        typeof value === 'string' ||
        typeof value === 'number' ||
        // $flow-disable-line
        typeof value === 'symbol' ||
        typeof value === 'boolean'
      )
    }
  
    /**
     * Quick object check - this is primarily used to tell
     * Objects from primitive values when we know the value
     * is a JSON-compliant type.
     * 
     * 百度翻译：检查值是否为基元。
     * 快速对象检查-当我们知道值是符合JSON的类型时，
     * 这主要用于从基元值中区分对象。
     */
    function isObject (obj) {//判断为obj
      return obj !== null && typeof obj === 'object'
    }
  
    /**
     * Get the raw type string of a value, e.g., [object Object].
     * 百度翻译：获取值的原始类型字符串，例如：[object Object].
     */
    var _toString = Object.prototype.toString;
    /*
      Object.prototype.toString()
      toString() 方法返回一个表示该对象的字符串。
    */
  
    function toRawType (value) {
      //切割引用类型得到后面的基本类型，
      //例如：[object RegExp] 得到的就是 RegExp
      return _toString.call(value).slice(8, -1)
    }
  
    /**
     * Strict object type check. Only returns true
     * for plain JavaScript objects.
     * 翻译：严格的对象类型检查。仅对普通JavaScript对象返回true。
     */
    function isPlainObject (obj) {
      //判断纯粹的对象："纯粹的对象"，
      //就是通过 { }、new Object()、Object.create(null) 创建的对象
      return _toString.call(obj) === '[object Object]'
    }
  
    function isRegExp (v) {
      //判断原生引用类型
      return _toString.call(v) === '[object RegExp]'
    }
  
    /**
     * Check if val is a valid array index.
     翻译：检查val是否是有效的数组索引。
     */
    function isValidArrayIndex (val) {
      // 检查val是否是一个有效的数组索引，
      //其实就是验证是否是一个非无穷大的正整数
      var n = parseFloat(String(val));
      return n >= 0 && Math.floor(n) === n && isFinite(val)
    }
  
    function isPromise (val) {
      //判断是否是Promise
      return (
        isDef(val) &&
        typeof val.then === 'function' &&
        typeof val.catch === 'function'
      )
    }
  
    /**
     * Convert a value to a string that is actually rendered.
     翻译：将值转换为实际呈现的字符串。
     */
    function toString (val) {
      //类型转换成String
      return val == null
        ? ''
        : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
          ? JSON.stringify(val, null, 2)
          : String(val)
    }
  
    /**
     * Convert an input value to a number for persistence.
     * If the conversion fails, return original string.
     翻译：翻译：制作一个映射并返回一个函数，用于检查该映射中是否有键。
     */
    function toNumber (val) {
      //类型转换为Number
      var n = parseFloat(val);
      return isNaN(n) ? val : n
    }
```

