<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Http</h1>
        <div class="form-group">
          <label>Username</label>
          <input type="text" class="form-control" v-model="user.username" />
        </div>
        <div class="form-group">
          <label>Mail</label>
          <input type="email" class="form-control" v-model="user.email" />
        </div>
        <button class="btn btn-primary" @click="submit">Submit</button>
        <hr />
        <input type="text" class="form-control" v-model="node" />
        <br /><br />

        <button class="btn btn-primary" @click="getData">Get Data</button>
        <br /><br />
        <ul class="list-group">
          <li class="list-group-item" v-for="(u, i) in users" :key="i">
            {{ u.username }} - {{ u.email }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    const customActions = {
      saveAlt: { method: "POST", url: "aletrnative.json" },
      getData: { method: "GET" },
    };
    // testing resource
    // this.resource = this.$resource("data.json");

    // testing customAction
    // this.resource = this.$resource("data.json", {},customActions);

    // testing template url
    this.resource = this.$resource("{node}.json", {}, customActions);
  },
  data() {
    return {
      user: {
        username: "",
        email: "",
      },
      users: [],
      resource: {},
      node: "data",
    };
  },
  methods: {
    submit() {
      console.log(this.$http);

      //   this.$http.post("", this.user).then(
      //     (res) => {
      //       console.log(res);
      //     },
      //     (error) => console.log(error)
      //   );

      // testing resource
      //   this.resource.save({}, this.user);
      this.resource.saveAlt(this.user);
    },
    getData() {
    //   this.$http.get("").then((res) => {
    //     const modifiedResponse = res.body; // to test interceptors
    //     console.log(modifiedResponse);
    //     const result = [];
    //     for (const key in modifiedResponse) {
    //       if (Object.hasOwnProperty.call(modifiedResponse, key)) {
    //         const element = modifiedResponse[key];
    //         result.push(element);
    //       }
    //     }
    //     this.users = [...result];
    //     console.log(this.users);
    //   });
    this.resource.getData({node: this.node}).then((res) => {
        const modifiedResponse = res.body; // to test interceptors
        console.log(modifiedResponse);
        const result = [];
        for (const key in modifiedResponse) {
          if (Object.hasOwnProperty.call(modifiedResponse, key)) {
            const element = modifiedResponse[key];
            result.push(element);
          }
        }
        this.users = [...result];
        console.log(this.users);
      });
    },
  },
};
</script>

<style>
</style>
