<template>
  <div class="container">
    <!-- <app-init></app-init>
    <connditionals></connditionals>
    <app-lifecycle></app-lifecycle>
    <app-game></app-game>
    <app-componennets-register></app-componennets-register>
    <my-component></my-component> -->
    <div class="row">
      <div class="col-xs-2">
        <app-user></app-user>
      </div>
    </div>
  </div>
</template>

<script>
// import Start from './Start/Start.vue'
// import Conditionals from './Conditionals/Conditionals.vue'
// import Game from './Game/Game.vue'
// import Lifecycle from './Lifecycle/Lifecycle.vue'
// import ComponentsRegister from './ComponentsRegister/ComponentsRegister.vue'
// import MyComponent from './ComponentsRegister/MyComponent.vue'
import User from './components/User/User.vue'

export default {
  components: {
    // 'app-init': Start,
    // Conditionals,
    // 'app-lifecycle': Lifecycle,
    // appGame: Game,
    // 'app-components-register': ComponentsRegister,
    // MyComponent,
    appUser: User,
  },
}
</script>

<style>
div.component {
  border: 1px solid black;
  padding: 30px;
}
</style>
