<template>
  <div class="container">
    <div class="d-flex justify-content-between my-4">
      <h2>Users</h2>
      <router-link to="/newuser" class="btn btn-primary">Add</router-link>
    </div>

    <!-- <ul>
            <li v-for="user in users" :key="user.id">
                {{user.first_name}}
            </li>
        </ul> -->
    <!-- <table class="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Avatar</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>
                        <img :src="user.avatar" alt="" class="w-25 rounded-circle">
                    </td>
                    <td>{{ user.first_name }}</td>
                    <td>{{ user.last_name }}</td>
                    <td>{{ user.email }}</td>
                </tr>
            </tbody>
        </table> -->
    <p v-show="!Object.keys(users).length">Loading...</p>    
    <user-list-table :users="users" @deleteUser="deleteUser"> </user-list-table>
    <p v-if="error">Database error! {{ errorMessage }}</p>
  </div>
</template>

<script>
import Dataservice from "../services/dataservice.js";
import UserListTable from "../components/UserListTable.vue";

export default {
  name: "user-list",
  components: { UserListTable },
  data() {
    return {
      users: [],
      error:false,
      errorMessage:''
    };
  },
  mounted() {
    // adatok betöltése
    this.getAllUser()
  },
  methods: {
    getAllUser() {
      Dataservice.getAllUser()
        .then((resp) => {
          this.users = resp;
          //console.log(this.users)
        })
        .catch(
          (err) => { 
            this.error=true 
            this.errorMessage = err.message
            }
        );

    },
    deleteUser(id) {
      Dataservice.deleteUser(id).then(() => {
        this.getAllUser()
      });
    },
  },
};
</script>

<style>
</style>