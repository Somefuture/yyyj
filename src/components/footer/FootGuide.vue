<template>
  <div>
    <ul>
      <li :class="$route.path.indexOf('/home') !== -1? 'active' : ' '"  @click="go({path:'/home'})">首页</li>
      <li :class="$route.path.indexOf('/mall') !== -1? 'active' : ' '" @click="go({path:'/mall'})">精品商城</li>
      <li :class="$route.path.indexOf('/shopping') !== -1? 'active' : ' '" @click="go({path:'/shopping'})">我的药箱</li>
      <li :class="$route.path.indexOf('/personal') !== -1? 'active' : ' '" @click="go({path:'/personal'})">个人中心</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'FooterGuide',
    data () {
      return{

      }
    },
    methods:{
      go(path){
        this.$router.push(path)
      }
    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
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
      color: whitesmoke;
    }
  }
</style>
