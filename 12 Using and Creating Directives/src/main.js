import Vue from 'vue';
import App from './App.vue';

Vue.directive('highlighted', {
  // Hooks
  // 1. Bind hook - once the directive is attached (should be treated readonly)
  // 2. Inserted - inserted in parent node
  // 3. Update - Once component is updated (without children)
  // 4. Component updated - Once component is updated (with children)
  // 5. unbind - once directive is removed
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green'; // predefined
    // el.style.backgroundColor = binding.value; // dynamic
    let delay = 0; // with modifier
    if (binding.modifiers['delayed']) {
      delay = 3000;
    }
    setTimeout(() => {
      if (binding.arg === 'background') { // with arguments
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay);

  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
