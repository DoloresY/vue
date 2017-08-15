<template>
	<div id="modifyPwdStep2">
		<img src="../../../public/images/modify_pwd_success.png" />
		修改登录密码成功
		<a href="javascript:;" @click="Login">立即登录</a>
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
		},
		methods: {
			Login(){
				localStorage.removeItem("token");
				this.$router.push('../../index');
				this.$store.state.Check.isShow = true;
			}
		}
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../../../public/css/variable.less';
	#modifyPwdStep2{
		text-align: center;
		padding: 90px 0 120px;
		.fonts(18px);
		color: @cmain_b;
		border-top: 1px solid @cborder;
		img{
			display: block;
			margin: 0 auto 40px;
		}
		
	}
</style>	

