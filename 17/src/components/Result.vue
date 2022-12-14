<template>
  <dir>
    <p>Counter is: {{ doubleCounter }}</p>
    <p>Click counter is: {{ stringCounter }}</p>
  </dir>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      //   counter: this.$store.state.counter,
    };
  },
  //   computed: {
  //     counter() {
  //       return this.$store.getters.doubleCounter;
  //     },
  //   },
  computed: {
    ...mapGetters(["doubleCounter", "stringCounter"]),
  },
};
</script>
