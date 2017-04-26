<template>
  <div>
    <form v-on:submit.prevent="addBook">
      <div class="col-sm-4">
        <label>Title</label>
        <input type="text" 
        v-model="newBook.title"
        class="form-control">
      </div>
      <div class="col-sm-4">
        <label>Author</label>
        <input type="text" 
        v-model="newBook.author"
        class="form-control">
      </div>
      <div class="col-sm-4">
        <label>Url</label>
        <input type="text" 
        v-model="newBook.url"
        class="form-control">
      </div>
      <div class="col-sm-12">
        <button class="btn btn-primary pull-right">Salvar</button>
      </div>
    </form>
  </div>
</template>

<script>
import { db } from '../../config'
var booksRef = db.ref('books');

export default {
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
    addBook() {
      booksRef.push(this.newBook);
    }
  }
}
  
</script>