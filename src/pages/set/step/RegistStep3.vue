<template>
	<div id="step3">
		<img src="../../../public/images/regist_success.png" />
		恭喜您！<br />注册成功
		<a href="javascript:;" @click="GoWebsite">去逛逛</a>
	</div>
</template>
<script>
	import md5 from 'js-md5';
	export default {
	    name: 'step3',
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
			GoWebsite(){
			//	location.reload();
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
						['phone', localStorage.userPhone],
						['pwd', localStorage.regPasswd]
					];
	            	arr.sort(_this.sortCustom);
	            	var str = "";
					for (var i=0; i<arr.length; i++) {
						str += arr[i][0] + arr[i][1];
					}
                	_this.$store.state.Check.callToken = data.callToken;
                	localStorage.callToken = data.callToken;
                	_this.axios.post(_this.$store.state.Check.url+"/user/login",{
	            		t: timestamp,
	            		i: data.callToken,
	            		v: md5(str),   
	            		c: "PC",
	            		phone: localStorage.userPhone,
	            		pwd: localStorage.regPasswd
	                }).then(function (response) {
	                	if(response.data.result == 301){
	                		_this.errorMsg = "用户手机号不存在，请重新输入！";
	                	}else if(response.data.result == 302){
	                		_this.errorMsg = "用户密码错误，请重新输入";
	                	}else if(response.data.result == 200){
	               			_this.$store.state.Check.userPhone = response.data.User.usrPhone;
	                      	localStorage.userPhone = response.data.User.usrPhone;

	                      	_this.$store.state.Check.token = response.data.token;
	                      	localStorage.token = response.data.token;

							//账户中个人信息
							localStorage.userAlipay = response.data.User.usrAlipayAcc;
							localStorage.userEmail = response.data.User.usrEmail;
							localStorage.userCardnum = response.data.User.usrCardnum;
							localStorage.lastLoginTime = response.data.User.lastLoginTime;
							localStorage.usrNickname = response.data.User.usrNickName;
							localStorage.usrImg = response.data.User.usrImg;
							localStorage.usrRealname = response.data.User.usrRealname;
							_this.$store.state.Check.usrRealname = response.data.User.usrRealname;

		               		_this.$store.state.Check.isShow = false;
		               		_this.$router.push('../');
		               		location.reload();
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
	#step3{
		width: 600px;
		background: @cw;
		text-align: center;
		padding: 70px 0 80px;
		margin: 20px auto;
		.fonts(18px);
		color: @cmain_b;
		.bdr(5px);
		border: 1px solid @cborder;
		img{
			display: block;
			margin: 0 auto 20px;
		}
		a{
			display: block;
			margin: 60px auto 0;
			width: 280px;
			.bdr(4px);
			color: @cmain_b;
			line-height: 40px;
			border: 1px solid @cmain_b;
			&:hover{
				color: @cw;
				background: @cmain_b;
			}
		}
	}
</style>	

