<template>
	<div id="login" v-show="isShow">
		<Form ref="formValidate" :model="formValidate" :rules="ruleValidate">
			<div class="box">
				<ul>
					<li><h2>登录</h2><span @click="CloseBtn"><Icon type="ios-close-empty"></Icon></span></li>
					<li>
						<Form-item prop="phone">
							<i class="iconfont">&#xe747;</i>
							<Input placeholder="请输入手机号" v-model="formValidate.phone"></Input>
						</Form-item>
					</li>
					<li>	
						<Form-item prop="password">
							<i class="iconfont">&#xe75c;</i>
							<Input placeholder="请输入登录密码" type="password" @on-enter="handleSubmit('formValidate')" v-model="formValidate.password"></Input>
							<a class="forgetpwd" @click="FindPwd" href="javascript:;">忘记密码？</a>
							<span v-model="errorMsg" class="errorMsg">{{ errorMsg }}</span>
						</Form-item>
					</li>
				</ul>
				<Form-item>
					<Button type="primary" v-on:click="handleSubmit('formValidate')">登录</Button>
					<p><a href="javascript:;" @click="RegistFast">快速注册</a></p>
				</Form-item>
			</div>
		</Form>
	</div>
</template>
<script>
	import md5 from 'js-md5';
	import { mapActions } from 'vuex' //在个人中心调用vuex的actions
	export default {
	    name: 'login',
	    data () {
	    	const validatePhone = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入手机号'));
                } else {
                    if (this.formValidate.phone !== '') {
                        if(!(/^1[34578]\d{9}$/.test(value))){
                        	callback(new Error('请输入正确的手机号'));
                        }
                    }
                    callback();
                }
            };
            return {
            	formValidate:{
                    phone:'',
                    password:''
               },
                ruleValidate: {
                	phone: [
                        { required: true, validator: validatePhone, trigger: 'blur' },
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '密码不能为空', trigger: 'blur' }
                    ]
                },
               sorts: '',
               errorMsg: ''
            }
        },
        computed:{
            isShow() {
                return this.$store.state.Check.isShow;
		    }
		},
		mounted: function(){
		//	this.formValidate.password.
		},
        methods: {
        	CloseBtn(){
        		this.$store.state.Check.isShow = false;
        	},
        	FindPwd() {
        		this.$store.state.Check.isShow = false;
        		this.$router.push("/set/findPwd?step=1");
        	},
        	RegistFast() {
        		this.$store.state.Check.isShow = false;
        		this.$router.push("/set/register?step=1");
        	},
        	handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                    	this.Login();
                        //this.$Message.success('提交成功!');
                    } else {
                    //    this.$Message.error('表单验证失败!');
                    }
                })
            },
			Login() {
				var timestamp = Date.parse(new Date());
				var arr = [
					['phone', this.formValidate.phone],
					['pwd', this.formValidate.password]
				];
				var datas = {
	        		t: timestamp,
	        		i: localStorage.callToken,
	        		v: md5(""),   
	        		c: "PC",
	        		phone: this.formValidate.phone,
	        		pwd: this.formValidate.password
	            };
				
				this.getCallId(arr, "/user/login", datas, timestamp, this.getDatas, this.work);
            },
            work(response) {
            	if(response.data.result == 301){
	        		this.errorMsg = "用户手机号不存在，请重新输入！";
	        	}else if(response.data.result == 302){
	        		this.errorMsg = "用户密码错误，请重新输入";
	        	}else if(response.data.result == 307){
	        		this.errorMsg = "您的账户已禁用，请联系客服";
	        	}else if(response.data.result == 200){
	       			this.$store.state.Check.userPhone = response.data.User.usrPhone;
	              	localStorage.userPhone = response.data.User.usrPhone;
	
	              	this.$store.state.Check.token = response.data.token;
	              	localStorage.token = response.data.token;
	
					//账户中个人信息
					localStorage.userAlipay = response.data.User.usrAlipayAcc;
					localStorage.userEmail = response.data.User.usrEmail;
					localStorage.userCardnum = response.data.User.usrCardnum;
					localStorage.lastLoginTime = response.data.User.lastLoginTime;
					localStorage.usrNickname = response.data.User.usrNickName;
					localStorage.usrImg = response.data.User.usrImg;
					localStorage.usrRealname = response.data.User.usrRealname;
					this.$store.state.Check.usrRealname = response.data.User.usrRealname;
	
	           		this.$store.state.Check.isShow = false;
	           		location.reload();
	       		}
            }
		},
		
		created() {
            if (this.$store.state.Check.type > 1) {
                this.$store.dispatch('renameType');
            }
            const type = this.$route.query.type ? this.$route.query.type : this.$store.state.Check.type;
            if (type == 1) {
                console.log("您需要先进行登陆！");
                this.$store.dispatch('changeType',1);
            } else {
            	console.log("欢迎登陆！")
            }
        }
	};
</script>

<style lang="less" rel="stylesheet/less" type="text/css">
	@import '../public/css/variable.less';
	#login{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 12;
		background: url(../public/images/opacity1.png) repeat repeat;
		background-size: 100% 100%;
		.box{
			position: absolute;
			top: 50%;
			left: 50%;
			width: 445px;
			height: 320px;
			background: @cw;
			padding: 30px 60px 40px;
			box-sizing: border-box;
			z-index: 10;
			.bdr(6px);
			text-align: center;
			margin: -160px -222px;
			li{
				position: relative;
				.fonts(14px);
				i.iconfont{
					position: absolute;
					top: 5px;
					left: 10px;
					.fonts(20px);
					z-index: 1;
				}
			}
			.ivu-icon-ios-close-empty{
				cursor: pointer;
				position: absolute;
				top: -50px;
				right: -80px;
				width: 40px;
				height: 40px;
				.bdr(50%);
				color: #d2d2d2;
				text-align: center;
				line-height: 40px;
				.fonts(30px);
				box-shadow: 0px 1px 1px 1px #ccc;
				background: @cw;
			}
			h2{ 
				margin-bottom: 30px; 
				font-weight: normal;
				color: @cgray_s;
				.fonts(20px);
			}
			input{
				padding-left: 35px;
			}
			input,button{
				width: 100%;
				height: 40px;
			}
			button{
				background: @cmain_b;
				border: 0;
				.fonts(16px);
			}
			.ivu-form-item-content button{
				margin-top: 0;
				color: @cw;
			}
			a.forgetpwd {
				position: absolute;
				right: 10px;
				top: 5px;
				color: @cgray_s;
			}
			p{
				text-align: right;
				color: @cgray_q;
				padding: 10px 0;
			}
			.errorMsg{
				color: #f30;
				display: block;
				text-align: left;
				line-height: 20px;
			}
		}
	}
</style>	

