<template>
  <v-layout>
    <v-flex class="px-5">
      <v-toolbar
        dark
        class="mb-5"
      >
        <v-text-field
          v-model="search"
          clearable
          flat
          solo-inverted
          hide-details
          prepend-inner-icon="mdi-magnify"
          label="Search"
        />
        <!-- <template v-if="$vuetify.breakpoint.mdAndUp">
          <v-spacer />
          <v-select
            v-model="sortBy"
            flat
            solo-inverted
            hide-details
            prepend-inner-icon="mdi-magnify"
            label="Sort by"
          />
        </template> -->
      </v-toolbar>
      <!-- <v-virtual-scroll
        :items="filteredMembers"
        :item-height="58"
        height="900"
      > -->
      <!-- <template v-slot="{ item }"> -->
      <MemberLine
        v-for="member in filteredMembers"
        :key="member.character.name"
        :member="member"
        class="py-1"
      />
      <v-divider />
      <!-- </template> -->
      <!-- </v-virtual-scroll> -->
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
      search: ''
    }
  },
  computed: {
    filteredMembers () {
      const search = this.search ?? ''
      return this.members.filter(m => m.character.name.toLowerCase().includes(search.toLowerCase()))
    },
    ...mapGetters({ members: 'members/getMembers' })
  },
  mounted () {
    this.fetchMembers()
  },
  methods: {
    ...mapActions({
      fetchMembers: 'members/fetchMembers'
    })
  }
}
</script>
