<template>
	<div id="modifyPwdStep1">
		<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">
	        <Form-item label="当前登录密码" prop="passwd">
	            <Input v-model="formValidate.passwd" type="password" placeholder="请输入当前登录密码"></Input>
	        </Form-item>
	        <Form-item label="新登录密码" prop="newPasswd">
	            <Input v-model="formValidate.newPasswd" type="password" placeholder="请输入新登录密码"></Input>
	        </Form-item>
	        <Form-item label="确认新登录密码" prop="passwdCheck">
	            <Input v-model="formValidate.passwdCheck" @on-enter="handleSubmit('formValidate')" type="password" placeholder="请再次输入新登录密码"></Input>
	        </Form-item>
	        <Form-item>
	            <Button class="submit" type="ghost" @click="handleSubmit('formValidate')">确定</Button>
	        </Form-item>
	  </Form>
	</div>
</template>
<script>
	import md5 from 'js-md5';
	export default {
	    name: 'modifyPwdStep1',
	    data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入原始密码'));
                } else {
                    callback();
                }
            };
            const validateNewPass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.formValidate.newPasswd !== '') {
                        // 对第二个密码框单独验证
                        if(!(/[0-9a-zA-Z]{6,20}/.test(value))){
                        	callback(new Error('请输入6-20位数字和字母的组合'));
                        }
                        if(this.formValidate.newPasswd.length<6 || this.formValidate.newPasswd.length>20){
                        	callback(new Error('请输入6-20位数字和字母的组合'));
                        }
                        else{
                        	this.$refs.formValidate.validateField('passwdCheck');
                        }
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入新密码'));
                } else if (value !== this.formValidate.newPasswd) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
            	checkBox: true,
                formValidate: {
                	passwd: '',
                    newPasswd: '',
                    passwdCheck: ''
                },
                ruleValidate: {
                	passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    newPasswd: [
                        { validator: validateNewPass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
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
			handleSubmit(name) {
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
								['pwd', _this.formValidate.passwd],
								['newPwd', _this.formValidate.newPasswd]
							];
			            	arr.sort(_this.sortCustom);
			            	var str = "";
							for (var i=0; i<arr.length; i++) {
								str += arr[i][0] + arr[i][1];
							}
		                	console.log(str);
		                	_this.$store.state.Check.callToken = data.callToken;
		                	localStorage.callToken = data.callToken;
		                	
		                	_this.axios.post(_this.$store.state.Check.url+"/user/valid",{
			            		t: timestamp,
			            		i: data.callToken,
			            		v: md5(str),   
			            		c: "PC",
			            		token: localStorage.token,
			            		pwd: _this.formValidate.passwd,
			            		newPwd: _this.formValidate.newPasswd
			                }).then(function (response) {
			                	console.log(response);
			                	if(response.data.result == 200){
			                		_this.$router.push("/set/modifyPwd?step=2");
		
			                		_this.$store.state.Check.userPhone = "";
			                      	localStorage.removeItem(userPhone);
		
			                      	_this.$store.state.Check.token = "";
			                      	localStorage.removeItem(token);
			               		}else{
			               			 alert("修改失败");
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
			}
		}
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../../../public/css/variable.less';
	form{
		padding: 85px 255px;
	}
</style>	

