<template>
  <v-layout text-xs-center wrap>
    <v-flex
      xs12
      md10
      offset-md-1
      xl8
      offset-xl-2
      class="mt-16"
    >
      <div class="text-h3 font-weight-bold mb-3">
        Compte
      </div>
      <v-divider />
      <v-form
        ref="accountForm"
        v-model="valid"
        class="mt-5"
        lazy-validation
        @input="adminErrorMessage = ''"
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
              :disabled="!valid"
              text
              @click="resetData"
            >
              Annuler
            </v-btn>
            <v-btn
              :disabled="!valid"
              :color="adminErrorMessage ? 'error' : 'success'"
              :loading="loading"
              @click="save"
            >
              Enregistrer
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
    </v-flex>
    <v-flex
      xs12
      md10
      offset-md-1
      xl8
      offset-xl-2
      class="mt-16"
    >
      <div class="text-h3 font-weight-bold mb-3">
        Personnage principal
      </div>
      <v-divider />
      <v-form
        ref="form"
        v-model="valid"
        class="mt-5"
        lazy-validation
        @input="adminErrorMessage = ''"
      >
        <v-row>
          <v-col cols="12">
            <v-text-field
              v-model="mainCharacter"
              filled
              label="Nom du personnage principal"
              @input="mainCharacterTyping = true"
            />
          </v-col>
          <v-col v-if="mainCharacterTyping" cols="12">
            <v-progress-linear
              indeterminate
              color="cyan"
            />
          </v-col>
        </v-row>
      </v-form>
    </v-flex>
  </v-layout>
</template>

<script>
import debounce from 'lodash.debounce'

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
    mainCharacter: '',
    adminErrorMessage: '',
    mainCharacterTyping: false
  }),
  watch: {
    mainCharacter: debounce(function () {
      this.mainCharacterTyping = false
    }, 1000),
    mainCharacterTyping (value) {
      if (!value) {
        this.searchCharacter(this.mainCharacter)
      }
    }
  },
  mounted () {
    this.resetData()
  },
  methods: {
    searchCharacter (character) {
      console.log(character)
    },
    resetData () {
      const user = this.$store.getters['users/activeUser']
      if (user) {
        this.uid = user.uid
        this.username = user.username
      }
    },
    save () {
      this.loading = true
      if (this.$refs.accountForm.validate()) {
        this.$store.dispatch('users/updateUser', { username: this.username, uid: this.uid })
          .then(() => {
            this.loading = false
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
