<template>
  <div>
    <h1>{{ msg }}</h1>
    <div>
      <foot-guide></foot-guide>
    </div>
  </div>
</template>

<script>
  import FootGuide from '../../components/footer/FootGuide'

  export default {
    name: 'Home',
    data () {
      return {
        msg: '个人中心'
      }
    },
    components:{
      FootGuide
    }
  }
</script>

<style lang="scss" type="text/scss">

</style>
