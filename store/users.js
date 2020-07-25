import firebase from 'firebase/app'
import Cookie from 'js-cookie'

export const state = () => ({
  user: null
})

export const actions = {
  async signIn ({ commit }, { email, password }) {
    const { user } = await firebase.auth().signInWithEmailAndPassword(email, password)
    const token = await user.getIdToken()

    Cookie.set('access_token', token)
    commit('SET_USER', {
      uid: user.uid,
      email: user.email
    })
  }
}

export const mutations = {
  SET_USER: (state, user) => {
    state.user = user
  }
}
