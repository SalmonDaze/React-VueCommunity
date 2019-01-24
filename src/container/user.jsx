import React, { Component } from 'react'
import { Footer } from '../components/Footer'
import Login from './handleLogin'

export class User extends Component {
    constructor(props){
        super(props)

        this.state = {
            token: ''
        }
    }

    render(){
        let { token } = this.state

        return (
            <div>
                <h1>this is user</h1>
                <input type="text" onChange={(e)=>{this.setState({token: e.target.value})}} />
                <Login token={token}></Login>
                <Footer currentCategory='我的'></Footer>
            </div>
        )
    }
}