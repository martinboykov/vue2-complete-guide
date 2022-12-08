<template>
  <div>
    <div class="title">
      <!-- SLOT: pass data from outside (like webcomponents) -->
      <!-- SLOT: styling is on child, data is on parent -->
      <slot name="title"></slot>
      <span><slot name="subtitle">The Subtitle</slot></span>
    </div>
    <hr />
    <div class="content">
      <!-- <slot name="content"></slot> -->

      <!-- default slot -->
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
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
div {
  border: 1px solid #ccc;
  box-shadow: 1px 1px 1px 2px #000;
  padding: 30px;
  margin: auto;
  text-align: center;
}
h2 {
  color: red;
  font-weight: 900;
}
.title {
  font-style: italic;
}
</style>
