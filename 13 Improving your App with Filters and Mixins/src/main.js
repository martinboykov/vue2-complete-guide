import Vue from 'vue'
import App from './App.vue'
Vue.filter('toLowerCase',function(value){
  return value.toLowerCase();
})
Vue.mixin({
  created(){
    console.log('Global mixin - Created Hook!');
  }
})
new Vue({
  el: '#app',
  render: h => h(App)
})
