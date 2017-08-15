<template>
	<div id="ModifyPhoneStep3">
		<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
	        <Form-item label="登录密码" prop="passwd">
	        	<Input class="hide"></Input>
	        	<Input v-model="formValidate.passwd" @on-enter="submitPhone('formValidate')" type="password" placeholder="请输入登录密码"></Input>
	        </Form-item>
	        <Form-item>
	            <Button class="submit" type="ghost" @click="submitPhone('formValidate')">确定</Button>
	        </Form-item>
	  </Form>
	</div>
</template>
<script>
	export default {
	    name: 'ModifyPhoneStep3',
	    data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    callback();
                }
            };
            
            return {
            	checkBox: true,
                formValidate: {
                    passwd: ''
                },
                ruleValidate: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
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
			submitPhone(name){
				this.$refs[name].validate((valid) => {
                    if (valid) {
						this.$router.push("/set/modifyPhone?step=4");
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
		background: @cw;
		padding: 130px 280px 160px;
		box-sizing: border-box;
		.bdr(5px);
		color: @cgray_s;
		border: 1px solid @cborder;
	}
</style>	

