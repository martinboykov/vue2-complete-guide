<template>
  <div>
    <app-server v-for="(n, i) in 5" v-bind:key="i"></app-server>
  </div>
</template>
<script>
import ServerStatus from "./ServerStatus.vue";
export default {
  components: {
    "app-server": ServerStatus,
  },
};
</script>
<style scoped>
</style>
