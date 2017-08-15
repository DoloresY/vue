/**
 * Created by Administrator on 2017/4/28
 */
export const Check = {
    state:{
        type:0,
        url: 'http://10.0.22.235:8080/dslc/admin', 
        userPhone: localStorage.userPhone,
        callToken: '',
        token: '',
        sorts: localStorage.sorts,	//sort key
        isShow: false,		//登录框显示与关闭,
        totalPlat: 0,		//平台列表总数
        usrRealname: '',	//真实用户名
    	createcode: '',
    	activityImg: '',	//活动页img
    	usrNickname: localStorage.usrNickname,
        registerBoo:{
            phone:false,
            tel_code:false,
            code:false,
            password:false,
            passwordT:false
        },
        registerDetail:{
            phone:'',
            tel_code:'',
            password:'',
            passwordT:'',
            shareCode:'',
            checked:true
        }
    },

    mutations:{
        RenameType (state){
            state.type = 0;
        },

        ChangeType (state,type){
            state.type += type;
        },

        ChangeBoo (state,info) {
            state.registerBoo[info.key] = info.type;
        },

        ChangeDetail(state,info) {
            state.registerDetail[info.type] = info.val;
        }
    },

    actions:{
        renameType:({commit}) => commit('RenameType'), //调用重置type的mutations重置type

        changeType({commit},type) {
            return new Promise((resolve, reject) => {
                commit('ChangeType',type);
                resolve();//这是回调函数
            })
        },

        changeBoo({commit},info) {
            return new Promise((resolve, reject) => {
                commit('ChangeBoo',{key:info.key,type:info.type});
                resolve();//这是回调函数
            })
        },

        changeDetail({commit},info) {
            commit('ChangeDetail',{type:info.type,val:info.val});
        }
    }
};