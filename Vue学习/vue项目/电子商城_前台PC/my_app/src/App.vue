<template>
  <div>
    <Header></Header>
    <router-view/>
  </div>
  
</template>
<script>
// 引入组件Header
import Header from "./components/Header"
export default{
  name:'App',
  components:{
    Header
  }
}
</script>

<style lang='less' scoped>
</style>
