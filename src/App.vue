<template>
  <div id="app" class="app-container">
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

.app-container {
  font-family: "Montserrat", sans-serif;
  margin: 0 auto;
  padding: 2em;
}
</style>
