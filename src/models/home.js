import request from '@/utils/request';
import { message } from 'antd'; 
// import { JsonFormatter } from 'tslint/lib/formatters';
export default {
    namespace: 'home',
    state: {
        userData : [],
        val:1,
        listdata:[]
    },
    subscriptions: {

    },
    effects: {   //异步方法
        //获取验证码
        *getListdata({ payload }, { call, put }){
            const res=yield call(request, '/returnlist',{   //后端请求
                method :'GET',
                body:payload//往后端传参
            })
            // console.log('===res=======',res.data) //请求返回的数据
            if(res.success){
                yield put({ type: 'save', payload:{listdata:res.data } } );//保存的
            }else{
                message.error(res.message);
            }
        }
    },
    reducers: {   //同步方法
        save(state, action) {
            return { ...state, ...action.payload };
        },
    },
};