<template>
  <div>
    <input
      type="text"
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <ul class="list-body">
      <div v-for="(todo, index) in todos" :key="index" class="swipe-btn-container">
        <div class="swipe-btn-container-inner" :class="{'active': todo.toggled}">
          <button class="swipe-btn" @click="removeTodo(index)">Trash</button>
          <button class="swipe-btn" @click="closeItem(todo)">X</button>
        </div>
        <li class="swipe-list-item" @dblclick="btnActive(todo)">{{todo.title}}</li>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodo: "",
      idForTodo: 4,
      todos: [
        {
          id: 1,
          title: "Finish vue screencast",
          toggled: false
        },
        {
          id: 2,
          title: "Make food",
          toggled: false
        },
        {
          id: 3,
          title: "Check stuff",
          toggled: false
        }
      ]
    };
  },
  directives: {
    focus: {
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
      this.todos.unshift({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        toggled: false
      });

      this.newTodo = "";
      this.idForTodo++;
    },
    removeTodo(index) {
      this.$delete(this.todos, index);
    },
    btnActive(todo) {
      todo.toggled = true;
    },
    closeItem(todo) {
      todo.toggled = false;
    }
  }
};
</script>

<style>
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
