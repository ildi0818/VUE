<template>
  <select class="form-select mt-5" @change="selectCity" v-model="selectedCity">
    <option>Kérem válasszon</option>
    <option v-for="item in allCity" :key="item">{{ item }}</option>
  </select>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { useHunCityStore } from "../stores/HunCityStore";
import { useWeatherStore } from "../stores/WeatherStore";

const { updateGps } = useWeatherStore();

const selectedCity = ref("Kérem válasszon");

//const { getAllCity } = useHunCityStore();
//getAllCity();
const { getCityByGps } = useHunCityStore();

const { allCity } = storeToRefs(useHunCityStore());

function selectCity() {
  console.log(selectedCity.value);
  getCityByGps(selectedCity.value)
  .then((resp) => {
    updateGps(resp.lat.replace(",", ","), resp.lng.replace(",", ","));
  });
}
</script>

<style>
</style>