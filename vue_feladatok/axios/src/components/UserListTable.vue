<template>
  <table class="table">
    <thead>
      <tr>
        <th>ID</th>
        <th>Avatar</th>
        <th>First name</th>
        <th>Last name</th>
        <th>Email</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>
          <img :src="user.avatar" alt="" class="w-25 rounded-circle" />
        </td>
        <td>{{ user.first_name }}</td>
        <td>{{ user.last_name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <router-link :to="`/user/${user.id}/details`" class="btn btn-primary">Details</router-link>
        </td>
        <td>
          <router-link :to="`/user/${user.id}/edit`" class="btn btn-info">Edit</router-link>
        </td>
        <td>
          <button class="btn btn-danger" @click="$emit('deleteUser',user.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
    name:'user-list-table',
    props: ['users'],
    emits:['deleteUser']
};
</script>

<style>
</style>