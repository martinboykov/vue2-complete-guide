import Vue from 'vue'
import App from './App.vue'
import gsap from "gsap";
Vue.use(gsap);
new Vue({
  el: '#app',
  render: h => h(App)
})
