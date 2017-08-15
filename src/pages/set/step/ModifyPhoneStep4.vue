<template>
	<div id="ModifyPhoneStep4">
		<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="110">
	        <Form-item label="更换绑定的手机号" prop="phone">
	        	<Input v-model="formValidate.phone" placeholder="请输入更换绑定的手机号"></Input>
	        </Form-item>
	        <Form-item label="短信验证码" prop="smsCode">
	        	<Row>
	        		<Col span="12">
	        			 <Input v-model="formValidate.smsCode" @on-enter="submitPhone('formValidate')" placeholder="请输入手机验证码"></Input>
	        		</Col>
	        		<Col span="12">
	        			<Button v-model="sendMsg" @click="sendMsgCode" type="ghost">{{ sendMsg }}</Button>
	        		</Col>
	        	</Row>
	        	<p class="errorMsg" v-model="errorMsg">{{ errorMsg }}</p>
	        </Form-item>
	        <Form-item>
	            <Button class="submit" type="ghost" @click="submitPhone('formValidate')">确定</Button>
	        </Form-item>
	  </Form>
	</div>
</template>
<script>
	import md5 from 'js-md5';
	export default {
	    name: 'ModifyPhoneStep4',
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
            	checkBox: true,
            	sendMsg: '发送验证码',
            	errorMsg: '',
                formValidate: {
                	phone: '',
                    smsCode: ''
                },
               	ruleValidate: {
               		phone: [
                		{ validator: validatePhone, trigger: 'blur' }
                	],
                    smsCode: [
                    	{ required: true, message: '请输入验证码', trigger: 'blur' }
                    ]
                }
            }
        },
       computed:{
           type() {
               return this.$route.params.type;
		   }
		},
		methods: {
        	submitPhone(name) {
        		this.$refs[name].validate((valid) => {
                    if (valid) {
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
								['token', localStorage.token],
								['phone', _this.formValidate.phone],
								['smsCode', _this.formValidate.smsCode]
							];
			            	arr.sort(_this.sortCustom);
			            	var str = "";
							for (var i=0; i<arr.length; i++) {
								str += arr[i][0] + arr[i][1];
							}
		                	console.log(str);
			        		_this.axios.post(_this.$store.state.Check.url+"/user/modPhone",{
			            		t: timestamp,
			            		i: data.callToken,
			            		v: md5(str),   
			            		c: "PC",
			            		token: localStorage.token,
			            		phone: _this.formValidate.phone,
			            		smsCode: _this.formValidate.smsCode
			             	}).then(function (response) {
			                	if(response.data.result == 200){
			                		_this.$store.state.Check.userPhone = _this.formValidate.phone;
			                      	localStorage.userPhone = _this.formValidate.phone;
			               			_this.$router.push("/set/modifyPhone?step=5");
			               		}else if(response.data.result == 304){
			               			_this.errorMsg = "短信验证码错误";
			               		}else if(response.data.result == 306){
			               			_this.errorMsg = "手机号已注册,请更换其他手机号";
			               		}
			                }).catch(function (error){
			                    console.log("error2");
			                });
		
			            }).catch(function (error){
		                    console.log(error);
		                });
		        	} else {
                    //    this.$Message.error('表单验证失败!');
                    }
                })        
        	},
        	sendMsgCode(){
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
						['msgType', 1]
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
	            		msgType: 1
	                }).then(function (response) {
	                	if(response.data.result == 200){
	               			_this.sendMsg = "已发送";
	               		}else if(response.data.result == 306){
	               			_this.errorMsg = '手机号已注册,请更换其他手机号';
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
		background: @cw;
		padding: 130px 280px 160px;
		box-sizing: border-box;
		.bdr(5px);
		color: @cgray_s;
		border: 1px solid @cborder;
	}
	.ivu-form-item-content button{
		margin-top: 0;
		height: 32px;
	}
	.ivu-col-span-12:last-child{
		padding-left: 10px;
	}
	.errorMsg{
		line-height: 1;
	    color: #f30;
	}
</style>	

