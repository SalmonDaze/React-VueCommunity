import { LOGIN_IN, LOG_OUT } from './actionType'

export const login = (token) => {
    return {
        type: LOGIN_IN,
        token
    }
}

export const logout = () => {
    return {
        type: LOG_OUT
    }
}