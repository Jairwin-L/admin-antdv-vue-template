import fly from './fly'

export function list (params) {
  return fly.get(`movie/in_theaters`, params)
}
