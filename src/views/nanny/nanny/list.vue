<template>
	<div style="margin: 20px;">
		<a-card title="家政人员列表">
			<a-input style="width: 200px;" v-model="inpVal"  placeholder="输入要查找的姓名" ></a-input>
			<a-button type="primary" @click="search" icon="search" style="margin-bottom: 20px;margin-left: 20px;">
			搜索
			</a-button>
			
			<a-button type="primary" icon="redo" style="margin-bottom: 20px;margin-left: 20px;" @click="cz">
				重置
			</a-button>
			
			<a-button type="primary" @click="add" style="margin-bottom: 20px;margin-left: 20px;">
				新增
			</a-button>
			<a-table :columns="columns" :data-source="data"  :pagination="false">
				<span slot="action" slot-scope="text, record">
					<a @click="detail(text)">详情</a>
					<a @click="code(text)" style="padding-left: 20px;">二维码</a>
				</span>
			</a-table>
			<a-pagination style="margin-top: 30px;" @change="paginationChange" v-model="current" :total="total" show-less-items />
		</a-card>
	</div>
</template>

<script>
	const columns = [
		{
			title:'编号',
			key:'id',
			dataIndex:'id'
		},
		{
			title:'姓名',
			key:'name',
			dataIndex:'name'
		},
		{
			title:'联系电话',
			key:'mobile',
			dataIndex:'mobile'
		},
		{
			title:'出生日期',
			key:'birthday',
			dataIndex:'birthday'
		},
		{
			title:'婚姻状况',
			key:'marital_status',
			dataIndex:'marital_status'
		},
		{
				title:'生育状况',
				key:'birth_status',
				dataIndex:'birth_status'
		},
		{
			title:'开始工作时间',
			key:'work_start_year',
			dataIndex:'work_start_year'
		},
		{
			title: '操作',
			key: 'action',
			scopedSlots: { customRender: 'action' }
		}
	];
	import workerApi from '../../../server/worker.js'
	import helper from '../../../utils/helper.js'
	export default{
		data(){
			return{
				columns,
				data:[],
				current:1,
				total:0,
				searchVal:'',
				inpVal:''
			}
		},
		created(){
			if(this.$route.params.pageNumber){
				this.current = Number(this.$route.params.pageNumber)
				this.wokerList()
			}else{
				this.wokerList()
			}
		},
		methods:{
			async search(){
				console.log(this.inpVal)
				if(this.inpVal === ''){
					this.$message.error('请输入姓名')
					return
				}
				this.searchVal = this.inpVal
				this.current = 1
				const data = await workerApi.searchWorker({name: this.searchVal,page_number:this.current,page_size:10 },helper.adminHeaders())
				if(data.code == 0){
					this.total = data.data.amount
					this.data = data.data.rows.map(item=>{
						let datas = item
						datas.key = datas.id
						datas.name = datas.name == null ? '暂无':datas.name
						datas.mobile = datas.mobile == null ? '暂无':datas.mobile
						datas.birthday = data.birthday == null ? '暂无':datas.birthday
						datas.marital_status = data.marital_status == null ? '暂无':data.Whether
						datas.birth_status = datas.birth_status == null ? '暂无':datas.birth_status
						datas.work_start_year = datas.work_start_year == null ? '暂无':datas.work_start_year
						return datas
					})
				}
			},
			code(text){
				window.open(`http://m.anxin.nnshfw.com/pages/nanny/qr_code?id=${text.id}`)
				
			},
			async wokerList(){
				const data = await workerApi.wokerList({page_size: 10,page_number:this.current},helper.adminHeaders())
				if(data.code === 0){
					this.total = data.data.amount
					this.data = data.data.rows.map(item=>{
						// console.log(item.profile_data.id+item.profile_data.name)
						let datas = item.profile_data
						datas.key = datas.id
						datas.name = datas.name == null ? '暂无':datas.name
						datas.mobile = datas.mobile == null ? '暂无':datas.mobile
						datas.birthday = data.birthday == null ? '暂无':datas.birthday
						datas.marital_status = data.marital_status == null ? '暂无':data.Whether
						datas.birth_status = datas.birth_status == null ? '暂无':datas.birth_status
						datas.work_start_year = datas.work_start_year == null ? '暂无':datas.work_start_year
						return datas
					})
				}else{
					this.$router.push('/login')
				}
			},
			detail(e){
				this.$router.push({
					path:'/worker/detail',
					query:{q:helper.aesEncryptUrlData({id:e.id})}
				})
			},
			async paginationChange(e){
				if(this.searchVal!=''){
					this.current = e
					const data = await workerApi.searchWorker({name: this.searchVal,page_number:this.current,page_size:10 },helper.adminHeaders())
					if(data.code == 0){
						this.total = data.data.amount
						this.data = data.data.rows.map(item=>{
							let datas = item
							datas.key = datas.id
							datas.name = datas.name == null ? '暂无':datas.name
							datas.mobile = datas.mobile == null ? '暂无':datas.mobile
							datas.birthday = data.birthday == null ? '暂无':datas.birthday
							datas.marital_status = data.marital_status == null ? '暂无':data.Whether
							datas.birth_status = datas.birth_status == null ? '暂无':datas.birth_status
							datas.work_start_year = datas.work_start_year == null ? '暂无':datas.work_start_year
							return datas
						})
					}
					return
				}
				this.$router.push(`/worker/list/${e}`)
			},
			add(){
				this.$router.push('/worker/add_name')
			},
			cz(){
				this.searchVal = ''
				this.inpVal = ''
				this.$router.push(`/worker/list/1`)
			}
		},
		watch:{
			$route(){
				if(this.$route.params.pageNumber){
					this.current = Number(this.$route.params.pageNumber)
					this.wokerList()
				}else{
					this.wokerList()
				}
			}
		}
	}
</script>

<style>
</style>
