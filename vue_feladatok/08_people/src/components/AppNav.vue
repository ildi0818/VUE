<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Nyitó oldal</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/emberek">Emberek</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/keszitette">Készítette</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
    name: 'app-nav',
}
</script>

<style>

</style>