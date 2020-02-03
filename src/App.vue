<template>
  <div id="app" class="container">
    <h1>Todo-list app</h1>
    <todo-list></todo-list>
    <ul class="list-body">
      <div v-for="(todo, i) in todos" :key="i" class="swipe-btn-container">
        <div class="swipe-btn-container-inner" :class="{'active': todo.toggled}">
          <button class="swipe-btn">Trash</button>
          <button class="swipe-btn" @click="closeItem(todo)">X</button>
        </div>
        <li class="swipe-list-item" v-touch:swipe.right="btnActive(todo)">{{todo.title}}</li>
      </div>
    </ul>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import Vue from "vue";
import Vue2TouchEvents from "vue2-touch-events";
Vue.use(Vue2TouchEvents);
export default {
  data() {
    return {
      toggled: false,
      todos: [
        {
          title: "List item",
          toggled: false
        },
        {
          title: "List item 2",
          toggled: false
        }
      ]
    };
  },

  components: { TodoList },

  methods: {
    btnActive(todo) {
      return function(direction, event) {
        todo.toggled = true;
        console.log(todo);
      };
    },
    closeItem(todo) {
      todo.toggled = false;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
}

.container {
  margin: 0 auto;
  padding: 0;
}

.swipe-btn-container {
  display: flex;
  height: 100px;
}

.swipe-btn-container-inner {
  display: flex;
  width: 0px;
  transition: 0.2s;
}

.swipe-btn {
  background-color: red;
  border: none;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.swipe-list-item {
  height: 100%;
  width: 100%;
  border: 1px solid blue;
}

.active {
  width: 50%;
}

.list-body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  list-style: none;
  border: 1px solid red;
}
</style>
