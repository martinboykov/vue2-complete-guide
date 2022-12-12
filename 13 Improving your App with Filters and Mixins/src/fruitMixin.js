export const fruitMixin = {
  data() {
    return {
      fruits: ["Apple", "Banana", "Mango", "Melon"],
      filterText: '',
    };
  },
  computed: {
    filteredFruits: function() {
      return this.fruits.filter((f) => f.match(this.filterText));
    },
  },
  created(){
    console.log('created');
  }
};
