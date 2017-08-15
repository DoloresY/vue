<template>
	<div id="ModifyPhoneStep5">
		<img src="../../../public/images/phone_success.png" />
		修改绑定手机成功！
		<a href="javascript:;" @click="goAccount">回到个人中心</a>
	</div>
</template>
<script>
	export default {
	    name: 'ModifyPhoneStep5',
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
			goAccount() {
				this.$router.push('/account');
				location.reload();
			}
		}
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../../../public/css/variable.less';
	#ModifyPhoneStep5{
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

