<script setup>
    import { ref } from "@vue/reactivity";

const emit = defineEmits(['addToList'])
const name = ref('');
const hasError = ref(false)

function addToList(){
    console.log('ok');
    emit('addToList',name.value)
}

const checkNameLength = () => {
    if (name.value.length == 0){
        hasError.value=true
    } else {
        hasError.value=false
    }
}
</script>


<template>
  <h2>Új név</h2>
  <label for="">Név:</label>
  <input
    type="text"
    v-model="name"
    :class="{ error: hasError }"
    @keyup.enter="addToList"
    @keyup="checkNameLength"
    id=""
  />
  <button @click="addToList">Hozzáad</button>
  <p>{{ name }}</p>
</template>



<style>
.error {
  background-color: red;
  color: white;
}
</style>