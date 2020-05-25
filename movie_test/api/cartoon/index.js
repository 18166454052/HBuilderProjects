import {http} from '@/utils/request'

export function cartoonCategory(data) { //
  return http.request({
    url: 'cartoonCategory',
    method: 'post',
    data
  })
}

export function cartoonItem(data) { //
    return http.request({
      url: 'cartoonItem',
      method: 'post',
      data
    })
}

export function cartoonList(data) { //
  return http.request({
    url: 'cartoonList',
    method: 'post',
    data
  })
}