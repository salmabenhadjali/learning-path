<template>
  <div>
    <h1 v-once>{{ title }}</h1>
    <p>{{ sayHello() }} - <a v-bind:href="link">Google</a></p>
    <p v-html="finalLink"></p>

    <button v-on:click="increase(2, $event)">Click me</button>
    <p>{{ counter }}</p>

    <p v-on:mousemove="updateCoordinates">
      Coordinates : {{ x }} / {{ y }} - <span v-on:mousemove.stop="">DEAD SPOT</span>
    </p>

    <input type="text" v-on:keyup.enter.space="alertMe">
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        title : 'Hello, Vue 2 with Vite! 🚀',
        link: 'http://www.google.com',
        finalLink: '<a href="http://www.google.com">Google</a>',
        counter: 0,
        x: 0,
        y: 0,
      }
    },
    methods: {
      sayHello() {
        this.title = 'Hello!'
        return this.title
      },

      increase(step, event) {
        return this.counter += step
      },

      updateCoordinates(event) {
        this.x = event.clientX
        this.y = event.clientY
      },

      alertMe() {
        alert('Alert!')
      }
    }
  }
</script>

<style>
  h1 {
    color: #42b883;
  }
</style>
  