<template>
  <div class="panel-body">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Edit</th>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books">
          <td><span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeBook(book)"></span></td>
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
  }

  let app = Firebase.initializeApp(config)
  let db = app.database()

  export default {
    name: 'app',
    firebase: {
      books: db.ref('books')
    },
    data() {
      return {
        newBook: {
          title: '',
          author: '',
          url: 'http://'
        }
      }
    },
    methods: {
      removeBook(book) {
        booksRef.child(book['.key']).remove();
      },
      addBook() {

      }
    }
  }
</script>