import cryptoJS from 'crypto-js';

function routers(){
	let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
	let curRoute = routes[routes.length - 1].route //获取当前页面路由
	let curParam = routes[routes.length - 1].options; //获取路由参数
	// 拼接参数
	let arr = []
	for (let key in curParam) {
	    arr.push(key+'='+curParam[key])
	}
	let data = arr.join('&')
	let key = data === '' ? '':'?'+data
	let str = curRoute + key 
	str = str.split('pages')
	return '..'+ str[1]
	
}

function time(time) {//转换时间戳为xxxx年-xx月-xx日 XX:XX的格式
	// console.log(time+'长度')
	// console.log(JSON.stringify(time).length)
	var date = ''
	if(JSON.stringify(time).length == 10){
		 date = new Date(time * 1000); //如果date为10位不需要乘1000
	}else{
		 date = new Date(time);
	}
	
	var Y = date.getFullYear() + '年';
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '月';
	var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + '日 ';
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) ;
	// var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
	return Y + M + D ;
}

function time2(time) {//转换时间戳为xxxx年-xx月-xx日 XX:XX的格式
	// console.log(time+'长度')
	// console.log(JSON.stringify(time).length)
	var date = ''
	if(JSON.stringify(time).length == 10){
		 date = new Date(time * 1000); //如果date为10位不需要乘1000
	}else{
		 date = new Date(time);
	}
	
	var Y = date.getFullYear() + '-';
	var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) ;
	var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
	var m = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) ;
	// var s = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
	return Y + M + D ;
}

function oldTiem(data){//计算年龄
	const time = data
	const date = new Date(time)
	const workTime = date.getTime()//计算现在工作了多久的毫秒
	const nowdate = new Date()
	const nowTimeRub = nowdate.getTime()//获取当前日期的毫秒
	const commonTime = nowTimeRub - workTime //将当前时间 - 工作的时间
	const num = parseInt(commonTime/31536000000) //除去一年总共的毫秒数取整
	return num
}

/**
 * 数据加密与编码
 * @param mixed [object|string] data 原始数据
 * @param string key 加密钥匙
 * @return mixed [boolean|string] 是否支持加密|加密数据
 */
function aesEncrypt(data, key) {
	// 处理原始数据
	const list = ['object', 'string'];
	const type = typeof data;
	if (!list.includes(type)) {
		return false;
	}
	if (type === 'object') {
		data = JSON.stringify(data);
	}

	// 用aes加密
	let result = cryptoJS.AES.encrypt(data, key);
	result = result.toString();

	// 用base64编码
	result = cryptoJS.enc.Utf8.parse(result);
	result = cryptoJS.enc.Base64.stringify(result);

	return result;
}

/**
 * 数据解码与解密
 * @param string data 已加密数据
 * @param string key 解密密匙
 * @return mixed [boolean|string|object] 是否支持解密|解密数据
 */
function aesDecrypt(data, key) {
	// 用base64解码
	const cryptoJS = require('crypto-js');
	let result = cryptoJS.enc.Base64.parse(data);
	result = result.toString(cryptoJS.enc.Utf8);
	// aes解密
	result = cryptoJS.AES.decrypt(result, key);
	result = result.toString(cryptoJS.enc.Utf8);
	return result;
}

function loginHeaders(){
	return { 
				'telo-origin-data': aesEncrypt({'name': 'nnsh_admin'},'telo-origin') ,
				'telo-system-data': JSON.stringify({'name': 'nnsh_admin'})
			}
}

function adminHeaders(){
	let cookie =  userCookie()
	
	return {
		'telo-origin-data': aesEncrypt({'name': 'nnsh_admin'}, 'telo-origin'),
		'telo-auth-data': aesEncrypt(cookie, 'telo-auth')
	}
}

function aesPassWord(phone,pass){//手机，电话  加密传给后端
	const key = 'telo_'+ phone
	let thisPass = typeof pass == 'number' ? pass.toString():pass
	const password =  aesEncrypt(thisPass,key);
	return password
}

