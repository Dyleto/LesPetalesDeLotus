<template>
  <v-layout>
    <v-flex class="px-5">
      <v-virtual-scroll
        :items="members"
        :item-height="50"
        height="900"
      >
        <template v-slot="{ item }">
          <MemberLine :member="item" />
          <v-divider />
        </template>
      </v-virtual-scroll>
    </v-flex>
  </v-layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import MemberLine from '@/components/memberLine'

export default {
  components: {
    MemberLine
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({ members: 'members/getMembers' })
  },
  mounted () {
    this.fetchMembers()
  },
  methods: {
    async getItems (member) {
      if (!member.character.items) {
        await this.$store.dispatch('members/loadMemberItems', member.character.name)
        return member.character.items
      }
    },
    ...mapActions({
      fetchMembers: 'members/fetchMembers'
    })
  }
}
</script>
