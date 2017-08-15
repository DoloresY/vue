<template>
    <div class="wrap">
        <div id="imgCheck">
        	<input v-model="inputcode" type="text" v-on:blur="inputs()" placeholder="请输入图片验证码"></input>
            <input v-model="createcode" type = "button" @click="createCode()"/>
            <!--<input type = "button" value="验证" @click = "validate()"/>-->
            <p class="errorMsg" v-model="errorMsg">{{ errorMsg }}</p>
        </div>
    </div>
</template>
<script>
	import { checkimg } from 'src/public/js/imgcheck.js'
    import {Checks} from 'src/public/js/Verification';
    import { mapActions } from 'vuex'
    export default{
        name:'imgCheck',
		data(){
            return{
                code: '',
                createcode: '',
                inputcode: '',
                errorMsg: ''
			}
		},
        props:['boolean'],
		mounted: function (){
			this.createCode();
		},
        methods:{
        	inputs() {
        		var inputCode = this.inputcode.toUpperCase();
			    if(inputCode.length <= 0) {
			        this.errorMsg = "请输入验证码！";
			    }         
			    else if(inputCode != this.code ) {
			        this.errorMsg = "验证码输入错误！";  
			        this.createCode();
			        this.inputcode = ""; 
			    }
			    else {
			        console.log("验证码成功")
			        checkimg.$emit('checked', inputCode,this.createcode);
			        this.errorMsg = ""
			    }
        	},
			createCode(){
				 this.code = "";   
			     const codeLength = 4;
			     var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',  
			     'S','T','U','V','W','X','Y','Z');
			     for(var i = 0; i < codeLength; i++) {
			        var index = Math.floor(Math.random()*36);
			        this.code += random[index];
			    }  
			    this.createcode = this.code;
			    
			},
			validate(){
				var inputCode = this.inputcode.toUpperCase();
			    if(inputCode.length <= 0) {
			        console.log("请输入验证码！");
			    }         
			    else if(inputCode != this.code ) {
			        console.log("验证码输入错误！@_@");  
			        this.createCode();
			        this.inputcode = ""; 
			    }
			    else {
			        console.log("验证码成功")
			    }
			}
        }
    };

</script>

<style scoped lang="less" rel="stylesheet/less" type="text/css">
	input{
		width: 50%;
	    height: 32px;
	    line-height: 1.5;
	}
	input[type="text"]{
	    padding: 4px 7px !important;
	    font-size: 12px;
	    border: 1px solid #d7dde4;
	    border-radius: 3px;
	    color: #657180;
	}
	input[type="button"]{
		width: 45%;
		float: right;
		font-size: 24px;
		font-family: cursive;
		border: 0;
		color: #fff;
		background: url(../public/images/platpic10.jpg) no-repeat;
		outline:none;
	}
	.errorMsg{
		line-height: 1;
	    padding-top: 6px;
	    color: #f30;
	}
</style>