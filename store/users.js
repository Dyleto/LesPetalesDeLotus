import { auth } from '@/services/fireinit.js'

export const state = () => ({
  user: null
})

export const getters = {
  activeUser: (state) => {
    return state.user
  }
}

export const actions = {
  setUser ({ commit }, user) {
    if (user) {
      commit('SET_USER', {
        uid: user.uid,
        email: user.email,
        username: user.displayName
      })
    }
  },
  async signIn ({ commit }, { email, password }) {
    await auth.signInWithEmailAndPassword(email, password)
  },
  async signUp ({ commit }, { email, username, password }) {
    const { user } = await auth.createUserWithEmailAndPassword(email, password)
    user.updateProfile({
      displayName: username
    })
  },
  async signOut ({ commit }) {
    await auth.signOut()
    commit('SET_USER', null)
  }
}

export const mutations = {
  SET_USER: (state, user) => {
    state.user = user
  }
}
