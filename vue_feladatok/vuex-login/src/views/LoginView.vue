<template>
  <div class="row">
    <div class="col-12">
      <h1 class="display-4 text-center my-5">Bejelentkezés</h1>
    </div>

    <div class="col-12 col-md-4 mx-auto">
      <form @submit.prevent="onLogin">
        <div class="form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="E-mail"
            v-model="loginForm.email"
          />
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Jelszó"
            v-model="loginForm.password"
          />
          <label for="floatingPassword">Jelszó</label>
        </div>
        <div class="mb-3">
          <button type="submit" class="btn btn-primary w-100 my-2">
            Bejelentkezés
          </button>
        </div>
      </form>
      <div class="alert alert-danger" role="alert" v-if="alertMessage">
        {{ alertMessage }}
      </div>
    </div>
  </div>
</template>

<script>
import store from "@/store";

export default {
  name: "login-view",
  data() {
    return {
      loginForm: {
        email: "",
        password: "",
      },
      alertMessage: "",
    };
  },
  methods: {
    onLogin() {
      // console.log(this.loginForm);
      let loggedInUser = {
        email: "",
        username: "",
        status: false,
      };
      store.commit("setStatus", loggedInUser);
      this.alertMessage = "";
      if (
        this.loginForm.email == "a@a" &&
        this.loginForm.password == "Aa12345"
      ) {
        // sikeres belépés
        let loggedInUser = {
          email: this.loginForm.email,
          username: "Józsi",
          status: true,
        };
        store.commit("setStatus", loggedInUser);
        this.$router.push('/')
      } else {
        //sikertelen belépés
        this.alertMessage = "Sikertelen belépés!";
      }
    },
  },
};
</script>

<style>
</style>