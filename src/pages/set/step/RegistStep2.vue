<template>
	<div id="step2">
		<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
	        <Form-item label="姓名" prop="username">
	            <Input v-model="formValidate.username" placeholder="请输入您的姓名"></Input>
	        </Form-item>
	        <Form-item label="身份证号码" prop="idCard">
	        	<Input v-model="formValidate.idCard" @on-enter="handleSubmit('formValidate')" placeholder="请输入身份证号码"></Input>
	        </Form-item>
	        <Form-item>
	        	<p v-model="errorMsg">{{ errorMsg }}</p>
	            <Button class="submit" type="ghost" @click="handleSubmit('formValidate')">注册完成</Button>
	        </Form-item>
	    </Form>
	</div>
</template>
<script>
	import md5 from 'js-md5';
	export default {
	    name: 'step2',
	    data () {
	    	const validateUsername = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入真实姓名'));
                } else {
                    if (this.formValidate.username !== '') {
                        if(!(/[\u4E00-\u9FA5\uF900-\uFA2D]/.test(value))){
                        	callback(new Error('请输入真实姓名'));
                        }
                    }
                    callback();
                }
            };
	    	const validateIdCard = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入身份证号码'));
                } else {
                	if (this.formValidate.idCard !== '') {
                        if(!(/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value))){
                        	callback(new Error('请输入正确的身份证号码'));
                        }
                    }
                    callback();
                }
            };
            return {
            	checkBox: true,
            	errorMsg: '',
                formValidate: {
                	username: '',
                    idCard: ''
                },
                ruleValidate: {
                	username: [
                		{ validator: validateUsername, trigger: 'blur' }
                	],
                    idCard: [
                        { validator: validateIdCard, trigger: 'blur' }
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
			handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
						this.submitForm();
                    } else {
                    	return ;
                    }
                })
            },
        	submitForm() {
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
						['phone', localStorage.regPhone],
						['smsCode', localStorage.regSmsCode],
						['pwd', localStorage.regPasswd],
						['usrRealname',_this.formValidate.username],
						['usrCardnum', _this.formValidate.idCard],
						['key','2i0f1x7']
					];
	            	arr.sort(_this.sortCustom);
	            	var str = "";
					for (var i=0; i<arr.length; i++) {
						str += arr[i][0] + arr[i][1];
					}

                	console.log(str);
	        		_this.axios.post(_this.$store.state.Check.url+"/user/register",{
	            		t: timestamp,
	            		i: data.callToken,
	            		v: md5(str),   
	            		c: "PC",
	            		phone: localStorage.regPhone,
	            		smsCode: localStorage.regSmsCode,
	            		pwd: localStorage.regPasswd,
	            		usrRealname: _this.formValidate.username,
	            		usrCardnum: _this.formValidate.idCard
	                }).then(function (response) {
	                	console.log("register-------------------");
	                	console.log(response.data);
	                	if(response.data.result == 200){
	                		_this.$store.state.Check.userPhone = response.data.User[0].usrPhone;
	                      	localStorage.userPhone = response.data.User[0].usrPhone;

	                      	_this.$store.state.Check.token = response.data.token;
	                      	localStorage.token = response.data.token;

	                      	_this.$router.push({path: '/set/register?step=3', query:{'reload':true}});
	               		}else{
	               			_this.errorMsg = response.data.resultMsg;
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
	#step2{
		form{
			padding: 115px 120px;
			background: @cw;
			box-sizing: border-box;
			.bdr(5px);
			color: @cgray_s;
			border: 1px solid @cborder;
		}
	}
</style>	

