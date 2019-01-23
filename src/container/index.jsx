import React, { Component } from 'react'
import { Footer } from '../components/Footer'
import { apiGet } from '../utils/apiRequest'

class Post extends Component {
    constructor(props){
        super(props)
    }

    render(){
        let { author, content, create_at,
            last_reply_at, reply_count, tab, title,
            top, visit_count, id, good } = this.props

        return (
            <div className='strand'>
                <img className='strand_avatar' src={author.avatar_url}/>
                <div className='strand_title'><span>{title}</span></div>
            </div>
        )
    }
}

class Main extends Component {
    constructor(props){
        super(props)

        this.state = {
            page: 1,
            tab: 'all',
            limit: 10,
            resdata: [],
        }

        this.getData = async () => {
            let { page, tab, limit } = this.state
            let res = await apiGet('https://www.vue-js.com/api/v1/topics', { page, tab, limit})
            if( res.status === 200 ){
                this.setState({
                    resdata: res.data.data
                })
            }
        }
    }

    componentWillMount(){
        this.getData()
    }

    render(){
        let res = this.state.resdata
        console.log(res)
        return (
            <div className='container'>
                <div className='post_container'>
                    { res.map( strand => 
                    <Post key={strand.id} author={strand.author} title={strand.title}>
                    </Post> ) }
                </div>
                <Footer currentCategory='首页'></Footer>
            </div>
        )
    }
}

export default Main