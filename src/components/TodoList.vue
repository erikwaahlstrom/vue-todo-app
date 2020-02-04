<template>
  <div>
    <input
      class="input-add-todo"
      type="text"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <button @click="addTodo">Submit</button>
    <ul class="ul-swipe">
      <div
        v-for="(todo, index) in todos"
        :key="index"
        class="div-swipe-container"
      >
        <div
          class="div-swipe-container-inner"
          :class="{ active: todo.toggled }"
        >
          <button class="button-swipe" @click="removeTodo(index)">Trash</button>
          <button class="button-swipe" @click="closeItem(todo)">X</button>
        </div>
        <li class="li-swipe" @click="btnActive(todo)">{{ todo.title }}</li>
      </div>
    </ul>
    <div>
      <ul>
        <li v-for="names of todoFb" v-bind:key="names['.key']">
          {{ names.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { todosRef } from "../firebase";
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
  firebase: {
    todoFb: todosRef
  },
  methods: {
    addTodo() {
      todosRef.push({ title: this.newTodo });
      // if (this.newTodo.trim().length == 0) {
      //   return;
      // }
      // this.todos.unshift({
      //   id: this.idForTodo,
      //   title: this.newTodo,
      //   completed: false,
      //   toggled: false
      // });

      // this.newTodo = "";
      // this.idForTodo++;
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
.input-add-todo {
  font-size: 3em;
  width: 100%;
  margin: 1em 0;
  border: 1px solid lavender;
}

.ul-swipe {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  list-style: none;
}
.div-swipe-container {
  display: flex;
  height: 100px;
  margin-bottom: 1em;
}
.div-swipe-container-inner {
  display: flex;
  width: 0px;
  transition: 0.2s;
}
.button-swipe {
  background-color: red;
  border: none;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.li-swipe {
  font-size: 3em;
  width: 100%;
  background-color: lavender;
  word-break: break-all;
}
.active {
  width: 50%;
}
</style>
