<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container.custom
          .nav-left
            .nav-item
              strong 📻 Platzi Music
          .nav-right.nav-menu
            a.nav-item(@click="selectLang('en')") 🇬🇧
            a.nav-item(@click="selectLang('es')") 🇪🇸
            router-link.nav-item(to="search") {{ $t('search') }}
            router-link.nav-item(to="about") {{ $t('about') }}

    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan sonando
        pm-player
</template>

<script>
  import PmPlayer from '@/components/Player'

  export default {
    components: {
      PmPlayer
    },
    methods: {
      selectLang (lang) {
        this.$i18n.locale = lang
      }
    }
  }
</script>

<style lang="scss">
  .custom {
    padding-top: 10px;
    display: flex;
    justify-content: space-between;
  }
  .nav-item {
    margin-right: 10px;
  }
</style>
