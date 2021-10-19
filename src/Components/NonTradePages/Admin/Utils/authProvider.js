import { fetchUtils } from 'react-admin'
import decodeJwt from 'jwt-decode'
import { getApiUrl } from '../../../../config/api'

const httpClient = (url, options = {}) => {
  if (!options.headers) {
    options.headers = new Headers({ Accept: 'application/json' })
  }
  const { token } = JSON.parse(localStorage.getItem('auth'))
  options.headers.set('Authorization', `Bearer ${token}`)
  return fetchUtils.fetchJson(url, options)
}

const authProvider = {
  login: ({ username, password }) => {
    const request = new Request(`${getApiUrl()}/users/login`, {
      method: 'POST',
      body: JSON.stringify({ email: username, password }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    })
    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          console.log(response)
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then((auth) => {
        const decodedToken = decodeJwt(auth.token)
        localStorage.setItem('auth', JSON.stringify(auth))
        localStorage.setItem(
          'permissions',
          decodedToken.isAdmin ? 'admin' : 'not admin'
        )
      })
    // .catch((error) => {
    //   throw new Error('Network error')
    // })
  },
  checkError: (error) => {
    const status = error.status
    if (status === 401 || status === 403) {
      localStorage.removeItem('auth')
      localStorage.removeItem('permissions')
      return Promise.reject()
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve()
  },
  checkAuth: () =>
    localStorage.getItem('auth') ? Promise.resolve() : Promise.reject(),
  logout: () => {
    localStorage.removeItem('auth')
    localStorage.removeItem('permissions')
    return Promise.resolve()
  },
  getIdentity: () => {
    try {
      const { id, firstName, lastName, avatar } = JSON.parse(
        localStorage.getItem('auth')
      )
      return Promise.resolve({
        id,
        fullName: firstName + ' ' + lastName,
        avatar,
      })
    } catch (error) {
      return Promise.reject(error)
    }
  },
  getPermissions: () => {
    const role = localStorage.getItem('permissions')
    return role ? Promise.resolve(role) : Promise.reject()
  },
}

export { httpClient, authProvider }
