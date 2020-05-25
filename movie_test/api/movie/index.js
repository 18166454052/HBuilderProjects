import {http} from '@/utils/request'

export function movieCategory(data) { //
  return http.request({
    url: 'movieCategory',
    method: 'post',
    data
  })
}

export function movieItem(data) { //
    return http.request({
      url: 'movieItem',
      method: 'post',
      data
    })
}

export function movieSearch(data) { //
  return http.request({
    url: 'movieSearch',
    method: 'post',
    data
  })
}