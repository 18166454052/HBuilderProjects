import { http } from "@/utils/request"

export function  test(params){
	return http.request({
		url:'tb/user/list',
		method:'POST',
		params
	})
}