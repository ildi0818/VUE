<template>
  <button class="btn btn-primary" @click="getGpsPosition">Helymeghatározás</button>
</template>

<script setup>
import {useWeatherStore} from '../stores/WeatherStore';

const {updateGps} = useWeatherStore();

function getGpsPosition(){
    navigator.geolocation.getCurrentPosition((position)=>{
        //console.log(position.coords.latitude);
        //console.log(position.coords.longitude);
        updateGps(position.coords.latitude,position.coords.longitude)
    },
    (error)=>(console.log())
    );
}


</script>

<style>

</style>