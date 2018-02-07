<template>
  <div>
    <h1>主页 </h1>
    <h4>{{ msg }}</h4>
    <ul>
      <li class="active">主页</li>
      <li @click="go({path:'/store'})">商城</li>
      <li @click="go({path:'/shopping'})">购物车</li>
      <li @click="go({path:'/personal'})">个人中心</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data () {
      return {
        msg: 'Welcome to HomePage'
      }
    },
    methods:{
      go(path){
        this.$router.push(path)
      }
    }
  }
</script>
<!--todo 取消sass报错提醒
-->
<style lang="scss" scoped>
  ul{
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size:0;
    li{
      float: left;
      font-size: 16px;
      height: 60px;
      line-height: 60px;
      width: 25%;
      background: whitesmoke;
      color:yellowgreen;
    }
    li.active{
      background: yellowgreen;
      color: #8d363b;
    }
    li:hover{
      background: #dee332;
      color: #8d363b;
    }
  }
</style>
