<template>
  <div id="app">
    <div>
    	<router-view/> <!--是一个占位符，用来装当前的组件。-->
    	<FooterGuide v-show="$route.meta.showFooter"/> <!--加一个判断，看是否显示底部-->
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
