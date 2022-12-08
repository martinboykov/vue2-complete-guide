<template>
  <div>
    <h3>New component</h3>
    <button></button>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      counter: 0,
    };
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
