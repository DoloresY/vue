<template>
	<div id="cooperate">
		<bannerCarousel adType="1" location="9"></bannerCarousel>
		<div class="coop">
			<h2 class="title_icon"><i class="iconfont">&#xe74f;</i>匠心造极致</h2>
			<Row :gutter="32">
				<Col span="6">
					<em></em>
					<span>平台精选</span>
					<p>入驻平台<br>均为行业优质平台</p>
				</Col>
				<Col span="6">
					<em></em>
					<span>多重风控</span>
					<p>多重风控体系<br>降低投资风险</p>
				</Col>
				<Col span="6">
					<em></em>
					<span>收益稳健</span>
					<p>多种收益方式<br>保障投资人稳健收益</p>
				</Col>
				<Col span="6">
					<em></em>
					<span>资源整合</span>
					<p>资源整合带来更安全<br>高效投资体验</p>
				</Col>
			</Row>
		</div>
		<div class="customer">
			<div class="custom_list">
				<h2 class="title_icon"><i class="iconfont">&#xe74d;</i>我们的客户</h2>
				<p>平台目前已累计服务多家网贷平台，累计服务30万名投资人，促成无数财富佳话。</p>
				<Row :gutter="32">
					<Col span="6" v-for="list in NewCustomers" :key="list.id"><img :src="list.logo" /></Col>
				</Row>	
				<a v-show="MoreCustomer" @click="morecustomer" href="javascript:;">更多客户</a>
			</div>
		</div>
		<div class="hotshare">
			<h2 class="title_icon"><i class="iconfont">&#xe76a;</i>热点</h2>
			<Row v-for="list in newList" :key="list.id">
				<router-link :to="{ path: '/activity', query: { id:list.id, prev:'cooperate' }}">
					<Col span="19">{{ list.titile }}</Col>
					<Col span="5">{{ list.createTime.substr(0,10) }}</Col>
				</router-link>
			</Row>
			<a v-show="MoreHotShow" @click="morehot" class="more" href="javascript:;">查看更多</a>
		</div>
	</div>
