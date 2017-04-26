<template>
  <div class="panel-body">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Edit</th>
          <th>Title</th>
          <th>Author</th>
          <th>Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books">
          <td>
            <span class="glyphicon glyphicon-trash" aria-hidden="true" v-on:click="removeBook(book)"></span>
            <span class="glyphicon glyphicon-pencil" aria-hidden="true" v-on:click="editBook(book)"></span>
          </td>
          <td>
              <a v-if="editMode == false" v-bind:href="book.title">{{book.title}}</a>
              <input v-else v-bind:value="book.title" type="text">
          </td>
          <td>
            <span v-if="editMode == false">{{book.author}}</span>
            <input v-else v-bind:value="book.author" type="text">
          </td>
          <td>
            <a v-if="editMode == false" v-bind:href="book.url">{{ book.url }}</a>
            <input v-bind:value="book.url" v-else></input>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import { db } from '../../config'
  var booksRef = db.ref('books');

  export default {
    name: 'app',
    firebase: {
      books: booksRef
    },
    data() {
      return {
        newBook: {
          title: '',
          author: '',
          url: 'http://'
        },
        editMode: false
      }
    },
    methods: {
      removeBook(book) {
        booksRef.child(book['.key']).remove();
      },
      editBook(book) {
        this.editMode = true;
      }
    }
  }
</script>
