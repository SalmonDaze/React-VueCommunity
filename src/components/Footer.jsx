import React, { Component } from 'react'
import '../Style/main.css'
import { NavLink, Link, withRouter } from 'react-router-dom'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction'
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import { makeStyles } from '@material-ui/core/styles';

export class Category extends Component{
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
         this.state = {
             value: 0
         }
     }

     handleUrl( index ) {
         console.log(index)
        this.setState({
            value: index
        })
     }

     render(){
        const section = [{
            title: '首页',
            url: '/index',
            icon: <RestoreIcon />
        },{
            title: '发表',
            url: '/createTopic',
            icon: <FavoriteIcon />
        },{
            title: '消息',
            url: '/message',
            icon: <LocationOnIcon />
        },{
            title: '我的',
            url: '/user',
            icon: <ContactMailIcon />
        }]
        let { currentCategory } = this.props
         return (
             <div className='FooterBar'>
                <BottomNavigation value={this.state.value} showLabels style={{width: '100%'}} onChange={(e, newVal) => this.handleUrl(newVal)} >
                    {section.map( sec => 
                            <BottomNavigationAction key={sec.url} label={sec.title} icon={sec.icon} component={Link} to={sec.url}>
                            </BottomNavigationAction>
                        )}
                </BottomNavigation>
             </div>
         )
     }
 }