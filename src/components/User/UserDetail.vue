<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User age: {{ userAge }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn">Reset Name from parent</button>
  </div>
</template>

<script>
import { eventBus } from '../../main'
export default {
  props: {
    userName: {
      type: String,
      required: true,
      default: 'Max ',
    },
    resetFn: Function,
    userAge: Number,
  },
  methods: {
    switchName() {
      return this.userName.split('').reverse().join('')
    },
    resetName() {
      this.userName = 'Max'
      this.$emit('resetUserName', this.userName)
    },
  },
  created() {
    eventBus.$on('changeUserAge', age => {
      this.userAge = age
    })
  },
}
</script>

<style scoped>
div {
  background-color: lightcoral !important;
}
</style>
