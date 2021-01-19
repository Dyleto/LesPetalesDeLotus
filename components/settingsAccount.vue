<template>
  <v-flex
    xs12
    md10
    offset-md-1
    xl8
    offset-xl-2
  >
    <div class="text-h3 font-weight-bold mb-3">
      Compte
    </div>
    <v-divider />
    <v-form
      ref="form"
      v-model="valid"
      class="mt-5"
      lazy-validation
      @input="adminErrorMessage = ''"
      @submit.prevent="save"
    >
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="username"
            filled
            :rules="usernameRules"
            label="Nom d'utilisateur"
            required
            :error-messages="usernameErrorMessages"
            @input="usernameErrorMessages = []"
            @blur="usernameErrorMessages = []"
          />
        </v-col>

        <v-col cols="12" class="text-right">
          <v-btn
            text
            @click="reset"
          >
            Annuler
          </v-btn>
          <v-btn
            :disabled="!valid"
            :color="adminErrorMessage ? 'error' : 'success'"
            :loading="loading"
            type="submit"
          >
            Enregistrer
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-flex>
</template>

<script>
export default {
  data: () => ({
    uid: '',
    valid: true,
    loading: false,
    username: '',
    usernameRules: [
      v => !!v || "Le nom d'utilisateur est obligatoire",
      v => v.length >= 2 || "Le nom d'utilisateur doit faire au moins 2 caractères"
    ],
    usernameErrorMessages: [],
    adminErrorMessage: ''
  }),
  mounted () {
    this.reset()
  },
  methods: {
    reset () {
      const user = this.$store.getters['users/activeUser']
      if (user) {
        this.uid = user.uid
        this.username = user.username
      }
    },
    save () {
      this.loading = true
      if (this.$refs.form.validate()) {
        this.$store.dispatch('users/updateUser', { username: this.username, uid: this.uid })
          .then(() => {
            this.loading = false
            this.$emit('successSnackbar')
          })
          .catch((err) => {
            this.handleError(err)
            this.loading = false
          })
      } else {
        this.loading = false
      }
    },
    handleError (error) {
      switch (error.code) {
        case 'auth/username-already-in-use':
          this.usernameErrorMessages = ['Ce nom d\'utilisateur est déjà utilisé par une autre personne']
          break
        default:
          this.adminErrorMessage = 'Désolé, il y a un problème au niveau de la connexion à l\'application, merci de contacter un administrateur'
          break
      }
    }
  }
}
</script>
