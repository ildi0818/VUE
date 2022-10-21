<template>
  <div class="container">
    <div class="row"> 
      <book-list :books="books"></book-list>
      <book-table class="mt-5" :books="books"></book-table>
    </div>
  </div>
</template>

<script>
import BookList from './components/BookList.vue'
import BookTable from './components/BookTable.vue';

export default {
  name: "App",
  components:{
    BookList,
    BookTable
  },
  data() {
    return {
      books: [
        {
          author: "David Deustch",
          title: "The beginning of Infinity",
          description: "A book on philosphy about the origins of man",
          img_url: "https://picsum.photos/id/100/300/200",
        },
        {
          author: "Paul Coelho",
          title: "The Alchemist",
          description: "The true search for one's treasure",
          img_url: "https://picsum.photos/id/238/300/200",
        },
        {
          author: "Susan Kaye Quinn",
          title: "Open Minds",
          description: "Sci-Fi Futuristic book about mind reading",
          img_url: "https://picsum.photos/id/239/300/200",
        },
        {
          author: "Robert Kiyosaki",
          title: "Rich Dad, Poor Dad",
          description: "Motivational book on wealth building",
          img_url: "https://picsum.photos/id/240/300/200",
        },
        {
          author: "Dan Brown",
          title: "The Da Vinci Code",
          description: "Conspiracy theories about secrets of the holy grail",
          img_url: "https://picsum.photos/id/241/300/200",
        },
        {
          author: "Arthur Hailey",
          title: "The money changers",
          description: "Travel back in time and experience the banking system",
          img_url: "https://picsum.photos/id/242/300/200",
        },
      ],
    };
  },
};
</script>

<style>
</style>
