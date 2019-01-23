import React, { Component } from 'react'
import '../Style/main.css'
import { Footer } from './Footer'
import { apiGet } from '../utils/apiRequest'
import { Header } from './header'

class reply extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='strand_reply'>
            </div>
        )
    }
}

class Author extends Component{
    constructor(props){
        super(props)
    }

    render(){
        let { content } = this.props
        return(
            <div className='topic_author'>
                <img className='strand_avatar' src={content.author.avatar_url} />
                <span className='topic_author_name'>{content.author.loginname}</span><span></span>
                <div className='topic_info'>
                    <span>发布于: {content.create_at.slice(0,10)} </span><span>浏览: {content.visit_count}</span>
                </div>
            </div>
        )
    }
}

class Reply extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let { reply, count } = this.props
        return (
            <div className='topic_reply'>
                <img src={reply.author.avatar_url} className='reply_avatar'/>
                <span className='reply_name'>{reply.author.loginname}</span><span className='reply_count'>{count}楼</span>
                <p className='reply_content' dangerouslySetInnerHTML={{__html: reply.content}}></p>
            </div>
        )
    }
}

export class strandContent extends Component{
    constructor(props){
        super(props)
        this.state = {
            content: '',
            isLoading: true,
        }

        this.getData = async () => {
            let topicId = this.props.match.params.id
            let res = await apiGet(`https://www.vue-js.com/api/v1/topic/${topicId}`)
            this.setState({
                content: res.data.data,
                isLoading: false
            })
        }
    }

    componentWillMount(){
       this.getData()
    }
    
    render(){

        console.log(this.state.content)
        let inner = this.state.isLoading ? 
        <div><span>Loading...</span></div> : 
        <div>
            <Header />
            <Author content={this.state.content} />
            <div className='topic_content' dangerouslySetInnerHTML={{__html: this.state.content.content}} />
            { this.state.content.replies.map( (reply, index) => <Reply key={reply.id} count={index + 1} reply={reply}/>) }
        </div>
        return(
            <div className='topic_container'>
                {inner}
            </div>
        )
    }
}