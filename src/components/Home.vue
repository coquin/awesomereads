<template>
  <div>
    <div v-for="book in books">
      <h2>{{ book.title }}</h2>
      <h3>By {{ book.author }}</h3>
      <img :src="book.cover" align="left" height="200">
      <p>{{ book.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      books: [{
        title: 'Moby Dick',
        author: 'Herman Melville',
        cover: 'https://images.gr-assets.com/books/1327940656l/153747.jpg',
        description: 'So begins Herman Melville\'s masterpiece, one of the greatest works of imagination in literary history. As Ishmael is drawn into Captain Ahab\'s obsessive quest to slay the white whale Moby-Dick, he finds himself engaged in a metaphysical struggle between good and evil. More than just a novel of adventure, more than an paean to whaling lore and legend, Moby-Dick is a haunting social commentary, populated by some of the most enduring characters in literature; the crew of the Pequod, from stern, Quaker First Mate Starbuck, to the tattooed Polynesian harpooner Queequeg, are a vision of the world in microcosm, the pinnacle of Melville\'s lifelong meditation on America. Written with wonderfully redemptive humour, Moby-Dick is a profound, poetic inquiry into character, faith, and the nature of perception.\nBased on the Northwestern University Press edition, this Penguin Classics edition includes a critical introduction by Andrew Delbanco, as well as valuable explanatory notes, maps, illustrations and a glossary of nautical terms.\nHerman Melville is now regarded as one of America\'s greatest novelists. Much of the material for his novels was drawn from his own experience as a seaman aboard whaling ships. He wrote his masterpiece Moby-Dick in 1851, and died in 1891.'
      }]
    }
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
