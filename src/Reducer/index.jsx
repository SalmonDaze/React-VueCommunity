export const logStatus = (state = '', action ) => {
    switch(action.type){
        case 'LOGIN_IN':
            localStorage.setItem('accessToken', action.token)
            return action.token

        case 'LOG_OUT':
            localStorage.removeItem('accessToken')
            return ''
        default:
            return state
    }
}