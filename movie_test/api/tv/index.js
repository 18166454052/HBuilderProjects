import {http} from '@/utils/request'

export function tvCategory(data) { //
  return http.request({
    url: 'tvCategory',
    method: 'post',
    data
  })
}

export function tvItem(data) { //
    return http.request({
      url: 'tvItem',
      method: 'post',
      data
    })
}

export function tvList(data) { //
  return http.request({
    url: 'tvList',
    method: 'post',
    data
  })
}