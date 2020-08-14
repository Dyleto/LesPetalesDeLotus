import { auth, StoreDB } from '@/services/fireinit.js'

export const state = () => ({
  user: {
    username: ''
  }
})

export const getters = {
  activeUser: (state) => {
    return state.user
  }
}

export const actions = {
  async setUser ({ commit }, user) {
    if (user) {
      const userObj = {
        uid: user.uid,
        email: user.email
      }

      const doc = await StoreDB.collection('users').doc(user.uid).get()
      if (doc.exists) {
        const docData = doc.data()
        userObj.username = docData.username
      }

      commit('SET_USER', userObj)
    }
  },
  async updateUser ({ commit }, user) {
    if (user) {
      const userObj = {
        ...state.user
      }

      const doc = await StoreDB.collection('users').doc(user.uid).get()
      if (doc.exists) {
        let ref = StoreDB.collection('users')
        ref = ref.where('username', '==', user.username)
        ref = ref.where('id', '<', user.uid).where('id', '>', user.uid)
        const list = await ref.get()

        if (!list.empty) {
          return this.$rejectPromise('auth/username-already-in-use', 'Username is already in use by another account.')
        } else {
          await StoreDB.collection('users').doc(user.uid).update({ username: user.username })
          userObj.username = user.username
        }
      }

      commit('SET_USER', userObj)
    }
  },
  async signIn ({ commit }, { email, password }) {
    const { user } = await auth.signInWithEmailAndPassword(email, password)
    if (user) {
      const userObj = {
        uid: user.uid,
        email: user.email
      }

      const doc = await StoreDB.collection('users').doc(user.uid).get()
      if (doc.exists) {
        const docData = doc.data()
        userObj.username = docData.username
      }

      commit('SET_USER', userObj)
    }
  },
  async signUp ({ commit }, { email, username, password }) {
    const list = await StoreDB.collection('users').where('username', '==', username).get()
    if (!list.empty) {
      return this.$rejectPromise('auth/username-already-in-use', 'Username is already in use by another account.')
    } else {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)

      StoreDB.collection('users').doc(user.uid).set({
        username
      })
    }
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
