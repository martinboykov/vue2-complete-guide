<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Built-in Directives</h1>
        <p v-text="'Some text'"></p>
        <p v-html="'<strong>Some html</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Custom Directives</h1>
        <!-- <p v-highlighted="'green'">Color this></p> -->
        <p v-highlighted:background.delayed="'green'">Color this</p>
        <p
          v-local-highlighted:background.delayed.blink="{
            mainColor: 'red',
            secondColor: 'green',
            delay: 500,
            timeout: 1000,
          }"
        >
          Color this
        </p>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  directives: {
    "local-highlighted": {
      bind(el, binding, vnode) {
        let delay = binding.value.delay || 0; // with modifier
        if (binding.modifiers["delayed"]) {
          delay = binding.value.delay;
        }
        if (binding.modifiers["blink"]) {
          let mainColor = binding.value.mainColor;
          let secondColor = binding.value.secondColor;
          let currentColor = mainColor;
          setTimeout(() => {
            setInterval(() => {
              currentColor === secondColor
                ? (currentColor = mainColor)
                : (currentColor = secondColor);
              if (binding.arg === "background") {
                // with arguments
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, 1000);
          }, delay);
        } else {
          setTimeout(() => {
            if (binding.arg === "background") {
              // with arguments
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      },
    },
  },
};
</script>

<style>
</style>
