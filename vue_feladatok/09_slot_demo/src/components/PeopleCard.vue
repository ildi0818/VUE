<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="people.picture.large"
          class="img-fluid rounded-start"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <slot name="firstName" :text="people.name.first"></slot>
          <slot name="fullName" :text="`${people.name.title} ${people.name.first} ${people.name.last}`"></slot>
          <!-- <h5 class="card-title">{{people.name.first}}
                </h5> -->
          <p class="card-text"></p>
          <p class="card-text">
            <small class="text-muted"></small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "people-card",
  props: ["people"],
};
</script>

<style>
</style>