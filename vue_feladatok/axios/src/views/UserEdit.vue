<template>
  <user-form 
    formTitle="Update user"
    :userDataProp="editUserForm"
    @saveUser="saveUser"
    >
    </user-form>
</template>

<script>
import UserForm from '@/components/UserForm.vue';
import Dataservice from '../services/dataservice'

export default {
    name:'user-edit',
    components:{UserForm},
    data(){
        return{
            editUserForm:{}
        }
    },
    mounted(){
        Dataservice.getUserById(this.$route.params.id)
            .then(
                resp => { this.editUserForm = resp }
            )
    },
    methods:{
        saveUser(){
            Dataservice.updateUser(
                this.editUserForm,
                this.$route.params.id
            ).then(
                () => { this.$router.push('/') }
            )
        }
    }
}
</script>

<style>

</style>