<template>
  <HomePage />
</template>

<script>
import HomePage from '@/components/homePage'

export default {
  components: {
    HomePage
  },
  methods: {
    signOut () {
      this.$store.dispatch('users/signOut').then(() => {
        this.$router.push('/login')
      })
    }
  }
}
</script>
