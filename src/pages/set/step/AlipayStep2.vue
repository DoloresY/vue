<template>
	<div id="ModifyPhoneStep5">
		<img src="../../../public/images/alipay_success.png" />
		支付宝账号保存成功！
		<a href="javascript:;" @click="ReturnAccount">回到个人中心</a>
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
			ReturnAccount(){
				this.$router.push({path: '../account', query:{'reload':true}});
			}
			
		}
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../../../public/css/variable.less';
	#ModifyPhoneStep5{
		text-align: center;
		padding: 150px 280px;
		.fonts(18px);
		color: @cmain_b;
		border-top: 1px solid @cborder;
		img{
			display: block;
			margin: 0 auto 40px;
		}
		
	}
</style>	

