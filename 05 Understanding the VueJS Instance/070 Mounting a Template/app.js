var data = {
  title: 'The VueJS Instance',
  showParagraph: false
};

const vm1 = new Vue({
  data: data,
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      console.log(this.$refs);
      this.$refs.btn.innerText = "my ref btn"
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
vm1.$mount('#app1'); // create vue instance and later mount it

const vm2 = new Vue({
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
vm2.$mount('#app2');

// $el
// $data - holds data props (can access from outside)
console.log(data === vm1.$data); // true (interact  with js code around vue instance)
vm1.$refs.heading.innerText = 'Ref Heading Changed from outside'
// $ref/ $this.refs


// create dom el
const vm3Node = document.createElement("div");
vm3Node.id = 'app3';
document.getElementById("app2").after(vm3Node);

// create vm instance
const vm3 = new Vue({
  template: '<h1>Hello!</h1>'
});
// attach instance to DOM el

// mount option 1 (default)
// vm3.$mount('#app3');

// mount option 2 (unorthodox)
vm3.$mount();
document.getElementById("app3").appendChild(vm3.$el);
