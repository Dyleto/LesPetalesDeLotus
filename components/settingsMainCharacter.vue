<template>
  <v-flex
    xs12
    md10
    offset-md-1
    xl8
    offset-xl-2
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
      @submit.prevent="save"
    >
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="mainCharacter"
            filled
            label="Nom du personnage principal"
            :error-messages="mainCharacterErrorMessages"
            @input="mainCharacterInput()"
            @blur="mainCharacterErrorMessages = []"
          />
        </v-col>
        <v-col cols="12" class="character-searching-area">
          <v-progress-linear
            v-if="mainCharacterTyping || searchingChar"
            color="primary"
            indeterminate
            rounded
            height="5"
          />
          <div v-else-if="!searchingChar && mainCharacterInfo.name">
            <v-avatar class="mr-2 class-icon" tile>
              <img
                :src="characterClassImage"
                :alt="characterClassName"
              >
            </v-avatar>
            <span :style="{color: characterClassColor }" class="character-name pr-2">{{ mainCharacterInfo.name }}</span>
            <span class="ilevel">iLvl {{ mainCharacterInfo.equipped_item_level }}</span>
          </div>
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
import debounce from 'lodash.debounce'

export default {
  data: () => ({
    uid: '',
    valid: true,
    loading: false,
    mainCharacter: '',
    adminErrorMessage: '',
    mainCharacterTyping: false,
    mainCharacterInfo: {},
    searchingChar: false,
    mainCharacterErrorMessages: []
  }),
  computed: {
    characterClassName () {
      return this.mainCharacterInfo.character_class ? this.mainCharacterInfo.character_class.name : ''
    },
    characterClassColor () {
      return this.mainCharacterInfo.character_class && this.mainCharacterInfo.character_class.media ? this.mainCharacterInfo.character_class.media.color : ''
    },
    characterClassImage () {
      return this.mainCharacterInfo.character_class && this.mainCharacterInfo.character_class.media ? this.mainCharacterInfo.character_class.media.icon : ''
    }
  },
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
    this.reset()
  },
  methods: {
    mainCharacterInput () {
      this.mainCharacterTyping = true
      this.mainCharacterErrorMessages = []
    },
    searchCharacter (character) {
      if (character) {
        this.searchingChar = true
        this.mainCharacterInfo = {}
        this.$store.dispatch('users/searchMainCharacter', character).then((res) => {
          this.mainCharacterInfo = res
          this.searchingChar = false
        }).catch((err) => {
          this.handleError(err)
          this.searchingChar = false
        })

        this.searchingChar = false
      } else {
        this.mainCharacterInfo = {}
      }
    },
    reset () {
      const user = this.$store.getters['users/activeUser']
      if (user) {
        this.uid = user.uid
      }

      const mainCharacter = this.$store.getters['users/mainCharacter']

      if (mainCharacter && mainCharacter.name) {
        this.mainCharacter = mainCharacter.name
        this.searchCharacter(this.mainCharacter)
      } else {
        this.mainCharacterInfo = {}
      }
    },
    save () {
      this.loading = true
      if (this.$refs.form.validate()) {
        this.$store.dispatch('users/updateMainCharacter', { uid: this.uid, mainCharacter: this.mainCharacter })
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
        case 'searching-character/character-not-found':
          this.mainCharacterErrorMessages = 'Le personnage renseigné n\'a pas été retrouvé'
          break
        case 'searching-character/character-already-in-use':
          this.mainCharacterErrorMessages = 'Le personnage renseigné est déjà le personnage principal de quelqu\'un d\'autre'
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
.character-searching-area {
  height: 48px;
}
</style>
