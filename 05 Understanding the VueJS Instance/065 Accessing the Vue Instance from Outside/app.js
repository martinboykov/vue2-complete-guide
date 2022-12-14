
const vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false
  },
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
      alert('Title changed, new value: ' + value);
    }
  }
});
window.vm1 = vm1;

setTimeout(() => {
  vm1.title='Changed by the timer!'
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
