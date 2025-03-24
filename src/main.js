import Vue from 'vue'
import App from './App/App.vue'
import Conditionals from './Conditionals/Conditionals.vue'
import Game from './Game/Game.vue'
import Lifecycle from './Lifecycle/Lifecycle.vue'

new Vue({
  render: h => h(Lifecycle),
}).$mount('#app')
