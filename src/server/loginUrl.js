const CONSTAPI = {
	getCode:{
		url:"/auth/login/captcha/sms",
		method:"GET"
	},
	register:{
		url:"/auth/register",
		method:"POST"
	},
	phoneLogin:{
		url:"/auth/login/type/password",
		method:"POST"
	},
	//获取重置的验证码
	reserSms:{
		url:"/auth/password/reset/captcha/sms",
		method:"GET"
	},
	//重置密码
	resetPass:{
		url:'/auth/password/reset',
		method:"POST"
	}
}
export default CONSTAPI