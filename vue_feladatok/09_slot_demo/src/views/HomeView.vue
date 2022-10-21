<template>
  <div class="container">
    <custom-button></custom-button>
    <custom-button>Ez egy másik gomb</custom-button>
    <custom-button class="btn btn-danger">Törlés</custom-button>
    <custom-button class="btn btn-danger ms-3">
      Törlés
     <delete-icon></delete-icon>
    </custom-button>
  </div>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-4" v-for="p in people" :key="p.id">
        <people-card :people="p">
            <template #fullName="{text}">
                <h5 class="card-title">
                    {{text}}
                </h5>
            </template>
        </people-card>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton.vue";


import PeopleData from '../randomuser_20'
import DeleteIcon from '@/components/DeleteIcon.vue';
import PeopleCard from '@/components/PeopleCard.vue';

export default {
  name: "home-view",
  components: { CustomButton, DeleteIcon, PeopleCard,  },
  data(){
      return{
          people:[],
      }
  },
  created(){
      this.people = PeopleData.getPeople()
  }
};
</script>
   

<style>
</style>