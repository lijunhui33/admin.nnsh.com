<template>
	<div style="margin: 20px;">
		
		<a-card title="完善资料" v-show="true">
			<a-steps :current="0" style="width: 700px;margin-left: 20px;margin-bottom: 20px;">
			    <a-step>
			      <!-- <span slot="title">Finished</span> -->
			      <template slot="title">
			        新增
			      </template>
			      <span slot="description">填写家政人员信息</span>
			    </a-step>
			    <a-step title="完善"  description="完善家政人员基本信息" />
			    <a-step title="完善"  description="完善家政人员其他资料" />
			</a-steps>
			<div style="display: flex;align-items: center;flex-wrap: wrap;">
				<div style="margin-right: 30px;width: 1000px;">
					<up-input v-model="name" :value="name" requiredType title="名字" placeholder="请填写名字" style="margin-top: 20px;"></up-input>
				</div>
				<div style="margin-right: 30px;width: 1000px;">
					<up-input v-model="idCard" :value="idCard" requiredType title="身份证" placeholder="请填写身份证" style="margin-top: 20px;"></up-input>
				</div>
				<div style="margin-right: 30px;width: 1000px;">
					<up-input v-model="mobile" :value="mobile" requiredType title="手机号" placeholder="请填写手机号" style="margin-top: 20px;"></up-input>
				</div>
			</div>
			<a-button type="primary" style="margin-top: 20px;margin-left: 120px;" @click="btn">增加</a-button>
		</a-card>

	</div>
	
</template>

<script>
	import upInput from './components/input.vue'
	import moment from 'moment';
	import helper from '../../../utils/helper.js'
	import workerApi from '../../../server/worker.js'

	export default{
		components:{
			upInput
		},
		data(){
			return{
				name:'',
				idCard:'',
				mobile:''
			}
		},
		created(){
			console.log(helper.validateIdentity('440882199704088815'))
		},
		mounted() {
			
		},
		methods:{
			async btn(){
				if(this.name === ''){
					this.$message.error('名字不能为空')
					return
				}
				if(this.idCard == ''){
					this.$message.error('身份证不能为空')
					return
				}
				
				if(this.mobile === ''){
					this.$message.error('手机号不能为空')
					return
				}
				if(!helper.checkPhone(this.mobile)){
					this.$message.error('手机号格式不正确')
					return
				}
				const data = await workerApi.addWorker({type: '管理员创建'},helper.adminHeaders())
				if(data.code == 0){
					let obj = {
						name:this.name,
						mobile: this.mobile,
						identity_card: this.idCard,
						worker_id:data.data.id,
					}
					const data2 = await workerApi.putWorker(obj,helper.adminHeaders())
					if(data2.code == 0){
						this.$router.push(`/worker/add?id=${data.data.id}`)
					}else{
						this.$message.error(data2.message+','+data2.detail)
					}
				}else{
					this.$message.error(data.message+','+data.detail)
				}
			}
		}
	}
</script>

<style lang="scss">
	.list{display: flex;margin-bottom: 10px;
		.title{width: 80px ;text-align: right;height: 34px;line-height: 34px;padding-right: 10px;}
	}
</style>
