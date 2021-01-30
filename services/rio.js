import {
  RIO_API_CHARACTER_URL
} from '@/services/config.js'
import specificRealm from '@/services/specificRealm'

// const axiosConfig = {
//   params: {}
// }
let axios

export function setAxios (client) {
  axios = client
}

const RioService = {
  getCharacter: async (characterName) => {
    const { data } = await axios.get(`${RIO_API_CHARACTER_URL}?region=eu&realm=${specificRealm.getRealm(characterName.toLowerCase())}&name=${characterName.toLowerCase()}`)
    return data
  }
}

export default RioService
