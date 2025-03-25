<template>
  <div>
    <button @click="addQuote">Add Quote</button>
    <div class="title" v-for="quote in quotes" :key="quote.id">
      <h1>{{ quote.title }}</h1>
      <p>{{ quote.body }}</p>
    </div>
  </div>
</template>

<script src="./Quote.js"></script>

<style scoped src="./Quote.css"></style>
