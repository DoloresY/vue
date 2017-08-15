/*
 * 2017-05-06
*/

export const CheckValidate = {
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
}