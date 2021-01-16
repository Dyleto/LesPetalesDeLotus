import { setAxios } from '~/services/blizzard'

export default ({ app }) => {
  setAxios(app.$axios)
}
