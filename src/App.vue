<template>
  <div class="panel-body">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books">
          <td><a v-bind:href="book.url">{{book.title}}</a></td>
          <td>{{book.author}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Firebase from 'firebase'

var config = {
    apiKey: "AIzaSyAFL-ImGIlREbPgZ26R-l7w4UG4qU_qASI",
    authDomain: "library-db2ec.firebaseapp.com",
    databaseURL: "https://library-db2ec.firebaseio.com",
    projectId: "library-db2ec",
    storageBucket: "library-db2ec.appspot.com",
    messagingSenderId: "327995204290"
  };

Firebase.initializeApp(config);

var db = Firebase.database()

let booksRef = db.ref('books')


export default {
  name: 'app',
  firebase: {
    books: booksRef,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
