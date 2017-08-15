<template>
	<div id="FindPwdStep1">
		<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
	        <Form-item label="绑定手机号" prop="phone">
	            <Input v-model="formValidate.phone" placeholder="请输入绑定手机号"></Input>
	        </Form-item>
	        <Form-item label="图片验证码" prop="codePic">
	        	<ImgCheck></ImgCheck>
	        </Form-item>
	        <Form-item label="手机验证码" prop="codeMsg">
	        	<Row>
	        		<Col span="12">
	        			 <Input v-model="formValidate.codeMsg" placeholder="请输入手机验证码"></Input>
	        		</Col>
	        		<Col span="12">
	        			<Button type="ghost" @click="sendMsgCode">{{ sendMsg }}</Button>
	        		</Col>
	        	</Row>
	        </Form-item>
	        <Form-item label="新登录密码" prop="passwd">
	            <Input v-model="formValidate.passwd" type="password" placeholder="6-20位字母和数字的组合"></Input>
	        </Form-item>
	        <Form-item label="确认新登录密码" prop="passwdCheck">
	            <Input v-model="formValidate.passwdCheck" @on-enter="handleSubmit('formValidate')" type="password" placeholder="请确认新密码"></Input>
	        </Form-item>
	        <Form-item>
	            <Button class="submit" type="ghost" @click="handleSubmit('formValidate')">确定</Button>
	        </Form-item>
	    </Form>
	</div>
</template>
<script>
	import md5 from 'js-md5';
	import * as Common from '../../../components/main';
	import { checkimg } from '../../../public/js/imgcheck.js';
	export default {
	    name: 'FindPwdStep1',
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
	    	const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formValidate.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formValidate.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.formValidate.passwd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            const validateCodeMsg = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入短信验证码'));
                } else {
                    callback();
                }
            };
            return {
            	checkBox: true,
            	sendMsg: "发送验证码",
            	imgflag: false,
                formValidate: {
                	phone: '',
                    passwd: '',
                    codeMsg: '',
                    passwd: '',
                    passwdCheck: ''
                },
                ruleValidate: {
                	phone: [
                        { required: true, validator: validatePhone, trigger: 'blur' },
                        { required: true, message: '姓名不能为空', trigger: 'blur' }
                    ],
                    codeMsg: [
                		{ validator: validateCodeMsg, trigger: 'blur' }
                	],
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ]
                }
            }
        },
		components: {
	    	ImgCheck: Common.ImgCheck
	    },
       computed:{
           type() {
               return this.$route.params.type;
		   }
		},
		created () {
	  		checkimg.$on('checked', (a,b) => {
	  			this.imgflag = true;
			})
		},
		methods: {
			handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                    	if(this.imgflag==true){
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
									['phone', _this.formValidate.phone],
									['smsCode', _this.formValidate.codeMsg],
									['pwd', _this.formValidate.passwd]
								];
				            	arr.sort(_this.sortCustom);
				            	var str = "";
								for (var i=0; i<arr.length; i++) {
									str += arr[i][0] + arr[i][1];
								}
			                	_this.$store.state.Check.callToken = data.callToken;
			                	localStorage.callToken = data.callToken;
			                	_this.axios.post(_this.$store.state.Check.url+"/user/findPwd",{
				            		t: timestamp,
				            		i: data.callToken,
				            		v: md5(str),   
				            		c: "PC",
				            		phone: _this.formValidate.phone,
				            		smsCode: _this.formValidate.codeMsg,
				            		pwd: _this.formValidate.passwd
				                }).then(function (response) {
				                	if(response.data.result == 304){
				                		alert("验证码错误");
				                	}
				                	if(response.data.result == 200){
				               			_this.$router.push('/set/findPwd?step=2');
				               		}
				                }).catch(function (error){
				                    console.log("error2");
				                });
				                
			                }).catch(function (error){
			                    console.log(error);
			                });
		                }
                    } else {
                    	return ;
                    }
                })
            },
			sendMsgCode(){
                if(!this.formValidate.phone){
                	alert("请输入手机号");
                	return false;
                }
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
						['phone', _this.formValidate.phone],
						['msgType', 3]
					];
	            	arr.sort(_this.sortCustom);
	            	var str = "";
					for (var i=0; i<arr.length; i++) {
						str += arr[i][0] + arr[i][1];
					}
                	_this.$store.state.Check.callToken = data.callToken;
                	localStorage.callToken = data.callToken;
                	_this.axios.post(_this.$store.state.Check.url+"/three/getSmsCode",{
	            		t: timestamp,
	            		i: data.callToken,
	            		v: md5(str),   
	            		c: "PC",
	            		phone: _this.formValidate.phone,
	            		msgType: 3
	                }).then(function (response) {
	                	if(response.data.result == 200){
	               			_this.sendMsg = "已发送";
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
	form{
		padding: 40px 260px;
	}
	.ivu-col-span-12{
		img{
			width: 100%;
			height: 32px;
			padding-left: 10%;
		}
	}
	.ivu-form-item-content button{
		height: 32px;
		width: 90%;
		margin-left: 10%;
		margin-top: 0;
	}
	.ivu-form-item-content button.submit{
		width: 100%;
		margin-left: 0;
	}
</style>	

