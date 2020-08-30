<template>
	<div>
		<div class="align">
			<div class="title"  :class="{'titleTip':requiredType}">
				<span :style="!requiredType?'margin-right: 20px':''">{{title}}</span>
				<span style="color: #9d9d9d;margin-right: 20px;" v-show="requiredType" ></span>
			</div>
			<a-select :placeholder="placeholder" @change="change"  style="width: 200px;" :value="defaultValue">
			      <a-select-option v-for="item in list" :value="item.value" :key="item.value">
						{{item.label}}
			      </a-select-option>
			</a-select>
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
			placeholder:'',
			list:{
				default:null,
				type:Array
			},
		},
		created(){
			this.defaultValue = this.value
		},
		data(){
			return{
				defaultValue:null
			}
		},
		methods:{
			change(data){
				let val = null
				this.list.map(item=>{
					if(item.value === data){
						val = item
					}
				})
				this.$emit('change',val)
				this.$emit('input',val)
			}
		},
		watch:{
			value(val){
				this.defaultValue = val
			}
		}
	}
</script>

<style scoped lang="scss">
	.align{
		display: flex;
		align-items: center;
		// justify-content: center;
		margin-top: 20px;
		.title{width: 150px;text-align: right;}
	}
	.titleTip::before{
		content: '*';
		color: red;
	}
</style>
