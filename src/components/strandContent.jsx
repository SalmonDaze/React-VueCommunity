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

export class strandContent extends Component{
    constructor(props){
        super(props)
        this.state = {
            content: ''
        }

        this.getData = async () => {
            let topicId = this.props.match.params.id
            let res = await apiGet(`https://www.vue-js.com/api/v1/topic/${topicId}`)
            this.setState({
                content: res.data.data
            })
        }
    }

    componentWillMount(){
        this.getData()
    }
    componentDidMount(){
        console.log(this.state)
    }

    render(){
        return(
            <div className='topic_container'>
                <Header></Header>
                <div className='topic_author'></div>
                <div className='topic_content' dangerouslySetInnerHTML={{__html: this.state.content.content}}></div>
            </div>
        )
    }
}