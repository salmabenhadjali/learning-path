import axios from 'axios'

export default {
  name: 'Quote',
  props: {
    quote: String,
  },
  data() {
    return {
      quotes: [],
      newQuote: {
        title: '',
        body: '',
        userId: undefined,
      },
    }
  },
  activated() {
    console.log('activated !')
  },
  deactivated() {
    console.log('deactivated !')
  },

  methods: {
    async addQuote() {
      const newQuote = {
        title: 'new quote',
        body: 'description new quote',
        userId: 1,
      }
      await axios
        .post('https://jsonplaceholder.typicode.com/posts', newQuote)
        .then(response => response.data)
        .then(data => console.log(data))
        .catch(error => {
          console.error('an error creating quote: ', error)
        })
    },
  },
  async mounted() {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        this.quotes = response.data
      })
      .catch(error => {
        console.error('Failed to fetch quotes:', error)
      })
    return true
  },
}
