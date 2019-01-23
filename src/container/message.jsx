import React, { Component } from 'react'
import { Footer } from '../components/Footer'

export class Message extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>this is message</h1>
                <Footer currentCategory='消息'></Footer>
            </div>
        )
    }
}