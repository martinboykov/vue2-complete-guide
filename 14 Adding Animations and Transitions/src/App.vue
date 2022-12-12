<template>
  <div class="container">
    <app-base></app-base>
    <app-task></app-task>
    <app-task-max> </app-task-max>
  </div>
</template>

<script>
import gsap from "gsap";
import Base from "./Base.vue";
import Task from "./Task.vue";
import TaskMax from "./TaskMax.vue";
export default {
  components: {
    appBase: Base,
    appTask: Task,
    appTaskMax: TaskMax
  },
};
</script>

<style>

</style>
