<template>
  <div class="col-12 col-md-6 col-xl-4 my-3" 
  v-for="(book, index) in books" 
  :key="index">
    <book-card :book="book"></book-card>
  </div>
</template>

<script>
import BookCard from './BookCard.vue';

export default {
  name: "book-list",
  props: ["books"],
  components:{
      BookCard
  },
};
</script>

<style>
</style>