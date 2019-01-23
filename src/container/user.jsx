import React, { Component } from 'react'
import { Footer } from '../components/Footer'

export class User extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>this is user</h1>
                <Footer currentCategory='我的'></Footer>
            </div>
        )
    }
}