<template>
	<div id="ModifyPhoneStep2">
		<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
	        <Form-item label="原手机号" prop="passwd">
	            <p>{{ phone.substr(0,3) }}****{{ phone.substr(7,10) }}</p>
	        </Form-item>
	        <Form-item label="验证码" prop="smscode">
	        	<Row>
	        		<Col span="12"><Input class="hide"></Input>
	        			 <Input v-model="formValidate.smscode" @on-enter="submitPhone('formValidate')" placeholder="请输入验证码"></Input>
	        		</Col>
	        		<Col span="12">
	        			<Button v-model="sendMsg" @click="sendMsgCode" type="ghost">{{ sendMsg }}</Button>
	        		</Col>
	        	</Row>
	        	<p class="errorMsg">{{ errorMsg }}</p>
	        </Form-item>
	        <Form-item>
	            <Button class="submit" type="ghost" @click="submitPhone('formValidate')">下一步</Button>
	        </Form-item>
	  </Form>
	</div>
</template>
<script>
	import md5 from 'js-md5';
	export default {
	    name: 'ModifyPhoneStep2',
	    data () {
	    	return {
            	phone: localStorage.userPhone,
            	sendMsg: "获取验证码",
            	errorMsg: "",
            	formValidate: {
                    smscode: ''
                },
               	ruleValidate: {
                    smscode: [
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
								['phone', _this.phone],
								['smsCode', _this.formValidate.smscode]
							];
			            	arr.sort(_this.sortCustom);
			            	var str = "";
							for (var i=0; i<arr.length; i++) {
								str += arr[i][0] + arr[i][1];
							}
		                	_this.$store.state.Check.callToken = data.callToken;
		                	localStorage.callToken = data.callToken;
		                	_this.axios.post(_this.$store.state.Check.url+"/three/checkSmsCode",{
			            		t: timestamp,
			            		i: data.callToken,
			            		v: md5(str),   
			            		c: "PC",
			            		phone: _this.phone,
			            		smsCode: _this.formValidate.smscode
			                }).then(function (response) {
			                	if(response.data.result == 304){
			                		_this.errorMsg = "验证码错误";
			                	}
			                	if(response.data.result == 200){
			               			_this.$router.push("/set/modifyPhone?step=4")
			               		}
			                }).catch(function (error){
			                    console.log("error2");
			                });
			                
		                }).catch(function (error){
		                    console.log(error);
		                });
	                }else {
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
						['phone', _this.phone],
						['msgType', 2]
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
	            		phone: _this.phone,
	            		msgType: 2
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
		background: @cw;
		padding: 130px 280px 160px;
		box-sizing: border-box;
		.bdr(5px);
		color: @cgray_s;
		border: 1px solid @cborder;
		p{
			color: @cmain_y;
		}
		.errorMsg{
			line-height: 1;
		    padding-top: 6px;
		    color: #f30;
		}
	}
	.ivu-form-item-content button{
		margin-top: 0;
		height: 32px;
	}
	.ivu-col-span-12:last-child{
		padding-left: 10px;
	}
</style>	

