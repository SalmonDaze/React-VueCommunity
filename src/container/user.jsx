import React, { Component } from 'react'
import { Footer } from '../components/Footer'
import Login from '../components/handleLogin'
import { apiGet } from '../utils/apiRequest'

function Loginbox(props){
    return(
        <div>
            <input type="text" onChange={props.handleInput} />
            <Login token={props.token}></Login>
        </div>
    )
}

function Userinfo(props){
    return(
        <div className='userContainer'>
            <div className='user_wel'><h3>{props.loginname}</h3></div>
            <div><img src={props.avatar} className='user_avatar'/></div>
            <div><span>注册于: {props.create_at}</span></div>
            <div><span>积分: {props.score}</span></div>
        </div>
    )
}

export class User extends Component {
    constructor(props){
        super(props)

        this.state = {
            token: '',
            userStatus: {},
            Loading: true,
        }

    }

    async componentWillMount(){
        const token = localStorage.getItem('accessToken')
        const loginname = localStorage.getItem('loginname')

        if(token){
            let userStatus = await apiGet(`https://www.vue-js.com/api/v1/user/${loginname}`)
            this.setState({
                userStatus: userStatus.data.data
            })
        }

        this.setState({
            Loading: false
        })
    }

    render(){
        let { token, userStatus, Loading } = this.state

        return (
            Loading ?  <div>Loading.....</div> : 
                <div>
                { Object.keys(userStatus) == 0 ? <Loginbox handleInput={(e)=>{this.setState({token: e.target.value})}} token={token} />  : <Userinfo score={userStatus.score} create_at={userStatus.create_at.slice(0, userStatus.create_at.indexOf('T'))} loginname={userStatus.loginname} avatar={userStatus.avatar_url}/>}
                <Footer currentCategory='我的'></Footer>
                </div>
        )
    }
}