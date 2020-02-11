<template>
  <div id="app" class="app-container">
    <div>
      <input class="input-add-todo" type="text" v-model="newTodo" @keyup.enter="addTodo" />
      <button @click="addTodo">Submit</button>
      <div>
        <ul>
          <li v-for="todo in todos" :key="todo.id">
            <p class="wow">{{ todo.title }}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { todosCollection } from "./firebase";
export default {
  data() {
    return {
      newTodo: "",
      todos: []
    };
  },
  firestore() {
    return {
      todos: todosCollection
    };
  },
  created() {
    todosCollection.get().then(snapshot => {
      let tempTodos = [];
      snapshot.docs.forEach(doc => {
        const data = {
          id: doc.id,
          title: doc.data().title
        };
        tempTodos.push(data);
      });
      this.todos = tempTodos;
    });
  },
  methods: {
    addTodo() {
      todosCollection
        .add({ title: this.newTodo })
        .then(function(docRef) {
          console.log("Doc written with ID", docRef.id);
        })
        .catch(function(error) {
          console.error("Error adding document", error);
        });
      this.newTodo = "";
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

.app-container {
  font-family: "Montserrat", sans-serif;
  margin: 0 auto;
  padding: 2em;
}

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

.wow {
  color: red;
}
</style>
