<template>
	<div id="newslist">
		<Row v-for="list in lists" :key="list.id">
			<router-link :to="{query: { id:list.id }}">
		        <Col span="5">
		        	<img :src="list.src" />
		        </Col>
		        <Col span="19">
		        	<h2>{{ list.title }}<span>{{ list.time }}</span></h2>
		        	<p>{{ list.description }}</p>
		        </Col>
	        </router-link>
	    </Row>
	</div>
</template>

<script>
	export default {
	    name: 'newslist',
	    data(){
	    	return {
	    		lists: []            
	    	}
	    },
	    props: ['listType'],
	    computed:{
            type() {
                return this.$route.params.type;
		    }
		},
		mounted: function () {
            this.getList();
        },
        methods: {
        	getList() {
        		const _this = this;
				this.axios.get("http://www.ifd.club/json/newsList.json").then(function(response){
					console.log(response.data);
					if(_this.listType == "info") {
        				_this.lists = response.data.data.info;
					}else if(_this.listType == "dynamic") {
						_this.lists = response.data.data.dynamic;
					}else if(_this.listType == "notice"){
						console.log("info==");
						_this.lists = response.data.data.notice;
					}
				}).catch(err => {
					console.log(err);
               });
        	}
        }
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../public/css/variable.less';
	.ivu-row{
		padding: 50px 0;
		border-bottom: 1px solid @cborder;
		.trans(.5s);
		.ivu-col-span-5{
			img{
				width: 100%;
				border: 1px solid @cborder;
				.trans(.5s);
			}
		}
		.ivu-col-span-19{
			padding-left: 25px;
			color: @cgray_q;
			h2{
				.fonts(18px);
				color: @cgray_s;
				padding-bottom: 25px;
				font-weight: normal;
				span{
					float: right;
					.fonts(14px);
					color: @cgray_q;
				}
			}
			p{
				.fonts(14px);
				line-height: 24px;
			}
		}
	
		&:hover{
			border-bottom: 1px solid @cmain_b;
		}
	}
</style>	
