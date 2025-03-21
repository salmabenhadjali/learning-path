<template>
  <div>
    <h1 v-once>{{ title }}</h1>
    <p v-if="show">You can see me!</p>
    <p v-else>Now you can see me!</p>

    <template v-if="show">
      <h1>Ingredienst</h1>
      <ul>
        <li v-for="(ingredient, index) in ingredients" :key="index">{{ index + 1 }}/ {{ ingredient }}</li>
      </ul>

      <h1>Persons </h1>
      <template v-for="(person, index) in persons">
        <div v-for="(value, key, i) in person" :key="i">
          {{ key }} : {{ value }}
        </div>
      </template>
    </template>
    <p v-show="show">Do you also see me ?</p>
    <button @click="show = !show">Switch</button>

    <span v-for="n in 10">{{ n }}</span>
  </div>
</template>

<script>
  export default {
    name: 'Conditionals',
    // Store data to be used
    data() {
      return {
        title : 'Conditionals! 🚀',
        show: true,
        ingredients: ['meat', 'fruit', 'cookies'],
        persons: [
          {name: 'Max', age: 27, color: 'red'},
          {name: 'Anna', age: 'unknown', color: 'blue'}
        ]
      }
    }
  }
</script>

<style scoped>

</style>
  