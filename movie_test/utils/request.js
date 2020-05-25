import {http}  from "@/js_sdk/luch-request/index.js"
console.log(http)

http.setConfig((config) => { /* config 为默认全局配置*/
    config.baseUrl = 'http://127.0.0.1:7001/'
	config.method = "POST"
	config.header = {
	      'content-type': 'application/json',
		  'Access-Control-Allow-Headers':"*"
	}
    return config
})

http.validateStatus = (statusCode) => {
	/* 返回true  进入响应拦截的resolve  否则进入响应拦截的reject */
   return statusCode && statusCode >= 200 && statusCode <= 500
}

http.interceptor.request((config, cancel) => { /* cancel 为函数，如果调用会取消本次请求。需要注意：调用cancel,本次请求的catch仍会执行。必须return config */
   /*
    权限验证  没有登录信息  跳转登录页面
   */
	
	let token = "";
	config.header.token = token
    return config
})
  
http.interceptor.response((response) => { /* 对响应成功做点什么 （statusCode === 200），必须return response*/
   /*
    权限验证  登录信息失效  跳转登录页面
   */
  console.log('----res-----')
  console.log(response)
  // return Promise.resolve(response.data)
  return response.data;
   
  }, (response) => { /*  对响应错误做点什么 （statusCode !== 200），必须return response*/
    return response.data
  })
module.exports={
	http
}