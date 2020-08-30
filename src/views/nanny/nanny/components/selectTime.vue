<template>
	<div>
		<div class="align">
			<div class="title"  :class="{'titleTip':requiredType}">
				<span :style="!requiredType ? 'margin-right: 20px' : ''">{{ title }}</span>
				<span style="color: #9d9d9d;margin-right: 20px;" v-show="requiredType"></span>
			</div>
			<a-date-picker @change="change" 
			:defaultValue="date === ''? '':moment(`${date}`, 'YYYY-MM-DD')" 
			:value="date === ''? '':moment(`${date}`, 'YYYY-MM-DD')"
			:placeholder="placeholder" style="width: 200px;" />
		</div>
	</div>
</template>

<script>
// 默认语言为 en-US，如果你需要设置其他语言，推荐在入口文件全局设置 locale
import moment from 'moment';
import 'moment/locale/zh-cn';
export default {
	props: {
		title: null, //标题
		requiredType: {
			//是否必填
			default: false,
			type: Boolean
		},
		value: null, //传过来的值
		placeholder: ''
	},
	created() {
	},
	data() {
		return {
			moment,
			date:''
		};
	},
	methods: {
		change(date, dateString) {
			console.log(dateString);
			this.$emit('input', dateString);
		}
	},
	watch:{
		value(val){
			this.date = val
		}
	}
};
</script>

<style scoped lang="scss">
.align {
	display: flex;
	align-items: center;
	// justify-content: center;
	margin-top: 20px;
	.title {
		width: 150px;
		text-align: right;
	}
	.titleTip::before{
		content: '*';
		color: red;
	}
}
</style>
