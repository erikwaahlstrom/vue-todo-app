<template>
  <div id="app" class="container">
    <h1>Todo-list app</h1>
    <InputBar />
    <TodoList />
  </div>
</template>

<script>
import InputBar from "./components/InputBar.vue";
import TodoList from "./components/TodoList.vue";

export default {
  components: {
    InputBar,
    TodoList
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
  border: 1px solid red;
}
</style>
