<template>
  <div>
    <h1>{{ msg }}</h1>
    <foot-guide></foot-guide>
  </div>
</template>

<script>
  import FootGuide from '../../components/footer/FootGuide'

  export default {
    name: 'Home',
    data () {
      return {
        msg: '我的药箱'
      }
    },
    components:{
      FootGuide
    }
  }
</script>

<style lang="scss" type="text/scss">

</style>
