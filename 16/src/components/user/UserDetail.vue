<template>
  <div>
    <h3>Some User Details</h3>
    <p>User loaded ID: {{ $route.params.id }}</p>
    <!-- <router-link
      tag="button"
      :to="'/user/' + $route.params.id + '/edit/'"
      class="btn btn-primary"
      >Edit user</router-link
    > -->
    <!-- width naming -->
    <router-link
      tag="button"
      :to="{
        name: 'userEdit',
        params: { id: $route.params.id },
        query: { locale: 'en', q: 100 }, // testing query
        hash: '#data',
      }"
      class="btn btn-primary"
      >Edit user</router-link
    >
  </div>
</template>
<script>
export default {
  beforeRouteEnter(to, from, next) {
    // component hasnt been created yet
    console.log("inside component");
    // next((vm) => {
    //     // is created
    // });
    next();
  },
};
</script>
