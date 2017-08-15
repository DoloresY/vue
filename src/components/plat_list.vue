<template>
	<div id="platlist">
		<Row :gutter="18">
	        <Col span="6" v-for="list in PlatLists" :key="list.id">
	            <Card>
			        <div style="text-align:center">
			            <img style="height: 75px;" v-bind:src="list.logo" />
			            <h3>{{ list.name }}</h3>
			            <p><span>{{list.bg}}</span><!--<span>{{list.zhifus}}</span>--></p>
			            <dl>
			            	<dt>平均预期收益率：{{ list.yield.substring(0,list.yield.indexOf('-')) }}%-{{ list.yield.split('-')[1] }}%</dt>
			            	<dd>投资期限：{{ list.period.substring(0,list.yield.indexOf('-')) }}天-{{ list.period.split('-')[1] }}天</dd>
			            	<dd>注册资本：{{ list.regCapital }}</dd>
			            	<dd>上线时间：{{ list.onlineTime }}</dd>
			            	<dd>
			            		<router-link :to="{ path: '/platdetail', query: { id:list.id,isbind:list.isBind }}">查看详情</router-link>
			            		<!--<template v-if="list.isBind==1">
			            			<a href="javascript:;">已绑定</a>
			            		</template>
			            		<template v-else>
			            			<a href="javascript:;" @click="bindPlat(list.id)">一键绑定</a>
			            		</template>-->
			            	</dd>
			            </dl>
			        </div>
			    </Card>
	        </Col>
	    </Row>
	    <template v-if="name == 'platform'">
	    	<div id="pagination">
	    		<Page :total="total" show-elevator :pageSize='12' @on-change="change"></Page>
	    	</div>
	    </template>
	</div>
</template>
<script>
	import md5 from 'js-md5';
	export default {
	    name: 'platlist',
	    data(){
	    	return {
	    		PlatLists: {},
	    		total: 1
            }
	    },
	    props:['platType'],
	    mounted: function () {
            this.getList(1);
        },
        computed: {
        	name() {
               return this.$route.name;
		   }
        },
        methods: {
        	change: function(page){
        		this.getList(page);
        	},
        	getList(currpage) {
        		var timestamp = Date.parse(new Date());
				var arr = [
					['token',localStorage.token],
					['plfType', this.platType],
					['curPage', currpage],
					['curNum',12]
				];
				var datas = {
	        		t: timestamp,
            		i: localStorage.callToken,
            		v: md5(""), 
            		c: "PC",
            		token: localStorage.token,
            		plfType: this.platType,
            		curPage: currpage,
            		curNum: 12
	            };
				
				this.getCallId(arr, "/plf/list", datas, timestamp, this.getDatas, this.work);
        	},
        	work(response) {
        		if(response.data.result == 200){
           			this.PlatLists = response.data.Plf;
           			this.total = response.data.allNum;
           			localStorage.PlatListAllNum = response.data.allNum;
           		}
        	}
        }
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../public/css/variable.less';
	.ivu-col-span-6{
		margin-bottom: 20px;
		padding-left: 9px;		/* 对接json之后这个情况 */
    	padding-right: 9px;
	}
	.ivu-card{
		height: 385px;
	}
	.ivu-card-body{
		border: 1px solid @cborder;
		color: @cgray_s;
		.fonts(16px);
		padding: 30px 0 20px;
		text-align: center;
		img{
			
		}
		h3{ padding: 10px 0; color: @cgray_s; }
		p{
			padding-bottom: 20px;
			.fonts(12px);
			color: @cw;
			span{
				display: inline-block;
				padding: 0 6px;
				background: #86e0ae;
				.bdr(10px);
				&:first-child{
					background: #6fc7ff;
				/*	margin-right: 5px;*/
				}
			}
		}
		dl{
			border-top: 1px solid @cborder;
			padding-top: 15px;
			.fonts(14px);
			line-height: 30px;
			dt{
				color: @cmain_y;
			}
			dd{
				a{
					display: inline-block;
					width: 110px;
					line-height: 40px;
					text-align: center;
					border: 1px solid @cmain_y;
					color: @cmain_y;
					.trans(.4s);
					.bdr(20px);
					&:first-child{
						border-color: @cmain_b;
						color: @cmain_b;
					}
					&:hover{
						background: @cmain_y;
						color: @cw;
						&:first-child{
							background: @cmain_b;
						}
					}
				}
				&:last-child{ margin-top: 10px; }
			}
		}
	}
	
	#pagination{
		text-align: center;
		padding: 50px 0;
		ul{
			display: inline-block;
		}
		.ivu-page-total{ display: none; }
		.ivu-page-item:hover{
			color: @cmain_b;
			border-color: @cmain_b;
		}
		.ivu-page-item-active{
			color: @cmain_b;
			border-color: @cmain_b;
			background: transparent;
		}
		.ivu-page-item-active a, .ivu-page-item-active:hover a{
			color: @cmain_b;
			border-color: @cmain_b;
		}
		.prev,.next{
			cursor: pointer;
			display: inline-block;
			font-family: Arial;
    		border: 1px solid #d7dde4;
    		line-height: 30px;
    		box-sizing: border-box;
			padding: 0 10px;
			vertical-align: top;    		
			.bdr(3px);
			color: #657180;
			margin: 0 4px;
			&:hover{
				color: @cmain_b;
				border-color: @cmain_b;
			}
		}
	}	
</style>	
