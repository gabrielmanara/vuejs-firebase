<template>
  <div>
    <list-book></list-book>
  </div>
</template>

<script>
import List from './books/List.vue';
import Add from './books/Add.vue';

export default {
  components: {
    listBook: List,
    addBook: Add
  }
}

</script>


