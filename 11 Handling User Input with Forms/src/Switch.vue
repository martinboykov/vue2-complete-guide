<template>
  <div>
    <div id="on" @click="switched(true)" :class="{ active: value }">On</div>
    <div id="off" @click="switched(false)" :class="{ active: !value }">Off</div>
  </div>
</template>
<script>
export default {
  props: ["value"],
  data: function () {
    return {
    };
  },
  methods: {
    switched(isOn) {
      this.$emit("input", isOn);
    },
  },
};
</script>
<style scoped>
#on,
#off {
  display: inline-block;
  width: 40px;
  height: 20px;
  padding: 2px;
  margin: 10px -2px;
  text-align: center;
  box-sizing: content-box;
  background-color: lightgray;
  cursor: pointer;
}
#on:hover,
#on.active {
  background-color: lightgreen;
}
#off:hover,
#off.active {
  background-color: lightcoral;
}
</style>
