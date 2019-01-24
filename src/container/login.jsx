import React, { Component } from 'react'
import { Footer } from '../components/Footer'
import { connect } from 'react-redux'
import { login, logout } from '../Action/index'


class Login extends Component{
    constructor(props){
        super(props)

        this.state = {
            token: ''
        }
    }
    render(){
        return(
            <div className='login_con'>
                <input type="text" onChange={(e)=>{this.setState({token: e.target.value})}}/>
                <button onClick={()=>{this.handleLogin(this.state.token)}}>登陆</button>
                <Footer />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleLogin: (token) => {
            dispatch(login(token))
        }
    }
}

export default connect(mapDispatchToProps)(Login)