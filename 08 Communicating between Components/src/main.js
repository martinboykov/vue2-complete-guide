import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({ // used like services
  data: function() { // can use data as well in the entire app
    return {

    }
  },
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age)
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})


