import RioService from '@/services/rio'

export const state = () => ({
  character: {}
})

export const getters = {
  character: (state) => {
    return state.character
  }
}

export const actions = {
  async loadCharacter ({ commit }, characterName) {
    console.log(characterName)
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
    return fullCharacter
  }
}

export const mutations = {
  SET_CHARACTER: (state, character) => {
    state.character = character
  }
}

const loadMedia = (data) => {
  if (data && data.thumbnail_url) {
    data.main_url = data.thumbnail_url.replace('-avatar.jpg', '-main.jpg')
    data.main_raw_url = data.thumbnail_url.replace('-avatar.jpg', '-main-raw.png')
  }
}
