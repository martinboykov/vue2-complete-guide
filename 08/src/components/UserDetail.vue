<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ age }}</p>
    <button @click="resetName">Reset Name</button>
    <button @click="resetFn">Reset Name from parent fn</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  data: function () {
    return {
      name: this.myName,
      age: this.userAge
    };
  },
  // props: ['myName']
  // props: {myName:[String,Аrray]}
  props: {
    myName: {
      type: String,
      //   required: true,
      default: "Max", // if im not passing from parent to this comp the property 'myName'
    },
    userAge: Number,
    resetFn: Function, // child -> parent communication with callback function as a prop
  },
  methods: {
    switchName() {
      return this.myName.split("").reverse().join("");
    },
    resetName() {
      this.name = "Max";
      this.$emit("nameWasReset", this.name); // child -> parent communication with custom event
    },
  },
  // event hook
  created() {
    // on comp created
    eventBus.$on("ageWasEdited", (data) => (this.age = data));
  },
};
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
