<template>
  <div>
    <label>Quote</label>
    <textarea v-model="quote" name="quote" id="quote" rows="5"></textarea>
    <button
      class="btn btn-primary"
      @click="addQuote"
      :disabled="hasInput || hasReachedLimit"
    >
      Add Quote
    </button>
  </div>
</template>
<script>
export default {
  props: {
    quotesParent: Array,
    hasReachedLimit: Boolean,
    getLength: Number,
  },
  data: function () {
    return {
      quote: "",
      quotes: this.quotesParent,
    };
  },
  methods: {
    addQuote: function () {
      this.$emit("quoteAdd", {
        id: this.getLength + 1,
        value: this.quote,
      }); // child -> parent communication with custom event
    },
  },
  computed: {
    hasInput: function () {
      return this.quote.length === 0;
    },

  },
};
</script>
<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.btn {
  margin: 20px auto 0;
}
</style>
