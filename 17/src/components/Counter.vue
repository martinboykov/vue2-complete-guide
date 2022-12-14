<template>
  <div>
    <button class="btn btn-primary" @click="increment(1)">Increment</button>
    <button class="btn btn-primary" @click="decrement(1)">Decrement</button>
    <button
      class="btn btn-primary"
      @click="asyncIncrement({ by: 100, delay: 200 })"
    >
      Async Increment
    </button>
    <input type="text" :value="value" @input="updateValue"/>
    <p>Value is: {{ value }}</p>
  </div>
</template>

<script>
import { mapMutations, mapActions } from "vuex";
export default {
  //   methods: {
  // increment() {
  //   // this.$emit('updated', 1);
  //   // this.$store.state.counter++;
  //   this.$store.commit("increment");
  // },
  // decrement() {
  //   // this.$emit('updated', -1);
  //   // this.$store.state.counter--;
  //   this.$store.commit("decrement");
  // },
  // }
  methods: {
    // sync only
    // ...mapMutations(["increment", "decrement"]),

    // async && sync (may only use actions as good practice)
    ...mapActions(["increment", "decrement", "asyncIncrement"]),
    // same as
    // increment(by) {
    //   this.$store.dispatch("asyncIncrement", by);
    // },

    updateValue(event){
        this.$store.dispatch('updateValue', event.target.value)
    }
  },
  computed: {
    value() {
      return this.$store.getters.value;
    },
  },
};
</script>