</template>
<script>
   import md5 from 'js-md5';
   import * as Common from '../../components/main';
	export default {
	    name: 'cooperate',
	    components:{
            bannerCarousel: Common.Carousel
	    },
	    data () {
            return {
            	lists: [],
            	newList: [],
            	customers: {},
            	NewCustomers: {},
            	MoreHotShow: false,	//更多热点按钮
            	MoreCustomer: false //更多客户按钮
            }
       },
        mounted: function(){
       		this.getList();
       		this.getCustomer();
        },
        methods: {
        	getList() {
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
						['curNum', 3],
						['curPage', 1]
					];
	            	arr.sort(_this.sortCustom);
	            	var str = "";
					for (var i=0; i<arr.length; i++) {
						str += arr[i][0] + arr[i][1];
					}
                	console.log(str);
	        		_this.axios.post(_this.$store.state.Check.url+"/info/list",{
	            		t: timestamp,
	            		i: data.callToken,
	            		v: md5(str),   
	            		c: "PC",
	            		curPage: 1,
	            		curNum: 3
	                }).then(function (response) {
	                	console.log("-------------------");
	                	if(response.data.result == 200){
	               			_this.lists = response.data.Info;
	               			if(_this.lists.length>3) {
	               				_this.MoreHotShow = true;
	               			}
	               			_this.newList = _this.lists.slice(0,3)
	               		}
	                }).catch(function (error){
	                    console.log("error2");
	                });

	            }).catch(function (error){
                    console.log(error);
                });    
        	},
        	getCustomer() {
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
						['plfType', 3],
						['key','2i0f1x7'],
						['token', localStorage.token]
					];
	            	arr.sort(_this.sortCustom);
	            	var str = "";
					for (var i=0; i<arr.length; i++) {
						str += arr[i][0] + arr[i][1];
					}
                	console.log(str);
	        		_this.axios.post(_this.$store.state.Check.url+"/plf/list",{
	            		t: timestamp,
	            		i: data.callToken,
	            		v: md5(str),   
	            		c: "PC",
	            		token: localStorage.token,
	            		plfType: 3
	               }).then(function (response) {
	                	console.log(response.data);
	                	if(response.data.result == 200){
	                		_this.customers = response.data.Plf;
	                		if(response.data.allNum>12){
	                			_this.MoreCustomer = true;
	                		}
	               			_this.NewCustomers = _this.customers.slice(0,12)
	               		}
	                }).catch(function (error){
	                    console.log("error2");
	                });

	            }).catch(function (error){
                    console.log(error);
                });
        	},
        	morehot() {
        		this.newList = this.lists;
        		this.MoreHotShow = false;
        	},
        	morecustomer() {
        		this.NewCustomers = this.customers;
        		this.MoreHotShow = false;
        	}
        }
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../../public/css/variable.less';
	.title_icon{
		padding-bottom: 0;
	}
	.coop{
		width: 1200px;
		margin: 0 auto;
		padding: 45px 0;
		text-align: center;
		.fonts(14px);
		.ivu-row{
			padding: 45px 0 0;
		}
		em{
			display: block;
			width: 96px;
			height: 104px;
			margin: 0 auto 10px;
			background: url(../../public/images/icon_02.png) no-repeat;
			background-size: 100% 100%;
			.trans(.5s);
			&:hover{
				background-image: url(../../public/images/icon_22.png);
			}
		}
		.ivu-col{
			color: @cmain_y;
			&:first-child{
				em{
					background-image: url(../../public/images/icon_01.png);
					&:hover{ background-image: url(../../public/images/icon_11.png); }
				}
			}
			&:nth-child(3){
				em{
					background-image: url(../../public/images/icon_03.png);
					&:hover{ background-image: url(../../public/images/icon_33.png); }
				}
			}
			&:last-child{
				em{
					background-image: url(../../public/images/icon_04.png);
					&:hover{ background-image: url(../../public/images/icon_44.png); }
				}
			}
		}
		p{
			position: relative;
			color: @cgray_s;
			.fonts(12px);
			line-height: 18px;
			margin-top: 15px;
			padding: 15px 0;
			width: 120px;
			margin: 15px auto;
			border-top: 1px solid #b4b4b4;
			&:before{
				content: "";
				width: 16px;
				height: 2px;
				background: #fafafa;
				position: absolute;
				left: 50%;
				top: -1px;
				margin-left: -8px;
			}
			&:after{
				content: "";
				width: 6px;
				height: 6px;
				background: #b4b4b4;
				position: absolute;
				top: -3px;
				left: 50%;
				margin-left: -3px;
				.rotate(45deg);
			}
		}
	}
	.customer{
		background: @cw;
		text-align: center;
		.custom_list{
			width: 1200px;
			margin: 0 auto;
			padding: 45px 270px;
			box-sizing: border-box;
			p{
				padding-bottom: 45px;
			}
			.ivu-col{
				padding: 5px 0;
				.trans(.3s);
				.bdr(3px);
				border: 1px solid transparent; 
				img{
					width: 80%;
					height: 45px;
				}
				&:hover{
					border-color: @cmain_y;
				}
			}
			
			a{
				display: block;
				width: 125px;
				line-height: 30px;
				color: @cmain_b;
				margin: 40px auto 0;
				border: 1px solid @cmain_b;
				.trans(.3s);
				.bdr(20px);
				&:hover{
					background: @cmain_b;
					color: @cw;
				}
			}
		}
	}
	.hotshare{
		background: url(../../public/images/coop_bg.png) no-repeat 50% 50%;
		background-size: cover;
		min-height: 495px;
		padding: 45px 0 30px;
		.ivu-row{
			width: 720px;
			line-height: 55px;
			margin: 30px auto;
			background: url(../../public/images/op_w.png) repeat repeat;
			background-size: cover;
			.bdr(30px);
			padding: 0 40px;
			border: 1px solid @cw;
			.trans(.3s);
			.ivu-col-span-5{
				text-align: right;
			}
			a{
				display: block;
				color: @cgray_s;
				.fonts(16px);
			}
			&:hover{
				background: @cmain_b;
				border-color: @cmain_b;
				a{ color: @cw; }
			}
		}
		.more{
			display: block;
			color: @cgray_s;
			.fonts(14px);
			background: url(../../public/images/op_w.png) repeat repeat;
			background-size: cover;
			padding: 5px 0;
			width: 125px;
			border: 1px solid @cw;
			.bdr(20px);
			margin: 40px auto 0;
			text-align: center;
		}
	}
</style>