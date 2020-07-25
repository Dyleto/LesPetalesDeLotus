<template>
  <v-container>
    <v-form
      ref="form"
      v-model="valid"
      class="login-form"
      lazy-validation
    >
      <v-row>
        <v-col cols="12">
          <div class="text-h5 text-center">
            Ah, tu tombes bien !
          </div>
          <div class="subtitle-2 text-center text--secondary font-weight-light">
            On attendais plus que toi !
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-5">
        <v-text-field
          v-model="email"
          filled
          :rules="emailRules"
          label="E-mail"
          required
        />
      </v-row>

      <v-row>
        <v-text-field
          v-model="password"
          filled
          :rules="passwordRules"
          type="password"
          label="Mot de passe"
          required
        />
      </v-row>
      <v-row>
        <v-btn
          text
          x-small
          color="primary"
          class="mb-4"
        >
          Tu as oublié ton mot de passe ?
        </v-btn>
      </v-row>
      <v-row>
        <v-btn
          :disabled="!valid"
          block
          color="primary"
          large
          @click="signIn"
        >
          Se connecter
        </v-btn>
      </v-row>
      <v-row>
        <div class="mt-2">
          <span class="text--secondary text-caption">
            Besoin d'un compte ?
          </span>
          <v-btn
            text
            x-small
            color="primary"
            class="pl-1"
          >
            S'inscrire
          </v-btn>
        </div>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  layout: 'login',
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'L\'e-mail est obligatoire',
      v => /.+@.+\..+/.test(v) || 'L\'e-mail doit être valide'
    ],
    password: '',
    showPassword: false,
    passwordRules: [
      v => !!v || 'Le mot de passe est obligatoire'
    ]
  }),
  methods: {
    signIn () {
      this.$refs.form.validate()
    }
  }
}
</script>

<style scoped>
.login-form {
  width: 100%;
  max-width: 550px;
}
</style>
