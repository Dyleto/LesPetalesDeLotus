<template>
  <v-container>
    <v-form ref="form" v-model="valid" class="signin-form" lazy-validation @submit.prevent="signIn">
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
          <v-text-field v-model="email" filled :rules="emailRules" label="E-mail" required />
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
            color="primary"
            large
            type="submit"
          >
            Se connecter
          </v-btn>
        </v-col>
        <v-col cols="12">
          <div class="mt-2">
            <span class="text--secondary text-caption">Besoin d'un compte ?</span>
            <v-btn text x-small color="primary" class="pl-1" to="/signup">
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
  layout: 'signin',
  data: () => ({
    loading: false,
    valid: true,
    email: '',
    emailRules: [
      v => !!v || "L'e-mail est obligatoire",
      v => /.+@.+\..+/.test(v) || "L'e-mail doit être valide"
    ],
    password: '',
    showPassword: false,
    passwordRules: [v => !!v || 'Le mot de passe est obligatoire'],
    error: ''
  }),
  methods: {
    signIn () {
      this.loading = true
      if (this.$refs.form.validate()) {
        this.$store.dispatch('users/signIn', { email: this.email, password: this.password }).then(() => {
          this.$router.push('/account')
        })
          .catch((err) => {
            this.loading = false
            this.error = err
          })
      } else {
        this.loading = false
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
