<template>
	<div id="BindEmailStep2">
		<img src="../../../public/images/bind_email_success.png" />
		邮箱绑定邮件已发送！
		<p>请登录您的邮箱验证，本邮件30分钟以内有效</p>
		<router-link to="../account">回到个人中心</router-link>
	</div>
</template>
<script>
	export default {
	    name: 'BindEmailStep2',
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
	#BindEmailStep2{
		text-align: center;
		padding: 90px 0 160px;
		.fonts(18px);
		color: @cmain_b;
		border-top: 1px solid @cborder;
		img{
			display: block;
			margin: 0 auto 40px;
		}
		p{
			.fonts(16px);
			color: @cgray_s;
			padding: 20px 0;
		}
	}
</style>	

