<template>
  <div id="app">
    <h1>Hi</h1>
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
</style>
