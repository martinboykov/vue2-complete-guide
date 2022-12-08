<template>
  <div class="container">
    <app-progress-bar
      :quotesCountParent="getLength"
      :maxQuoteLimit="maxQuoteLimit"
    ></app-progress-bar>
    <div class="container-small">
      <div class="form-wrapper">
        <app-input
          @quoteAdd="onQuoteAdded"
          :quotesParent="quotes"
          :hasReachedLimit="hasReachedLimit"
          :getLength="quotesLength"
        ></app-input>
      </div>
    </div>
    <div class="quotes-wrapper">
      <app-quote
        v-for="quote in quotes"
        v-bind:key="quote.id"
        :quoteValue="quote"
        @quoteDelete="onQuoteDeleted"
      ></app-quote>
    </div>
  </div>
</template>

<script>
import Input from "./components/Input.vue";
import ProgressBar from "./components/ProgressBar.vue";
import Quote from "./components/Quote.vue";
export default {
  components: { appProgressBar: ProgressBar, appQuote: Quote, appInput: Input },
  data: function () {
    return {
      quotes: [],
      maxQuoteLimit: 10,
    };
  },
  methods: {
     onQuoteAdded: function (value) {
      console.log("added",value);
      this.quotes = [...this.quotes, value];
      console.log("🚀 ~ file: App.vue:56 ~ this.quotes", this.quotes);
    },
    onQuoteDeleted: function (value) {
      console.log('deleted',value);
      this.quotes = [
        ...this.quotes.filter((q) => q.id !== value.id),
      ];
      console.log("🚀 ~ file: App.vue:61 ~ this.quotes", this.quotes);
    },
  },
  computed: {
    hasReachedLimit: function () {
      return this.quotes.length >= 10;
    },
    quotesLength: function () {
      console.log(
        "🚀 ~ file: App.vue:54 ~ +this.quotes.length",
        +this.quotes.length
      );
      return +this.quotes.length;
    },
  },

};
</script>
<style scoped>
.form-wrapper,
.quotes-wrapper {
  margin-top: 20px;
}
.quotes-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.btn {
  margin: 20px auto 0;
}
</style>
<style>
:root {
  --br: 5px;
  --p: 20px;
  --color-main: rgb(43, 82, 155);
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 700;
}
.container,
.container-small {
  margin: 0 auto;
  padding: 0 var(--p);
}
.container {
  max-width: 1365px;
}
.container-small {
  max-width: 750px;
}
textarea {
  width: 100%;
  padding: 5px;
  border: 1px solid grey;
  border-radius: var(--br);
}
</style>
