<template>
  <div class="row">
    <div class="col-12">
      <h1 class="text-center display-5">Emberek</h1>
    </div>
  </div>
  <div class="row row-cols-1 row-cols-md-4 g-4">
    <div class="col" v-for="onePeople in people" :key="onePeople.id">
      <people-card :onePeople="onePeople" cardFormat="list"></people-card>
    </div>
  </div>
  <!-- <pre>
    {{people[1]}}
</pre> -->
</template>

<script>
import PeopleCard from "@/components/PeopleCard.vue";
import Data from "../data_people";

export default {
  name: "people-",
  components: { PeopleCard },
  data() {
    return {
      people: [],
    };
  },
  mounted() {
    this.people = Data.getPeople();
    //console.log(this.people)
  },
};
</script>

<style>
</style>