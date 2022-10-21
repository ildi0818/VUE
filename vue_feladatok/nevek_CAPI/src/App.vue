<script setup>
import NameList from "./components/NameList.vue";

import InputForm from "./components/InputForm.vue";

import { ref } from "@vue/reactivity";

let names = ref(["Józsi", "Béla"]);
// console.log(names.value[0]);

const addToList = (data)=>{
  names.value.push(data)
}

</script>

<template>
  <input-form @addToList="addToList"></input-form>
  <name-list :names="names"></name-list>

  <!-- {{ names }} -->
</template>

<style scoped>
</style>
