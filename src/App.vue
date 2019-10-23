<template>
  <div id="app">
    <div>
    	<router-view/> <!--是一个占位符，用来装当前的组件。-->
    	<FooterGuide/>
    </div>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide.vue'

export default {
  name: 'app',
  components: {
    FooterGuide
  }
}
</script>

<style lang ="stylus" rel="stylesheet/stylus">
#app
	color:red
</style>
