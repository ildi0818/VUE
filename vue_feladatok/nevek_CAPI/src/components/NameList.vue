<script setup>
const props = defineProps(['names'])
</script>

<template>
  <h2>Nevek</h2>
  <ul>
    <li v-for="name in names" :key="name"> {{ name }} </li>
  </ul>
</template>

<style>

</style>