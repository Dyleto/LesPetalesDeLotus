<template>
  <v-dialog
    v-model="dialog"
    max-width="450"
  >
    <v-card class="pb-3">
      <v-card-title class="headline dialog-title">
        Tu n'as pas de personnage principal !
      </v-card-title>

      <v-card-text>
        C'est important, on pourra plus facilement faire le lien entre le site et le jeu avec ça !
      </v-card-text>

      <v-card-actions>
        <v-btn
          color="primary"
          to="/settings"
          class="mx-auto"
          @click="dialog = false"
        >
          Aller aux paramètres
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data () {
    return {
      dialog: false
    }
  },
  mounted () {
    this.dialog = !this.$store.getters['users/activeUser'].mainCharacter
  }
}
</script>

<style scoped>
.dialog-title {
  word-break: break-word;
}
</style>
