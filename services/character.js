import BlizzardService from '@/services/blizzard.js'
import { BLIZZARD_REALM } from '@/services/config.js'

const url = pseudo => `profile/wow/character/${BLIZZARD_REALM.toLowerCase()}/${pseudo.toLowerCase()}?namespace=profile-eu&locale=fr_FR`

const BlizzardCharacterService = {
  retrieveCharacter (pseudo) {
    return BlizzardService.get(url(pseudo))
  },
  retrieveCharacterWithItems (pseudo) {
    return BlizzardService.get(url(pseudo) + '?fields=items')
  }
}

export default BlizzardCharacterService
