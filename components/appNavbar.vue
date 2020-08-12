<template>
  <v-navigation-drawer
    :mini-variant="mini"
    permanent
    fixed
    app
  >
    <template v-slot:prepend>
      <v-list-item class="px-2">
        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-chevron-{{ mini ? 'right' : 'left' }}</v-icon>
        </v-btn>
        <v-list-item-title class="pl-5">
          Les Pétales de Lotus
        </v-list-item-title>
      </v-list-item>
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
        <v-btn
          v-if="mini"
          icon
          @click.stop="mini = !mini"
        >
          <v-icon>mdi-logout</v-icon>
        </v-btn>

        <v-list-item-title>{{ activeUser ? activeUser.username : '' }}</v-list-item-title>
        <v-btn
          v-if="!mini"
          icon
          @click="logout"
        >
          <v-icon>mdi-logout</v-icon>
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
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      title: 'Vuetify.js'
    }
  },
  computed: {
    ...mapGetters({ activeUser: 'users/activeUser' })
  },
  methods: {
    logout () {
      this.$store.dispatch('users/signOut').then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>
