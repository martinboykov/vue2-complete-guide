<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{ age }}</p>
    <button @click="editAge">Edit Age</button>
  </div>
</template>

<script>
import { eventBus } from "../main";
export default {
  data: function () {
    return {
      age: this.userAge,
    };
  },
  props: {
    userAge: Number,
  },
  methods: {
    editAge: function () {
      this.age = 30;
      //   this.$emit("ageWasEdited", this.age); // communication with parent

      // communication with sibling using services
      // eventBus.$emit("ageWasEdited", this.age); // emitted on separated eventBus Vue instance
      eventBus.changeAge(this.age); // used width method from eventBus
    },
  },
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
