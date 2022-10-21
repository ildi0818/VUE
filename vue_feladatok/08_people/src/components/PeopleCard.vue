<template>
  <div class="card shadow" :class="cardClick" @click="peopleDetails">
    <img
      :src="onePeople.avatar"
      class="card-img-top"
      :class="borderFormat"
      :alt="fullName"
      :title="fullName"
    />
    <div class="card-body">
      <h5 class="card-title">
        <!-- {{ onePeople.first_name }} {{ onePeople.last_name }} -->
        {{ fullName }}
      </h5>
      <p class="card-text">
        Email: <br />
        {{ onePeople.email }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "people-card",
  props: ["onePeople", "cardFormat"],
  data() {
    return {
      borderFormat: "",
      cardClick: "",
    };
  },
  computed: {
    fullName() {
      return this.onePeople.first_name + " " + this.onePeople.last_name;
    },
  },
  methods: {
    peopleDetails() {
      console.log(this.onePeople.id);
      this.$router.push("/emberek/" + this.onePeople.id);
    },
  },
  mounted() {
    console.log(this.cardFormat)
    if (this.cardFormat == "list") {
      this.borderFormat = "border50";
      this.cardClick = "card-click";
      console.log(this.borderFormat)
    }
    if (this.cardFormat == "one") {
      this.borderFormat = "border5";
      this.cardClick = "";
    }
  },
};
</script>

<style>
</style>