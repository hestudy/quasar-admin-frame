import { LocalStorage } from 'quasar'

export function getToken(state) {
  console.log(LocalStorage.getItem('token'))
  return LocalStorage.getItem('token')
}

export function getPermissions(state) {
  return state.permissions
}

export function getRouter(state) {
  return state.routes
}
