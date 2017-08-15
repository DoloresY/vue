<template>
	<div id="modifyPwdStep2">
		<img src="../../../public/images/modify_pwd_success.png" />
		修改登录密码成功
		<router-link to="../">立即登录</router-link>
	</div>
</template>
<script>
	export default {
	    name: 'modifyPwdStep2',
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
	#modifyPwdStep2{
		text-align: center;
		padding: 70px 0 90px;
		.fonts(18px);
		color: @cmain_b;
		border-top: 1px solid @cborder;
		img{
			display: block;
			margin: 0 auto 40px;
		}
		
	}
</style>	

