<template>
	<div id="pagination">
		<template v-if="total>4">
			<Page :total="total" :pageSize='4' @on-change="change"></Page>
		</template>
	</div>
</template>
<script>
	import md5 from 'js-md5';
	export default {
	    name: 'pagination',
	    data(){
	    	return{
	    		total: localStorage.PlatListAllNum
	    	}
	    },
	    computed:{
            endnum() {
            	if(this.total%12){
            		//alert("1="+this.total/12+1);
            		return this.total/12+1;
            	}else{
            		//alert("2="+this.total/12);
            	}
		    }
		},
	    methods: {
	    	change: function(page){
	    		var timestamp = Date.parse(new Date());
				var arr = [
					['token',localStorage.token],
					['plfType', 3],
					['curNum',12],
					['curPage',page]
				];
				var datas = {
	        		t: timestamp,
            		i: localStorage.callToken,
            		v: md5(""), 
            		c: "PC",
            		token: localStorage.token,
            		plfType: 3,
            		curPage: page,
            		curNum: 12
	            };
				this.getCallId(arr, "/plf/list", datas, timestamp, this.getDatas, this.work);
	    	},
        	work(response) {
        		if(response.data.result == 200){
           			this.$store.state.Check.PlatLists = response.data.Plf;
           		}
        	}
	    }
	};
</script>
<style lang="less" rel="stylesheet/less" type="text/css">
	@import '../public/css/variable.less';
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
