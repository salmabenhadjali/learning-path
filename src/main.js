import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import MyComponent from './ComponentsRegister/MyComponent.vue'

// define globally a component
// Vue.component('my-component', MyComponent)

// An eventBus to communnicae between parennts and children and siblings
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('changeUserAge', age)
    },
  },
})

new Vue({
  router,
  store,
  render: f => f(App),
}).$mount('#app')
