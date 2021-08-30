<template>
  <div>
    <Header></Header>
    <router-view/>
    <Footer></Footer>
  </div>
  
</template>
<script>
// 引入组件Header
import Header from "./components/Header"
//引入组件Footer
import Footer from './components/Footer'
export default{
  name:'App',
  components:{
    Header,
    Footer,
  }
}
</script>

<style lang='less' scoped>
</style>
