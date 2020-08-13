<template>
  <v-layout>
    <v-flex class="px-5">
      <v-virtual-scroll
        :items="members"
        :item-height="50"
        height="900"
      >
        <template v-slot="{ item }">
          <v-list-item>
            <!-- <v-list-item-avatar>
            <v-avatar
              :color="item.character.color"
              size="56"
              class="white--text"
            >
              {{ item.initials }}
            </v-avatar>
          </v-list-item-avatar> -->

            <v-list-item-content>
              <v-list-item-title>{{ item.character.name }}</v-list-item-title>
            </v-list-item-content>

            <!-- <v-list-item-action>
              <v-btn
                depressed
                small
              >
                View User

                <v-icon
                  color="orange darken-4"
                  right
                >
                  mdi-open-in-new
                </v-icon>
              </v-btn>
            </v-list-item-action> -->
          </v-list-item>
          <v-divider />
        </template>
      </v-virtual-scroll>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({ members: 'members/getMembers' })
  },
  mounted () {
    this.$store.dispatch('members/fetchMembers')
  }
}
</script>
