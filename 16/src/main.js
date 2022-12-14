import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { routes } from "./routes";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if(savedPosition){
      return savedPositiond;
    }
    if (to.hash) {
      return { selector: to.hash }
    }
    return { x: 0, y: 0 };
  }
});

router.beforeEach((to,from,next)=>{
  console.log('global beforeEach');
  next(); // continue
  // next(false) aboort go to the route
  // next({}) // object to redirect
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
