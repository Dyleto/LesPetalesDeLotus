import { auth } from '@/services/fireinit.js'

export default (context) => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        return resolve(store.dispatch('users/setUser', user))
      }
      return resolve()
    })
  })
}
