<template>
  <div id="app" class="container">
    <h1>Todo-list app</h1>
    <TodoList />
    <div class="swipe" v-touch:swipe.right="swipeRightHandler">
      Swipe right here
    </div>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import Vue from "vue";
import Vue2TouchEvents from "vue2-touch-events";
Vue.use(Vue2TouchEvents);
export default {
  components: { TodoList },
  methods: {
    swipeRightHandler(direction) {
      console.log(direction);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

.container {
  max-width: 600px;
  margin: 0 auto;
}

.swipe {
  height: 100px;
  width: 100px;
  background-color: red;
}
</style>
