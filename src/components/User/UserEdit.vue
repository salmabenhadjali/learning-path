<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User age: {{ userAge }}</p>
    <button @click="changeAge">Change age</button>
  </div>
</template>

<script>
export default {
  props: {
    userAge: Number,
    changeAge: Function,
  },
}
</script>

<style scoped>
div {
  background-color: lightgreen !important;
}
</style>
