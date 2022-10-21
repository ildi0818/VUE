import { defineStore } from "pinia";
import Axios from 'axios'

export const useWeatherStore = defineStore({
    id:'weather',
    state:()=>({
        weatherData : [],
        startDate: '',
        endDate: '',
        latitude: '47.4984',
        longitude: '19.0408'
}),
    getters: {},
    actions: {
        getWeatherData(){
            Axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${this.latitude}&longitude=${this.longitude}&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FBerlin&start_date=${this.startDate}&end_date=${this.endDate}`)
            .then(resp =>{
                this.weatherData = resp.data.daily;
              //  console.log( this.weatherData);
            })
        },
        updateDates(startDate,endDate){
            this.startDate = startDate;
            this.endDate = endDate;
            this.getWeatherData();
        },
        updateDates(latitude,longitude){
            this.latitude = latitude;
            this.longitude = longitude;
            this.getWeatherData();
    }
});