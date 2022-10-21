<template>
  <div>
    <h1>Vue alapok</h1>
    <h2>Adatkötés</h2>
    <h3>Egy irányú adatkötés - One way binding</h3>
    <p>Az egy irányú adatkötés jele a bajusz: {{ valtozo }}</p>
    <h4>{{ cim }}</h4>
    <br />
    <p>Számláló: {{ counter }}</p>
    <button @click="szamlaloNoveles">Számláló növelése</button>
    <button v-on:click="szamlaloCsokkentes">Számláló csökkentése</button>
    <br>
    <img v-bind:src="kep" alt="">
    <img v-bind:src="kep" alt="">
    <br>
    <p class="nagybetu" :class="szovegSzin">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis repellat, qui facere architecto nesciunt quam voluptates perspiciatis adipisci! Vel repellendus, molestias amet accusantium expedita facere perspiciatis fuga atque sunt nihil.</p>
    <button @click="szinCsere">Színcsere</button>
    <p :class="szovegSzin">Ez is szöveg</p>
    <h3>Két irányú adatkötés</h3>
    <input type="text" v-model="nev">{{ nev }}
    <br>
    <h2>Tömbök megjelenítése</h2>
    <form @submit.prevent="gyumolcsMentes">
      <input type="text" v-model="ujGyumolcs">
      <input type="submit" value="Mentés">
    </form>
    <ul>
      <li v-for="egyGyumolcs in gyumolcsok" :key="egyGyumolcs">{{ egyGyumolcs }}</li>
    </ul>
    <p v-for="egyGyumolcs in gyumolcsok" :key="egyGyumolcs">{{ egyGyumolcs }}</p>
    <p v-show="ujGyumolcs == 'szolo'">szolo</p>
    <p v-show="lathato">Lorem ipsum dolor sit amet.</p>
    <p v-if="lathato">Lorem ipsum dolor sit amet.</p>
    <p v-else>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, ipsam.</p>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      cim: "Vue változók használata.",
      counter: 0,
      kep: 'https://picsum.photos/400/200',
      szovegSzin: 'piros-szin',
      nev: 'Józsi',
      ujGyumolcs: '',
      gyumolcsok: ['alma', 'körte'],
      lathato: false,
    }
  },
  methods: {
    //ide kerülnek a függvények
    szamlaloNoveles() {
      this.counter++;
    },
    szamlaloCsokkentes(){
      this.counter--;
    },
    szinCsere(){
      if (this.szovegSzin == 'piros-szin') {
        this.szovegSzin = 'kek-szin'
      } else {
        this.szovegSzin = 'piros-szin'
      }
    },
    gyumolcsMentes(){
      this.gyumolcsok.push(this.ujGyumolcs);
      console.log(this.gyumolcsok);
    }
  }
}
</script>

<style>
.nagybetu {
  font-size: 20px;
}

.kek-szin {
  color: blue;
}

.piros-szin {
  color: red;
}

</style>
