/**
 * Created by Administrator on 2017/05/06
 */
/*import {url} from './url';*/
import axios from 'axios';
export const Checks = {
    CheckMail(mail) {
        const filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return filter.test(mail) ? true : false;
    },

    CheckPhone(tel){
        const filter = /^1[34578]\d{9}$/;
        return filter.test(tel) ? true : false;
    },

    CheckNumber(number){
        const filter = /^\+?[1-9][0-9]*$/;
        return filter.test(number) ? true : false;
    },

    CheckIdCard(idCard){
        const filter = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
        return filter.test(idCard) ? true : false;
    },


    CheckPassword(password){
        return password.length < 6 || password.length > 20 ? false : true;
    },

    CheckPasswordT(newPassword,oldPassword){
        return newPassword == oldPassword ? true : false;
    },

    CheckName(name) {
        const filter = /^([\u4e00-\u9fa5]{1,20}|[a-zA-Z\.\s]{1,20})$/;
        return filter.test(name) ? true : false;
    },

    async CheckTelCode(code) {
        let res = await axios.get(url + '/check_sms',{
            params: {
                code:code
            }
        }).then(res => {
            const data = res.data;
            if (data.status == 200) {
                return true;
            } else {
                return false;
            }
        });
        return res;
    },

    async waitTime(timeout) {
        return new Promise((resolve, reject) => {
            setTimeout(function() {
                resolve();
            }, timeout);
        });
    },

    async sleep() {
        await Checks.waitTime(200);
    }
};