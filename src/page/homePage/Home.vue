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
        title:'健康，才是一辈子的事业'
      }
    },
    components:{
      FootGuide,
      HomeHead
    }
  }
</script>
