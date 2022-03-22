<template>
  <div class="footer">
      <!-- 上面部分 -->
      <div class="footer-top">
          <ul class="footer-top-nav">
              <li>
                  <dt>购物指南</dt>
                  <dd>购物流程</dd></dd>
                  <dd>会员介绍</dd>
                  <dd>生活旅行</dd>
                  <dd>常见问题</dd>
                  <dd>联系客服</dd>
              </li>
              <li>
                  <dt>配送方式</dt></dt>
                  <dd>上门自提</dd>
                  <dd>211限时达</dd>
                  <dd>配送服务查询</dd>
                  <dd>配送费收取标准</dd>
                  <dd>海外配送</dd>
              </li>
              <li>
                  <dt>支付方式</dt>
                  <dd>货到付款</dd>
                  <dd>在线支付</dd>
                  <dd>分期付款</dd>
                  <dd>公司转账</dd>
              </li>
              <li>
                  <dt>售后服务</dt>
                  <dd>售后政策</dd>
                  <dd>价格保护</dd>
                  <dd>退款说明</dd>
                  <dd>返修/退换货</dd>
                  <dd>取消订单</dd>
              </li>
              <li>
                  <dt>特色服务</dt>
                  <dd>夺宝岛</dd>
                  <dd>DIY装机</dd>
                  <dd>延保服务</dd>
              </li>
              <li>
                  <dt>帮助中心</dt>
                  <dd></dd>
              </li>
          </ul>
      </div>
      <!-- 下面部分 -->
      <div class="footer-bottom">
          <ul class="footer-bottom-nav">
              <li>
                  <router-link to="###">关于我们</router-link>
              </li>
              <li>
                  <router-link to="###">联系我们</router-link>
              </li>
              <li>
                  <router-link to="###">联系客服</router-link>
              </li>
              <li>
                  <router-link to="###">合作招商</router-link></router-link>
              </li>
              <li>
                  <router-link to="###">商家帮助</router-link>
              </li>
              <li>
                  <router-link to="###">营销中心</router-link>
              </li>
              <li>
                  <router-link to="###">友情链接</router-link>
              </li>
              <li>
                  <router-link to="###">隐私政策</router-link>
              </li>  
          </ul>
          <span>design by zhousujuan</span>
      </div>
  </div>
</template>
<script>
export default {
    name:"Footer",
}
</script>

<style lang="less" scoped>
    .footer{
        background-color: #eaeaea;
        color: #000;
        padding-top:10px;
    }
    .footer-top{
        margin:20px 0px;
    }
    .footer-top-nav{
        display: flex;
        justify-content: space-around;
        margin:20px 0px;
        li{
            dt{
                font-weight: bold;
            }
            padding-right:10px ;
            margin-right: 10px;
        }
    }
    .footer-bottom-nav{
        display: flex;
        justify-content: center;
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
    
</style>