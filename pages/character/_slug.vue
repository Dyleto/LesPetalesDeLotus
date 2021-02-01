<template>
  <v-layout>
    <v-flex class="px-1 px-md-5">
      <CharacterDisplay :slug="slug" />
    </v-flex>
  </v-layout>
</template>

<script>
import CharacterDisplay from '@/components/character/characterDisplay'

export default {
  components: {
    CharacterDisplay
  },
  asyncData ({ params, redirect }) {
    const slug = params.slug
    if (slug) {
      return { slug }
    } else {
      redirect('/')
    }
  }
}
</script>
