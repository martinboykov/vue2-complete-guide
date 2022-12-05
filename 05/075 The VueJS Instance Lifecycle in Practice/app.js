const vm1 = new Vue({
  data: {
    title: 'The VueJS Instance',
  },
  beforeMount: function() {
    console.log('beforeMount');
  },
  mounted: function() {
    console.log('mounted');
  },
  beforeUpdate: function() {
    console.log('beforeUpdate');
  },
  updated: function() {
    console.log('updated');
  },
  beforeDestroy: function() {
    console.log('beforeDestroy');
  },
  destroyed: function() {
    console.log('destroyed');
  },
  methods:{
    destroy: function(){
      this.$destroy();
    }
  }
});
window.vm1 = vm1;
vm1.$mount('#app1'); // create vue instance and later mount it
