<template>
  <div id="app" class="container">
    <h1>Todo-list app</h1>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";

export default {
  components: { TodoList }
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
</style>
