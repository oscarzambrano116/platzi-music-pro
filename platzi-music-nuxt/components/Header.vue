<template lang="pug">
  section.hero.is-success
    .hero-head
      header.nav
        .container.custom
          .nav-left
            .nav-item
              strong 📻 Platzi Music
          .nav-right.nav-menu
            router-link.nav-item(to="search") Buscar
            router-link.nav-item(to="about") Nosotros

    .hero-body
      .container.has-text-centered
        h1.title Platzi Music
        h2.subtitle Canciones que estan sonando
</template>

<script>
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
