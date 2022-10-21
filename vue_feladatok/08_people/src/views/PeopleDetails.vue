<template>
  <div class="col-12 col-md-3 mx-auto my-5">
    <people-card :onePeople="onePeople" cardFormat="one"></people-card>
    <router-link to="/emberek" class="btn btn-lg float-end">&larr;</router-link>
  </div>
</template>

<script>
import PeopleCard from "@/components/PeopleCard.vue";
import Data from "../data_people";

export default {
  components: { PeopleCard },
  name: "people-details",
  data() {
    return {
      onePeople: {},
    };
  },
  mounted() {
    this.onePeople =
      Data.getPeople().find((x) => x.id == this.$route.params.id) || {};
  },
};
</script>

<style>
</style>