import React, { Component } from 'react'
import '../Style/main.css'
import { Link } from 'react-router-dom'

class Category extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        let { title, imgsrc, status} = this.props
        return(
            <div className='category' style={{background: status ? 'rgb(120, 186, 252)' : '#409EFF'}}>
                <img src={imgsrc} />
                {title}
            </div>
        )
    }
}

 export class Footer extends Component {
     constructor(props){
         super(props)
     }
     render(){
        const section = [{
            title: '首页',
            url: '/index',
        },{
            title: '发表',
            url: '/createTopic',
        },{
            title: '消息',
            url: '/message',
        },{
            title: '我的',
            url: '/user',
        }]
        let { currentCategory } = this.props
         return (
             <div className='FooterBar'>
                {section.map( sec => 
                <Link to={sec.url}  key={sec.title}>
                    <Category title={sec.title} status={ currentCategory === sec.title }></Category>
                </Link> 
                )}
             </div>
         )
     }
 }