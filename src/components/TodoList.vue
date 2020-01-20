<template>
  <div>
    <input
      type="text"
      class="todo-input"
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <ul>
      <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
        <input type="checkbox" v-model="todo.completed" />
        <li
          :class="{completed : todo.completed}"
          v-if="!todo.isEditing"
          @dblclick="editTodo(todo)"
        >{{todo.title}}</li>

        <input
          v-else
          type="text"
          v-model="todo.title"
          v-focus
          @keyup.enter="saveEdit(todo)"
          @keyup.esc="cancelEdit(todo)"
        />

        <div class="remove-item" @click="removeTodo(index)">&times;</div>
      </div>
    </ul>
    <div class="extra-container">
      <label>
        <input type="checkbox" />Check all
      </label>
      {{remaining}} items left
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      idForTodo: 3,
      beforeEditCache: "",
      todos: [
        {
          id: 1,
          title: "Finish vue screencast",
          completed: false,
          isEditing: false
        },
        {
          id: 2,
          title: "Make food",
          completed: false,
          isEditing: false
        }
      ]
    };
  },
  directives: {
    focus: {
      // directive definition
      inserted: function(el) {
        el.focus();
      }
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return;
      }
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        isEditing: false
      });

      this.newTodo = "";
      this.idForTodo++;
    },
    editTodo(todo) {
      this.beforeEditCache = todo.title;
      todo.isEditing = true;
    },
    // Till skillnad från addTodo() behöver vi inte få tag i 'this.newTodo'. Här skicker vi med todo objektet. Därefter returnerar vi => sätter todo.title till det senaste värdet vi ändrade innan vi valde att edit.
    saveEdit(todo) {
      if (todo.title.trim().length == "") {
        todo.title = this.beforeEditCache;
      }
      todo.isEditing = false;
    },
    cancelEdit(todo) {
      todo.title = this.beforeEditCache;
      todo.isEditing = false;
    },
    removeTodo(index) {
      console.log(index);
      this.todos.splice(index, 1);
    }
  }
};
</script>

<style>
.extra-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid grey;
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

.completed {
  text-decoration: line-through;
  color: grey;
}
</style>
