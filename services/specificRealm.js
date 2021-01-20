import {
  BLIZZARD_REALM,
  SPECIFIC_REALM
} from '@/services/config'

export default {
  getRealm: (characterName) => {
    return (SPECIFIC_REALM[characterName.toLowerCase()] ?? BLIZZARD_REALM).toLowerCase()
  }
}
