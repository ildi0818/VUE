<template>
  <div class="container">
    <app-header></app-header>
    <app-nav></app-nav>
    <router-view></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppNav from "./components/AppNav.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "app",
  components: { AppHeader, AppNav, AppFooter },
};
</script>

<style>
</style>
