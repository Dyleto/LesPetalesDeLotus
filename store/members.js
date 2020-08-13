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
  },
  async loadMemberItems ({ commit }, characterName) {
    const items = []
    const data = await BlizzardService.getProfile(`profile/wow/character/archimonde/${characterName.toLowerCase()}/equipment?namespace=profile-eu&locale=fr_FR`)
    if (data) {
      await data.equipped_items.forEach(async (item) => {
        const itemIcon = await BlizzardService.getProfile(`data/wow/media/item/${item.media.id}?namespace=static-eu`)
        if (itemIcon.assets && itemIcon.assets.length > 0) {
          item.media.icon = itemIcon.assets[0].value
        }
        items.push(item)
      })
    }

    commit('SET_ITEMS', { characterName, items })
  }
}

export const mutations = {
  SET_MEMBERS: (state, members) => {
    state.members = [...members]
  },
  SET_ITEMS: (state, { characterName, items }) => {
    const member = state.members.find(m => m.character.name === characterName)
    if (member) {
      member.character.items = items
    }
  }
}
