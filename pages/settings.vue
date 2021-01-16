<template>
  <v-layout text-xs-center wrap>
    <SettingsAccount
      class="mt-16"
      @successSnackbar="successSnackbar()"
    />
    <SettingsMainCharacter
      class="mt-16"
      @successSnackbar="successSnackbar()"
    />

    <v-flex
      xs12
      md10
      offset-md-1
      xl8
      offset-xl-2
      class="mt-16 text-right"
    >
      <v-btn
        text
        color="error"
        title="se déconnecter"
        @click="logout"
      >
        Se déconnecter
      </v-btn>
    </v-flex>
    <v-snackbar
      v-model="snackbar"
      bottom
      color="success"
      :timeout="2000"
    >
      Vos changements ont bien été pris en compte
    </v-snackbar>
  </v-layout>
</template>

<script>
import SettingsAccount from '@/components/settingsAccount'
import SettingsMainCharacter from '@/components/settingsMainCharacter'

export default {
  components: {
    SettingsAccount,
    SettingsMainCharacter
  },
  data: () => ({
    snackbar: false
  }),
  methods: {
    successSnackbar () {
      this.snackbar = true
    },
    logout () {
      this.$store.dispatch('users/signOut').then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>
