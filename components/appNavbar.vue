<template>
  <v-navigation-drawer
    :mini-variant="mini"
    fixed
    app
    mobile-breakpoint="600"
  >
    <template v-slot:prepend>
      <v-list-item class="px-2 py-2 header">
        <v-btn
          icon
          :title="mini ? 'Déplier le bandeau' : 'Replier le bandeau'"
          class="toggle-mini"
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-{{ mini ? 'right' : 'left' }}</v-icon>
        </v-btn>
        <v-list-item-title to="/">
          <v-btn
            text
            small
            class="remove-active logo-btn"
            to="/"
            title="Accueil"
          >
            <v-img
              src="/navbar_logo.png"
              width="175"
              height="62"
              contain
            />
          </v-btn>
        </v-list-item-title>
      </v-list-item>

      <v-divider />
    </template>

    <v-list>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="item.to"
        router
        exact
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <v-divider />
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <img
            :src="mainCharacter.avatar_url"
            :alt="mainCharacter ? mainCharacter.name : ''"
          >
        </v-list-item-avatar>
        <v-list-item-title>
          <span class="character-name" :style="{color: characterClassColor }">{{ activeUser ? activeUser.username : '' }}</span>
        </v-list-item-title>
        <v-btn
          icon
          title="Réglages"
          to="/settings"
          class="mx-2"
        >
          <v-icon>mdi-cog</v-icon>
        </v-btn>
      </v-list-item>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      mini: false,
      items: [
        {
          icon: 'mdi-account-group-outline',
          title: 'Membres',
          to: '/members'
        }
      ],
      title: 'Vuetify.js'
    }
  },
  computed: {
    characterClassColor () {
      return this.mainCharacter && this.mainCharacter.character_class && this.mainCharacter.character_class.media ? this.mainCharacter.character_class.media.color : ''
    },
    ...mapGetters({ activeUser: 'users/activeUser', mainCharacter: 'users/mainCharacter' })
  }
}
</script>
<style scoped>
.header {
  height: 78px;
}

.logo-btn {
  height: 100% !important;
}
</style>
