import axios from 'axios'

export const apiGet = async (url, params) => {
    let res = await axios({
        method: 'get',
        url,
        params,
        header: {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
    })
    return new Promise((resolve, reject) => {
        if( res.status === 200 ){
            resolve(res)
        }else{
            reject(res)
        }
    })
}

export const apiPost = async (url, data) => {
    let res = await axios({
        method: 'post',
        url,
        data,
        header: {
            'Content-Type' : 'application/x-www-form-urlencoded'
        },
    })
    return new Promise((resolve, reject) => {
        if( res.status === 200 ){
            resolve(res)
        }else{
            reject(res)
        }
    })
}