import { auth, StoreDB } from '@/services/fireinit.js'
import BlizzardService from '@/services/blizzard'
import classes from '@/services/classes'

export const state = () => ({
  user: {
    username: ''
  },
  mainCharacter: {}
})

export const getters = {
  activeUser: (state) => {
    return state.user
  },
  mainCharacter: (state) => {
    return state.mainCharacter
  }
}

export const actions = {
  async searchMainCharacter ({ commit }, characterName) {
    if (characterName) {
      try {
        const data = await getCharacterInfo(characterName)
        return data
      } catch (error) {
        return this.$rejectPromise('searching-character/character-not-found', 'The character was not found in WoW API.')
      }
    }
  },
  async updateMainCharacter ({ commit }, { uid, mainCharacter }) {
    if (mainCharacter && uid) {
      const ref = StoreDB.collection('users').doc(uid)
      const doc = await ref.get()
      if (doc.exists) {
        await ref.update({ mainCharacter })

        const characterInfo = await getCharacterInfo(mainCharacter)
        commit('SET_MAIN_CHARACTER', characterInfo)
      }
    }
  },
  async setCurrentUser ({ commit }, user) {
    if (user) {
      const doc = await StoreDB.collection('users').doc(user.uid).get()
      if (doc.exists) {
        const docData = doc.data()

        commit('SET_USER', {
          uid: user.uid,
          email: user.email,
          username: docData.username
        })

        const characterInfo = await getCharacterInfo(docData.mainCharacter)
        commit('SET_MAIN_CHARACTER', characterInfo)
      }
    }
  },
  async updateUser ({ commit }, user) {
    if (user) {
      const userObj = {
        uid: user.uid,
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
  },
  SET_MAIN_CHARACTER: (state, mainCharacter) => {
    state.mainCharacter = mainCharacter
  }
}

const getCharacterInfo = async (characterName) => {
  const data = await BlizzardService.getProfile(`profile/wow/character/archimonde/${characterName.toLowerCase()}?namespace=profile-eu&locale=fr_FR`)

  if (data) {
    const classInfo = classes.getById(data.character_class.id)

    data.character_class = {
      ...data.character_class,
      ...classInfo
    }

    const charMedia = await BlizzardService.getProfile(`profile/wow/character/archimonde/${characterName.toLowerCase()}/character-media?namespace=profile-eu&locale=fr_FR`)
    data.avatar_url = charMedia.avatar_url
    data.bust_url = charMedia.bust_url
    data.render_url = charMedia.render_url

    return data
  }
}
