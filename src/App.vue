<template lang="pug">
  #app
    section.section
      nav.nav.has-shadow
        .container
          .field.has-addons
            input.input.is-large(
              type="text",
              placeholder="Buscar canciones",
              v-model="searchQuery",
            )
            a.button.is-info.is-large(@click="search") Buscar
            a.button.is-danger.is-large &times;
            p
              small {{ searchMessage }}

      .container
        .columns.results
          .column(v-for="t in tracks") {{ t.name }} - {{ t.artist }}
</template>

<script>

const tracks = [
  { name: 'a', artist: 'a' },
  { name: 'b', artist: 'b' },
  { name: 'c', artist: 'c' },
  { name: 'd', artist: 'd' }
]

export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  methods: {
    search () {
      console.log(this.searchQuery)
      this.tracks = tracks
    }
  },
  computed: {
    searchMessage () {
      return `Encontrados ${this.tracks.length}`
    }
  }
}
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top: 50px;
  }

</style>
