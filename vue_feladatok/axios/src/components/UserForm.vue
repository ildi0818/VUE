<template>
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 mx-auto">
        <h1>{{ formTitle }}</h1>

        <div 
          class="alert alert-danger" 
          role="alert"
          v-if="errors.length > 0"
          >
          <ul>
            <li v-for="(error, index) in errors" :key="index">
              {{ error }}
            </li>
          </ul>
        </div>

        <form method="post" @submit.prevent="saveUser">
          <div class="mb-4">
            <label for="email" class="form-label">Email:</label>
            <input
              type="email"
              id="email"
              class="form-control"
              v-model="userData.email"
            />
          </div>
          <div class="mb-4">
            <label for="first" class="form-label">First name:</label>
            <input
              type="text"
              id="first"
              class="form-control"
              v-model="userData.first_name"
            />
          </div>
          <div class="mb-4">
            <label for="last" class="form-label">Last name:</label>
            <input
              type="text"
              id="last"
              class="form-control"
              v-model="userData.last_name"
            />
          </div>
          <div class="mb-4">
            <label for="avatar" class="form-label">Avatar:</label>
            <input
              type="text"
              id="avatar"
              class="form-control"
              v-model="userData.avatar"
            />
          </div>
          <input type="submit" value="Save" class="btn btn-primary" />
        </form>
        <p v-show="!Object.keys(userData).length">Loading....</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "user-form",
  props: ["userDataProp", "formTitle"],
  emits: ["saveUser"],
  data() {
    return {
      errors: [],
    };
  },
  computed: {
    userData() {
      return this.userDataProp;
    },
  },
  methods: {
    saveUser() {
      // validálás
      if (this.formValidation()) return;
      this.$emit("saveUser", this.userData);
    },
    formValidation() {
      this.errors = [];
      if (!this.userData.email) {
        this.errors.push("E-mail required!");
      }
      if (!this.userData.first_name) {
        this.errors.push("First name required!");
      }
      if (!this.userData.last_name) {
        this.errors.push("Last name required!");
      }
      return this.errors.length;
    },
  },
};
</script>

<style>
</style>