<template>
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
      <v-list-item-title>{{ member.character.name }}</v-list-item-title>
    </v-list-item-content>
    <v-list-item-avatar
      v-for="(item, i) in items"
      :key="i"
    >
      <v-img
        :src="item.media.icon"
        aspect-ratio="1"
        class="grey lighten-2"
      /></v-img>
    </v-list-item-avatar>
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
</template>

<script>
export default {
  props: {
    member: {
      type: Object,
      default: () => { }
    }
  },
  data () {
    return {
      items: []
    }
  },
  mounted () {
    this.loadItems(this.member)
  },
  methods: {
    async loadItems (item) {
      await this.$store.dispatch('members/loadMemberItems', this.member.character.name)
      this.items = this.member.character.items
    }
  }
}
</script>
