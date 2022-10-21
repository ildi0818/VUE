<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">BOOKS</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-md-4 mb-2" v-for="book in books" :key="book.id">
        <book-card :bookData="book">
          <template v-slot:button>
            <router-link :to="book.id" class="btn btn-primary">Preview</router-link>
          </template>
        </book-card>
        <!-- <div class="card">
          <img :src="book.img_url" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ book.title }}</h5>
            <p class="card-text">
              Author: {{ book.author }}
            </p>
            <p class="card-text">
              Description: {{ book.description }}
            </p>
          </div>
        </div> -->
      </div>
    </div>
    <!-- <pre>{{ books }}</pre> -->
  </div>
</template>

<script>
import Data from "../data.js";
import BookCard from '../components/BookCard.vue'

export default {
  name: "book-list",
  components:{BookCard},
  data() {
    return {
      books: [],
    };
  },
  mounted() {
    this.books = Data.getBooks();
    console.log(this.books);
  },
};
</script>

<style>
</style>