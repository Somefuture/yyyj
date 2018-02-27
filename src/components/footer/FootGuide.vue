<template>
  <div>
    <ul class="nav ec-footer">
      <li :class="$route.path==='/home'? 'active' : ' '"  @click="go({path:'/home'})">首页</li>
      <li :class="$route.path==='/mall'? 'active' : ' '" @click="go({path:'/mall'})">精品商城</li>
      <li :class="$route.path==='/shopping'? 'active' : ' '" @click="go({path:'/shopping'})">我的药箱</li>
      <li :class="$route.path==='/personal'? 'active' : ' '" @click="go({path:'/personal'})">个人中心</li>
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
