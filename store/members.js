import BlizzardService from '@/services/blizzard'

export const state = () => ({
  members: []
})

export const getters = {
  getMembers: (state) => {
    return state.members
  }
}

export const actions = {
  async fetchMembers ({ commit }) {
    const data = await BlizzardService.getProfile('data/wow/guild/archimonde/les-pétales-de-lotus/roster?namespace=profile-eu&locale=fr_FR')

    commit('SET_MEMBERS', data.members)
  }
}

export const mutations = {
  SET_MEMBERS: (state, members) => {
    state.members = [...members]
  }
}
