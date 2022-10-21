<template>
  <div class="container">
    <select-season :seasons="seasons"></select-season>
    <div class="row">
      <film-card :seasonList="seasonList" :seasonNumber="seasonNumber" />
    </div>
  </div>
</template>

<script>
import DataServices from "@/services/dataservices";

import FilmCard from "@/components/FilmCard.vue";
import SelectSeason from "@/components/SelectSeason.vue";
import dataservices from "@/services/dataservices";

export default {
  name: "walking-dead",
  components: { FilmCard, SelectSeason },
  data() {
    return {
      seasonList: [],
      seasons: [],
      seasonNumber: 1,
    };
  },
  created() {
    DataServices.getAllFilms()
    .then((result) => {
      this.seasons = [...new Set(result.map(x => x.season))];
      
      //this.seasonList=result
      dataservices.getFilmBySeason(this.seasons[0])
      .then((result) => {
        this.seasonList = result;
      });
    });
  },
  methods: {
    onSelectSeason(event) {
      /* console.log(event.target.value)*/
      this.seasonNumber = event.target.value;

      dataservices.getFilmBySeason(event.target.value)
      .then(result => {
        //this.seasonList = result
        this.seasonList = result.map( x => {
          if (x.image == null){
            x.image = {
              medium: 'https://via.placeholder.com/170x120' 
            }
          }
          return x
        })
      });
    },
  },
};
</script>

<style>
</style>