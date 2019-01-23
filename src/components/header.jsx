import React, { Component } from 'react'
import '../Style/main.css'
import { Link } from 'react-router-dom'

export class Header extends Component{
    constructor(props){
        super(props)

    }

    render(){
        return(
            <div className='header_con'>
                <Link to={'/index'}>
                    <span className='header_back'>{'<'}</span>
                </Link>
                <span className='header_title'>文字详情内容</span>
            </div>
        )
    }
}