function restePassword(phone,wjPatch,pass){
	let thisPass =  typeof pass == 'number' ? pass.toString():pass
	let key = 'telo_' + phone + '_' + wjPatch;
	// console.log(key)
	// console.log(thisPass)
	const password =  aesEncrypt(pass,key);
	return password
}

function userCookie(){
	let userId =  localStorage.getItem('userId')
	const seekerUnionId =  localStorage.getItem('seekerUnionId')
	userId = JSON.parse(userId)
	if(userId === null){
		return {union_id:'',token:'',admin_user_id:'', user_type: 'admin'}
	}
	let obj = {
	   union_id:typeof userId.id == 'string' ? Number(userId.id):userId.id, // 通行证编号
	   token: userId.token, // 通行证令牌
	   admin_user_id: typeof seekerUnionId == 'string'?Number(seekerUnionId):seekerUnionId,
	   user_type: 'admin'
	}
	return obj
}

function aesEncryptUrlData(val){
	let data = ''
	data = typeof val === 'number' ? val.toString() : val
	data =  aesEncrypt(data,'urlData')
	return data
}

function aesDecryptUrlData(val){
	let data = ''
	data =  aesDecrypt(val,'urlData')
	return data
}

function checkPhone(phone){ 
    if(!(/^1[3456789]\d{9}$/.test(phone))){ 
        return false; 
    }else{
		return true
	}
}

function checkIDCard(data){
     // 身份证不能为空
            
     
             // 身份证为18个字符
             if (data.length !== 18) {
                 return false;
             }
     
             // 身份证必须包含数字或字母x/X
             for (let i = 0; i < data.length; i++) {
                 // 获取当前字符的unicode
                 let unicode = data.charCodeAt(i);
     
                 // 如果包含数字
                 if (unicode >= 48 && unicode <= 57) {
                     continue;
                 }
     
                 // 如果包含字母
                 if ((data[data.length - 1]).toUpperCase() === 'X') {
                     continue;
                 }
     
                 return false;
             }
     
             return true;
}

function validateIdentity(data) {
        var value = data;//待验证的身份证号码
              var weight_factor = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
              // 校验码
              var check_code = ['1', '0', 'X' , '9', '8', '7', '6', '5', '4', '3', '2'];
              var code = value + '';
              var last = value[17];//最后一个
              var seventeen = code.substring(0,17);
              // ISO 7064:1983.MOD 11-2
              // 判断最后一位校验码是否正确
              var arr = seventeen.split('');
              var len = arr.length;
              var num = 0;
              for(var i = 0; i < len; i++){
                num = num + arr[i] * weight_factor[i];
              }
        
              // 获取余数
              var resisue = num%11;
              var last_no = check_code[resisue];
        
              // 格式的正则
              // 正则思路
              /*
               第一位不可能是0
               第二位到第六位可以是0-9
               第七位到第十位是年份，所以七八位为19或者20
               十一位和十二位是月份，这两位是01-12之间的数值
               十三位和十四位是日期，是从01-31之间的数值
               十五，十六，十七都是数字0-9
               十八位可能是数字0-9，也可能是X
               */
              var idcard_patter = /^[1-9][0-9]{5}([1][9][0-9]{2}|[2][0][0|1][0-9])([0][1-9]|[1][0|1|2])([0][1-9]|[1|2][0-9]|[3][0|1])[0-9]{3}([0-9]|[X])$/;
        
              // 判断格式是否正确
              var format = idcard_patter.test(value);
        
              // 返回验证结果，校验码和格式同时正确才算是合法的身份证号码
              if(last === last_no && format)
              {
               return true
              }else
              {
                return false
              }
    }

export default{
	routers,//获取用户当前的路由
	time,//计算时间戳
	time2,
	oldTiem,//计算年龄
	aesEncrypt,
	aesDecrypt,
	loginHeaders,//获取短信、登录的header
	aesPassWord,//登录的头
	userCookie,//用户的缓存
	aesEncryptUrlData,//通过路由传值时进行加密
	aesDecryptUrlData,//解密
	adminHeaders,//请求的头部
	restePassword,
	checkPhone,//判断手机号格式
	checkIDCard,//身份证正则
	validateIdentity,
}