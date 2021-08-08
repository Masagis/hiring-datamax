import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import IncrementDecrementNumber from '../components/IncrementDecrementNumber.vue'
import CountdownTimer from '../components/CountdownTimer.vue'
import CardUsers from '../components/ListUser.vue'

Vue.use(VueRouter)
const routes = [
	{
		path: '/',
		component: Home,
	},
	{
		path: '/number',
		component: IncrementDecrementNumber,
	},
	{
		path: '/timer',
		component: CountdownTimer,
	},
	{
		path: '/card-users',
		component: CardUsers,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
