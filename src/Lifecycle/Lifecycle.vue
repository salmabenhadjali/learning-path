<template>
  <div>
    <h1>{{ title }}</h1>
    <button @click="title = 'Changed'">Updatte title</button>
    <button @click="destroy">Destroy</button>
  </div>
</template>

<script src="./Lifecycle.js"></script>
