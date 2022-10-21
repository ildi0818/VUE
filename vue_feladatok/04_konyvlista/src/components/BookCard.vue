<template>
  <div class="card">
        <img :src="book.img_url" class="card-img-top" alt="" />
        <div class="card-body">
          <h5 class="card-title">{{ book.title }}</h5>
          <p><strong>Author:</strong> {{ book.author}}</p>
          <p class="card-text">
            <strong>Description:</strong>{{ book.description }}
          </p>
        </div>
    </div>
</template>

<script>
export default {
    name:'book-card',
    props:['book']
};
</script>

<style>

</style>