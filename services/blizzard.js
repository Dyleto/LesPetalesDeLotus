import {
  BLIZZARD_API_URL,
  BLIZZARD_CLIENT_ID,
  BLIZZARD_CLIENT_SECRET,
  BLIZZARD_GRANT_TYPE,
  BLIZZARD_TOKEN_KEY,
  BLIZZARD_TOKEN_EXP_KEY
} from '@/services/config.js'

let axiosConfig = {
  params: {}
}

const clientIdentifiers = {
  client_id: BLIZZARD_CLIENT_ID,
  client_secret: BLIZZARD_CLIENT_SECRET,
  grant_type: BLIZZARD_GRANT_TYPE
}

let axios

export function setAxios (client) {
  axios = client
}

const BlizzardService = {
  async getProfile (url) {
    await setBlizzardTokenInAxiosConfig()
    const { data } = await axios({
      url: `${BLIZZARD_API_URL}/${url}`,
      data: {
        namespace: 'profile-eu',
        locale: 'fr_FR'
      },
      ...axiosConfig
    })
    return data
  },
  async get (url, data) {
    await setBlizzardTokenInAxiosConfig()
    const res = await axios({ url: `${BLIZZARD_API_URL}/${url}`, data, ...axiosConfig })
    return res.data
  }
}

const setBlizzardTokenInAxiosConfig = async () => {
  const token = await getBlizzardToken()
  axiosConfig = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    ...axiosConfig
  }
}

const getBlizzardToken = async () => {
  const tokenExp = window.localStorage.getItem(BLIZZARD_TOKEN_EXP_KEY)
  const isTokenExpired = tokenExp != null ? tokenExp < Date.now() : true

  if (isTokenExpired) {
    await refreshBlizzardToken()
  }

  return window.localStorage.getItem(BLIZZARD_TOKEN_KEY)
}

const refreshBlizzardToken = async () => {
  const basicAuth = btoa(`${clientIdentifiers.client_id}:${clientIdentifiers.client_secret}`)
  const headers = {
    authorization: `Basic ${basicAuth}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  }

  const params = new URLSearchParams()
  params.append('grant_type', 'client_credentials')

  const requestOptions = {
    method: 'POST',
    url: 'https://eu.battle.net/oauth/token',
    data: params,
    headers
  }
  const { data } = await axios(requestOptions)

  localStorage.setItem(BLIZZARD_TOKEN_EXP_KEY, Date.now() + (data.expires_in * 1000))
  window.localStorage.setItem(BLIZZARD_TOKEN_KEY, data.access_token)
}

export default BlizzardService
