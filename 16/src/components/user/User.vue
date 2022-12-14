<template>
  <div>
    <h1>The User Page</h1>
    <hr />
    <p>loaded id: {{ id }}</p>
    <button @click="navigateToHome" class="btn btn-primary">Go to home</button>
    <hr>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    navigateToHome() {
      // this.$router.push('/');
      this.$router.push({ path: "/" });
    },
  },
  watch: {
    // '$route'(to,from){
    //     this.id = to.params.id
    // }
  }
};
</script>
