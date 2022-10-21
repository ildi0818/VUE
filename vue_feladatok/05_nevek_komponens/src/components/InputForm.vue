<template>
  <div class="mb-3">
    <label for="nev" class="form-label"> Név: </label>
    <input
      type="text"
      class="form-control"
      id="nev"
      v-model="name"
      ref="inputName"
      @keyup.enter="addToList"
      @keyup.esc="clearInput"
    />

    <button 
        type="button" 
        class="btn btn-primary mt-3" 
        @click="addToList"
    >
      Mentés
    </button>
  </div>
</template>

<script>
export default {
    name:'input-form',
    emits:['addToList'],
    data(){
        return{
            name:'',
        }
    },
    methods:{
        addToList(){
            this.$emit('addToList',this.name)
            this.name =''
            this.$refs.inputName.focus()
        },
        clearInput(){
            this.name=''
        }
    }
};
</script>

<style>
</style>