import React, { Component } from 'react'

class Category extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        let { title, imgsrc } = this.props
        return(
            <div>
                <img src={imgsrc} />
                {title}
            </div>
        )
    }
}