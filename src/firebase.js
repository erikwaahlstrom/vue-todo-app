import { initializeApp } from "firebase";

const app = initializeApp({
  apiKey: "AIzaSyACADjP9Gk0CA5f_pzM4DqlaBiBB6e8U0E",
  authDomain: "fir-vue-eb775.firebaseapp.com",
  databaseURL: "https://fir-vue-eb775.firebaseio.com",
  projectId: "fir-vue-eb775",
  storageBucket: "fir-vue-eb775.appspot.com",
  messagingSenderId: "1053548545304",
  appId: "1:1053548545304:web:8ed3b2f074869d02078a6d",
  measurementId: "G-9K3LGTCKX7"
});

export const db = app.database();
export const todosRef = db.ref("todos");
