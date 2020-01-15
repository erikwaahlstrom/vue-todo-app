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
      <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
        <li>{{todo.title}}</li>
        <div class="remove-item" @click="removeTodo(index)">&times;</div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      idForTodo: 3,
      todos: [
        {
          id: 1,
          title: "Finish vue screencast",
          completed: false
        },
        {
          id: 2,
          title: "Make food",
          completed: false
        }
      ]
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return;
      }
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false
      });

      this.newTodo = "";
      this.idForTodo++;
    },
    // V-for skapar ett index för varje element som skapas. Klick event tar sedan med sig denna unika index till removeTodo funktionen. Där väljer vi ut vilken array som vi ska redigera och sedan vilket object i ordningen som ska tas bort.
    removeTodo(index) {
      console.log(index);
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style>
.todolist-container {
  border: 2px solid blue;
}

.todo-item {
  font-size: 20px;
  margin-bottom: 14px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todo-input {
  width: 100%;
  padding: 10px 18px;
  font-size: 18px;
  margin-bottom: 16px;
}

.remove-item {
  cursor: pointer;
}

.remove-item:hover {
  background-color: #e8e8e8;
}
</style>
