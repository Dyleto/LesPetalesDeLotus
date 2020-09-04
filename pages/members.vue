<template>
  <v-layout>
    <v-flex class="px-1 px-md-5">
      <v-toolbar
        dense
        flat
        class="mb-5 ml-10 search-toolbar"
      >
        <v-text-field
          v-model="search"
          single-line
          color="white"
          hide-details
          prepend-icon="mdi-magnify"
        />
      </v-toolbar>
      <MemberLine
        v-for="member in filteredMembers"
        :key="member.name"
        class="member-line"
        :member="member"
      />
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
      return this.members.filter(m => m.name.toLowerCase().includes(search.toLowerCase()))
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

<style scoped>
.member-line {
  border-bottom: solid 1px rgba(255, 255, 255, 0.12);
}

.search-toolbar {
  background-color: transparent !important;
}
</style>
