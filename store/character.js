import RioService from '@/services/rio'

export const state = () => ({
  name: 'test'
})

export const getters = {
  getCharacter: (state) => {
    return state
  }
}

export const actions = {
  async loadCharacter ({ commit }, characterName) {
    let fullCharacter = {}
    try {
      const data = await RioService.getCharacter(characterName)
      if (data) {
        loadMedia(data)
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

const loadMedia = (data) => {
  if (data && data.thumbnail_url) {
    data.main_url = data.thumbnail_url.replace('-avatar.jpg', '-main.jpg')
    data.main_raw_url = data.thumbnail_url.replace('-avatar.jpg', '-main-raw.png')
  }
}
