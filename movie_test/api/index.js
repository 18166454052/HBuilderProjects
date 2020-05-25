import { request } from "@/utils/request"

export function  test(params){
	return request({
		url:'tb/user/list',
		method:'POST',
		params
	})
}