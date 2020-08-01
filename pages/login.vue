<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
      class="signin-form"
      lazy-validation
      @submit.prevent="signIn"
      @input="adminErrorMessage = ''"
    >
      <v-row>
        <v-col cols="12">
          <div class="text-h5 text-center">
            Ah, tu tombes bien !
          </div>
          <div
            class="subtitle-2 text-center text--secondary font-weight-light"
          >
            On attendais plus que toi !
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-5" dense>
        <v-col cols="12">
          <v-text-field
            ref="email"
            v-model="email"
            filled
            :rules="emailRules"
            label="E-mail"
            required
            :error-messages="emailErrorMessages"
            @input="emailErrorMessages = []"
            @blur="emailErrorMessages = []"
          />
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="password"
            filled
            :rules="passwordRules"
            type="password"
            label="Mot de passe"
            required
            :error-messages="passwordErrorMessages"
            @input="passwordErrorMessages = []"
            @blur="passwordErrorMessages = []"
          />
        </v-col>
        <v-col cols="12">
          <v-btn text x-small color="primary" class="mb-4">
            Tu as oublié ton mot de passe ?
          </v-btn>
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12">
          <v-btn
            :loading="loading"
            :disabled="!valid"
            block
            :color="adminErrorMessage ? 'error' : 'primary'"
            large
            type="submit"
          >
            Se connecter
          </v-btn>
        </v-col>
        <v-col cols="12" :v-show="adminErrorMessage" class="v-messages error--text">
          <span>{{ adminErrorMessage }}</span>
        </v-col>
        <v-col cols="12">
          <div class="mt-2">
            <span class="text--secondary text-caption">Besoin d'un compte ?</span>
            <v-btn text x-small color="primary" class="pl-1" to="/register">
              S'inscrire
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>

export default {
  layout: 'public',
  data: () => ({
    loading: false,
    valid: true,
    email: '',
    emailRules: [
      v => !!v || "L'e-mail est obligatoire",
      v => /.+@.+\..+/.test(v) || "L'e-mail doit être valide"
    ],
    emailErrorMessages: [],
    password: '',
    showPassword: false,
    passwordRules: [v => !!v || 'Le mot de passe est obligatoire'],
    passwordErrorMessages: [],
    adminErrorMessage: ''
  }),
  methods: {
    signIn () {
      this.loading = true
      if (this.$refs.form.validate()) {
        this.$store.dispatch('users/signIn', { email: this.email, password: this.password })
          .then(() => {
            this.$router.push('/account')
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
        case 'auth/user-not-found':
          this.emailErrorMessages = ['Aucun utilisateur ne correspond à cet e-mail']
          break
        case 'auth/wrong-password':
          this.passwordErrorMessages = ['Le mot de passe renseigné n\'est pas correct']
          break
        default:
          this.adminErrorMessage = 'Désolé, il y a un problème au niveau de la connexion à l\'application, merci de contacter un administrateur.'
          break
      }
    }
  }
}
</script>

<style scoped>
.signin-form {
  width: 100%;
  max-width: 550px;
}
</style>
