<template>
	<div class="box">
		<div class="loginBox">
			<div class="left">
				<img src="../../assets/telo_logo.png" style="width: 200px;" alt="">
			</div>
			<div class="right">
				<div style="display: flex;align-items: center;justify-content: center;flex-direction: column;" v-show="type == 1">
					<div class="titleBox" style="padding-top: 110px !important;">
						<span>欢迎登录</span>
					</div>
					<a-input ref="userNameInput" v-model="userName" placeholder="请输入账号" style="width: 250px;margin-top: 30px;">
					      <a-icon type="mobile" slot="prefix" />
					</a-input>
					<a-input ref="userNameInput" v-model="pass" type="password" placeholder="请输入密码" style="width: 250px;margin-top: 20px;">
					      <a-icon slot="prefix" type="lock" />
					</a-input>
					
					<a-button type="primary" style="width: 250px;margin-top: 20px;" @click="login">登录</a-button>
					<div style="display: flex;align-items: center;width: 250px;justify-content: space-between;padding-top: 20px;font-size: 12px;">
						<!-- <a @click="type=3">忘记密码</a> -->
						<a @click="type=3">忘记密码</a>
						<a @click="type=2">注册</a>
					</div>
				</div>
				<div style="display: flex;align-items: center;justify-content: center;flex-direction: column;" v-show="type == 2">
					<div class="titleBox" style="padding-top: 50px !important;">
						<span>注册</span>
					</div>
					<a-input ref="userNameInput" v-model="registerMobile" placeholder="请输入手机账号" style="width: 250px;margin-top: 20px;">
					      <a-icon type="mobile" slot="prefix" />
					</a-input>
					<a-input ref="userNameInput" v-model="registerPass" type="password" placeholder="请输入密码" style="width: 250px;margin-top: 20px;">
					      <a-icon slot="prefix" type="lock" />
					</a-input>
					<a-input ref="userNameInput" v-model="twoRegisterPass" type="password" placeholder="请再次输入确认密码" style="width: 250px;margin-top: 20px;">
					      <a-icon slot="prefix" type="lock" />
					</a-input>
					<div style="width: 250px;margin-top: 20px;border: 1px solid #d9d9d9;border-radius: 4px;height: 34px;display: flex;align-items: center;justify-content: space-between;">
						<a-input v-model="registerCaptcha" placeholder="请输入验证码" style="border: none;"></a-input>
						<div style="width: 140px;height: 32px;border-left: 1px solid #d9d9d9;line-height: 32px;text-align: center;font-size: 12px;cursor: pointer;" @click="getCode">{{getCodeType?'获取验证码':codeNum+'s后获取'}}</div>
					</div>
					<a-button type="primary" style="width: 250px;margin-top: 20px;" @click="registerBtn">注册</a-button>
					<a style="font-size: 12px;padding-top: 20px;" @click="type=1">返回</a>
				</div>
				<div style="display: flex;align-items: center;justify-content: center;flex-direction: column;" v-show="type == 3">
					<div class="titleBox" style="padding-top: 50px !important;">
						<span>忘记密码</span>
					</div>
					<!-- <a-input ref="userNameInput" v-model="wjMobile" placeholder="请输入账号" style="width: 250px;margin-top: 20px;">
					      <a-icon type="mobile" slot="prefix" />
					</a-input> -->
					<a-input ref="userNameInput" v-model="wjMobile"  placeholder="请输入手机号" style="width: 250px;margin-top: 20px;">
					      <a-icon type="mobile" slot="prefix" />
					</a-input>
					<a-input ref="userNameInput" v-model="wjPass" type="password" placeholder="请输入密码" style="width: 250px;margin-top: 20px;">
					      <a-icon slot="prefix" type="lock" />
					</a-input>
					<a-input ref="userNameInput" v-model="wjPass2" type="password" placeholder="请再次输入确认密码" style="width: 250px;margin-top: 20px;">
					      <a-icon slot="prefix" type="lock" />
					</a-input>
					<div style="width: 250px;margin-top: 20px;border: 1px solid #d9d9d9;border-radius: 4px;height: 34px;display: flex;align-items: center;justify-content: space-between;">
						<a-input placeholder="请输入验证码" v-model="wjPatch" style="border: none;"></a-input>
						<div style="width: 140px;height: 32px;border-left: 1px solid #d9d9d9;line-height: 32px;text-align: center;font-size: 12px;cursor: pointer;" @click="wjGetCode">{{getwjCodeType?'获取验证码':codeNum2+'s后获取'}}</div>
					</div>
					<a-button type="primary" style="width: 250px;margin-top: 20px;" @click="wjBtn">保存</a-button>
					<a style="font-size: 12px;padding-top: 20px;" @click="type=1">返回</a>
				</div>
			</div>
		
			
		</div>
	</div>
</template>

