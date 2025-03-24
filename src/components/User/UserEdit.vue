<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User age: {{ user.age }}</p>
    <button @click="changeAge">Change age</button>
    <button @click="changeUserAge">Change age From here</button>
  </div>
</template>

<script>
import { eventBus } from '../../main'
export default {
  props: {
    changeAge: Function,
  },

  computed: {
    user() {
      return this.$store.getters.user
    },
  },

  methods: {
    changeUserAge() {
      this.$store.state.user.age = 30
      //   eventBus.$emit('changeUserAge', this.userAge)
      // eventBus.changeAge(this.user.age)
      this.$store.dispatch('updateAge', 30)
    },
  },
}
</script>

<style scoped>
div {
  background-color: lightgreen !important;
}
</style>
