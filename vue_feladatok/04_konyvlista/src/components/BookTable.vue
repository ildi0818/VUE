<template>
  <table class="table table-hover">
      <thead>
          <tr>
              <th>#</th>
              <th>Author</th>
              <th>Title</th>
              <th>Description</th>
              <th>Image</th>
          </tr>
      </thead>
      <tbody>
          <tr v-for="(book, index) in books" :key="index">
              <td>{{index+1}}</td>
              <td>{{book.author}}</td>
              <td>{{book.title}}</td>
              <td>{{book.description}}</td>
              <td>
                  <img :src="book.img_url" alt="" class="w-50">
              </td>
          </tr>
      </tbody>
  </table>
</template>

<script>
export default {
    name:'book-table',
    props: ['books']
}
</script>

<style>

</style>