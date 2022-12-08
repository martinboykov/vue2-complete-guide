<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <hr />
        <button class="btn btn-blue" @click="selectedComponent = 'appQuote'">Quote</button>
        <button class="btn btn-red" @click="selectedComponent = 'appAuthor'">Author</button>
        <button class="btn btn-green" @click="selectedComponent = 'appNew'">New</button>
        <hr />
        <p>{{ selectedComponent }}</p>
        <keep-alive>
          <component :is="selectedComponent">
            <p>default content</p>
          </component>
        </keep-alive>
        <!-- <app-quote>
          <h2 slot="title">{{ title }}</h2>
          <p>{{ content }}</p>
        </app-quote> -->
      </div>
    </div>
  </div>
</template>

<script>
import Quote from "./components/Quote.vue";
import New from "./components/New.vue";
import Author from "./components/Author.vue";
export default {
  data: function () {
    return {
      title: "The Quote",
      content: "A wonderful quote",
      selectedComponent: "appQuote",
    };
  },
  components: {
    appQuote: Quote,
    appNew: New,
    appAuthor: Author,
  },
  beforeMount: function () {
    console.log("beforeMount");
  },
  mounted: function () {
    console.log("mounted");
  },
  beforeUpdate: function () {
    console.log("beforeUpdate");
  },
  updated: function () {
    console.log("updated");
  },
  beforeDestroy: function () {
    console.log("beforeDestroy");
  },
  destroyed: function () {
    console.log("destroyed");
  },
  activated: function () {
    console.log("activated");
  },
  deactivated: function () {
    console.log("deactivated");
  },
  methods: {
    destroy: function () {
      this.$destroy();
    },
  },
};
</script>

<style scoped>
</style>
