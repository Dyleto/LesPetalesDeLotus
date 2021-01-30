import { setAxios as setBlizzardAxios } from '~/services/blizzard'
import { setAxios as setRioAxios } from '~/services/rio'

export default ({ app }) => {
  setBlizzardAxios(app.$axios)
  setRioAxios(app.$axios)
}
