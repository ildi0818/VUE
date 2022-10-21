<template>
  <user-form 
    formTitle="New user"
    :userDataProp="newUserForm"
    @saveUser="saveUser"
    >
    </user-form>
</template>

<script>
import UserForm from '@/components/UserForm.vue';
import Dataservice from '../services/dataservice'

export default {
  components: {UserForm },
  name: "user-new",
  data() {
    return {
      newUserForm: {
        email: "",
        first_name: "",
        last_name: "",
        avatar: "",
      },
    };
  },
  methods:{
      saveUser(data){
          //console.log(this.newUserForm)
          Dataservice.saveUser(data)
            .then(
              ()=>{ this.$router.push('/') }
            )
      }
  },
};
</script>

<style>
</style>