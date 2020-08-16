import BlizzardService from '@/services/blizzard'

const itemOrder = [
  'HEAD',
  'NECK',
  'SHOULDER',
  'BACK',
  'CHEST',
  'WRIST',
  'HANDS',
  'WAIST',
  'LEGS',
  'FEET',
  'FINGER_1',
  'FINGER_2',
  'TRINKET_1',
  'TRINKET_2',
  'MAIN_HAND',
  'OFF_HAND'
]

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
    let items = []
    try {
      const data = await BlizzardService.getProfile(`profile/wow/character/archimonde/${characterName.toLowerCase()}/equipment?namespace=profile-eu&locale=fr_FR`)
      if (data) {
        items = await orderItemList(data.equipped_items)
      }
    } catch (error) {
      items = []
    }

    commit('SET_ITEMS', { characterName, items })
  },
  async loadMemberCharacterInfo ({ commit }, characterName) {
    let fullCharacter = {}
    try {
      const data = await BlizzardService.getProfile(`profile/wow/character/archimonde/${characterName.toLowerCase()}?namespace=profile-eu&locale=fr_FR`)
      if (data) {
        fullCharacter = data
      }
    } catch (error) {

    }

    commit('SET_CHARACTER_INFO', { characterName, fullCharacter })
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
      member.itemsLoaded = true
    }
  },
  SET_CHARACTER_INFO: (state, { characterName, fullCharacter }) => {
    const member = state.members.find(m => m.character.name === characterName)
    if (member) {
      member.character = { ...fullCharacter, ...member.character }
      member.characterInfoLoaded = true

      // const isActive = Math.round((Date.now() - new Date(member.character.last_login_timestamp)) / (1000 * 60 * 60 * 24)) < 365

      // if (!isActive) {
      //   state.members = state.members.filter(m => m.character.name !== characterName)
      // }
    }
  }
}

const orderItemList = async function (items) {
  const completeItems = {}

  for (let index = 0; index < itemOrder.length; index++) {
    const itemName = itemOrder[index]
    let item = items.find(i => i.slot.type === itemName)
    if (item) {
      const itemIcon = await BlizzardService.getStatic(`data/wow/media/item/${item.media.id}?namespace=static-eu&locale=fr_FR`)
      if (itemIcon.assets && itemIcon.assets.length > 0) {
        item.media.icon = itemIcon.assets[0].value
      }
    } else {
      item = {
        media: {
          icon: '/empty_equipment.png'
        }
      }
    }

    completeItems[itemName] = item
  }

  return Object.values(completeItems)
}

// const filterMembers = members => members.filter(m => Math.round((Date.now() - new Date(m.character.last_login_timestamp)) / (1000 * 60 * 60 * 24)) < 365)