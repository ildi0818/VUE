<template>
  <div class="container-fluid px-0 mt-1" id="nyito">
    <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
      <ol class="carousel-indicators">
        <li data-bs-target="#carouselId" data-bs-slide-to="0" class="active"></li>
        <li data-bs-target="#carouselId" data-bs-slide-to="1"></li>
        <li data-bs-target="#carouselId" data-bs-slide-to="2"></li>
        <li data-bs-target="#carouselId" data-bs-slide-to="3"></li>
      </ol>
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img src="https://picsum.photos/id/1001/1600/400" alt="First slide" class="d-block" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/1002/1600/400" alt="Second slide" class="d-block" />
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/1005/1600/400" alt="Third slide" class="d-block"/>
        </div>
        <div class="carousel-item">
          <img src="https://picsum.photos/id/1010/1600/400" alt="4." class="d-block"/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Előző</span>
      </button>

      <button class="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Következő</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "slide-photos",
};
</script>

<style>
</style>