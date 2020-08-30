<template>
	<div>
		<div class="align">
			<div class="title" :class="{'titleTip':requiredType}">
				<span :style="!requiredType?'margin-right: 20px':''">{{title}}</span>
				<span style="color: #9d9d9d;margin-right: 20px;" v-show="requiredType" ></span>
			</div>
			<a-input type="text" :value="value" @change="change" :placeholder="placeholder" style="width: 200px;"></a-input>
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			title:null,//标题
			requiredType:{//是否必填
				default:false,
				type:Boolean
			},
			value:'',//传过来的值
			placeholder:''
		},
		created(){
		},
		data(){
			return{
				
			}
		},
		methods:{
			change(e){
				this.$emit('input',e.target.value)
			}
		}
	}
</script>

<style scoped lang="scss">
	.align{
		display: flex;align-items: center;
		.title{width: 150px;text-align: right;}
	}
	.titleTip::before{
		content: '*';
		color: red;
	}
</style>
