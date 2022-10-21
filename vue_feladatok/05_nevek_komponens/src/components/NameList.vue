<template>
  <ul>
    <li v-for="name in names" :key="name">{{ name }}</li>
  </ul>
</template>

<script>
export default {
    name:'name-list',
    props: ['names'],
};
</script>

<style>
</style>