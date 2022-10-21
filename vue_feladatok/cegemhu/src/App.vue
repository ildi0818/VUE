<template>
  <div class="container">
      <app-nav></app-nav>
      <slide-photos></slide-photos>
      <app-jumbo></app-jumbo>
  </div>
</template>

<script>
    import AppNav from "./components/AppNav.vue";
    import SlidePhotos from "./components/SlidePhotos.vue";
    import AppJumbo from "./components/AppJumbo.vue"

    export default {
        name: "app",
        components: { AppNav, SlidePhotos, AppJumbo}
    };
</script>

<style>

</style>