<script>
	import helper from '../../utils/helper.js'
	import loginJs from '../../server/login.js'
	import adminJs from '../../server/admin.js'
	// console.log(helper.aesPassWord('13250746938','123456'))
	export default{
		data(){
			return{
				userName:'',
				pass:'',
				type:1,//1代表登录 2代表注册,3忘记密码
				getCodeType: true,
				codeNum: 60,
				registerMobile:'',//注册手机号
				registerPass:'',//注册密码
				twoRegisterPass:'',//再次确认密码
				registerCaptcha:'',
				wjMobile:'',
				wjPass:'',
				wjPass2:'',
				wjPatch:'',
				getwjCodeType:true,
				timer2:null,
				codeNum2:60
			}
		},
		async created(){
			// console.log(localStorage.getItem('admin'))
			// localStorage.setItem('admin',123)
			// const data = await loginJs.demoApi({},headers.getCodeheaders())
			// console.log(data)
			// localStorage.setItem('userId',{id:'',token:''})
			// localStorage.setItem('seekerUnionId','')
		},
		methods:{
			async wjBtn(){
				if(this.wjPass === ''){
					this.$message.error('密码不能为空')
					return
				}
				if(this.wjPass!=this.wjPass2){
					this.$message.error('两次密码不一致')
					return
				}
				let obj = {
					mobile:this.wjMobile,
					captcha: this.wjPatch,
					password: helper.restePassword(this.wjMobile,this.wjPatch,this.wjPass)
				}
				const data = await loginJs.resetPass(obj,helper.loginHeaders())
				console.log(data)
				if(data.code === 0){
					this.$message.success('重置成功')
				}else{
					this.$message.error(data.message+','+data.detail)
				}
			},
			async wjGetCode(){//获取充值密码的验证码
				if(this.wjMobile === ''){
					this.$message.error('请输入手机号')
					return
				}
				if(this.getwjCodeType){
					const data = await loginJs.reserSms({mobile:this.wjMobile},helper.loginHeaders())
					console.log(data)
					if(data.code != 0){
						this.$message.error(data.message+','+data.detail)
						return
					}
					this.getwjCodeType = false
					this.timer2 = setInterval(() => {
						this.codeNum2--;
						if (this.codeNum2 == 0) {
							//初始化倒计时
							this.getwjCodeType = true;
							this.codeNum2 = 60;
							clearInterval(this.timer2);
						}
					}, 1000);
				}
			},
			async login(){
				if(this.userName === ''){
					this.$message.error('请输入账号')
					return
				}
				if(this.pass === ''){
					this.$message.error('请输入密码')
					return
				}
				const data = await loginJs.phoneLogin({mobile:this.userName,password:helper.aesPassWord(this.userName,this.pass)},helper.loginHeaders())
				console.log(data)
				if(data.code == 0){
					localStorage.setItem('userId',JSON.stringify({id:data.data.id,token:data.data.token}))
					const user = await adminJs.adminUser({find_type: 'union_id', },helper.adminHeaders())
					console.log(user)
					if(user.code === 0){
						localStorage.setItem('seekerUnionId',user.data.id)
						this.$router.push('/')
						return
					}
					
					const userDetail = await adminJs.addAdminUser({},helper.adminHeaders())
					console.log(userDetail)
					if(userDetail.code === 560002){//说明已经创建
						localStorage.setItem('seekerUnionId',userDetail.data.id)
						this.$router.push('/')
					}else if(userDetail.code === 0){
						localStorage.setItem('seekerUnionId',userDetail.data.id)
						this.$router.push('/')
					}else{
						this.$message.error(userDetail.message+','+data.detail)
					}
				}else{
					this.$message.error(data.message+','+data.detail)
				}
				// this.$router.push('/')
			},
			async registerBtn(){
				if(this.registerMobile === ''){
					this.$message.error('请输入注册账号')
					return
				}
				if(this.registerPass === ''){
					this.$message.error('请输入注册密码')
					return
				}
				if(this.twoRegisterPass === ''){
					this.$message.error('请再次输入注册密码')
					return
				}
				if(this.twoRegisterPass != this.registerPass){
					this.$message.error('请确认两次注册密码是否一致')
					return
				}
				const data = await loginJs.register({
					mobile:this.registerMobile,
					captcha:this.registerCaptcha,
					password:helper.aesPassWord(this.registerMobile,this.registerPass)
				},helper.loginHeaders())
				console.log(data)
				if(data.code === 0){
					this.type = 1
					this.$message.success('注册成功')
				}else{
					this.$message.error(data.message+','+data.detail)
				}
			},
			async getCode(){
				if(this.getCodeType){
					const data = await loginJs.getCode({mobile:this.registerMobile},helper.loginHeaders())
					if(data.code != 0){
						this.$message.error(data.message+','+data.detail)
						return
					}else{
						
					}
					this.getCodeType = false
					this.timer = setInterval(() => {
						this.codeNum--;
						if (this.codeNum == 0) {
							//初始化倒计时
							this.getCodeType = true;
							this.codeNum = 60;
							clearInterval(this.timer);
						}
					}, 1000);
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.box{
		width: 100%;
		height: 100vh;
		background-color: #e6e8eb;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.loginBox{
		width: 700px;
		height: 500px;
		background-color: white;
		box-shadow: 0px 2px 4px rgba(0,0,0,0.1);
		border-radius: 4px;
		.left{
			width: 350px;
			height: 500px;
			float: left;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
			font-size: 20px;
			img{margin-bottom: 20px;}
			border-right: 1px solid #EEEEEF;
			box-sizing: border-box;
		}
		.right{
			width: 350px;
			height: 500px;
			float: left;
			display: flex;
			flex-direction: column;
			align-items: center;
			.titleBox{
				font-size: 20px;
				position: relative;
				margin-top: 20px;
			}
		}
	}
</style>
