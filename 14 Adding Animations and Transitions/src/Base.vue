<template>
  <div class="row">
    <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
      <h1>Animations</h1>
      <hr />
      <select v-model="alertAnimation">
        <option value="fade">Fade</option>
        <option value="slide">Slide</option>
      </select>
      <button class="btn btn-primary" @click="show = !show">Show Alert</button>
      <br /><br />
      <!-- <transition
          appear
          enter-active-class="animate__animated animate__bounce"
          leave-active-class="animate__animated animate__headShake"
        >
          <div class="alert alert-info" v-show="show">This is some info</div>
        </transition> -->
      <transition :name="alertAnimation" type="transition">
        <div class="alert alert-info" v-show="show">This is some info</div>
      </transition>
      <transition :name="alertAnimation" type="animation">
        <div class="alert alert-info" v-show="show">This is some info</div>
      </transition>
      <transition :name="alertAnimation" mode="out-in">
        <div class="alert alert-info" v-if="show" key="info">
          This is some info
        </div>
        <div class="alert alert-warning" v-else key="warning">
          This is some Warning
        </div>
      </transition>
      <hr />
      <button class="btn btn=primary" @click="load = !load">
        Load / Remove Element
      </button>
      <br />
      <br />
      <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @enter-cancelled="enterCancelled"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
        @leave-cancelled="leaveCancelled"
        :css="false"
      >
        <div
          style="width: 0px; height: 100px; background-color: green"
          v-if="load"
        ></div>
      </transition>
      <hr />

      <button class="btn btn-primary" @click="onLoad">Load</button>
      <button class="btn btn-primary" @click="onRemove">Remove</button>
      <br /><br />
      <div style="width: 100%; height: 10px; background-color: lightgrey">
        <div
          class="progress"
          style="width: 0%; height: 10px; background-color: green"
        ></div>
      </div>

      <hr />
      <button class="btn btn-primary" @click="addItem">Add Item</button>
      <br /><br />
      <ul class="list-group">
        <transition-group name="slide">
          <li
            class="list-group-item"
            v-for="(number, index) in numbers"
            :key="number"
            @click="removeItem(index)"
            style="cursor: pointer"
          >
            {{ number }}
          </li>
        </transition-group>
      </ul>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
export default {
  data() {
    return {
      show: true,
      load: false,
      alertAnimation: "fade",
      minWidth: 0,
      maxWidth: 100,
      numbers: [1, 2, 3, 4, 5],
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("🚀 ~ file: App.vue:71 ~ beforeEnter ~ el", el);
      // el.style.width = this.minWidth;
      gsap.fromTo(
        el,
        { width: el.style.width },
        {
          duration: 1.4,
          width: this.maxWidth,
        }
      );
    },
    enter(el, done) {
      // console.log("🚀 ~ file: App.vue:75 ~ enter ~ el", el);
      // let round = 1;
      // const interval = setInterval(() => {
      //   el.style.width = this.minWidth + round * 10 + "px";
      //   round++;
      //   if (round > 20) {
      //     clearInterval(interval);
      //     done();
      //   }
      // }, 20);
      // done();
      el.animate(
        {
          width: `${this.maxWidth}px`,
        },
        { duration: 1200, fill: "forwards" }
      );
      done();
    },
    afterEnter(el) {
      console.log("🚀 ~ file: App.vue:80 ~ afterEnter ~ el", el);
    },
    enterCancelled(el) {
      console.log("🚀 ~ file: App.vue:84 ~ enterCancelled ~ el", el);
    },
    beforeLeave(el) {
      console.log("🚀 ~ file: App.vue:88 ~ beforeLeave ~ el", el);
      // el.style.width = this.maxWidth;
      gsap.to(el, {
        duration: 1.4,
        width: this.minWidth,
      });
    },
    // on restart jumps to 0
    leave(el, done) {
      console.log("🚀 ~ file: App.vue:92 ~ leave ~ el", el);

      el.animate(
        {
          width: `${this.minWidth}px`,
        },
        { duration: 1200, fill: "forwards" }
      );

      // done();
    },
    afterLeave(el) {
      console.log("🚀 ~ file: App.vue:96 ~ afterLeave ~ el", el);
      el.style.width = 100;
    },
    leaveCancelled(el) {
      console.log("🚀 ~ file: App.vue:100 ~ leaveCancelled ~ el", el);
    },
    onLoad() {
      gsap.to(".progress", {
        duration: 1.4,
        width: this.maxWidth + "%",
      });
    },
    onRemove() {
      gsap.to(".progress", {
        duration: 1.4,
        width: this.minWidth + "%",
      });
    },
    addItem() {
      const pos = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(pos, 0, this.numbers.length + 1);
      // this.numbers = [...this.numbers, this.numbers.length + 1];
    },
    removeItem(index) {
      this.numbers = [...this.numbers.filter((n, i) => i !== index)];
    },
  },
};
</script>

<style>
/* fade */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s;
}
.fade-enter, .fade-leave-active /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

/* slide */
.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 0.8s ease-out forwards;
  transition: opacity 0.8s ease-out;
}
.slide-leave {
}
.slide-leave-active {
  animation: slide-out 0.8s ease-out forwards;
  transition: opacity 0.8s ease-out;
  opacity: 0;
  position: absolute;
}
.slide-move {
  transition: transform 1s;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(20px);
    opacity: 0;
  }
}
</style>
