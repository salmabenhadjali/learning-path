import Vue from 'vue'
import App from './App.vue'
import MyComponent from './ComponentsRegister/MyComponent.vue'

// define globally a component
// Vue.component('my-component', MyComponent)

new Vue({
  render: f => f(App),
}).$mount('#app')
