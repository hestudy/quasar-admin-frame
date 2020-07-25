import { LocalStorage } from 'quasar'

export function getToken(state) {
  return LocalStorage.getItem('token')
}

export function getPermissions(state) {
  return state.permissions
}

export function getRouter(state) {
  return state.routes
}
