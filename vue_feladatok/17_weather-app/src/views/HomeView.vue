<template>
  <div class="container">
    <div class="col-12 col-md-3">
      <h4>Időszak</h4>
      <date-form />
      <detect-gps-position/>
      <select-city/>
    </div>
    <div class="col-12 col-md-9">
      <h4>Adatok</h4>
      <show-weather-data />
      <Chart type="line" :data="chartData" />
    </div>
  </div>
</template>

<script setup>
import SelectCity from '../components/SelectCity.vue'
import DetectGpsPosition from '../components/DetectGpsPosition.vue'
import ShowWeatherData from "../components/ShowWeatherData.vue";
import DateForm from "../components/DateForm.vue";

import Chart from "primevue/chart";
import { computed } from "@vue/runtime-core";

import { useWeatherStore } from "../stores/WeatherStore";
import { storeToRefs } from "pinia";

const { weatherData } = useWeatherStore();

const chartData = computed(() => {
  return {
    labels: weatherData.value.time,
    datasets: [
      {
        label: "Min hőmérséklet",
        backgroundColor: "#42A5F5",
        data: weatherData.value.temperature_2m_min,
      },
      {
        label: "Max hőmérséklet",
        backgroundColor: "#9CCC65",
        data: weatherData.value.temperature_2m_max,
      },
    ],
  };
});
</script>

<style>
</style>