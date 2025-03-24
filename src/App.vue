<template>
  <div class="container">
    <button @click="selectedComponent = 'appGame'">Game</button>
    <button @click="selectedComponent = 'app-init'">Init</button>
    <button @click="selectedComponent = 'Conditionals'">Conditionals</button>
    <button @click="selectedComponent = 'app-lifecycle'">Lifecycle</button>
    <button @click="selectedComponent = 'app-components-register'">
      Components Register
    </button>
    <button @click="selectedComponent = 'appUser'">App User</button>
    <button @click="selectedComponent = 'app-quote'">Quoter</button>
    <div class="row">
      <div class="col-xs-2">
        <keep-alive>
          <component :is="selectedComponent"></component>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>
import Start from './Start/Start.vue'
import Conditionals from './Conditionals/Conditionals.vue'
import Game from './Game/Game.vue'
import Lifecycle from './Lifecycle/Lifecycle.vue'
import ComponentsRegister from './ComponentsRegister/ComponentsRegister.vue'
import MyComponent from './ComponentsRegister/MyComponent.vue'
import User from './components/User/User.vue'
import Quote from './Quote/Quote.vue'

export default {
  data() {
    return {
      selectedComponent: 'appGame',
    }
  },
  components: {
    'app-init': Start,
    Conditionals,
    'app-lifecycle': Lifecycle,
    appGame: Game,
    'app-components-register': ComponentsRegister,
    MyComponent,
    appUser: User,
    'app-quote': Quote,
  },
}
</script>

<style></style>
