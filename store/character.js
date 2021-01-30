import RioService from '@/services/rio'

export const state = () => ({
  name: 'test'
})

export const getters = {
  getCharacter: (state) => {
    console.log(state)
    return state
  }
}

export const actions = {
  async loadCharacter ({ commit }, characterName) {
    let fullCharacter = {}
    try {
      const data = await RioService.getCharacter(characterName)
      if (data) {
        fullCharacter = data
      }
    } catch (error) {

    }

    commit('SET_CHARACTER', fullCharacter)
  }
}

export const mutations = {
  SET_CHARACTER: (state, character) => {
    Object.assign(state, character)
  }
}
