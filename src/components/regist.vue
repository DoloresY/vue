<template>
	<div id="platlist">
		
	</div>
</template>
<script>
	export default {
	    name: 'platlist',
	    data(){
	    	return {
	    		
            }
	    },
	    mounted: function () {
            this.getList();
        },
        methods: {
        	getList() {
        		this.$http.get("./src/public/json/platList.json").then(function(res){
                	this.lists = res.data.data;
                },function(res){
                	console.log(res);
                })
        	}
        }
	};
</script>
<style scoped lang="less" rel="stylesheet/less" type="text/css">
	@import '../public/css/variable.less';
	
</style>	
