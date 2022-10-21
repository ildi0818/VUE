<template>
  <div
    class="card-group col-12 col-md-3 mb-2"
    :class="{ cardNotVisible: item.season != seasonNumber }"
    v-for="item in seasonList"
    :key="item.id"
  >
    <!-- v-if="item.season==seasonNumber" -->
    <div class="card">
      <img
        v-if="item.image"
        :src="item.image.medium"
        class="card-img-top"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">{{ item.name }}</h5>
        <p class="card-text" v-html="item.summary"></p>
        <div class="card-footer d-flex justify-content-end">
          <a :href="item.url" target="_blank" class="btn btn-primary"> </a>
        </div>
        <p class="card-text">
          <small class="text-muted">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "film-card",
  props: ["seasonList", "seasonNumber"],
};
</script>

<style>
.cardNotVisible {
  display: none;
}
</style>