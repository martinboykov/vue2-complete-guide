import Vue from 'vue'
import App from './App.vue'
import VueResource from "vue-resource";
// var VueResource = require('vue-resource');
// console.log("🚀 ~ file: main.js:5 ~ VueResource", VueResource)
Vue.use(VueResource);
// Vue.http.options.root = "https://vue2-183f8-default-rtdb.europe-west1.firebasedatabase.app/data.json"
Vue.http.options.root = "https://vue2-183f8-default-rtdb.europe-west1.firebasedatabase.app/" // to test resource
Vue.http.interceptors.push((request, next) => {
  console.log(request);
  // if(request.method === 'POST'){
  //   request.method = 'PUT'
  // }
  next((response) => {
    // response.body =
    // {
    //   data: response.body,
    // }
  })
})
new Vue({
  el: '#app',
  render: h => h(App)
})
