import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const STORAGE_KEY = 'books'

let read = (key) => JSON.parse(localStorage.getItem(key))
let write = (key, data) => localStorage.setItem(key, JSON.stringify(data))

export default new Vuex.Store({
  state: {
    books: read(STORAGE_KEY) || []
  },
  getters: {
    allBooks: (state) => state.books
  },
  mutations: {
    addBook (state, book) {
      state.books.unshift(book)
      write(STORAGE_KEY, state.books)
    }
  }
})
