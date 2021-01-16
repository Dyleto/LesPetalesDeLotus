<template>
  <v-container>
    <v-form ref="form" v-model="valid" class="signin-form" lazy-validation>
      <v-row>
        <v-col cols="12">
          <div class="text-h5 text-center">
            Créer un compte
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-5" dense>
        <v-col cols="12">
          <v-text-field
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
        <v-col cols="12">
          <v-text-field
            v-model="password"
            filled
            :rules="passwordRules"
            type="password"
            label="Mot de passe"
            required
          />
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12">
          <v-btn
            :disabled="!valid"
            block
            :color="adminErrorMessage ? 'error' : 'primary'"
            large
            :loading="loading"
            @click="signUp"
          >
            M'inscrire
          </v-btn>
        </v-col>
        <v-col cols="12" :v-show="adminErrorMessage" class="v-messages error--text">
          <span>{{ adminErrorMessage }}</span>
        </v-col>
        <v-col cols="12">
          <div class="mt-2">
            <v-btn text x-small color="primary" class="pl-1" to="/login">
              Tu as déjà un compte ?
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
    valid: true,
    loading: false,
    email: '',
    emailRules: [
      v => !!v || "L'e-mail est obligatoire",
      v => /.+@.+\..+/.test(v) || "L'e-mail doit être valide"
    ],
    emailErrorMessages: [],
    username: '',
    usernameRules: [
      v => !!v || "Le nom d'utilisateur est obligatoire",
      v => v.length >= 2 || "Le nom d'utilisateur doit faire au moins 2 caractères"
    ],
    usernameErrorMessages: [],
    password: '',
    showPassword: false,
    passwordRules: [v => !!v || 'Le mot de passe est obligatoire'],
    adminErrorMessage: ''
  }),
  methods: {
    signUp () {
      this.loading = true
      if (this.$refs.form.validate()) {
        this.$store.dispatch('users/signUp', { email: this.email, username: this.username, password: this.password })
          .then(() => {
            this.$router.push('/')
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
        case 'auth/email-already-in-use':
          this.emailErrorMessages = ['Cet email est déjà utilisé par une autre personne']
          break
        default:
          this.adminErrorMessage = 'Désolé, il y a un problème au niveau de la connexion à l\'application, merci de contacter un administrateur'
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
