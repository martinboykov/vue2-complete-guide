<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change my name</button>
    <p>Name is: {{ name }}</p>
    <p>Age is: {{ age }}</p>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :myName="name"
          @nameWasReset="name = $event"
          :resetFn="resetName"
          :userAge="age"
        ></app-user-detail>
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit :userAge="age" @ageWasEdited="age=$event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from "./UserDetail.vue";
import UserEdit from "./UserEdit.vue";
// import { eventBus } from "../main";

export default {
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit,
  },
  data: function () {
    return {
      name: "Max",
      age: 27,
    };
  },

  methods: {
    changeName() {
      this.name = this.name === "Max" ? "Anna" : "Max";
    },
    resetName() {
      this.name = "Max";
    },
  },
  // event hook
  created() {
    // on comp created
    // eventBus.$on("ageWasEdited", (data) => (this.age = data));
  },
};
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
