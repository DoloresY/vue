<template>
	<div id="AlipayStep1">
		<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
	        <Form-item label="支付宝账号" prop="alipay">
	        	<Input class="hide"></Input>
	        	<Input v-model="formValidate.alipay" @on-enter="submitAlipay('formValidate')" placeholder="请输入支付宝账号"></Input>
	        </Form-item>
	        <Form-item>
	            <Button class="submit" type="ghost" v-on:click="submitAlipay('formValidate')">确定</Button>
	        </Form-item>
	    </Form>
	</div>
</template>
<script>
	import md5 from 'js-md5';
	export default {
	    name: 'AlipayStep1',
	    data () {
            return {
            	checkBox: true,
                formValidate: {
                    alipay: ''
                },
                ruleValidate: {
                	alipay: [
	                    { required: true, message: '支付宝账号不能为空', trigger: 'blur' }
	                ]
                }
                
            }
        },
		methods: {
			change: function(){
        		alert(1);
        	},
        	submitAlipay(name) {
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
								['aliAcc', _this.formValidate.alipay]
							];
			            	arr.sort(_this.sortCustom);
			            	var str = "";
							for (var i=0; i<arr.length; i++) {
								str += arr[i][0] + arr[i][1];
							}
		                	console.log(str);
			        		_this.axios.post(_this.$store.state.Check.url+"/user/modAlipay",{
			            		t: timestamp,
			            		i: data.callToken,
			            		v: md5(str),   
			            		c: "PC",
			            		token: localStorage.token,
			            		aliAcc: _this.formValidate.alipay
			                }).then(function (response) {
			                	if(response.data.result == 200){
			                		localStorage.userAlipay = _this.formValidate.alipay;
			                		_this.$router.push("/set/alipay?step=2");
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
        	}
		}
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../../../public/css/variable.less';
	form{
		background: @cw;
		padding: 150px 280px;
		box-sizing: border-box;
		.bdr(5px);
		color: @cgray_s;
		border: 1px solid @cborder;
	}
</style>	

