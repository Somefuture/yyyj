<template>
  <div>
    <h3>登录页</h3>
    <h5 @click="go({path:'/home'})">去首页</h5>
  </div>
</template>

<script>
  export default {
    name: 'Login',
    data () {
      return {

      }
    },
    methods:{
      go(path){
        this.$router.push(path)
      }
    }
  }
</script>
