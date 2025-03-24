export default {
  name: 'Lifecycle',
  // Store data to be used
  data() {
    return {
      title: 'VueJS Lifecycle',
    }
  },

  beforeCreate() {
    console.log('beforeCreate')
    console.log(this.title)
  },

  created() {
    console.log('created')
    console.log(this.title)
  },

  beforeMount() {
    console.log('beforeMount')
  },

  mounted() {
    console.log('mounted')
  },

  beforeUpdate() {
    console.log('beforeUpdate')
    console.log(this.title)
  },

  updated() {
    console.log('updated')
    console.log(this.title)
  },

  beforeDestroy() {
    console.log('beforeDestroy')
  },

  destroyed() {
    console.log('destroyed')
  },

  methods: {
    destroy() {
      this.$destroy()
    },
  },
}
