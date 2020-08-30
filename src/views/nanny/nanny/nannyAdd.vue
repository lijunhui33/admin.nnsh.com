<template>
	<div style="margin: 20px;">
		
		<a-card title="个人资料">
			<a-steps :current="1" style="width: 700px;margin-left: 20px;margin-bottom: 20px;">
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
				<!-- <div style="margin-right: 30px;width: 1000px;">
					<up-input v-model="name" :value="name"  title="名字" placeholder="请填写名字" style="margin-top: 20px;"></up-input>
				</div> -->
				<div style="margin-right: 30px;width: 1000px;">
					<up-input v-model="nickname" :value="nickname"  title="昵称" placeholder="请填写昵称" style="margin-top: 20px;"></up-input>
				</div>
				<div style="margin-right: 30px;width: 1000px;">
					<up-select-list title="性别"   :value="sex" :list="sexList" placeholder="请选择性别" @change="sexChange"></up-select-list>
				</div>
				<div style="margin-right: 30px;width: 1000px;">
					<up-select-time v-model="bir" :value="bir"  title="出生日期" placeholder="请填写出生日期"></up-select-time>
				</div>
				<div style="margin-right: 30px;width: 1000px;">
					<up-select-list title="学历" :value="educationIndex"  :list="educationList" placeholder="请选择学历" @change="educationChange"></up-select-list>
				</div>
				<div style="margin-right: 30px;width: 1000px;">
					<up-select-list title="民族" :value="nationIndex"  :list="nationList" placeholder="请选择" @change="nationChange"></up-select-list>
				</div>
				<div style="margin-right: 30px;width: 1000px;">
					<up-select-list title="生肖" :value="zodiacIndex"  :list="chineseZodiac" placeholder="请选择" @change="chineseZodiacChange"></up-select-list>
				</div>
				<div style="margin-right: 30px;width: 1000px;">
					<up-input v-model="weight" :value="weight"  title="体重" placeholder="请填写体重" style="margin-top: 20px;"></up-input>
				</div>
				<div style="margin-right: 30px;width: 1000px;width: 1000px;">
					<up-input v-model="height" :value="height"  title="身高" placeholder="请填写身高" style="margin-top: 20px;"></up-input>
				</div>
				<!-- <div style="margin-right: 30px;width: 1000px;">
					<up-input v-model="mobile" :value="mobile"  title="电话" placeholder="请填写电话" style="margin-top: 20px;"></up-input> 
				</div> -->
				<div style="margin-right: 30px;width: 1000px;">
					<up-select-list title="婚姻状况" :value="maritalStatusIndex"  :list="maritalStatus" placeholder="请选择" @change="maritalStatusChange"></up-select-list>
				</div>
				<div style="margin-right: 30px;width: 1000px;">
					<up-select-list title="是否生育" :value="birthIndex"  :list="Whether" placeholder="请选择" @change="birthStatusChange"></up-select-list>
					
				</div>
				<div style="margin-right: 30px;width: 1000px;">
					<!-- <up-input v-model="family_size" :value="family_size" title="家庭人口" placeholder="请填写家庭人口" style="margin-top: 20px;"></up-input> -->
					<up-select-list title="家庭人口" :value="familySizeIndex"  :list="familySizeList" placeholder="请选择" @change="familySizeListChange"></up-select-list>
				</div>
				<div style="margin-right: 30px;width: 1000px;">
					<up-select-list title="宗教信仰" :value="religionIndex"  :list="religionList" placeholder="请选择" @change="religionChange"></up-select-list>
				</div>
				<div style="margin-right: 30px;width: 1000px;">
					<up-select-time v-model="work_start_year" :value="work_start_year"  title="从事家政开始年份" placeholder="从事家政开始年份"></up-select-time>
				</div>
				<div class="textareaBox" style="margin-right: 30px;display: flex;width: 1000px;">
					<div  style="width: 100px;text-align: right;padding-top: 20rpx;height: 50px;line-height: 50px;">
						性格特点
					</div>
					<a-textarea
					      v-model="nature"
					      placeholder="请填写性格特点"
					      :auto-size="{ minRows: 3, maxRows: 5 }"
						  style="width: 300px;margin-left: 20px;margin-top: 20px;"
					/>
				</div>
				<div class="textareaBox" style="margin-right: 30px;display: flex;width: 700px;">
					<div  style="width: 100px;text-align: right;padding-top: 20rpx;height: 50px;line-height: 50px;">
						评价
					</div>
					<a-textarea
					      v-model="comment"
					      placeholder="请填写阿姨评价"
					      :auto-size="{ minRows: 3, maxRows: 5 }"
						  style="width: 300px;margin-left: 20px;margin-top: 20px;"
					/>
				</div>
			</div>
			<a-button type="primary" style="margin-top: 20px;margin-left: 120px;" @click="btn">下一步</a-button>
		</a-card>
	</div>
</template>

