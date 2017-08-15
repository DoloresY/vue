<template>
	<div id="FindPwdStep1">
		<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
	        <Form-item label="邮箱地址" prop="mail">
	        	<Input class="hide"></Input>
	        	<Input v-model="formValidate.mail" @on-enter="handleSubmit('formValidate')" placeholder="请输入邮箱地址"></Input>
	        </Form-item>
	        <Form-item>
	            <Button v-model="btn" class="submit" type="ghost" @click="handleSubmit('formValidate')">发送验证邮件</Button>
	        </Form-item>
	    </Form>
	</div>
</template>
<script>
	import md5 from 'js-md5';
	export default {
	    name: 'FindPwdStep1',
	    data () {
	    	return {
	    		disabled: '',
		    	formValidate: {
		    		mail: ''
		    	},
		    	ruleValidate: {
		    		mail: [
	                    { required: true, message: '邮箱不能为空', trigger: 'blur' },
	                    { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
	                ],
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
                    	this.submitEmail();
                     //   this.$Message.success('提交成功!');
                    } else {
                    //    this.$Message.error('表单验证失败!');
                    }
                })
            },
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
						['token', localStorage.token],
						['email', _this.formValidate.mail]
					];
	            	arr.sort(_this.sortCustom);
	            	var str = "";
					for (var i=0; i<arr.length; i++) {
						str += arr[i][0] + arr[i][1];
					}
					
                	console.log(str);
	        		_this.axios.post(_this.$store.state.Check.url+"/user/modEmail",{
	            		t: timestamp,
	            		i: data.callToken,
	            		v: md5(str),   
	            		c: "PC",
	            		token: localStorage.token,
	            		email: _this.formValidate.mail
	                }).then(function (response) {
	                	console.log("bindEmail-------------------");
	                	console.log(response.data);
	                	if(response.data.result == 200){
							_this.$router.push('/set/bindEmail?step=2');
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
<style lang="less" rel="stylesheet/less" type="text/css">
	@import '../../../public/css/variable.less';
	form{
		padding: 155px 280px;
	}
</style>	

