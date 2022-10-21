<template>
    <div class="card">
      <img :src="bookData.img_url" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ bookData.title }}</h5>
        <p class="card-text">Author: {{ bookData.author }}</p>
        <p class="card-text">Description: {{ bookData.description }}</p>
        <slot name="button"></slot>
        <!-- <router-link to="/" class="btn btn-primary">Back</router-link> -->
      </div>
    </div>
</template>

<script>
export default {
  name: "book-card",
  props: ['bookData']
};
</script>

<style>
</style>