<script>
	import upLoad from './components/uploadImg.vue'
	import upInput from './components/input.vue'
	import upSelectTime from './components/selectTime.vue'
	import upSelectList from './components/selectList.vue'
	import upSelectCheck from './components/selectCheck.vue'
	import data from '../../../utils/data.js'
	import helper from '../../../utils/helper.js'
	import workerApi from '../../../server/worker.js'
	export default{
		components:{
			upLoad,upInput,upSelectTime,upSelectList,upSelectCheck
		},
		data(){
			return{
				uploadFile:'',
				idCardJustFile:'',
				idCardBackFile:'',
				name:'',//姓名
				nickname:'',//昵称
				bir:'',//出生入区
				sexList:[{value:0,label:'女'},{value:1,label:'男'}],//性别选择列表
				sex:'',
				mobile:'',//电话
				idCard:'',//身份证号
				educationList:data.educationalLevel,
				education:'',
				jobIntentionList:[{id:0,name:'保姆'},{id:1,name:'月嫂'},{id:2,name:'保洁'},{id:3,name:'月嫂'}],
				familySizeList:[{value:0,label:'0至3人'},{value:1,label:'4至6人'},{value:2,label:'7人及以上'}],
				receivingList:data.acceptanceStatus,
				nationList:data.nation,
				chineseZodiac:data.chineseZodiac,
				maritalStatus:[{value:0,label:'未婚'},{value:1,label:'已婚'},{value:2,label:'离异'},{value:3,label:'其他'}],
				educationalLevel:data.educationalLevel,
				weight:'',
				height:'',
				householdRegister:'',//户籍
				address:'',//居住地址
				Whether:[{value:0,label:'已育'},{value:1,label:'未育'}],
				money:'',
				languageList:[{id:0,name:'普通话'},{id:1,name:'粤语'},{id:2,name:'雷州话'},{id:3,name:'其他'}],
				experienceList:[{id:0,name:'农民'},{id:1,name:'保姆'},{id:3,name:'家庭主妇'},{id:4,name:'打工'},{id:5,name:'护士'},{id:6,name:'教师'},{id:7,name:'厨师'},{id:8,name:'个体户'},{id:9,name:'职员'},{id:10,name:'其他'}],
				family_size:'',//家庭人口
				religionList:data.religion,//宗教信仰
				work_start_year:'',//从事家政开始年份
				nature:'',//性格特点
				comment:'',//自我评价
				nation:'',//名族
				birth_status:'',//是否生育
				zodiac:'',//生肖
				marital_status:'',
				religion:'',//宗教信仰
				educationIndex:'',
				nationIndex:'',
				zodiacIndex:'',
				maritalStatusIndex:'',
				birthIndex:'',
				familySizeIndex:'',
				religionIndex:'',
				worker_id:''
			}
		},
		mounted() {
			
		},
		created() {
			this.worker_id = this.$route.query.id
		},
		methods:{
			async btn(){
				
				
					
					let obj = {
						// id:data.data.id,
						// id:1,
						worker_id:this.worker_id,
						nickname: this.nickname,
						// name:this.name,
						sex:this.sex,
						birthday: this.bir,
						education: this.education,
						nation: this.nation,
						zodiac: this.zodiac,
						height: this.height,
						weight: this.weight,
						// mobile: this.mobile,
						marital_status: this.marital_status,
						birth_status: this.birth_status,
						family_size: this.family_size,
						religion: this.religion,
						political_status: '',
						work_start_year: this.work_start_year,
						nature: this.nature,
						comment: this.comment
					}
					for(var x in obj){
						console.log(obj[x])
						if(obj[x] == ''){
							delete obj[x]
						}
					}
					const putData = await workerApi.putWorker(obj,helper.adminHeaders())
					console.log(putData)
					if(putData.code === 0){
						this.$router.push({
							path:'/worker/detail',
							query:{q:helper.aesEncryptUrlData({id:this.worker_id})}
						})
					}else{
						this.$message.error(putData.message+','+putData.detail)
					}
				
				
				
				// this.$router.push('/nanny_manage/nanny/next')
			},
			consolesss(){
				// console.log('---->',this.bir)
			},
			familySizeListChange(e){
				this.family_size = e.label
				this.familySizeIndex = e.value
			},
			imgChange1(e){//个人照
				this.uploadFile = e
			},
			imgChange2(e){//身份证正面
				this.idCardJustFile = e
			},
			imgChange3(e){//身份证方面
				this.idCardBackFile = e
			},
			sexChange(e){//性别选择后触发
				this.sex = e.value
				console.log(e)
			},
			educationChange(e){//选择学历触发
				this.education = e.label
				this.educationIndex = e.value
			},
			jobIntentionChange(e){//求职意向选择后触发的回调
			},
			receivingChange(e){//选择求职意向后的变化
			},
			nationChange(e){//名族变化
				this.nation = e.label
				this.nationIndex = e.value
			},
			chineseZodiacChange(e){//生肖变化
				this.zodiac = e.label
				this.zodiacIndex = e.value
			},
			maritalStatusChange(e){//婚姻状况变化
				this.marital_status = e.label
				this.maritalStatusIndex = e.value
			},
			educationalLevelChange(e){//最高学历
			},
			wpChange(e){//是否外派
			},
			languageChange(e){//语言能力
			},
			experienceChange(e){//工作经历
			},
			birthStatusChange(e){//是否生育
				this.birth_status = e.label
				this.birthIndex = e.value
			},
			religionChange(e){//宗教信仰变化
			console.log(e)
				this.religion = e.label
				this.religionIndex = e.value
			}
		}
	}
</script>

<style lang="scss">
	
</style>
