<template>
  <div>
    <h1 v-once>{{ title }}</h1>
    <p>{{ sayHello() }} - <a :href="link">Google</a></p>
    <p v-html="finalLink"></p>

    <button @click="increase(2, $event)">Increase counter</button>
    <button @click="counter--">Decrease counter</button>
    <button @click="secondCounter++">Click Second Counter</button>
    <p>{{ counter }} | {{ secondCounter }}</p>
    <p>Result: {{ result() }} | {{ output }}</p>

    <p @mousemove="updateCoordinates">
      Coordinates : {{ x }} / {{ y }} - <span @mousemove.stop="">DEAD SPOT</span>
    </p>

    <input type="text" @keyup.enter.space="alertMe">
    <br><br><br><br>

    <input type="text" v-model="name">
    <p>{{ name }}</p>
  </div>
</template>

<script>
  export default {
    name: 'App',
    // Store data to be used
    data() {
      return {
        title : 'Hello, Vue 2 with Vite! 🚀',
        link: 'http://www.google.com',
        finalLink: '<a href="http://www.google.com">Google</a>',
        counter: 0,
        secondCounter: 0,
        x: 0,
        y: 0,
        name: 'Max'
      }
    },
    // Dependent properties
    // Only synchronous treatment
    computed: {
      output() {
        console.log('Computed')
        return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
      }
    },
    // Execute code upon data changes
    watch: {
      counter() {
        let vm = this
        setTimeout(() => {
          vm.counter = 0
        }, 2000);
      }
    },
    //Methods of this vue instance
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
      },

      result() {
        console.log('Method')
        return this.counter > 5 ? 'Greater than 5' : 'Smaller than 5'
      }
    }
  }
</script>

<style>
  h1 {
    color: #42b883;
  }
</style>
  