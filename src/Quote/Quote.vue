<template>
  <div>
    <form @submit.prevent="addQuote">
      <input
        type="text"
        v-model="newQuote.title"
        placeholder="Quote title"
        required
      />
      <input
        type="text"
        v-model="newQuote.body"
        placeholder="Quote body"
        required
      />
      <button type="submit">Add Quote</button>
    </form>
    <div class="title" v-for="quote in quotes" :key="quote.id">
      <h1>{{ quote.title }}</h1>
      <p>{{ quote.body }}</p>
    </div>
  </div>
</template>

<script src="./Quote.js"></script>

<style scoped src="./Quote.css"></style>
