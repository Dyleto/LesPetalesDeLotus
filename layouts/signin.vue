<template>
  <v-app dark :style="{ background: $vuetify.theme.themes.dark.background}">
    <v-main>
      <nuxt class="signin-form" />
    </v-main>
  </v-app>
</template>

<script>
export default {}
</script>
<style scoped>
.signin-form {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 70px 16px 20px;
  width: 100%;
  height: 100%;
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.signin-form::before {
  background: url(/logo_horizontal.png) no-repeat;
  background-position: center;
  background-size: cover;
  content: "";
  position: absolute;
  top: 20px;
  height: 50px;
  width: 250px;
}

@media (min-width: 960px) {
  .signin-form::before {
    height: 100px;
    width: 500px;
  }
}

@media (min-width: 1264px) {
  .signin-form::before {
    height: 150px;
    width: 750px;
  }
}
</style>
