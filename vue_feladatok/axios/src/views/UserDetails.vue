<template>
  <div class="card mb-3 col-md-6 mx-auto mt-5" >
    <div class="row g-0">

      <div class="col-md-4">
        <img :src="userDetails.avatar" class="img-fluid rounded-start" alt="..." />
      </div>

      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ userDetails.first_name}} {{ userDetails.last_name}}</h5>
          <p class="card-text">
            {{ userDetails.email}}
          </p>
        
        </div>
      </div>

    </div>
    <router-link to="/" class="btn btn-primary mt-3">Back</router-link>
  </div>
</template>

<script>
import Dataservices from '../services/dataservice'

export default {
    name:'user-details',
    data(){
        return{
            userDetails:{}
        }
    },
    mounted(){
        Dataservices.getUserById(this.$route.params.id)
          .then(
            resp =>{ this.userDetails = resp}
          )
    }
};
</script>

<style>
</style>