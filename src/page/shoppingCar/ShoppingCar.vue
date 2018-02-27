<template>
  <div>
    <home-head :title="title"></home-head>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import FootGuide from '@/components/footer/FootGuide'
  import HomeHead from '@/components/header/HomeHead'

  export default {
    name: 'Home',
    data () {
      return {
        title: '我的药箱'
      }
    },
    components:{
      FootGuide,
      HomeHead
    }
  }
</script>

<style lang="scss" type="text/scss">

</style>
