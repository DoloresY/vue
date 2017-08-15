global.LoginIsShow = false;		//这是关闭
import md5 from 'js-md5';
exports.install = function (Vue, options) {

	Vue.prototype.getCallId = function (newArr, newUrl, datas, timestamp, callback, work){
		const _this = this;

    	if(localStorage.callToken.length > 0) {
    		callback(_this,_this.$store.state.Check.url+newUrl,datas, work);
    	} else {
	    	this.axios.post(_this.$store.state.Check.url+"/getCallId",{
	    		t: timestamp,
	    		c: "PC"
	        }).then(function (response) {
	        	const data = response.data;
				_this.sorts = data.key;
				localStorage.sorts = data.key;
				_this.$store.state.Check.callToken = data.callToken;
				localStorage.callToken = data.callToken;
				
				var sortarr = _this.sortArr(newArr,timestamp);
				datas.v = md5(sortarr);

	        	callback(_this,_this.$store.state.Check.url+newUrl,datas, work);

	        }).catch(function (error){
	            console.log(error);
	        });
       }
	},

	//二次调用接口
	Vue.prototype.getDatas = function (that,newUrl, datas, work) {
		that.axios.post(newUrl,datas).then(function (response) {
        	console.log(response);
        	work(response);
        }).catch(function (error){
            console.log("error2");
        });
	},

	//排序
	Vue.prototype.sortArr = function (newArr,timestamp) {
		var	arr = [
			['t', timestamp],
			['c', 'PC'],
			['i', localStorage.callToken],
			['key','2i0f1x7']
		];
		for(let i = 0; i < newArr.length; i++){
			arr.push(newArr[i]);
		}
    	arr.sort(this.sortCustom);
    	var str = "";
		for (var i=0; i<arr.length; i++) {
			str += arr[i][0] + arr[i][1];
		}
    	return str;
    },

    Vue.prototype.sortCustom = function (a, b){
		var x = a[0],
		y = b[0];
		for (var i=0; i<x.length; i++) {//this.$store.state.Check.sorts
			if (localStorage.sorts.indexOf(x[i]) < localStorage.sorts.indexOf(y[i])) {
				return -1;
				break;
			} else if (localStorage.sorts.indexOf(x[i]) > localStorage.sorts.indexOf(y[i])) {
				return 1;
				break;
			}
			if ((i + 1) < x.length && x.length < y.length) {
				return -1;
				break;
			}
		}
   };
};