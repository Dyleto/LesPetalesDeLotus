import BlizzardService from '@/services/blizzard'
import specificRealm from '@/services/specificRealm'

const url = pseudo => `profile/wow/character/${specificRealm.getRealm(pseudo)}/${pseudo.toLowerCase()}?namespace=profile-eu&locale=fr_FR`

const BlizzardCharacterService = {
  retrieveCharacter (pseudo) {
    return BlizzardService.get(url(pseudo))
  },
  retrieveCharacterWithItems (pseudo) {
    return BlizzardService.get(url(pseudo) + '?fields=items')
  }
}

export default BlizzardCharacterService
