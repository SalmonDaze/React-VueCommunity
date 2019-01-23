import React, { Component } from 'react'
import { Footer } from '../components/Footer'

export class createTopic extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>this is createTopic</h1>
                <Footer currentCategory='发表'></Footer>
            </div>
        )
    }
}