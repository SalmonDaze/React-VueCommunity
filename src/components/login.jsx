import React, { Component } from 'react'
import { Footer } from '../components/Footer'
import { connect } from 'react-redux'
import { login, logout } from '../Action/index'
import PropTypes from 'prop-types'

class Login extends Component{
    constructor(props){
        super(props)

    }

    componentDidUpdate(){
    }

    render(){

        let { handleLogin, token } = this.props

        return(
            <div className='login_con'>
                <button onClick={handleLogin} token={token}>登陆</button>
            </div>
        )
    }
}

Login.propTypes = {
    handleLogin: PropTypes.func.isRequired
}

export default Login