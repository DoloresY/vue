<template>
	<div id="step1">
		<Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
	        <Form-item label="手机号码" prop="phone">
	            <Input v-model="formValidate.phone" placeholder="请输入手机号码"></Input>
	        </Form-item>
	        <Form-item label="图片验证码" prop="">
	        	<!--<Row>
	        		<Col span="12">
	        			<Input v-model="formValidate.codePic" placeholder="请输入图片验证码"></Input>
	        		</Col>
	        		<Col span="12">
	        			<ImgCheck></ImgCheck>
	        		</Col>
	        	</Row>-->
	        	<ImgCheck></ImgCheck>
	        </Form-item>
	        <Form-item label="手机验证码" prop="codeMsg">
	        	<Row>
	        		<Col span="12">
	        			 <Input v-model="formValidate.codeMsg" placeholder="请输入手机验证码"></Input>
	        		</Col>
	        		<Col span="12">
	        			<Button type="ghost" v-on:click="sendMsgCode()">{{ sendMsg }}</Button>
	        		</Col>
	        	</Row>
	        </Form-item>
	        <Form-item label="设置密码" prop="passwd">
	            <Input v-model="formValidate.passwd" type="password"  placeholder="6-20位数字和字母的组合"></Input>
	        </Form-item>
	        <Form-item label="确认密码" prop="passwdCheck">
	            <Input v-model="formValidate.passwdCheck" @on-enter="handleSubmit('formValidate')" type="password" placeholder="请确认密码"></Input>
	        </Form-item>
	        <Form-item>
	            <Button class="submit" type="ghost" v-on:click="handleSubmit('formValidate')">下一步</Button>
	        	<p>
	        		<Checkbox v-model="checked"></Checkbox>注册即同意<a href="javascript:;" @click="noticeBox=true">《爱分享平台用户服务协议》</a>
	        	</p>
	        </Form-item>
	    </Form>

	  	<div class="regNotice" v-show="noticeBox">
	  		<h2>注册协议<span @click="noticeBox=false"><Icon type="ios-close-empty"></Icon></span></h2>
	  		<div class="section">
		  		<p>请您在注册爱分享前仔细阅读本协议内容，凡确认加入和使用爱分享表明您已经阅读并同意本协议条款，您在爱分享的一切会员活动和使用行为都将遵从本使用条款。 爱分享网站（http://www.xxx.com以下简称"本网站"）由XXXX公司负责运营。本服务协议双方为本网站用户与本公司，适用于用户注册使用本网站服务的全部活动。
					<br>
				一、协议内容及签署
				1、本协议内容包括协议正文及所有爱分享已经发布的或将来可能发布的各类规则。所有规则为本协议不可分割的组成部分，与协议正文具有同等法律效力。除另行明确声明外，任何爱分享及其关联公司提供的服务均受本协议约束。但法律法规另有强制性规定的，依其规定。
				2、您在注册爱分享账户时点击提交"我已阅读并且同意爱分享的使用协议"即视为您接受本协议及各类规则，并同意受其约束。您应当在使用爱分享服务之前认真阅读全部协议内容并确保完全理解协议内容，如您对协议有任何疑问的，应向爱分享咨询。但无论您事实上是否在使用爱分享服务之前认真阅读了本协议内容，只要您注册、正在或者继续使用爱分享服务，则视为接受本协议。
				3、您承诺接受并遵守本协议的约定。如果您不同意本协议的约定，您应立即停止注册程序或停止使用爱分享服务。
				4、爱分享有权根据需要不时地制订、修改本协议及/或各类规则，并以网站公示的方式进行公告。变更后的协议和规则一经在网站公布后，立即自动生效。爱分享的最新的协议和规则以及网站公告可供您随时登陆查阅，您也应当经常性的登陆查阅最新的协议和规则以及网站公告以了解爱分享最新动态。如您不同意相关变更，应当立即停止使用爱分享服务。您继续使用服务的，即表示您接受经修订的协议和规则。本协议和规则（及其各自的不时修订）条款具有可分割性，任一条款被视为违法、无效、被撤销、变更或因任何理由不可执行，并不影响其他条款的合法性、有效性和可执行性。
				<br>
				二、用户及账户管理
				1、申请资格
				注册成为本网站用户必须满足如下主体资格条件：具有中华人民共和国（以下简称"中国"）国籍（不包括中国香港、澳门及台湾地区）、年龄在18周岁以上、具有完全民事行为能力的自然人。若不具备前述主体资格条件，请立即终止注册使用本网站服务。若违反前述规定注册使用本网站服务，本公司保留终止用户资格、追究用户或用户的监护人相关法律责任的权利。
				2、账户安全
				在您签署本协议，完成用户注册程序或以其他爱分享允许的方式实际使用爱分享服务时，爱分享会向您提供唯一编号的爱分享账户（以下亦称账户）。
				您可以对账户设置用户名和密码，通过用户名密码登陆爱分享平台。您设置的用户名不得侵犯或涉嫌侵犯他人合法权益。
				您应对您的账户（用户名）和密码的安全，以及对通过您的账户（用户名）和密码实施的行为负责。除非经过正当法律程序，且征得爱分享的同意，否则，账户（用户名）和密码不得以任何方式转让、赠与或继承。如果发现任何人不当使用您的账户或有任何其他可能危及您的账户安全的情形时，您应当立即以有效方式通知爱分享，要求爱分享暂停相关服务。您理解爱分享对您的请求采取行动需要合理时间，爱分享对在采取行动前已经产生的后果（包括但不限于您的任何损失）不承担任何责任，但爱分享未能在合理时间内采取行动的情况除外。您认可您在注册、使用爱分享服务过程中提供、形成的数据等相关信息的所有权及其他相关权利属于爱分享，爱分享有权使用上述信息。
				3、用户注册
				在您按照注册页面提示填写信息、阅读并同意本协议并完成全部注册程序后或以其他爱分享允许的方式实际使用爱分享服务时，您即成为爱分享用户（亦称用户）。
				用户在注册使用本网站服务时应当根据本网站的要求提供自己的真实信息（包括但不限于真实姓名、联系电话、地址、电子邮箱等信息），并保证向本网站提供的各种信息和资料是真实、准确、完整、有效和合法的，复印件与原件一致。如用户向本网站提供的各项信息和资料发生变更，用户应当及时向本网站更新用户的信息和资料，如因用户未及时更新信息和资料导致本网站无法向用户提供服务或发生错误，由此产生的法律责任和后果由用户自己承担。如使用他人信息和文件注册使用本网站服务或向本网站提供的信息和资料不符合上述规定，由此引起的一切责任和后果均由用户本人全部承担，本公司及本网站不因此承担任何法律责任，如因此而给本公司及本网站造成损失，用户应当承担赔偿本公司及本网站损失的责任。
				4、法律规定
				用户不得利用本网站从事任何违法违规活动，用户在此承诺合法使用本网站提供的服务，遵守中国现行法律、法规、规章、规范性文件以及本服务协议的约定。若用户违反上述规定，所产生的一切法律责任和后果与本公司和本网站无关，由用户自行承担，如因此给本公司和本网站造成损失的，由用户赔偿本公司和本网站的损失。本公司保留将用户违法违规行为及有关信息资料进行公示、计入用户信用档案、按照法律法规的规定提供的有关政府部门或按照有关协议约定提供给第三方的权利。如用户在本网站的某些行为或言论不合法、违反有关协议约定、侵犯本公司的利益等，本公司有权基于独立判断直接删除用户在本网站上作出的上述行为或言论，有权中止、终止、限制用户使用本网站服务，而无需通知用户，亦无承担任何责任。如因此而给本公司及本网站造成损失的，应当赔偿本公司及本网站的损失。
				<br>
				三、不保证条款
				本网站提供的服务中不含有任何明示、暗示的，对任何用户、任何交易的真实性、准确性、可靠性、有效性、完整性等的任何保证和承诺，用户需根据自身风险承受能力，衡量本网站披露的交易内容及交易对方的真实性、可靠性、有效性、完整性，用户因其选择使用本网站提供的服务、参与的交易等而产生的直接或间接损失均由用户自己承担，包括但不限于资金损失、利润损失、营业中断等。本公司及其股东、创始人、全体员工、代理人、关联公司、子公司、分公司均不对以上损失承担任何责任。 
				<br>
				四、责任限制
				1.基于互联网的特殊性，本公司无法保证本网站的服务不会中断，对于包括但不限于本公司、本网站及相关第三方的设备、系统存在缺陷，计算机发生故障、遭到病毒、黑客攻击或者发生地震、海啸等不可抗力而造成服务中断或因此给用户造成的损失，本公司不承担任何责任，有关损失由用户自己承担。
				2.本公司无义务监测本网站内容。用户对于本网站披露的信息、选择使用本网站提供的服务，选择参与交易等，应当自行判断真实性和承担风险，由此而产生的法律责任和后果由用户自己承担，本公司不承担任何责任。
				3.与本公司合作的第三方机构向用户提供的服务由第三方机构自行负责，本公司不对此等服务承担任何责任。
				4.本网站的内容可能涉及第三方所有的信息或第三方网站，该等信息或第三方网站的真实性、可靠性、有效性等由相关第三方负责，用户对该等信息或第三方网站自行判断并承担风险，与本网站和本公司无关。
				5.无论如何，本公司对用户承担的违约赔偿（如有）总额不超过向用户收取的服务费用总额。
				6.通过爱分享获取的所有收益及活动奖励均由用户个人承担个税申报。
				<br>
				五、信息披露
				1.用户在此同意，对于用户提供的和本公司为提供本网站服务所需而自行收集的用户个人信息和资料，本公司有权按照本服务协议的约定进行使用或者披露。
				2.用户授权本公司基于履行有关协议、解决争议、调停纠纷、保障本网站用户交易安全的目的等使用用户的个人资料（包括但不限于用户自行提供的以及本公司信审行为所获取的其他资料）。本公司有权调查多个用户以识别问题或解决争议， 特别是本公司可审查用户的资料以区分使用多个用户名或别名的用户。
				为避免用户通过本网站从事欺诈、非法或其他刑事犯罪活动，保护本网站及其正常用户合法权益，用户授权本公司可通过人工或自动程序对用户的个人资料进行评价和衡量。
				用户同意本公司可以使用用户的个人资料以改进本网站的推广和促销工作、分析网站的使用率、改善本网站的内容和产品推广形式，并使本网站内容、设计和服务更能符合用户的要求。这些使用能改善本网站的网页，以调整本网站网页使其更能符合用户的需求，从而使用户在使用本网站服务时得到更为顺利、有效、安全及度身订造的交易体验。
				用户在此同意允许本公司通过在本网站的某些网页上使用诸如"Cookies"的设置收集用户信息并进行分析研究，以为用户提供更好的量身服务。 
				3.本公司有义务根据有关法律、法规、规章及其他政府规范性文件的要求向司法机关和政府部门提供用户的个人资料及交易信息。
				在用户未能按照与本公司签订的包括但不限于本服务协议或者与本网站其他用户签订的借款协议等其他法律文本的约定履行自己应尽的义务时，本公司有权将用户提供的及本公司自行收集的用户的个人信息、违约事实等通过网络、报刊、电视等方式对任何第三方披露，且本公司有权将用户提交或本公司自行收集的用户的个人资料和信息与任何第三方进行数据共享，以便对用户的其他申请进行审核等使用。由此而造成用户损失的，本公司不承担法律责任。
				4.本公司采用行业标准惯例以保护用户的个人信息和资料，鉴于技术限制，本公司不能确保用户的全部私人通讯及其他个人资料不会通过本条款中未列明的途径泄露出去。
				<br>
				六、保护条款
				1.本网站中的所有内容均属于本公司所有,包括但不限于文本、数据、文章、设计、源代码、软件、图片、照片、音频、视频及其他全部信息。本网站内容受中国知识产权法律法规及各国际版权公约的保护。
				2.未经本公司事先书面同意,用户承诺不以任何形式复制、模仿、传播、出版、公布、展示本网站内容,包括但不限于电子的、机械的、复印的、录音录像的方式和形式等。用户承认本网站内容是属于本公司的财产。
				3.未经本公司书面同意,用户不得将本网站包含的资料等任何内容发布到任何其他网站或者服务器。任何未经授权对本网站内容的使用均属于违法行为,本公司有权追究用户的法律责任。
				<br>
				七、违约责任
				如一方发生违约行为，守约方可以书面通知方式要求违约方在指定的时限内停止违约行为，并就违约行为造成的损失要求违约方进行赔偿。
				<br>
				八、法律适用及争议解决
				1.本服务协议的签订、效力、履行、终止、解释和争端解决受中国法律法规的管辖。
				2.因本服务协议发生任何争议或与本服务协议有关的争议，首先应由双方友好协商解决，协商不成的，任何一方有权将纠纷提交至本公司所在地有管辖权的人民法院诉讼解决。
				<br>
				九、其他条款
				1.本服务协议自您同意勾选并成功注册为本网站用户之日起生效，除非本网站终止本服务协议或者用户丧失本网站用户资格，否则本服务协议始终有效。本服务协议终止并不免除用户根据本服务协议或其他有关协议、规则所应承担的义务和责任。
				2.本公司对于用户的违约行为放弃行使本服务协议规定的权利的，不得视为其对用户的其他违约行为放弃主张本服务协议项下的权利。
				3.本服务协议部分条款被认定为无效时，不影响本服务协议其他条款的效力。
				4.本服务协议不涉及用户与本网站其他用户之间因网上交易而产生的法律关系及法律纠纷，但用户在此同意将全面接受和履行与本网站其他用户通过本网站签订的任何电子法律文本，并承诺按该法律文本享有和/或放弃相应的权利、承担和/或豁免相应的义务。
				5.本公司对本服务协议享有最终的解释权。
				6.为保证第三方平台与爱分享用户利益，爱分享各类标的均设置有效投标上限超过上限的投资部分只计算第三方平台利率，具体标的投标上限以网站产品页面公示为准，给您带来的不便之处，尽请谅解。
			</p>
	  		</div>
	  	</div>
	</div>
