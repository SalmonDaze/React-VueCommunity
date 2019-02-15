import { apiGet, apiPost } from '../utils/apiRequest'

export const logStatus = async (state = '', action ) => {
    switch(action.type){
        case 'LOGIN_IN':
            let res = await apiPost('https://www.vue-js.com/api/v1/accesstoken/', { accesstoken: action.token})
            if(res.data.success){
                localStorage.setItem('accessToken', action.token)
                return action.token
            }else{
                return ''
            }
        case 'LOG_OUT':
            localStorage.removeItem('accessToken')
            return ''
        default:
            return state
    }
}