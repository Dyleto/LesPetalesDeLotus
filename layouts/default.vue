<template>
  <v-app dark>
    <v-app-bar-nav-icon v-if="isMobile" class="mx-2 my-2 navbar-icon" @click.stop="openMenu" />
    <AppNavbar ref="menu" />
    <MainCharacterDialog />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppNavbar from '@/components/appNavbar'
import MainCharacterDialog from '@/components/mainCharacterDialog'

export default {
  components: {
    AppNavbar,
    MainCharacterDialog
  },
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    isMobile () {
      return screen.width <= 600
    }
  },
  methods: {
    openMenu () {
      this.$refs.menu.openMenu()
    }
  }
}
</script>

<style>
html {
  overflow: auto;
}

html,
body {
  height: 100%;
  min-height: 100%;
}
</style>

<style scoped>
.navbar-icon {
  position: absolute;
  z-index: 5;
}
</style>
