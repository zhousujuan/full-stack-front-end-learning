我们这个项目的样式是仿照京东的界面进行搭建的，然后数据是用的自己后台模拟的

然后具体的样式没有用elementUI，基本上是纯手工搭建，为了锻炼一下，最近这个对静态界面的编码的能力，有点生疏了

# 基本介绍

首页、搜索界面、商品详情界面、购物车界面、支付相关界面、订单界面、登录注册界面等

使用

**vue全家桶**

+**ES6**（用的语法）

+**webpack**（构建工具用的是vue的脚手架，脚手架里面用的webpack，eslint、babel等工具）

+Axios（发送请求）等技术进行开发

采用模块化、组件化、工程化的模式开发



## API接口

![image-20210624211746255](C:\Users\juan~er\AppData\Roaming\Typora\typora-user-images\image-20210624211746255.png)

### API/接口

前后台交互的那个请求地址，就是那个接口/API

接口像是一个往外的一个管道，我们的服务器对外是默认不可见的，它是一个黑盒子，我们什么也看不到，我们想访问服务器中的服务，那么我们服务器就是一个向外到的管道，让我们可以访问，而这个管道就是这个接口，它提供这个接口，让我们可以访问服务器里面的东西

比如说：

​	我们的登录，我们要进行登录的话，我们就要访问我们服务器端的登录接口，由服务器来告诉我，到底是登录成功还是失败，因为我们的服务器会给我们一个响应，

所以接口，简单来讲，就是访问服务器的一个方式，这个方式其实就是这个请求地址，通过这个请求地址，就可以访问这个服务器里面的内容，一些指定的服务了，但是只有这个地址，我们能不能百分百知道怎么访问服务器尼？

还需要什么？

还需要：

请求的方式

- get

- post

请求的参数
-比如说，登录，我们得输入用户名和密码，你不输入的话，是不会成功的
-请求的参数，关键的是参数的名字，名字是不能更改的，所以我们在参数的命名的时候，不要随便改动名字，因为名字不是随便取的，是我们的接口文档，叫什么就取什么名字，
-请求参数的个数是固定的，它请求几个我们就写几个，而且名字不能更改（参数的值要和含义保存一致）

所以这样一个东西，我们称之为接口，包括请求地址、请求参数、请求方式、响应的返回值等情况，所有的东西杂合在一起，我们称之为是一个接口，

但是如果，这样记的话，就会很麻烦，所以，

简单来说，接口 就是访问服务器的一个地址



### 接口文档

由多个接口组成的一个文件，我们称之为**接口文档**

这个文件可能是markdown文件，可能是word文件，其他的文件也没关系，

还可能是网页上的一个网址，

### 对/调/测接口

postman工具

我们开发的项目的时候，会给我们一个文档，分配项目的需求
第一件事，首先要测试一下我们的接口，看一下是否描述正确



测试接口，可能需要一天或者好几天都可能，因为测完接口，有问题的话，要跟服务端进行反馈，

####　怎么测试接口

- 安装工具：postman
- 注册问题：

可以进行注册也可不注册，如果注册的话，它会保存我们的记录，如果我们在另外一台设备上登录的时候也会有我们的操作记录

- 进行测试：

1.点击加号

![image-20210624221401346](C:\Users\juan~er\AppData\Roaming\Typora\typora-user-images\image-20210624221401346.png)

2.出现一个密码

![image-20210624221447071](C:\Users\juan~er\AppData\Roaming\Typora\typora-user-images\image-20210624221447071.png)

3.找到我们的接口文档：api文档.doc

- 登录测试

![image-20210624222018436](C:\Users\juan~er\AppData\Roaming\Typora\typora-user-images\image-20210624222018436.png)

params里面放的是get请求的查询字符串操作

body里面放post请求的body参数

## 项目初始化

初始化一个项目，搭建脚手架，选择相关配置

- 创建一个新项目

> 命令：vue create  项目名字

等待，下载

- 选择相关配置

![image-20210820131909582](D:\我的GitHub\前端全栈学习\full-stack-front-end-learning\Vue学习\vue项目\电子商城_前台PC\images\项目配置选择.PNG)

这里选择，第一个就可以了，我们使用vue2来进行开发

直接回车，等待下载

下载成功，如果需要运行我们的项目，根据终端的提示，就可以直接在本地运行我们的项目

## git管理

设置忽略文件，`.gitignore`

```
.DS_Store
node_modules
/dist


# local env files
.env.local
.env.*.local

# Log files
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# Editor directories and files
.idea
.vscode
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## 路由配置

下载vue-router

第一件事情。先搭建路由。

初始化里面的项目里面基本都搭建好了我们的基本配置，我们的的任务就是把里面的配置项改成我们自己需要的配置项



更改之前，我们先创建一些组件



我们先实现四个路由，分别是首页、搜索、登录和注册，其他的后面再说

![image-20210626104029043](C:\Users\juan~er\AppData\Roaming\Typora\typora-user-images\image-20210626104029043.png)

进行路由 配置

router/index.js

```
import Vue from 'vue'
import VueRouter from 'vue-router'

