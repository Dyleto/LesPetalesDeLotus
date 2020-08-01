<template>
  <div>{{ activeUser.username }}</div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({ activeUser: 'users/activeUser' })
  }
}
</script>
