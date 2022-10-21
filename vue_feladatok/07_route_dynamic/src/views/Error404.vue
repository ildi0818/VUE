<template>
  <div
    class="d-flex justify-content-center align-items-center"
    style="min-height: 80vh"
  >
    <div>
      <h3>Page not found!</h3>
      <router-link to="/" class="btn btn-primary">All books</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "error-404",
};
</script>

<style>
</style>