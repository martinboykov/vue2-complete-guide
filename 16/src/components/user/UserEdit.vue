<template>
  <div>
    <h3>Edit the User</h3>
    <p>Locale: {{ $route.query.locale }}</p>
    <p>q: {{ $route.query.q }}</p>
    <hr />
    <button class="btn btn-primary" @click="confirm = true">Confirm</button>
    <div style="height: 700px"></div>
    <p id="data">Some data</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      confirmed: false,
    };
  },
  methods: {},
  beforeRouteLeave(to, from, next) {
    // only inside component makes sense for this check
    // component hasnt been created yet
    console.log("inside component");
    if (this.confirmed) {
      next();
    } else {
      if (confirm("Are you sure?")) {
        next();
      } else {
        next(false);
      }
    }
  },
};
</script>
