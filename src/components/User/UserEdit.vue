<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User age: {{ userAge }}</p>
    <button @click="changeAge">Change age</button>
    <button @click="changeUserAge">Change age From here</button>
  </div>
</template>

<script>
import { eventBus } from '../../main'
export default {
  props: {
    userAge: Number,
    changeAge: Function,
  },

  methods: {
    changeUserAge() {
      this.userAge = 30
      //   eventBus.$emit('changeUserAge', this.userAge)
      eventBus.changeAge(this.userAge)
    },
  },
}
</script>

<style scoped>
div {
  background-color: lightgreen !important;
}
</style>
