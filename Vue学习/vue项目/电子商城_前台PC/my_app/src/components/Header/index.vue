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