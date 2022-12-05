var data = {
  title: 'The VueJS Instance',
  showParagraph: false
};

const vm1 = new Vue({
  el: '#app1',
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      console.log('Title changed, new value: ' + value);
    }
  }
});
window.vm1 = vm1;

setTimeout(() => {
  vm1.title = 'Changed by the timer!'
  vm1.show();
}, 3000);

const vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance',
    showParagraph: false
  },
  methods: {
    onChange: function() {
      vm1.title = 'Changed from vm2';
    },

  },
});
window.vm2 = vm2;

// $el
// $data - holds data props (can access from outside)
console.log(data === vm1.$data); // true (interact  with js code around vue instance)
// method

