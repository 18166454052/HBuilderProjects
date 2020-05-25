import {http} from '@/utils/request'

export function varietyCategory(data) { //
  return http.request({
    url: 'varietyCategory',
    method: 'post',
    data
  })
}

export function varietyItem(data) { //
    return http.request({
      url: 'varietyItem',
      method: 'post',
      data
    })
}

export function varietyList(data) { //
  return http.request({
    url: 'varietyList',
    method: 'post',
    data
  })
}