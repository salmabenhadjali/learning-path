<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User age: {{ user?.age }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn">Reset Name from parent</button>
  </div>
</template>

<script>
import { eventBus } from '../../main'
export default {
  props: {
    resetFn: Function,
    userAge: Number,
  },

  computed: {
    user() {
      this.$store.getters.user || {}
    },
  },

  methods: {
    switchName() {
      return this.$store.state.user.name.split('').reverse().join('')
    },
    resetName() {
      this.$store.state.user.name = 'Max'
      this.$store.dispatch('updateName', 'Max')
    },
  },
}
</script>

<style scoped>
div {
  background-color: lightcoral !important;
}
</style>
