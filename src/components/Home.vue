<template>
  <div>
    <header>
      <h1>My awesome read list</h1>
      <router-link :to="{ name: 'AddBook' }">Add a new book</router-link>
    </header>
    <div v-for="book in books">
      <h2>{{ book.title }}</h2>
      <h3>By {{ book.author }}</h3>
      <img :src="book.cover" align="left" height="200">
      <p>{{ book.description }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'home',
  computed: {
    ...mapGetters({
      books: 'allBooks'
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
