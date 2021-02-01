<template>
  <div>
    <v-img
      class="character-main-raw"
      :src="character.main_raw_url"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  props: ['slug'],
  computed: {
    ...mapGetters({ character: 'character/character' })
  },
  mounted () {
    this.loadCharacter(this.slug)
  },
  methods: {
    ...mapActions({
      loadCharacter: 'character/loadCharacter'
    })
  }
}
</script>

<style scoped>
.character-main-raw {
  display: block;
  height: 800px;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  top: -100px;
  z-index: 1;
}

</style>
