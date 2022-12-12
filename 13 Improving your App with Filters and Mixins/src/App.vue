<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUpperCase | toLowerCase }}</p>
        <hr />
        <button @click="addFruit">Add new Fruit</button>
        <input v-model="filterText" />
        <ul>
          <li v-for="(fruit, i) in filteredFruits" :key="i">{{ fruit }}</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <app-list></app-list>
    </div>
  </div>
</template>

<script>
import List from "./List.vue";
import { fruitMixin } from "./fruitMixin";

export default {
  mixins: [fruitMixin], // mixin first, then comp (comp acts last=> mixin cant destroy shit)
  components: {
    appList: List,
  },
  filters: {
    //   'to-uppercase'(value){}
    toUpperCase(value) {
      return value.toUpperCase();
    },
  },
  data() {
    return {
      text: "Hello there!",
    };
  },
  methods: {
    addFruit(){
        this.fruits.push('new Fruit')
    }
  }
};
</script>

<style>
</style>
