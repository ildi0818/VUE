<template>
  <app-header/>
  <app-nav/>
  <div class="container main">
    <router-view/>
  </div>
  <app-footer/>
</template>

<script>
import AppFooter from './components/AppFooter.vue';
import AppHeader from './components/AppHeader.vue';
import AppNav from './components/AppNav.vue';
export default {
  name: 'app',
  components:{
    AppHeader,
    AppNav,
    AppFooter

  }
};
</script>

<style>
</style>
