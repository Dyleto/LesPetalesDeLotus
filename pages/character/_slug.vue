<template>
  <v-layout>
    <v-flex class="px-1 px-md-5">
      <div>{{ character }}</div>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  asyncData ({ params, redirect }) {
    const slug = params.slug
    if (slug) {
      return { slug }
    } else {
      redirect('/')
    }
  },
  computed: {
    ...mapGetters({ character: 'character/getCharacter' })
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
