<template>
  <div>
    <div class="quote" @click="deleteQuote">{{ quote.value }}</div>
  </div>
</template>
<script>
export default {
  props: {
    quoteValue: Object,
  },
  data: function () {
    return {
      quote: this.quoteValue,
    };
  },
  methods: {
    deleteQuote: function (e) {
      console.log(e);
      this.$emit("quoteDelete", this.quote); // child -> parent communication with custom event
    },
  },
};
</script>
<style scoped>
.quote {
  padding: 5px;
  border: 1px solid grey;
  border-radius: var(--br);
  cursor: pointer;
}
.quote:hover {
  background-color: salmon;
}
</style>
