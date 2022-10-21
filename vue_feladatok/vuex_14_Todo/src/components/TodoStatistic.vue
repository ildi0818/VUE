<template>
  <div class="mt-4">
    <p>All: {{ this.$store.getters.allTodo }}</p>
    <p>completed: {{ this.$store.getters.completedTodo }}</p>
    <p>Active: {{ activeTodo }}</p>
  </div>
</template>

<script>
export default {
    name: "todo-statistic",
    computed: {
        activeTodo(){
            return this.$store.getters.allTodo - this.$store.getters.completedTodo
        }
    }
}
</script>

<style>

</style>