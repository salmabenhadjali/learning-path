<template>
  <div>
    <app-init></app-init>
    <connditionals></connditionals>
    <app-lifecycle></app-lifecycle>
    <app-game></app-game>
    <app-componennets-register></app-componennets-register>
    <my-component></my-component>
  </div>
</template>

<script>
import Start from './Start/Start.vue'
import Conditionals from './Conditionals/Conditionals.vue'
import Game from './Game/Game.vue'
import Lifecycle from './Lifecycle/Lifecycle.vue'
import ComponentsRegister from './ComponentsRegister/ComponentsRegister.vue'
import MyComponent from './ComponentsRegister/MyComponent.vue'

export default {
  components: {
    'app-init': Start,
    Conditionals,
    'app-lifecycle': Lifecycle,
    appGame: Game,
    'app-components-register': ComponentsRegister,
    MyComponent,
  },
}
</script>
