<template>
  <div>
    <add-book></add-book>
    <list-book></list-book>
  </div>
</template>

<script>
import List from './components/books/List.vue';
import Add from './components/books/Add.vue';

export default {
  components: {
    listBook: List,
    addBook: Add
  }
}

</script>


