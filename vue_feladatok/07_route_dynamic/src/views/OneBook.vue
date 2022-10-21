<template>
  <div>
    <div class="col-md-4 mx-auto mt-5">
      <book-card :bookData="book">
        <template v-slot:button>
          <router-link to="/" class="btn btn-primary">Back</router-link>
        </template>
      </book-card>
    </div>
  </div>

  <!-- <div>
    <div class="card col-md-4 mx -auto mt-5">
      <img :src="book.img_url" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ book.title }}</h5>
        <p class="card-text">Author: {{ book.author }}</p>
        <p class="card-text">Description: {{ book.description }}</p>
      </div>
    </div>
  </div> -->
  <div></div>
</template>

<script>
import BookCard from "@/components/BookCard.vue";
import Data from "../data";

export default {
  components: { BookCard },
  name: "one-book",
  data() {
    return {
      book: {},
    };
  },
  mounted() {
    this.book =
      Data.getBooks().find((x) => x.id == this.$route.params.id) || {};
    if (Object.keys(this.book).length == 0) {
      this.$router.push("/error404");
    }
  },
};
</script>

<style>
</style>