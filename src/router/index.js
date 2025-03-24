import Vue from 'vue'

import Start from '../Start/Start.vue'
import Conditionals from '../Conditionals/Conditionals.vue'
import Game from '../Game/Game.vue'
import Lifecycle from '../Lifecycle/Lifecycle.vue'
import ComponentsRegister from '../ComponentsRegister/ComponentsRegister.vue'
import User from '../components/User/User.vue'
import Quote from '../Quote/Quote.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Start },
  { path: '/condtionals', name: 'Condtionals', component: Conditionals },
  { path: '/game', name: 'Game', component: Game },
  { path: '/lifecycle', name: 'Lifecycle', component: Lifecycle },
  {
    path: '/register',
    name: 'Components Register',
    component: ComponentsRegister,
  },
  { path: '/user', name: 'Parent Child', component: User },
  { path: '/quote', name: 'Quote', component: Quote },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
