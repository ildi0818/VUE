<template>
  <div class="container mt-5">
    <div class="row">
      <h1 class="text-center">Téglalap</h1>
    </div>
    <div class="row">
      <div class="col-md-6">
        <form method="post" @submit.prevent="szamol">
          <div class="row mb-3">
            <label for="aOldal" class="col-sm-2 col-form-label">A oldal</label>
            <div class="col-sm-3">
              <input type="number" class="form-control" :class="{'is-invalid':hibaAOldal}" id="aOldal" v-model="aOldal" />
            <div v-show="hibaAOldal" class="col-sm-7 col-form-label hiba-uzenet">Hibás adat!</div>
            </div>
          </div>

          <div class="row mb-3">
            <label for="bOldal" class="col-sm-2 col-form-label">B oldal</label>
            <div class="col-sm-3">
              <input type="number" class="form-control" :class="{'is-invalid':hibaBOldal}" id="bOldal" v-model="bOldal"/>
            <div v-show="hibaBOldal" class="col-sm-7 col-form-label hiba-uzenet">Hibás adat!</div>
            </div>
          </div>
          <button type="submit" class="btn btn-primary offset-2">Számol</button>
        </form>
      </div>
      <div class="col-md-6">
        <h2 class="my-3">Eredmény:</h2>
        <p><strong>Terület: </strong>{{ terulet }}</p>
        <p><strong>Kerület: </strong>{{ kerulet}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      aOldal:'',
      bOldal:'',
      terulet:'',
      kerulet:'',
      hibaAOldal:false,
      hibaBOldal:false,
    };
  },
  methods:{
    szamol() {
      if (this.urlapEllenorzes()) return

      this.kerulet = 2*(this.aOldal + this.bOldal)
      this.terulet = this.aOldal * this.bOldal
    },
    urlapEllenorzes(){
      let hiba=false

      this.hibaAOldal=false
      this.hibaBOldal=false

      this.terulet='-'
      this.kerulet='-'

      if (this.aOldal <= 0) {
        this.hibaAOldal = true
        hiba = true
      }

      if (this.bOldal <= 0) {
        this.hibaBOldal = true
        hiba = true
      }

      return hiba
    }
  },
};
</script>

<style>
</style>
