<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <h2 class="mb-3">Új név</h2>
        <input-form @addToList="saveName"></input-form>
    
      </div>
      <div class="col-md-6">
        <h2>Nevek:</h2>
        <name-list :names="names"></name-list>
        
      </div>
    </div>
  </div>
</template>

<script>
  import { ref } from "@vue/reactivity"

  let names = ref([])
  console.log(names);

</script>

<!-- <script>
// import InputForm from './components/InputForm.vue';
// import NameList from './components/NameList.vue';

export default {
  name: "App",
  data(){
    return {
    //  name : '',
      names:[],
    }
  },
  components:{
    NameList,
    InputForm

  },
  methods:{
    saveName(data){
      //if (this.name == '') return
      this.names.push(data)
      //this.name=''
      //console.log(this.names)
      //console.log(this.$refs.inputName)
      //this.$refs.inputName.focus(); // rá viszi a fókuszt az objektumra
    }
  },
};
</script> -->

<style>
</style>
