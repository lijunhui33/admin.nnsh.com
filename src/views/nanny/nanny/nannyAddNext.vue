<template>
	<div style="margin: 20px;">
		
		<a-card title="完善资料" v-show="true">
			<a-steps :current="1" style="width: 500px;margin-left: 20px;margin-bottom: 20px;">
			    <a-step>
			      <!-- <span slot="title">Finished</span> -->
			      <template slot="title">
			        新增
			      </template>
			      <span slot="description">填写家政人员信息</span>
			    </a-step>
			    <a-step title="完善"  description="完善家政人员资料" />
			    
			</a-steps>
			<!-- <div style="display: flex;">
				<up-load title="个人照" @change="imgChange1" :value="'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597916344038&di=372169a68d78fc5c6ee10fddd72a40ef&imgtype=0&src=http%3A%2F%2Fe.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fa044ad345982b2b76cbfbd2133adcbef76099b37.jpg'" style="margin-right: 20px;"></up-load>
				<up-load title="身份证正面" @change="imgChange2" style="margin-right: 20px;"></up-load>
				<up-load title="身份证反面" @change="imgChange3"></up-load>
			</div> -->
			<div style="display: flex;align-items: center;flex-wrap: wrap;" v-show="false">
				<div style="margin-right: 30px;width: 1000px;">
					<up-input v-model="name" :value="name" requiredType title="名字" placeholder="请填写名字" style="margin-top: 20px;"></up-input>
				</div>
				<div style="margin-right: 30px;width: 1000px;">
					<up-input v-model="nickname" :value="nickname" requiredType title="昵称" placeholder="请填写昵称" style="margin-top: 20px;"></up-input>
				</div>
				<div style="margin-right: 30px;width: 1000px;">
					<up-select-list title="性别"  requiredType :value="sex" :list="sexList" placeholder="请选择性别" @change="sexChange"></up-select-list>
				</div>
				<div style="margin-right: 30px;">
					<up-select-time v-model="bir" :value="bir" requiredType title="出生日期" placeholder="请填写出生日期"></up-select-time>
				</div>
				<div style="margin-right: 30px;">
					<up-select-list title="学历" :value="educationValIndex"  :list="educationList" placeholder="请选择学历" @change="educationChange"></up-select-list>
				</div>
				<div style="margin-right: 30px;">
					<up-select-list title="民族"  :value="nationValIndex" :list="nationList" placeholder="请选择" @change="nationChange"></up-select-list>
				</div>
				<div style="margin-right: 30px;">
					<up-select-list title="生肖" :value="zodiacValIndex"  :list="chineseZodiac" placeholder="请选择" @change="chineseZodiacChange"></up-select-list>
				</div>
				<div style="margin-right: 30px;">
					<up-input v-model="weight" :value="weight"  title="体重" placeholder="请填写体重" style="margin-top: 20px;"></up-input>
				</div>
				<div style="margin-right: 30px;">
					<up-input v-model="height" :value="height"  title="身高" placeholder="请填写身高" style="margin-top: 20px;"></up-input>
				</div>
				<div style="margin-right: 30px;">
					<up-input v-model="mobile" :value="mobile" requiredType title="电话" placeholder="请填写电话" style="margin-top: 20px;"></up-input> 
				</div>
				<div style="margin-right: 30px;">
					<up-select-list title="婚姻状况" :value="maritalStatusIndex" :list="maritalStatus" placeholder="请选择" @change="maritalStatusChange"></up-select-list>
				</div>
				<div style="margin-right: 30px;">
					<up-select-list title="是否生育" :value="birthStatusIndex" :list="Whether" placeholder="请选择" @change="birthStatusChange"></up-select-list>
				</div>
				<div style="margin-right: 30px;">
					<up-select-list title="家庭人口" :value="familySizeIndex"  :list="familySizeList" placeholder="请选择" @change="familySizeListChange"></up-select-list>
				</div>
				<div style="margin-right: 30px;">
					<up-select-list title="宗教信仰" :value="religionIndex"  :list="religionList" placeholder="请选择" @change="religionChange"></up-select-list>
				</div>
				<div style="margin-right: 30px;">
					<up-select-time v-model="work_start_year" :value="work_start_year" requiredType title="从事家政开始年份" placeholder="从事家政开始年份"></up-select-time>
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
				<div class="textareaBox" style="margin-right: 30px;display: flex;width: 500px;">
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
			<a-button type="primary" style="margin-top: 20px;margin-left: 120px;" @click="btn">更新</a-button>
		</a-card>
		<!--  -->
		<a-card title="家政人员证件" style="margin-top: 20px;">
			<a-button type="primary" style="margin-bottom: 20px;" @click="zsVisible = true">
				新增
			</a-button>
			<a-table :columns="columns1" :data-source="data1"  :pagination="false">
				<div slot="url" slot-scope="text, record">
					<img :src="text.url" style="width:100px;heigth:100px" />
					<img :src="text.url2" style="width:100px;heigth:100px;margin-left: 20px;" >
				</div>
				<span slot="action" slot-scope="text, record">
					<a @click="handelZsDetail(text)" style="padding-right: 20px;">详情</a>
					<a @click="deleteZs(text)">删除</a>
				</span>
			</a-table>
		</a-card>
		<a-modal :visible="zsVisible" title="新增证件" :width="500" okText="确认" cancelText="取消" centered @ok="addZs" @cancel="zsVisible = false">
			<div class="list">
				<div class="title">证件类型</div>
				<a-select   style="width: 300px;" placeholder='请选择证件类型' @change="addZsTypeChange">
				      <a-select-option v-for="item in zsTypeList" :value="item.value" :key="item.value">
							{{item.label}}
				      </a-select-option>
				</a-select>
			</div>
			<div class="list">
				<div class="title">
					证件号码
				</div>
				<a-input placeholder="证件号码" v-model="addZsNumber" style="width: 300px;"></a-input>
			</div>
			<div class="list">
				<div class="title">
					颁发机构
				</div>
				<a-input placeholder="颁发机构" v-model="addAuthority" style="width: 300px;"></a-input>
			</div>
			<div class="list">
				<div class="title">
					颁发日期
				</div>
				 <a-date-picker style="width: 300px;" @change="addZsDate"  v-model="addIssueTime" placeholder="请选择颁发日期" />
			</div>
			<div class="list">
				<div class="title">
					有效年限
				</div>
				<a-input placeholder="有效年限" v-model="addValidityPeriod" style="width: 300px;"></a-input>
			</div>
			<div class="list" v-show="addZsType!=''">
				<div class="title">
					证件正面
				</div>
				<up-load title="" @change="zsChange" style="margin-right: 20px;margin-top: -20px;"></up-load>
			</div>
			<div class="list" v-show="addZsFmtype">
				<div class="title">
					证件反面
				</div>
				<up-load title="" @change="zsFmChange" style="margin-right: 20px;margin-top: -20px;"></up-load>
			</div>
		</a-modal>
		<a-modal :visible="zsDetailsVisible" title="证件详情" :width="500" okText="确认" cancelText="取消" centered @ok="putZs" @cancel="zsDetailsVisible = false">
			<div class="list">
				<div class="title">证件类型</div>
				<a-select   style="width: 300px;" placeholder='请选择证件类型'  @change="zsDetailTypeChange" v-model="zsDetail.typeIndex">
				      <a-select-option v-for="item in zsTypeList" :value="item.value" :key="item.value">
							{{item.label}}
				      </a-select-option>
				</a-select>
			</div>
			<div class="list">
				<div class="title">
					证件号码
				</div>
				<a-input placeholder="证件号码" v-model="zsDetail.number" style="width: 300px;"></a-input>
			</div>
			<div class="list">
				<div class="title">
					颁发机构
				</div>
				<a-input placeholder="颁发机构" v-model="zsDetail.authority" style="width: 300px;"></a-input>
			</div>
			<div class="list">
				<div class="title">
					颁发日期
				</div>
				 <a-date-picker style="width: 300px;" @change="putZsTime"   :default-value="zsDetail.issue_time" placeholder="请选择颁发日期" />
			</div>
			<div class="list">
				<div class="title">
					有效年限
				</div>
				<a-input placeholder="有效年限" v-model="zsDetail.validity_period" style="width: 300px;"></a-input>
			</div>
			<div class="list">
				<div class="title">
					证件正面
				</div>
				<up-load title="" @change="zsPutChange" :value="zsDetail.url" style="margin-right: 20px;margin-top: -20px;"></up-load>
			</div>
			<div class="list" v-show="zsDetail.typeIndex == 0">
				<div class="title">
					证件反面
				</div>
				<up-load title="" @change="zsPutsFmChange" :value="zsDetail.url2" style="margin-right: 20px;margin-top: -20px;"></up-load>
			</div>
		</a-modal>
		<!--  -->
		<a-card title="家庭成员" style="margin-top: 20px;">
			<a-button type="primary" style="margin-bottom: 20px;" @click="addFamilyMaskType = true">
				新增
			</a-button>
			<a-table :columns="columns2" :data-source="data2"  :pagination="false">
				<img  style="width:100px;heigth:100px" slot="url" slot-scope="text, record" @click="zs(text)" :src="text.url" />
				<span slot="action" slot-scope="text, record">
					<a  style="padding-right: 20px;" @click="handelFamilyDetail(text)">详情</a>
					<a @click="deleteFamily(text)">删除</a>
				</span>
			</a-table>
		</a-card>
		<a-modal :visible="addFamilyMaskType" title='新增家庭成员' centered  okText="确认" cancelText="取消" @ok="handelAddFamily" @cancel="addFamilyMaskType = false">
			<div class="list">
				<div class="title">关系</div>
				<a-select   style="width: 300px;" placeholder='请选择家庭成员关系' @change="addRelationChange">
				      <a-select-option v-for="item in relationshipList" :value="item.value" :key="item.value">
							{{item.label}}
				      </a-select-option>
				</a-select>
			</div>
			<div class="list">
				<div class="title">名称</div>
				<a-input placeholder="请输入" v-model="addFamilyName" style="width: 300px;"></a-input>
			</div>
			<div class="list">
				<div class="title">手机号码</div>
				<a-input placeholder="请输入" v-model="addFamilyMobile" style="width: 300px;"></a-input>
			</div>
			<div class="list">
				<div class="title">工作单位</div>
				<a-input placeholder="请输入" v-model="addFamilyWorkPlace" style="width: 300px;"></a-input>
			</div>
			<div class="list">
				<div class="title">描述</div>
				<a-textarea
				      v-model="addFamilyDescription"
				      placeholder="请输入"
					  style="width: 300px;"
				      :auto-size="{ minRows: 3, maxRows: 5 }"
				    />
			</div>
		</a-modal>
		<a-modal :visible="familyDetailMaskType" title='家庭成员详情' centered  okText="确认" cancelText="取消" @ok="handelAddFamilyDetail" @cancel="familyDetailMaskType = false">
			<div class="list">
				<div class="title">关系</div>
				<a-select   style="width: 300px;" placeholder='请选择家庭成员关系' @change="detailRelationChange" v-model="familyDetail.typeIndex">
				      <a-select-option v-for="item in relationshipList" :value="item.value" :key="item.value">
							{{item.label}}
				      </a-select-option>
				</a-select>
			</div>
			<div class="list">
				<div class="title">名称</div>
				<a-input placeholder="请输入" v-model="familyDetail.name" style="width: 300px;"></a-input>
			</div>
			<div class="list">
				<div class="title">手机号码</div>
				<a-input placeholder="请输入" v-model="familyDetail.mobile" style="width: 300px;"></a-input>
			</div>
			<div class="list">
				<div class="title">工作单位</div>
				<a-input placeholder="请输入" v-model="familyDetail.work_place" style="width: 300px;"></a-input>
			</div>
			<div class="list">
				<div class="title">描述</div>
				<a-textarea
				      v-model="familyDetail.description"
				      placeholder="请输入"
					  style="width: 300px;"
				      :auto-size="{ minRows: 3, maxRows: 5 }"
				    />
			</div>
		</a-modal>
		<!--  -->
		<a-card title="工作经验" style="margin-top: 20px;">
			<a-button type="primary" style="margin-bottom: 20px;" @click="addExMaskType = true">
				新增
			</a-button>
			<a-table :columns="columns3" :data-source="data3"  :pagination="false">
				<img  style="width:100px;heigth:100px" slot="url" slot-scope="text, record" @click="zs(text)" :src="text.url" />
				<span slot="action" slot-scope="text, record">
					<a  style="padding-right: 20px;" @click="handelExDetail(text)">详情</a>
					<a @click="deleteEx(text)">删除</a>
				</span>
			</a-table>
		</a-card>
		<a-modal :visible="addExMaskType" centered okText="确认" cancelText="取消" title="新增工作经验" @ok="addEx" @cancel="addExMaskType = false">
			<div class="list">
				<div class="title">工作类型</div>
				<a-select   style="width: 300px;" placeholder='' @change="addExWorkTypeChange">
				      <a-select-option v-for="item in workExTypeList" :value="item.value" :key="item.value">
							{{item.label}}
				      </a-select-option>
				</a-select>
			</div>
			<div class="list">
				<div class="title">开始时间</div>
				<a-date-picker style="width: 300px;" @change="addExStartTimeChange"  v-model="addExStartTime" placeholder="请选择颁发日期" />
			</div>
			<div class="list">
				<div class="title">结束时间</div>
				<a-date-picker style="width: 300px;" @change="addExendTimeChange"  v-model="addExEndTime" placeholder="请选择颁发日期" />
			</div>
			<div class="list">
				<div class="title">工作内容</div>
				<a-textarea
				      v-model="addExDescription"
				      placeholder="请输入"
					  style="width: 300px;"
				      :auto-size="{ minRows: 3, maxRows: 5 }"
				    />
			</div>
		</a-modal>
		<a-modal :visible="exDetailMask" centered okText="确认" cancelText="取消" title="工作经验详情" @ok="handelExDetailOk" @cancel="exDetailMask = false">
			<div class="list">
				<div class="title">工作类型</div>
				<a-select   style="width: 300px;" placeholder='' v-model="exDetail.typeIndex" @change="exDetailTypeChange">
				      <a-select-option v-for="item in workExTypeList" :value="item.value" :key="item.value">
							{{item.label}}
				      </a-select-option>
				</a-select>
			</div>
			<div class="list">
				<div class="title">开始时间</div>
				<a-date-picker style="width: 300px;" @change="startExStartTimeChange" :default-value="moment(exDetail.startTime, dateFormat)" :format="dateFormat" placeholder="请选择颁发日期" />
			</div>
			<div class="list">
				<div class="title">结束时间</div>
				<a-date-picker style="width: 300px;" @change="endExendTimeChange"  :default-value="moment(exDetail.endTime, dateFormat)" :format="dateFormat" placeholder="请选择颁发日期" />
			</div>
			<div class="list">
				<div class="title">工作内容</div>
				<a-textarea
				      v-model="exDetail.detail"
				      placeholder="请输入"
					  style="width: 300px;"
				      :auto-size="{ minRows: 3, maxRows: 5 }"
				    />
			</div>
		</a-modal>
		<a-modal :visible="addPotoVisible" centered okText="确认" cancelText="取消" title="新增招聘" @ok="addPoto" @cancel="addPotoVisible = false">
			<div class="list">
				<div class="list">
					<div class="title">描述</div>
					<a-textarea
					      v-model="addPotoDescription"
					      placeholder="请输入"
						  style="width: 300px;"
					      :auto-size="{ minRows: 3, maxRows: 5 }"
					/>
				</div>
			</div>
			<div class="list">
				<div class="title">
					照片
				</div>
				<up-load title="" @change="addPotoChange" style="margin-right: 20px;margin-top: -20px;"></up-load>
			</div>
		</a-modal>
		<a-modal :visible="potoDetailMaskType" centered okText="确认" cancelText="取消" title="照片详情" @ok="putPotoDetail" @cancel="potoDetailMaskType = false">
			<div class="list">
				<div class="list">
					<div class="title">描述</div>
					<a-textarea
						  v-model="potoDetail.description"
						  placeholder="请输入"
						  style="width: 300px;"
						  :auto-size="{ minRows: 3, maxRows: 5 }"
					/>
				</div>
			</div>
			<div class="list">
				<div class="title">
					照片
				</div>
				<up-load title="" :value="potoDetail.url"  @change="potoDetailChange" style="margin-right: 20px;margin-top: -20px;"></up-load>
			</div>	
			
		</a-modal>
		<a-card title="照片" style="margin-top: 20px;">
			<a-button type="primary" style="margin-bottom: 20px;" @click="addPotoVisible = true">
				新增
			</a-button>
			<a-table :columns="columns4" :data-source="data4"  :pagination="false">
				<img  style="width:100px;heigth:100px" slot="url" slot-scope="text, record" @click="zs(text)" :src="text.url" />
				<span slot="action" slot-scope="text, record">
					<!-- <a @click="potoDetail(text)" style="padding-right: 20px;">详情</a> -->
					<a @click="deletePoto(text)">删除</a>
				</span>
			</a-table>
		</a-card>
		<a-card title="背景调查" style="margin-top: 20px;">
			<a-button type="primary" style="margin-bottom: 20px;position: relative;width: 100px;cursor: pointer;" >
				上传
				<input type="file" style="position: absolute;width: 100px;top: 0;left: 0;width: 100px;opacity: 0;cursor: pointer;" @input="bgCange">
			</a-button>
			<a-table :columns="columns5" :data-source="data5"  :pagination="false">
				<img  style="width:100px;heigth:100px" slot="url" slot-scope="text, record" @click="zs(text)" :src="text.url" />
				<span slot="action" slot-scope="text, record">
					<a @click="bgDetail(text)" style="padding-right: 20px;">下载</a>
					<a @click="deletebg(text)">删除</a>
				</span>
			</a-table>
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
	import moment from 'moment';
	import helper from '../../../utils/helper.js'
	import workerApi from '../../../server/worker.js'
	const columns1 = [
		{
			title:'号码',
			key:'number',
			dataIndex:'number'
	},
	{
		title:'证件类型',
		key:'type',
		dataIndex:'type'
	},
	{
		title:'颁发机构',
		key:'authority',
		dataIndex:'authority'
	},
	{
		title:'颁发时间',
		key:'time',
		dataIndex:'time'
	},
	{
		title:'有效期(年)',
		key:'validity_period',
		dataIndex:'validity_period'
	},
	{ title: '证件',
	key: 'url',
	scopedSlots: { customRender: 'url' }},
	{
			title: '操作',
			key: 'action',
			scopedSlots: { customRender: 'action' }
		}]
	// console.log(data)
	const columns2 = [{
		title:'关系',
		key:'relationship',
		dataIndex:'relationship'
	},{
		title:'姓名',
		key:'name',
		dataIndex:'name'
	},{
		title:'手机号',
		key:'mobile',
		dataIndex:'mobile'
	},{
		title:'工作单位',
		key:'work_place',
		dataIndex:'work_place'
	},{
		title:'描述',
		key:'description',
		dataIndex:'description'
	},
	{
			title: '操作',
			key: 'action',
			scopedSlots: { customRender: 'action' }
		}
	]
	const columns3 = [
		{
				title:'工作类型',
				key:'type',
				dataIndex:'type'
		},
		{
			title:'开始时间',
			key:'startTime',
			dataIndex:'startTime'
		},
		{
			title:'结束时间',
			key:'endTime',
			dataIndex:'endTime'
		},{
			title:'工作内容',
			key:'detail',
			dataIndex:'detail'
		},{
			title: '操作',
			key: 'action',
			scopedSlots: { customRender: 'action' }
		}
	]
	const columns4 = [
		{
			title:'描述',
			key:'description',
			dataIndex:'description'
		},
		{ title: '证件',
		key: 'url',
		scopedSlots: { customRender: 'url' }},
		{
				title: '操作',
				key: 'action',
				scopedSlots: { customRender: 'action' }
	}]
	const columns5 = [
		{
			title:'文件',
			key:'name',
			dataIndex:'name'
		},
		{
				title: '操作',
				key: 'action',
				scopedSlots: { customRender: 'action' }
	}]
	export default{
		components:{
			upLoad,upInput,upSelectTime,upSelectList,upSelectCheck
		},
		data(){
			return{
				addPotoDescription:'',
			dateFormat:'YYYY-MM-DD',
				id:'',
				moment,
				columns1,
				columns2,
				columns3,
				columns4,
				columns5,
				data5:[],
				data4:[
					// {url:'https://f11.baidu.com/it/u=4184747626,1734638532&fm=76',description:'1'}
				],
				data2:[
					
				],
				data1:[
					],
				data3:[
					// {type:'酒店服务',start_time:'1979-01-01',end_time:'2008-01-01',detail:'你好啊还是登记卡',key:1},
					// {type:'保洁',start_time:'1979-01-01',end_time:'2008-01-01',detail:'你好啊还是登记卡',key:2},
				],
				uploadFile:'',
				idCardJustFile:'',
				educationValIndex:'',
				idCardBackFile:'',
				name:'',//姓名
				nickname:'',//昵称
				bir:'',//出生入区
				sexList:[{value:0,label:'女'},{value:1,label:'男'}],//性别选择列表
				sex:'',
				mobile:'',//电话
				idCard:'',//身份证号
				educationList:data.educationalLevel,
				jobIntentionList:[{id:0,name:'保姆'},{id:1,name:'月嫂'},{id:2,name:'保洁'},{id:3,name:'月嫂'}],
				receivingList:data.acceptanceStatus,
				nationList:data.nation,
				nationValIndex:'',
				chineseZodiac:data.chineseZodiac,
				zodiacValIndex:'',
				maritalStatus:[{label:'已婚',value:0},{label:'未婚',value:1},{label:'离异',value:2},{label:'其他',value:3}],
				educationalLevel:data.educationalLevel,
				weight:'',
				height:'',
				householdRegister:'',//户籍
				address:'',//居住地址
				Whether:data.Whether,
				money:'',
				languageList:[{id:0,name:'普通话'},{id:1,name:'粤语'},{id:2,name:'雷州话'},{id:3,name:'其他'}],
				experienceList:[{id:0,name:'农民'},{id:1,name:'保姆'},{id:3,name:'家庭主妇'},{id:4,name:'打工'},{id:5,name:'护士'},{id:6,name:'教师'},{id:7,name:'厨师'},{id:8,name:'个体户'},{id:9,name:'职员'},{id:10,name:'其他'}],
				family_size:'',//家庭人口
				religionList:data.religion,//宗教信仰
				work_start_year:'',//从事家政开始年份
				nature:'',//性格特点
				comment:'',//自我评价
				zsVisible:false,//新增证件蒙版
				addZsNumber:'',//添加证件的编号
				addAuthority:'',//添加证件的颁发机构
				addIssueTime:'',//添加证件的颁发时间
				addValidityPeriod:'',//有效期
				zsTypeList:[],//证件类型列表
				addZsType:'',
				addFile:'',//上传的图片路径
				zsDetail:{},//证件列表点击详情后弹出的框的数据
				zsDetailsVisible:false,
				relationshipList:[],//家庭成员关系列表
				addFamilyDescription:'',//新增家庭成员描述
				addRelationship:'',//新增家庭成员的关系
				addFamilyName:'',//新增家庭成员的名称
				addFamilyMobile:'',//新增家庭成员的
				addFamilyWorkPlace:'',//新增家庭成员的家庭地址
				addFamilyMaskType:false,//新增的模板
				familyDetailMaskType:false,//家庭成员详情蒙版
				familyDetail:{},//点击家庭成员详情时将值存入这里
				addExStartTime:'',//新增工作经历的开始时间
				addExEndTime:'',//结束时间
				addExDescription:'',//新增工作内容的描述
				addExType:'',//工作的类型
				addExMaskType:false,
				education:'',//学历背景
				nation:'',//民族
				zodiac:'',//生肖
				marital_status:'',//婚姻状况
				birth_status:'',//是否生育
				religion:'',//宗教信仰
				exDetail:{},
				exDetailMask:false,
				maritalStatusIndex:'',
				birthStatusIndex:'',
				familySizeIndex:'',
				familySizeList:[{value:0,label:'0至3人'},{value:1,label:'4至6人'},{value:2,label:'7人及以上'}],
				religionIndex:'',
				addPotoFile:'',
				addPotoFile2:'',
				fmFile:'',
				addPotoVisible:false,
				potoDetailMaskType:false,
				addZsFmtype:false,
				putZsFmtype:false
			}
		},
		created(){
			//证件类型
			let zsTypeStr = '身份证、体检报告、乙肝五项证、上门服务证、健康证、母婴护理师、育婴师证、初级育婴师证、中级育婴师证、家政服务员证、初级家政服务员、中级家政服务员、高级家政服务员、月嫂证、驾驶证、护照、港澳通行证、厨师证、产后康复证、保健与护理师证、保健按摩师证、催乳师证件、小儿推拿证、教师证、护士证、护工证、心理咨询师证、签证、英语六级证、英语四级证、英语等级证'
			let arr  = zsTypeStr.split('、')
			this.zsTypeList = arr.map((item,index)=>{
				let obj = {
				}
				obj.value = index
				obj.label = item
				return obj
			})
			//家庭成员类型
			let relationshipStr = '配偶、子女、父母、朋友、亲戚、其他'
			let arr2 = relationshipStr.split('、')
			this.relationshipList = arr2.map((item,index)=>{
				let obj = {}
				obj.value = index
				obj.label = item
				return obj
			})
			//工作经历的工作类型
			let workExStr = '保姆、月嫂、育儿嫂、保洁、护工、做生意、销售、餐饮服务、酒店服务、其他、没有打过工'
			let arr3 = workExStr.split('、')
			this.workExTypeList = arr3.map((item,index)=>{
				let obj = {}
				obj.value = index
				obj.label = item
				return obj
			})
			let userDataID = JSON.parse(helper.aesDecryptUrlData(this.$route.query.q))
			this.id = userDataID.id
			this.certificateList()//获取证件列表
			this.workExpericenceList()//工作经历
			this.familyList()
			this.wokerDetail()
			this.photoList()//照片列表
			this.bgList()//获取背景调查列表
		},
		
		mounted() {
			
		},
		methods:{
			async zsPutsFmChange(e){
				console.log(e)
				let parme = new FormData()
				parme.append('type',this.zsDetail.type)
				parme.append('description','身份证反面')
				parme.append('worker_id',this.id)
				parme.append('file',e)
				const data = await workerApi.newPostCertificate(parme,helper.adminHeaders())
				if(data.code === 0){
					this.$message.success('更新成功')
					this.certificateList()
				}else{
					this.$message.error(data.message+','+data.detail)
				}
			},
			bgDetail(text){
				window.open(text.file_url)
			},
			async deletebg(text){
				const data = await workerApi.deleteBg({worker_id:this.id,id:text.id},helper.adminHeaders())
				if(data.code === 0){
					this.$message.success('删除成功')
					this.bgList()
				}else{
					this.$message.error(data.message+','+data.detail)
				}
			},
			async bgList(){
				const data = await workerApi.backgroundList({worker_id:this.id},helper.adminHeaders())
				if(data.code === 0){
					this.data5 = data.data.map(item=>{
						item.key = item.id
						item.name = '背景调查文件'
						return item
					})
				}
			},
			async deletePoto(text){
				const data = await workerApi.deletePhoto({id:text.id,worker_id:this.id},helper.adminHeaders())
				if(data.code === 0){
					this.$message.success('删除成功')
					this.photoList()
				}else{
					this.$message.error(data.message+','+data.detail)
				}
			},
			async photoList(){
				const data = await workerApi.photoList({worker_id:this.id},helper.adminHeaders())
				if(data.code === 0){
					this.data4 = data.data.map(item=>{
						item.url = item.image_url
						item.key = item.id
						return item
					})
				}
			},
			async bgCange(e){//上传背景图片
				let reader = new FileReader();
				reader.readAsDataURL(e.target.files[0]);
				reader.onload=function(e){
				}
				let parme = new FormData()
				parme.append('worker_id',this.id)
				parme.append('file',e.target.files[0])
				const data = await workerApi.profileBackgroung(parme,helper.adminHeaders())
				if(data.code === 0){
					this.$message.success('上传成功')
					this.bgList()
				}else{
					this.$message.error(data.message+','+data.detail)
				}
			},
			async putPotoDetail(){
				let parme = new FormData()
				parme.append('id',this.potoDetail.id)
				parme.append('worker_id',this.id)
				parme.append('description',this.potoDetail.description)
				if(this.potoDetail.fileType){
					parme.append('file',this.potoDetail.file)
				}
				
			},
			potoDetailChange(e){
				this.potoDetail.fileType = true
				this.potoDetail.file = e
			},
			potoDetail(text){
				this.potoDetail = text
				this.potoDetailMaskType = true
			},
			zsFmChange(e){
				this.fmFile = e
			},
			async addPoto(){
				console.log(this.addPotoDescription)
				let parme = new FormData()
				parme.append('worker_id',this.id)
				parme.append('description',this.addPotoDescription)
				parme.append('file',this.addPotoFile)
				// parme.append('img',this.addPotoFile2)
				const data = await workerApi.postPoto(parme,helper.adminHeaders())
				if(data.code === 0){
					this.$message.success('添加成功')
					this.addPotoVisible = false
					this.photoList()
				}else{
					this.$message.error(data.message+','+data.detail)
				}
			},
			addPotoChange(e){
				this.addPotoFile = e
			},
			addPoto2Change(e){
				this.addPotoFile2 = e
			},
			async wokerDetail(){
				
				const data =await workerApi.wokerDetail({worker_id: this.id,find_type: 'work_id'},helper.adminHeaders())
				if(data.code === 0){
					this.name = data.data.name
					this.nickname = data.data.nickname
					this.sex = data.data.sex
					this.bir = data.data.birthday
					this.educationList.map(item=>{
						if(item.label === data.data.education){
							this.educationValIndex = item.value
							this.education = item.label
						}
					})
					this.nationList.map(item=>{
						if(item.label === data.data.nation){
							this.nationValIndex = item.value
							this.nation = item.label
						}
					})
					this.chineseZodiac.map(item=>{
						if(item.label === data.data.zodiac){
							this.zodiacValIndex = item.value
							this.zodiac = item.label
						}
					})
					this.weight = data.data.weight
					this.height = data.data.height
					this.mobile = data.data.mobile
					this.maritalStatus.map(item=>{
						if(item.label == data.data.marital_status){
							this.maritalStatusIndex = item.value
							this.marital_status = item.label
						}
					})
					if(this.birth_status == '未育'){
						this.birthStatusIndex = 1
						this.birth_status = '未育'
					}else{
						this.birthStatusIndex = 0
						this.birth_status = '已育'
					}
					this.familySizeList.map(item=>{
						if(item.label == data.data.family_size){
							this.familySizeIndex = item.value
							this.family_size = item.label
						}
					})
					this.religionList.map(item=>{
						if(item.label === data.data.religion){
							this.religionIndex = item.value
							this.religion = item.label
						}
					})
					this.work_start_year = data.data.work_start_year
					this.nature = data.data.nature
					this.comment = data.data.comment
				}
			},
			async familyList(){
				const data = await workerApi.familyList({worker_id:this.id},helper.adminHeaders())
				if(data.code == 0){
					this.data2 = data.data.map(item=>{
						item.key = item.id
						return item
					})
				}
			},
			async workExpericenceList(){
				const data = await workerApi.workExpericenceList({worker_id:this.id},helper.adminHeaders())
				if(data.code == 0){
					this.data3 = data.data.map(item=>{
						item.key = item.id
						item.startTime = helper.time2(item.start_time)
						item.endTime = helper.time2(item.end_time)
						return item
					})
				}
			},
			async certificateList(){
				const data = await workerApi.certificateList({worker_id:this.id},helper.adminHeaders())
				if(data.code == 0){
					this.data1 = data.data.map(item=>{
						item.key = item.id
						let imgArr = JSON.parse(item.image_url)
						item.url = ''
						item.url2 = ''
						if(imgArr.length ==1){
							item.url = imgArr[0].url
						}else if(imgArr.length >= 2){
							for(let i = 0;i<imgArr.length;i++){
								if(imgArr[i].description == '身份证正面'){
									item.url = imgArr[i].url
								}else if(imgArr[i].description == '身份证反面'){
									item.url2 = imgArr[i].url
								}
							}
						}
						
						item.time = helper.time2(item.issue_time)
						return item
					})
				}
			},
			async deleteZs(text){
				const data = await workerApi.deleteCertificate({worker_id:this.id,id:text.id},helper.adminHeaders())
				if(data.code === 0){
					this.$message.success('删除成功')
					this.certificateList()
				}else{
					this.$message.error(data.message+','+data.detail)
				}
			},
			zs(item){
				window.open(item.url)
			},
			async btn(){
				let obj = {
					// id:data.data.id,
					// id:1,
					worker_id:this.id,
					nickname: this.nickname,
					name:this.name,
					sex:this.sex,
					birthday: this.bir,
					education: this.education,
					nation: this.nation,
					zodiac: this.zodiac,
					height: this.height,
					weight: this.weight,
					mobile: this.mobile,
					marital_status: this.marital_status,
					birth_status: this.birth_status,
					family_size: this.family_size,
					religion: this.religion,
					political_status: '',
					work_start_year: this.work_start_year,
					nature: this.nature,
					comment: this.comment
				}
				const putData = await workerApi.putWorker(obj,helper.adminHeaders())
				if(putData.code === 0){
					this.$message.success('更新成功')
				}else{
					this.$message.error(putData.message+','+putData.detail)
				}
			},
			familySizeListChange(e){
				this.family_size = e.label
				this.familySizeIndex = e.value
			},
			consolesss(){
				console.log('---->',this.bir)
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
			},
			educationChange(e){//选择学历触发
				this.education = e.label
				this.educationValIndex = e.value
			},
			jobIntentionChange(e){//求职意向选择后触发的回调
				console.log(e)
			},
			receivingChange(e){//选择求职意向后的变化
			},
			nationChange(e){//名族变化
			this.nationValIndex = e.value
				this.nation = e.label
			},
			chineseZodiacChange(e){//生肖变化
				this.zodiacValIndex = e.value
				this.zodiac = e.label
			},
			maritalStatusChange(e){//婚姻状况变化
				this.marital_status = e.label
				this.maritalStatusIndex = e.value
			},
			educationalLevelChange(e){//最高学历
				console.log(e)
				this.educationValIndex = e
			},
			wpChange(e){//是否外派
				console.log(e)
			},
			languageChange(e){//语言能力
				console.log(e)
			},
			experienceChange(e){//工作经历
				console.log(e)
			},
			birthStatusChange(e){//是否生育
				this.birthStatusIndex = e.value
				if(e.value == 1){
					this.birth_status = '已育'
				}else{
					this.birth_status = '未育'
				}
			},
			religionChange(e){//宗教信仰变化
				this.religion = e.label
				this.religionIndex = e.value
			},
			async zsChange(e){//证件上传（'如果是身份证，描述要是身份证正面'）
				
				this.addFile = e
				
			},
			zsDetailTypeChange(e){
				if(e == 0){
					this.putZsFmtype = true
				}else{
					this.putZsFmtype = false
				}
				let obj = this.zsDetail
				this.zsTypeList.map(item=>{
					if(item.value === e){
						obj.type = item.label
					}
				})
				this.zsDetail = {}
				this.zsDetail = obj
			},
			handelZsDetail(item){
				this.zsDetail = {}
				let obj = Object.assign({},item)
				console.log(obj)
				let imgUrl = JSON.parse(obj.image_url)
				console.log(imgUrl)
				obj.issue_time = helper.time2(obj.issue_time)
				this.zsDetail = obj
				this.zsTypeList.map((item2,index)=>{
					if(item2.label == item.type){
						this.zsDetail.typeIndex = index
					}
				})
				this.zsDetailsVisible = true
				
				console.log(1006,this.zsDetail)
				
			},
			async addZs(){//添加证件
				if(this.addZsType  == '身份证'){ //如果是正面
					if(this.fmFile == ''){
						this.$message.error('请上传身份证反面')
						return
					}
					let parme = new FormData()
					parme.append('type',this.addZsType)
					parme.append('description','身份证正面')
					parme.append('worker_id',this.id)
					parme.append('file',this.addFile)
					const data = await workerApi.newPostCertificate(parme,helper.adminHeaders())
					if(data.code === 0){
						let parme2 = new FormData()
						parme2.append('type',this.addZsType)
						parme2.append('description','身份证反面')
						parme2.append('worker_id',this.id)
						parme2.append('file',this.fmFile)
						const data2 = await workerApi.newPostCertificate(parme2,helper.adminHeaders())
						this.certificateList()
						if(data2.code === 0){
							this.certificateList()
							let d = new Date(this.addIssueTime)
							let t = d.getTime(d)
							let time = t.toString().substring(0,10)
							let obj = {
								worker_id :this.id,
								number:this.addZsNumber,
								authority:this.addAuthority,
								issue_time:time,
								validity_period:this.addValidityPeriod,
								type:this.addZsType,
								id:data.data.id
							}
							const data3 = await workerApi.newPutCertificate(obj,helper.adminHeaders())
							if(data3.code === 0){
								this.$message.success('上传成功')
								this.zsVisible = false
								this.certificateList()
							}else{
								this.$message.error(data3.message+','+data3.detail)
							}
						}else{
							this.$message.error(data2.message+','+data2.detail)
						}
					}else{
							this.$message.error(data.message+','+data.detail)
					}
				}else{
					let parme = new FormData()
					parme.append('type',this.addZsType)
					parme.append('description',this.addZsType)
					parme.append('worker_id',this.id)
					parme.append('file',this.addFile)
					const data = await workerApi.newPostCertificate(parme,helper.adminHeaders())
					if(data.code == 0){
						this.certificateList()
						let d = new Date(this.addIssueTime)
						let t = d.getTime(d)
						let time = t.toString().substring(0,10)
						let obj = {
							worker_id :this.id,
							number:this.addZsNumber,
							authority:this.addAuthority,
							issue_time:time,
							validity_period:this.addValidityPeriod,
							type:this.addZsType,
							id:data.data.id
						}
						const data3 = await workerApi.newPutCertificate(obj,helper.adminHeaders())
						if(data3.code === 0){
							this.$message.success('上传成功')
							this.zsVisible = false
							this.certificateList()
						}else{
							this.$message.error(data3.message+','+data3.detail)
						}
					}else{
						this.$message.error(data.message+','+data.detail)
					}
				}
			},
			async zsPutChange(e){
				console.log(e)
				console.log(this.zsDetail)
				this.zsDetail.putImgType = true
				this.zsDetail.file = e
				if(this.zsDetail.type == '身份证'){
					let parme = new FormData()
					parme.append('type',this.zsDetail.type)
					parme.append('description','身份证正面')
					parme.append('worker_id',this.id)
					parme.append('file',e)
					const data = await workerApi.newPostCertificate(parme,helper.adminHeaders())
					if(data.code === 0){
						this.$message.success('更新成功')
						this.certificateList()
					}else{
						this.$message.error(data.message+','+data.detail)
					}
				}else{
					let parme = new FormData()
					parme.append('type',this.zsDetail.type)
					parme.append('description',this.zsDetail.type)
					parme.append('worker_id',this.id)
					parme.append('file',e)
					const data = await workerApi.newPostCertificate(parme,helper.adminHeaders())
					console.log(data)
					if(data.code === 0){
						this.$message.success('更新成功')
						this.certificateList()
					}else{
						this.$message.error(data.message+','+data.detail)
					}
				}
			},
			async putZs(){//更新证件
				// let parme  = new FormData()
				// let d = new Date(this.zsDetail.issue_time)
				// let t = d.getTime(d)
				// let time = t.toString().substring(0,10)
				// parme.append('worker_id',this.id)
				// parme.append('id',this.zsDetail.id)
				// parme.append('number',this.zsDetail.number)
				// parme.append('authority',this.zsDetail.authority)
				// parme.append('issue_time',time)
				// parme.append('validity_period',this.zsDetail.validity_period)
				// parme.append('type',this.zsDetail.type)
				// if(this.zsDetail.putImgType){
				// 	parme.append('file', this.zsDetail.file)
				// }
				let d = new Date(this.zsDetail.issue_time)
				let t = d.getTime(d)
				let time = t.toString().substring(0,10)
				let obj = {
					worker_id :this.id,
					number:this.zsDetail.number,
					authority:this.zsDetail.authority,
					issue_time:time,
					validity_period:this.zsDetail.validity_period,
					type:this.zsDetail.type,
					id:this.zsDetail.id
				}
				console.log(obj)
				const data = await workerApi.newPutCertificate(obj,helper.adminHeaders())
				if(data.code === 0){
					this.certificateList()
					this.$message.success('更新成功')
				}else{
					this.$message.error(data.message+','+data.detail)
				}
			},
			putZsTime(time,timeStr){
				this.zsDetail.issue_time = timeStr
			},
			addZsDate(date,dataString){
				this.addIssueTime = dataString
			},
			addZsTypeChange(e){
				if(e == 0){
					this.addZsFmtype = true
				}else{
					this.addZsFmtype = false
				}
				this.zsTypeList.map(item=>{
					if(item.value == e){
						this.addZsType = item.label
					}
				})
			},
			addRelationChange(e){
				this.relationshipList.map((item)=>{
					if(item.value == e){
						this.addRelationship = item.label
					}
				})
			},
			async handelAddFamily(){//新增家庭成员
			
				let obj = {
					relationship:this.addRelationship,
					name:this.addFamilyName,
					mobile:this.addFamilyMobile,
					work_place:this.addFamilyWorkPlace,
					description:this.addFamilyDescription
				}
				const data = await workerApi.addFamily({...obj,worker_id:this.id},helper.adminHeaders())
				if(data.code == 0){
					this.addFamilyMaskType = false
					this.$message.success('添加成功')
					this.familyList()
				}else{
					this.$message.error(data.message+','+data.detail)
				}
			},
			async handelAddFamilyDetail(){//点击家庭成员弹出的蒙版的确认事件，点击更新
				console.log(this.familyDetail)
				const data = await workerApi.putFamilyPeople({...this.familyDetail,worker_id:this.id},helper.adminHeaders())
				console.log(data)
				if(data.code == 0){
					this.$message.success('更新成功')
					this.familyList()
				}else{
					this.$message.error(data.message+','+data.detail)
				}
			},
			handelFamilyDetail(item){//点击家庭成员详情按钮
				let obj = Object.assign({},item)
				this.familyDetail = obj
				this.relationshipList.map((item2,index)=>{
					if(item2.label == item.relationship){
						this.familyDetail.typeIndex = index
					}
				})
				this.familyDetailMaskType = true
			},
			async deleteFamily(item){
				console.log(item)
				const data = await workerApi.deleteFamily({id:item.id,worker_id:this.id},helper.adminHeaders())
				if(data.code === 0){
					this.$message.success('删除成功')
					this.familyList()
				}else{
					this.$message.error(data.message+','+data.detail)
				}
			},
			addExStartTimeChange(time,timeStr){//新增工作类型的开始时间变化
				this.addExStartTime = timeStr
			},
			addExendTimeChange(time,timeStr){//新增工作类型的结束时间变化
				this.addExEndTime = timeStr
			},
			addExWorkTypeChange(item){//选择工作类型的变化
				this.workExTypeList.map(item2=>{
					if(item2.value == item){
						this.addExType = item2.label
					}
				})
			},
			jsTime(str){
				let d = new Date(str)
				let t = d.getTime(d)
				let time = t.toString().substring(0,10)
				return time
			},
			async addEx(){//点击新增
				
				let obj = {
					type :this.addExType,
					start_time:Number(this.jsTime(this.addExStartTime)),
					end_time:Number(this.jsTime(this.addExEndTime)),
					detail:this.addExDescription,
					worker_id: this.id
				}
				console.log(obj)
				const data = await workerApi.addWorkExpericence(obj,helper.adminHeaders())
				console.log(data)
				if(data.code === 0){
					this.$message.success('新增成功')
					this.addExMaskType = false
					this.workExpericenceList()
				}else{
					this.$message.error(data.message+','+data.detail)
				}
			},
			startExStartTimeChange(time,timeStr){
				console.log(timeStr)
				this.exDetail.startTime = timeStr
			},
			endExendTimeChange(time,timeStr){
				console.log(timeStr)
				this.exDetail.endTime = timeStr
			},
			handelExDetail(item){
				let obj = Object.assign({},item)
				this.exDetail = obj
				this.workExTypeList.map((item2,index)=>{
					if(item2.label === item.type){
						this.exDetail.typeIndex = index
					}
				})
				this.exDetailMask = true
				console.log(this.exDetail)
			},
			exDetailTypeChange(e){//工作详情的工作类型改变
				let obj = this.exDetail
				this.exDetail = {}
				obj.typeIndex = e
				this.exDetail = obj
				this.workExTypeList.map(item=>{
					if(item.value == e){
							this.exDetail.type = item.label
					}
				})
			},
			async handelExDetailOk(){
				let obj = Object.assign({},this.exDetail)
				console.log(obj)
				obj.start_time = Number(this.jsTime(obj.startTime))
				obj.end_time = Number(this.jsTime(obj.endTime))
				console.log(this.jsTime(obj.startTime),this.jsTime(obj.endTime))
				const data = await workerApi.putEx({...obj,worker_id:this.id},helper.adminHeaders())
				if(data.code === 0){
					this.$message.success('更新成功')
					this.workExpericenceList()
				}else{
					this.$message.error(data.message+','+data.detail)
				}
			},
			detailRelationChange(e){
				let obj = this.familyDetail
				this.relationshipList.map(item=>{
					if(item.value == e){
						obj.relationship = item.label
					}
				})
				this.familyDetail = {}
				this.familyDetail = obj
				// console.log(this.familyDetail)
			},
			async deleteEx(text){
				console.log(text)
				const data = await workerApi.deleteEx({worker_id:this.id,id:text.id},helper.adminHeaders())
				if(data.code === 0){
					this.$message.success('删除成功')
					this.workExpericenceList()
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
