<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-card-title class="headline">
          Page d'accueil
        </v-card-title>
        <v-card-subtitle>
          En cours de Dev
        </v-card-subtitle>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  components: {
  },
  methods: {
    signOut () {
      this.$store.dispatch('users/signOut').then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>
