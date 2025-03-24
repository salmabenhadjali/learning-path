<template>
  <div>
    <div class="title">
      <slot name="title"></slot>
      <span><slot name="subtitle">Subtitle slot</slot></span>
    </div>
    <hr />
    <div>
      <slot name="content"></slot>
    </div>
    <hr />
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script src="./Quote.js"></script>

<style scoped src="./Quote.css"></style>
