<template>
  <v-app
    dark
    :style="{ background: $vuetify.theme.themes.dark.background}"
  >
    <v-main>
      <nuxt
        class="
    login_form"
      />
    </v-main>
  </v-app>
</template>

<script>
export default {

}
</script>

<style scoped>
.main_logo {
  position: absolute;
}

.login_form {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 175px 16px 20px;
  width: 100%;
  height: 100%;
  min-height: 520px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_form::before {
  background: url(/logo_principal.png) no-repeat;
  background-position: center;
  background-size: cover;
  content: "";
  position: absolute;
  top: 20px;
  height: 115px;
  width: 215px;
}
</style>