</template>
<script>
	import md5 from 'js-md5';
	import { checkimg } from '../../../public/js/imgcheck.js'
	import * as Common from '../../../components/main';
	import { mapActions } from 'vuex'
	export default {
	    name: 'step1',
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
                        if(!(/^[A-Za-z0-9]+$/.test(value)) || (this.formValidate.passwdCheck.length<6 && this.formValidate.passwdCheck.length>20)){
                        	callback(new Error('请输入6-20位数字和字母的组合'));
                        }else{
                        	this.$refs.formValidate.validateField('passwdCheck');
                        }
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
            const validateCodePic = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入图片验证码'));
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
            	disabled: true,
            	sendMsg: "发送验证码",
            	checked: true,
            	noticeBox: false,
            	imgflag: false,
                formValidate: {
                	phone: '',
                	codeMsg: '',
                	codePic: '',
                    passwd: '',
                    passwdCheck: ''
                },
                ruleValidate: {
                	phone: [
                		{ validator: validatePhone, trigger: 'blur' }
                	],
                	codeMsg: [
                		{ validator: validateCodeMsg, trigger: 'blur' }
                	],
                	codePic: [
                		{ validator: validateCodePic, trigger: 'blur' }
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
                    	if(this.imgflag==true && this.checked == true){
                    		this.submitForm();
                    	/*	localStorage.regPhone = this.formValidate.phone;
							localStorage.regPasswd = this.formValidate.passwd;
							localStorage.regSmsCode = this.formValidate.codeMsg;
							this.$router.push('/set/register?step=2');*/
						}
                    } else {
                    	return ;
                    }
                })
            },
			sendMsgCode(phone,name){
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
	               		}
	                	if(response.data.result == 306){//phone
	                		alert("您已注册了，请直接登录");
	                		return false;
	                	}
	                }).catch(function (error){
	                    console.log("error2");
	                });
	                
                }).catch(function (error){
                    console.log(error);
                });
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
						['key','2i0f1x7'],
						['phone', _this.formValidate.phone],
						['smsCode', _this.formValidate.codeMsg]
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
	            		phone: _this.formValidate.phone,
	            		smsCode: _this.formValidate.codeMsg
	                }).then(function (response) {
	                	if(response.data.result == 200){
	                		localStorage.regPhone = _this.formValidate.phone;
							localStorage.regPasswd = _this.formValidate.passwd;
							localStorage.regSmsCode = _this.formValidate.codeMsg;
							_this.$router.push('/set/register?step=2');
	               		}else {
	               			alert("请输入正确的手机验证码");
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
		padding: 50px 120px;
		box-sizing: border-box;
		.bdr(5px);
		color: @cgray_s;
		border: 1px solid @cborder;
		.ivu-input{
			height: 40px;
		}
		.ivu-col-span-12{
			text-align: right;
			img{
				width: 90%;
				height: 32px;
				display: inline-block;
				vertical-align: middle;
			}
			button{
				width: 90%;
				height: 32px;
				margin-top: 0;
				.fonts(12px);
			}
		}
		.ivu-form-item-content{
			.submit{
				width: 100%;
				height: 40px;
				border-color: @cmain_b;
				color: @cmain_b;
				margin-top: 20px;
			}
		}
		p{
			margin-top: 15px;
			a{ color: #019afb; }
		}
	}
	.regNotice{
		position: fixed;
		top: 50%;
		left: 50%;
		width: 600px;
		height: 460px;
		.fonts(12px);
		color: @cgray_s;
		line-height: 20px;
		padding: 25px 35px;
		box-sizing: border-box;
		.bdr(5px);
		background: @cw;
		border: 1px solid @cborder;
		margin: -230px -300px;
		z-index: 2;
		h2{ 
			text-align: center; 
			padding-bottom: 15px;
			.fonts(20px);
		}
		span{
			i{
				cursor: pointer;
			    position: absolute;
			    top: -20px;
			    right: -20px;
			    width: 40px;
			    height: 40px;
			    .bdr(50%);
			    color: #d2d2d2;
			    text-align: center;
			    line-height: 40px;
			    font-size: 30px;
			    box-shadow: 0px 1px 1px 1px #ccc;
			    background: @cw;
			}
		}
		.section{
			height: 355px;
			overflow-y: scroll;
		}
	}
</style>	

