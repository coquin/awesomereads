<template>
  <div>
    <header>
      <h1>Add a new book</h1>
    </header>
    <section>
      <form @submit.prevent="addNewBook">
        <label>Title</label><input type="text" v-model="book.title"><br>
        <label>Author</label><input type="text" v-model="book.author"><br>
        <label>Cover</label><input type="text" v-model="book.cover"><br>
        <label>Description</label><input type="text" v-model="book.description"><br>
        <hr>
        <button @click.prevent="cancelAdd">Cancel</button>
        <button>Add Book</button>
      </form>
    </section>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'add-book',
  data () {
    return {
      book: {
        title: '',
        author: '',
        cover: '',
        description: ''
      }
    }
  },
  methods: {
    ...mapMutations([
      'addBook'
    ]),

    addNewBook () {
      if (this.book.title && this.book.author && this.book.cover && this.book.description) {
        this.addBook(this.book)
        this.$router.push({ name: 'Home' })
      }
    },

    cancelAdd () {
      this.$router.push({ name: 'Home' })
    }
  }
}
</script>
