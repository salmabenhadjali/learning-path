export default {
  name: 'MyComponent',
  data() {
    return {
      status: 'Critical',
    }
  },

  methods: {
    changeStatus() {
      this.status = 'Normal'
    },
  },
}
