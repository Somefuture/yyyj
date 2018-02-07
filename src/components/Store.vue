<template>
  <div>
    <h3>精品商城</h3>
    <h5 @click="go({path:'/home'})">去首页</h5>
  </div>
</template>

<script>
  export default {
    name:'Store',
    data(){
      return {
        msg:'欢迎进入精品商城'
      }
    },
    methods:{
      go(path){
        this.$router.push(path)
      }
    }
  }
</script>
