<template>
  <div class="todolist-container">
    <input
      text="text"
      class="todo-input"
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <ul>
      <li v-for="todo in todos" :key="todo.id" class="todo-item">{{todo.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      todos: [
        {
          id: 1,
          title: "Finish vue screencast",
          boolean: false
        },
        {
          id: 2,
          title: "Make food",
          boolean: false
        }
      ]
    };
  },
  methods: {
    addTodo() {
     
    }
  }
};
</script>

<style>
.todolist-container {
  border: 2px solid blue;
}

.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
}
</style>