/*引入组件 */
import Home from '../views/Home' 
import Login from '../views/Login'
import Search from '../views/Search'
import Register from '../views/Register'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

```

在app.vue

```
<template>
  <router-view/>
</template>

<style lang="less">

</style>

```



main.js

```
import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

```

## 首页部分

完成首页相关的东西，写路由组件，我们要完成的首先是进行路由组件的拆分，不能把所有的内容都写在一个组件当中，这样的话，代码就会太多了，



一般开发一个项目，头部就会拆分成一个组件，

而且我们的头部的组件可以复用的，以后的其他的页面也有可能会用到



除了我们的头部的内容会复用，我们的底部的内容也会复用



所以我们的头部和底部要抽取出来



可复用的组件我们定义在我们的component文件夹里面

在写位置的时候，我们尽量不用浮动，使用flex布局去实现我们的效果

### 完成Header静态组件

header是我们的公共组件，一般定义在components里面

新建components/Header/index.vue

一般我我们写代码，都是先写结构在写样式，

这里因为是vue2，所以我们需要在template里面加一个div的根标签

这里的跳转我们用`<router-link>`

样式用less==》下载指令：`npm i less`

写less不建议套多层

套着写的话，为了加权重

所以，我们主要加权重的话，就可以套着写，不需要的话，就不用套着写

为了追求性能，尽量性能好一点是一点

```vue
<template>
  <div class="header">
      <div class="header-top">
          <span class="header-user">zhou欢迎您！请
              <router-link to="/login" class="header-user-login"> 登录</router-link>
              <router-link to="/register">免费注册</router-link>
          </span>

          <ul class="header-nav">
              <li><router-link to="/">我的订单</router-link></li>
              <li><router-link to="/">我的购物车</router-link></li>
              <li><router-link to="/">我的zhou</router-link></li>
              <li><router-link to="/">zhou会员</router-link></li>
              <li><router-link to="/">企业采购</router-link></li>
              <li><router-link to="/">关注zhou</router-link></li>
              <li><router-link to="/">合作招商</router-link></li>
              <li><router-link to="/">商家后台</router-link></li>
          </ul>
      </div>
      <div class="header-bottom">
          <router-link to='/' class="header-logo-link">
              <img src="./logo.png" alt="logo" class="header-logo"/>
              <div class='logo-text'>
                  <span class="text-top">周周</span>
                  <span class="text-bottom">Shopping</span>
              </div>
              
          </router-link>

          <form class="header-form">
              <input type="text"/>
              <button>搜索</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
    .header{
        // height: 100px;
        a{
        color: #333;
        }
    }
    .header-top{
        display: flex;
        justify-content: space-between;
        background-color: #eaeaea;
        padding: 10px 20px;
    }
    .header-nav{
        display: flex;
        li{
            border-right:1px solid #000;
            padding-right:10px ;
            margin-right: 10px;
            &:last-child{
                border: none;
                padding: 0;
                margin: 0;
            }
        }
    }
    .header-user-login{
        border-right:1px solid #000;
        padding-right:8px ;
        margin-right: 8px;
    }
    
    //头部的底部的样式
    .header-bottom{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        // background-color: aqua;//开发过程中，用来调试的
    }
    //底部左边的logo样式
    .header-logo-link{
        display: flex;
        justify-content: start;
        align-items: center;
        div{
            margin: 10px 0px 0px 5px;
            
            span{
                margin: 2px 10px;
                display: block;
                color: #d81e06;
                font-style: italic;
                // font: 14px "arial";
                
            }
            .text-top{
                font:24px "隶书";
            }
        }
    }
    .header-logo{
        width:80px;
        height: 60px;
    }
    //右边搜索框的样式
    .header-form{
        display: flex;
        input{
            display: block;
            border: 1px solid #d81e06;
            //为了让光标和现在的输入框有一定的间隔（靠右一点）
            padding:0 5px;
            width: 500px;
            height: 30px;
            //让右边的点击的按钮，和现在的input的输入框一样的高度
            box-sizing: border-box;
            //点击的时候，不出现黑边框
            outline: none;
            //原来的点击进去的标识（光标）的大小，不够，希望它变得大一点
            //调节字体的大小
            font-size: 18px;
        }
        button{
            display: block;
            border: none;
            background-color: #d81e06;
            color: #fff;
            width: 80px;
            height: 30px;
            box-sizing: border-box;
            font-size: 14px;
            //button的样式设置好之后没有对齐
            /*
            将这两个的样式设置为block
            再将它们的父元素设置为flex
            */

        }
    }
