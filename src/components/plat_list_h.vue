<template>
	<div id="platlist_h">
		<Row v-for="list in lists" :key="list.id">
	        <Col span="4">
	            <img :src="list.logo" />
	        </Col>
	        <Col span="8">
	            <h2>{{ list.name }}</h2>
	            <span>{{ list.bg }}</span>
	            <span>{{ list.zhifus }}</span>
	        </Col>
	        <Col span="4">
	        	<font>{{ list.yield.substring(0,list.yield.indexOf('-')) }}</font>%<font>-{{ list.yield.split('-')[1] }}</font>%
	           <!-- <font>{{ list.yield }}</font>%-->
	            <p>平均预期收益率</p>
	        </Col>
	        <Col span="4">
	            <font>{{ list.period.substring(0,list.yield.indexOf('-')) }}</font>天<font>-{{ list.period.split('-')[1] }}</font>天
	            <p>投资期限</p>
	        </Col>
	        <Col span="4">
	        	<router-link :to="{ path: '/platdetail', query: { id:list.id }}">查看</router-link>
	        </Col>
	   </Row>
	</div>
</template>
<script>
	import md5 from 'js-md5';
	export default {
	    name: 'platlist_h',
	    data(){
	    	return {
	    		lists: {}
            }
	    },
	    mounted: function () {
            this.getList();
        },
        methods: {
        	getList() {
        		var timestamp = Date.parse(new Date());
				var arr = [
					['plfType', 2],
					['curNum',12],
					['curPage',1]
				];
				var datas = {
	        		t: timestamp,
            		i: localStorage.callToken,
            		v: md5(""), 
            		c: "PC",
            		plfType: 2,
            		curPage: 1,
            		curNum: 12
	            };
				this.getCallId(arr, "/plf/list", datas, timestamp, this.getDatas, this.work);
        	},
        	work(response) {
        		if(response.data.result == 200){
           			this.lists = response.data.Plf
           		}
        	}
        }
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../public/css/variable.less';
	#platlist_h{
		
	}
	.ivu-row{
		background: @cw;
		border: 1px solid @cborder;
		margin: 20px 0;
		padding: 20px 0;
		color: @cmain_y;
		text-align: center;
		.bdr(3px);
		.trans(.3s);
		img{
			height: 55px;
			padding: 2px;
			border: 1px solid @cborder;
			margin-top: 5px;
		}
		h2{
			.fonts(18px);
			color: @cgray_s;
			margin-bottom: 10px;
			margin-top: 5px;
		}
		font{
			.fonts(30px);
		}
		p{
			.fonts(12px);
			color: @cgray_s;
		}
		a{
			display: inline-block;
			padding: 10px 45px;
			.fonts(14px);
			color: @cmain_y;
			border: 1px solid @cmain_y;
			.bdr(20px);
			.trans(.3s);
			margin-top: 15px;
			&:hover{
				background: @cmain_y;
				color: @cw;
			}
		}
		.ivu-col-span-8{
			text-align: left;
			span{
				display: inline-block;
				color: @cw;
				background: #6fc7ff;
				padding: 0 10px;
				.bdr(10px);
				&:last-child{
					background: #86e0ae;
					margin-left: 10px;
				}
			}
		}
		&:hover{
			border-color: @cmain_y;
		}
	}
</style>	
