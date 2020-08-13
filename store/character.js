import BlizzardService from '@/services/blizzard'

export const state = () => ({
  character: {
    items: []
  }
})

export const getters = {
}

export const actions = {
  async getCharacterItems ({ commit }, characterName) {
    const data = await BlizzardService.getProfile(`profile/wow/character/archimonde/${characterName.toLowerCase()}/equipment?namespace=profile-eu&locale=fr_FR`)
    if (data) {
      data.equipped_items.forEach(async (item) => {
        const itemIcon = await BlizzardService.getProfile(`data/wow/media/item/${item.media.id}?namespace=static-eu`)
        if (itemIcon.assets && itemIcon.assets.length > 0) {
          item.media.icon = itemIcon.assets[0].value
        }
      })
    }
    return data
  }
}

export const mutations = {
}
