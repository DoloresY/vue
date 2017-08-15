<template>
	<div id="BindEmailStep2">
		<template v-if="showEmail">
			<img src="../../../public/images/bind_email_success2.png" />
			恭喜您！邮箱绑定成功
		</template>
		<template v-else>
			<img src="../../../public/images/bind_email_error.png" />
			抱歉！您的邮件已失效
		</template>
	</div>
</template>
<script>
	import md5 from 'js-md5';
	export default {
	    name: 'BindEmailStep2',
	    data () {
            return {
            	showEmail: false
            }
        },
        computed:{
            type() {
               return this.$route.params;
		    },
		   	Keys() {
		   		return this.$route.query.Key;
		    }
		},
		mounted: function (){
			this.submitEmail();
		},
		methods: {
        	submitEmail() {
        		const _this = this;
            	var timestamp = Date.parse(new Date());
            	this.axios.post(_this.$store.state.Check.url+"/getCallId",{
            		t: timestamp,
            		c: "PC"
              	}).then(function (response) {
                	const data = response.data;
                	console.log(data);
                	timestamp = Date.parse(new Date());
					_this.sorts = data.key;
					localStorage.sorts = data.key;
                	//排序
                	var	arr = [
						['t', timestamp],
						['c', 'PC'],
						['i', data.callToken],
						['key','2i0f1x7'],
						['Key', _this.$route.query.Key]
					];
	            	arr.sort(_this.sortCustom);
	            	var str = "";
					for (var i=0; i<arr.length; i++) {
						str += arr[i][0] + arr[i][1];
					}
	        		_this.axios.post(_this.$store.state.Check.url+"/user/activateEmail",{
	            		t: timestamp,
	            		i: data.callToken,
	            		v: md5(str),   
	            		c: "PC",
	            		Key: _this.$route.query.Key
	               }).then(function (response) {
	                	console.log(response.data);
	                	if(response.data.result == 200){
	                		_this.showEmail = true;
	                		localStorage.userEmail = response.data.usrEmail;
	                	}else{
	                		_this.showEmail = false;
	                	}
	                }).catch(function (error){
	                    console.log("error2");
	                });

	            }).catch(function (error){
                    console.log(error);
                });    
        	}
		}
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../../../public/css/variable.less';
	#BindEmailStep2{
		text-align: center;
		padding: 90px 0 120px;
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

