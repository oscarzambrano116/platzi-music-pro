<template lang="pug">
  .container
    .columns
      .column.is-5.is-offset-4
        pm-track(:track="track")
</template>

<script>
import trackService from '@/services/track'
import PmTrack from '@/components/Track.vue'

export default {
  data () {
    return {
      track: {}
    }
  },
  components: {
    PmTrack
  },
  created () {
    const id = this.$route.params.id
    trackService.trackById(id)
      .then(res => {
        this.track = res
      })
  }
}
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }
</style>