</style>
```

#### 定义了一个公共组件了之后，在哪里使用，怎么用？

因为是一个公共组件，不仅仅只有一个组件会用到，所以我们应该写在App.vue中

App就是一上来就要加载的，

> 报错：Failed to resolve loader: less-loader
>
> 解決：没有下载less依赖，下载依赖npm i less
>
> ==>还是报错，这里npm i less-loader,下载报错
>
> 换用yarn add less-loader，下载报错
>
> ==》是因为当前的powershell终端不适用，换成cmd
>
> 命令npm i less-loader,下载报错
>
> ，换成yarn add ，下载成功



> 还是无法正常运行，报错：Syntax Error: TypeError: this.getOptions is not a function
>
> 解决：问题是因为我的less-loader的版本太高
>
> 重新安装，7版本
>
> 卸载npm uninstall
>
> 安装npm install 

解决完成，成功运行

---

因为我们的浏览器，都会存在一些默认样式，所以，我们在编写界面的代码的时候，一般都会讲我们的样式进行重置，重置的代码，我们一般在开源的网站上都可以找的到，reset.css

```
/* 清除内外边距 */
body, h1, h2, h3, h4, h5, h6, hr, p, blockquote,
dl, dt, dd, ul, ol, li,
pre,
fieldset, lengend, button, input, textarea,
th, td {
    margin: 0;
    padding: 0;
}

/* 设置默认字体 */
body,
button, input, select, textarea { /* for ie */
    /*font: 12px/1 Tahoma, Helvetica, Arial, "宋体", sans-serif;*/
    font: 12px/1.3 "Microsoft YaHei",Tahoma, Helvetica, Arial, "\5b8b\4f53", sans-serif; /* 用 ascii 字符表示，使得在任何编码下都无问题 */
    color: #333;
}


h1 { font-size: 18px; /* 18px / 12px = 1.5 */ }
h2 { font-size: 16px; }
h3 { font-size: 14px; }
h4, h5, h6 { font-size: 100%; }

address, cite, dfn, em, var, i{ font-style: normal; } /* 将斜体扶正 */
b, strong{ font-weight: normal; } /* 将粗体扶细 */
code, kbd, pre, samp, tt { font-family: "Courier New", Courier, monospace; } /* 统一等宽字体 */
small { font-size: 12px; } /* 小于 12px 的中文很难阅读，让 small 正常化 */

/* 重置列表元素 */
ul, ol { list-style: none; }

/* 重置文本格式元素 */
a { text-decoration: none; color: #666;}


/* 重置表单元素 */
legend { color: #000; } /* for ie6 */
fieldset, img { border: none; }
button, input, select, textarea {
    font-size: 100%; /* 使得表单元素在 ie 下能继承字体大小 */
}

/* 重置表格元素 */
table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* 重置 hr */
hr {
    border: none;
    height: 1px;
}
.clearFix::after{
	content:"";
	display: block;
	clear:both;
}
/* 让非ie浏览器默认也显示垂直滚动条，防止因滚动条引起的闪烁 */
html { overflow-y: scroll; }

a:link:hover{
    color : rgb(79, 76, 212) !important;
    text-decoration: underline;
}

/* 清除浮动 */
.clearfix::after {
    display: block;
    height: 0;
    content: "";
    clear: both;
    visibility: hidden;
}
```

在src下面，创建一个/styles

将我们的重置的样式，放置里面

然后，我们需要在main中进行引入

#### Header的路由跳转方式

我们的路由跳转方式有几种？
两种

- 路由链接跳转
  - 用的是`<router-link>`

- 编程式导航
  - 



我们这里的搜索的按钮，点击过去，进入到的应该是我们的搜索路由，所以，我们这里应该用到的路由跳转是：编程式导航



首先，我们这里的button，要绑定点击事件

form表单也可以绑定@submit事件，这里的submit事件要记得阻止默认行为(.prevent)，不然会刷新

```
@submit.prevent="toSearch"
```



使用编程式导航

```js
methods:{
        toSearch(){
            this.$router.history.push('/search')
        }
    }
```



### 完成Footer组件

#### 静态样式

根据样式要求，完成footer的静态样式，

> 报错：`Parsing error: x-invalid-end-tag  vue/no-parsing-error`
>
> 原因：
>
> View将标签渲染为原生html标签时，由于这些标签是自闭合的，所以有end标签会报错。
>
> 解决：
>
> 文件/首选项/设置
>
> 在上面的搜索栏输入：vetur.validation.template
>
> 取消勾选
>
> ==》第一次解决了
>
> 但是，并没有成功解决问题
>
> 方法二：
>
> 

