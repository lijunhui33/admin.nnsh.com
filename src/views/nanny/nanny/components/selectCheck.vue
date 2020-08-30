<template>
	<div>
		<div class="align">
			<div class="title">
				<span :style="!requiredType?'margin-right: 20px':''">{{title}}</span>
				<span style="color: #9d9d9d;margin-right: 20px;" v-show="requiredType" >(必填)</span>
			</div>
			<a-checkbox-group @change="onChange" style="width: 200px;" :default-value="arr">
			    <a-row>
					<a-col :span="8" v-for="item in list" :key="item.id">
					  <a-checkbox :value="item.id"   style="display: flex;align-items: center;">
							<span style="width: 70px;display: inline-block;"> {{item.name}}{{item.type}}</span>
					  </a-checkbox>
					</a-col>
			    </a-row>
			  </a-checkbox-group>
		</div>
		
	</div>
</template>

<script>
	export default{
		props:{
			requiredType:{//是否必填
				default:false,
				type:Boolean
			},
			title:null,//标题
			list:{
				default:null,
				type:Array
			},
			value:''
		},
		data(){
			return{
				arr:[]
			}
		},
		created(){
			if(this.value){
				let arr = this.value.split(',')
				arr.map((item)=>{
					this.list.map((item2,index)=>{
						if(item == item2.name){
							this.arr.push(index)
						}
					})
				})
			}
		},
		methods:{
			onChange(e){
				let arr = []
				e.map(item=>{
					this.list.map(item2=>{
						if(item2.id === item){
							arr.push(item2)
						}
					})
				})
				this.$emit('change',arr)
			}
		},
		watch:{
			value(){
				if(this.value){
					let arr = this.value.split(',')
					arr.map((item)=>{
						this.list.map((item2,index)=>{
							if(item == item2.name){
								this.arr.push(index)
							}
						})
					})
				}
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
		.title{width: 120px;text-align: right;}
	}
</style>
