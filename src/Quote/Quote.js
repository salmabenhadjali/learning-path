export default {
  name: 'Quote',
  props: {
    quote: String,
  },
  activated() {
    console.log('activated !')
  },
  deactivated() {
    console.log('deactivated !')
  },
}
