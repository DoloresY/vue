<template>
	<div id="ModifyPhoneStep1">
		<Row>
			<Col span="3"><i class="iconfont">&#xe76f;</i></Col>
			<Col span="15">通过原“手机号码＋短信验证码”修改</Col>
			<Col span="6"><router-link to="/set/modifyPhone?step=2">修改</router-link></Col>
		</Row>
		<Row>
			<Col span="3"><i class="iconfont">&#xe76e;</i></Col>
			<Col span="15">通过“账号身份信息”修改</Col>
			<Col span="6"><router-link to="/set/modifyPhone?step=3">修改</router-link></Col>
		</Row>
	</div>
</template>
<script>
	export default {
	    name: 'ModifyPhoneStep1',
	    data () {
            return {
            	
            }
       },

       computed:{
           type() {
               return this.$route.params.type;
		   }
		}
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../../../public/css/variable.less';
	#ModifyPhoneStep1{
		.fonts(12px); 
		text-align: center;
		padding: 100px 50px 100px;
		.ivu-row{
			border: 1px solid @cborder;
			.bdr(5px);
			padding: 10px 0;
			color: @cgray_s;
			margin-bottom: 40px;
		}
		.ivu-col-span-15{
			text-align: left;
			line-height: 67px;
		}
		i{
			.fonts(45px);
			color: @cmain_y;
			padding-left: 20px;
		}
		a{
			display: inline-block;
			width: 100px;
			height: 40px;
			.fonts(14px);
			color: @cmain_b;
			border: 1px solid @cmain_b;
			.bdr(3px);
			margin: 14px 0 0;
		}
	}
</style>	

