import Vue from 'vue'
import VueRouter from 'vue-router'


import MSite from '../pages/MSite/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'



Vue.use(VueRouter)


export default new VueRouter({
	routes:[
		{
			path:'/msite',
			component: MSite
		},
		{
			path:'/search',
			component:Search
		},
		{
			path:'/order',
			component:Order
		},
		{
			path:'/profile',
			component:Profile
		},
		{
			path:'/',
			redirect:'/msite'  //路由的重定向是什么意思？
		},
		{
			path:'/login',
			component: Login
		},
		
		
	]
})
