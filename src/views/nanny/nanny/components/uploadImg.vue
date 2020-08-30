<template>
	<div class="align">
		<span style="width: 100px;text-align: center;display: inline-block;">{{title}}</span>
		<div class="imgBox">
			<input type="file" ref="upload" accept=".png,.jpg,.jpeg" />
			<div class="bg" v-show="uploadUrl === ''">
				<a-icon type="plus" />
				上传图片
			</div>
			<img :src="uploadUrl" class="bg">
		</div>
	</div>
</template>

<script>
	export default{
		props:{
			title:{
				type:String,
				default:''
			},
			value:''
		},
		data(){
			return{
				uploadUrl:'',
				uploadFile:''
			}
		},
		created() {
			if(this.value){
				this.uploadUrl = this.value
			}
		},
		mounted() {
			let _this = this
			this.$refs.upload.addEventListener('change', e => {
				var reader = new FileReader();
				reader.readAsDataURL(e.target.files[0]);
				reader.onload=function(e){
					_this.uploadUrl = e.target.result
				}
				_this.uploadFile = e.target.files[0]
				_this.$emit('change',e.target.files[0])
			});
		},
		watch:{
			value(val){
				this.uploadUrl = val
			}
		}
	}
</script>

<style scoped lang="scss">
	.align {
		width: 100px;
		// display: flex;
		// align-items: center;
		// flex-direction: column;
	}
	.imgBox {
		border: 1px dashed #9d9d9d;
		width: 100px;
		height: 100px;
		margin-top: 10px;
		border-radius: 4px;
		overflow: hidden;
		cursor: pointer;
		position: relative;
		input {
			opacity: 1;
			height: 100px;
			opacity: 0;
			z-index: 99;
			position: absolute;
			top: 0;
			left: 0;
			width: 100px;
			cursor: pointer;
		}
		.bg {
			width: 100px;
			height: 100px;
			display: flex;
			align-items: center;
			flex-direction: column;
			justify-content: center;
		}
	}
</style>
