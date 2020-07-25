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
      </v-row>
      <v-row dense>
        <v-col cols="12">
          <v-btn :disabled="!valid" block color="primary" large @click="signUp">
            M'inscrire
          </v-btn>
        </v-col>
        <v-col cols="12">
          <div class="mt-2">
            <v-btn text x-small color="primary" class="pl-1" to="/signin">
              Tu as déjà un compte ?
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/auth'

export default {
  layout: 'signin',
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      v => !!v || "L'e-mail est obligatoire",
      v => /.+@.+\..+/.test(v) || "L'e-mail doit être valide"
    ],
    password: '',
    showPassword: false,
    passwordRules: [v => !!v || 'Le mot de passe est obligatoire'],
    errors: ''
  }),
  methods: {
    signUp () {
      if (this.$refs.form.validate()) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
          console.log(user)
          this.$router.push('/account')
        }).catch((error) => {
          this.errors = error
          console.log(error)
        })
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
