import React, { Component } from 'react'
import { Footer } from '../components/Footer'

class Main extends Component {

    render(){
        return (
            <div className='container'>
                <h1>this is index</h1>
                <Footer currentCategory='首页'></Footer>
            </div>
        )
    }
}

export default Main