<template>
  <v-container>
    <v-form ref="form" v-model="valid" class="resetPassword-form" lazy-validation>
      <v-row>
        <v-col cols="12">
          <div class="text-h5 text-center">
            Reinitialiser le mot de passe
          </div>
        </v-col>
      </v-row>
      <v-row class="mt-5" dense>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            filled
            label="E-mail"
            required
          />
        </v-col>
      </v-row>
      <v-row dense>
        <v-col cols="12">
          <v-btn
            :disabled="!valid"
            block
            color="primary"
            large
            :loading="loading"
            @click="resetPassword"
          >
            Reinitialiser
          </v-btn>
        </v-col>
        <v-col cols="12" :v-show="adminSuccessMessage" class="v-messages success--text">
          <span>{{ adminSuccessMessage }}</span>
        </v-col>
        <v-col cols="12" :v-show="adminErrorMessage" class="v-messages error--text">
          <span>{{ adminErrorMessage }}</span>
        </v-col>
        <v-col cols="12">
          <div class="mt-2">
            <v-btn text x-small color="primary" class="pl-1" to="/login">
              Tu as retrouvé ton mot de passe ?
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
    adminSuccessMessage: '',
    adminErrorMessage: ''
  }),
  methods: {
    resetPassword () {
      this.adminSuccessMessage = ''
      this.adminErrorMessage = ''
      this.$store.dispatch('users/resetPassword', this.email)
        .then(() => {
          this.adminSuccessMessage = 'L\'email de reintialisation a été envoyé.'
          this.loading = false
        })
        .catch(() => {
          this.adminErrorMessage = 'Désolé, il y a un problème au niveau de la connexion à l\'application, merci de contacter un administrateur'
          this.loading = false
        })
    }
  }
}
</script>

<style scoped>
.resetPassword-form {
  width: 100%;
  max-width: 550px;
}
</style>
